/*
* Controller
*/
const URL_CONTROLLER_LOGIN_TOKEN = "https://controller-bypass.projetusti.com.br/login/api/token";
const URL_LOGIN_SITUACAO = "https://controller-bypass.projetusti.com.br/login/api/informacaoCliente/consultarSituacao?codigoClienteProjetus=";
const URL_VALIDAR_LOGIN = "https://controller-bypass.projetusti.com.br/login/api/autenticacao/validarLogin";
const URL_RECUPERAR_LOGIN = "http://controller-bypass.projetusti.com.br/login/api/autenticacao/recuperar?login=";
const URL_LOGIN_TOKEN = "http://controller-bypass.projetusti.com.br/login/api/autenticacao/recuperarLoginTokenTemporario?token=";
const NOTIFICAR_FALHA_LOGIN = "https://controller.projetusti.com.br/login/api/autenticacao/notificarFalhaLogin?codigoCliente=";


const TOKEN_KEY = 'accessToken';
const CODIGO_CLIENTE_KEY = 'codigoKey';
const CODE_STATUS_CLOUD_PRONTO = 90;
const TIME_WAIT_TO_CONNECT = 45000;

// Flash Player Version Detection - Rev 1.6
// Detect Client Browser type
// Copyright(c) 2005-2006 Adobe Macromedia Software, LLC. All rights reserved.
var isIE = (navigator.appVersion.indexOf("MSIE") !== -1);
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") !== -1);
var isOpera = (navigator.userAgent.indexOf("Opera") !== -1);

var requiredMajorVersion = 10;
var requiredMinorVersion = 0;
var requiredRevision = 0;

var hasProductInstall = DetectFlashVer(6, 0, 65);
var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

var lut = [];
for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
}
var p3 = "", p4 = "", p1 = 3, p2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", p5 = "", p6 = "", p7 = false;
var lParams = "";

var accessToken = store.get(TOKEN_KEY);

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "escapeHtml": true
};

function obterTokenLoginController(thenFunc) {
    fetch(URL_CONTROLLER_LOGIN_TOKEN, {
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "body": "grant_type=password&username=02e3030bdcd918b3a2cb517a5a537a3d&password=C%2BxFgQ06llg%3D",
        "method": "POST"
    }).then(function (response) {
        return response.json().then(function (json) {
            store.set(TOKEN_KEY, json["access_token"]);
            accessToken = store.get(TOKEN_KEY);
            thenFunc();
        });
    });
}

function servicoHabilitado(json) {
    var isHabilitado = true;
    var urlDebito = json["urlDebito"];
    var mensagemDebito = json["mensagemDebito"];
    var isDebito = json["debito"];
    if (urlDebito && mensagemDebito && isDebito) {
        isHabilitado = false;
        var callback = function close() {
            window.open(urlDebito, '_blank');
        };
        waitingDialog.hide();
        showErro(mensagemDebito.replace("em Ok", "aqui"), 0, 0, callback);
    }
    return isHabilitado;
}

function ajustarNomeVersao(versao) {
    if (!versao) {
        versao = "Main";
    }
    return versao;
}

function consultarSituacaoController(codigoUser, dataValidacaoCPF, resultFunc) {
    var url = URL_LOGIN_SITUACAO + codigoUser.replace(/[^\d]/, '') + "&logando=true";
    executarController(url, {
        "method": "POST"
    }, function (json) {
        if (servicoHabilitado(json)) {
            var statusCloud;
            var messageStatusCloud;
            if (json["status"] == "1") {
                waitingDialog.hide();
                showErro(json["descricaoStatus"]);
            } else {
                var codigoCliente = json["codigoCliente"];
                var url = json["calimaUrlAcessoServidor"];
                if (codigoCliente == 0) {
                    url = "";
                }
                if (url != null) {
                    if(url.indexOf("localhost") > 0 && window.location.href.indexOf("login.calimaerp") > 0){
                        waitingDialog.hide();
                        showErro("Você não possui o serviço de nuvem em seu pacote e por isso não é possível acessar pelo http://login.calimaerp.com/. Para adquirir esse serviço entre em contato com o setor de vendas.");
                    }else {
                        store.set(CODIGO_CLIENTE_KEY, codigoCliente);

                        if(codigoCliente == 0){
                            statusCloud = CODE_STATUS_CLOUD_PRONTO;
                        }else{
                            statusCloud = json["containerStatus"];
                            messageStatusCloud = json["containerStatusMessage"];
                        }

                        if(statusCloud === CODE_STATUS_CLOUD_PRONTO){
                            verificarServer(url, dataValidacaoCPF, codigoCliente, json, resultFunc);
                        }else{
                            waitingDialog.hide();
                            generateMsg(messageStatusCloud, false)
                        }
                    }
                } else {
                    waitingDialog.hide();
                    showErro("Ocorreu um erro na comunicação com o calima. Por favor, solicite suporte.");
                }
            }
        }
    }, function (json) {
        waitingDialog.hide();
        showErro(getErrosJson(json))
    });
}

function validarLoginController(user, senha, codigoUser, resultFunc) {
    executarController(URL_VALIDAR_LOGIN, {
        "body": JSON.stringify({"login": user, "senha": senha}),
        "method": "POST"
    }, function (json) {
        if (json["codigoClienteProjetus"] != codigoUser) {
            waitingDialog.hide();
            showWarning("Usuário informado não está cadastrado para esse cliente. Contate o Administrador do Sistema.");
        } else {
            var dataValidacaoCPF = "";
            if (!json["cpf"] && json["dataLimiteObrigatoriedadeCpf"]) {
                dataValidacaoCPF = json["dataLimiteObrigatoriedadeCpf"];
            }
            consultarSituacaoController(codigoUser, dataValidacaoCPF, resultFunc);
        }
    }, function (json) {
        waitingDialog.hide();
        showErro(getErrosJson(json));
    });
}

function loginTokenController(senha, resultFunc) {
    executarController(URL_LOGIN_TOKEN + senha,
        {
            "method": "POST"
        }, function (json) {
            p3 = json["usuario"];
            p4 = json["senha"];
            resultFunc();
        }, function (json) {
            waitingDialog.hide();
            showErro(getErrosJson(json));
        });
}

function recuperarLoginController(user, resultFunc) {
    executarController(URL_RECUPERAR_LOGIN + user,
        {
            "method": "POST"
        }, function (json) {
            resultFunc(json);
        }, function (json) {
            waitingDialog.hide();
            showErro(getErrosJson(json));
        });
}

function getErrosJson(json) {
    var erros = [];
    json.errors.forEach(function (it) {
        erros.push(it.description)
    });
    return erros.join(" ");
}

function ajustaOptions(timeOut, extendedTimeOut, clickFunction) {
    if (timeOut === undefined) {
        timeOut = 5000;
    }
    if (extendedTimeOut === undefined) {
        extendedTimeOut = 1000;
    }
    toastr.options.timeOut = timeOut;
    toastr.options.extendedTimeOut = extendedTimeOut;
    if (clickFunction !== undefined) {
        toastr.options.onclick = clickFunction;
        toastr.options.onCloseClick = clickFunction;
    }
}

function showWarning(mensagem, timeOut, extendedTimeOut, clickFunction) {
    ajustaOptions(timeOut, extendedTimeOut, clickFunction);
    toastr.warning(mensagem);
}

function showErro(mensagem, timeOut, extendedTimeOut, clickFunction) {
    ajustaOptions(timeOut, extendedTimeOut, clickFunction);
    toastr.error(mensagem);
}

function showSuccess(mensagem, timeOut, extendedTimeOut, clickFunction) {
    ajustaOptions(timeOut, extendedTimeOut, clickFunction);
    toastr.success(mensagem);
}

function executarController(url, data, sucessFunc, errorFunc) {
    if (accessToken) {
        setHeaders(data);
        fetch(url, data).then(function execultResult(response) {
            if (response.status === 401) {
                obterTokenLoginController(function tokenResult() {
                    executarController(url, data, sucessFunc, errorFunc);
                });
            } else {
                response.json().then(function (json) {
                    if (response.ok) {
                        sucessFunc(json);
                    } else {
                        errorFunc(json);
                    }
                });
            }
        });
    } else {
        obterTokenLoginController(function tokenResult() {
            executarController(url, data, sucessFunc, errorFunc);
        })
    }
}

function setHeaders(data) {
    data.headers = {
        "Content-type": "application/json",
        "Authorization": "Bearer " + accessToken
    };
}

function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
}

function recuperar(n) {
    var inputRecuperar = $(".inputRecuperar");
    inputRecuperar.blur();
    if (inputRecuperar.hasClass("is-invalid")) {
        return;
    }
    recuperarLoginController(p6, function (json) {
        showSuccess("Sua nova senha foi enviada para o e-mail informado. Por favor verifique sua caixa de entrada.");
        $('#passRecover').click();
    });
}

function tokenClick(exibirToken) {
    $(".dadosLogin").toggle(!exibirToken);
    $(".passRecover").toggle(!exibirToken);
    $(".dadosToken").toggle(exibirToken);
    if (exibirToken) {
        $("#codigoClienteToken").focus();
    } else {
        $("#codigo").focus();
    }

}

function loginToken(n) {
    waitingDialog.show("Carregando...", {headerSize: 6});
    var inputToken = $(".inputToken");
    inputToken.blur();
    if (inputToken.hasClass("is-invalid")) {
        waitingDialog.hide();
        return;
    }
    loginTokenController(p4, function () {
        p7 = true;
        login();
    });
}

function logar(version) {
    if (hasProductInstall && !hasRequestedVersion) {
        var MMPlayerType = isIE ? "ActiveX" : "PlugIn";
        var MMredirectURL = window.location;
        document.title = document.title.slice(0, 47) + " - Flash Player Installation";
        var MMdoctitle = document.title;
        AC_FL_RunContent("src", "playerProductInstall", "FlashVars", "MMredirectURL=" + MMredirectURL + '&MMplayerType='
                                                                     + MMPlayerType
                                                                     + '&MMdoctitle=' + MMdoctitle + "", "width", "100%", "height",
                         "100%",
                         "align", "middle", "id", version, "quality", "high", "bgcolor", "#0E3047", "name", version,
                         "allowScriptAccess",
                         "sameDomain", "type", "application/x-shockwave-flash", "pluginspage",
                         "http://www.adobe.com/go/getflashplayer");
    } else if (hasRequestedVersion) {
        AC_FL_RunContent("src", version, "width", "100%", "height", "100%", "align", "middle", "id", version, "quality", "high",
                         "bgcolor",
                         "#0E3047", "wmode", "opaque", "name", version, "allowScriptAccess", "sameDomain", "type",
                         "application/x-shockwave-flash", "pluginspage", "http://www.adobe.com/go/getflashplayer");
    }
}

function login() {
    validarLoginController(p3, p4, p5, function (version, url, dataValidacaoCPF, codigoCliente) {
        toastr.remove();
        toastr.clear();
        lParams = "&t1=" + np(p3) + "&t2=" + np(p4) + "&t5=" + np(codigoCliente.toString());
        if (p7) {
            lParams += "&t6=" + p7;
        }
        if (dataValidacaoCPF) {
            lParams += "&t4=" + encodeURI(dataValidacaoCPF);
        }
        if (url) {
            lParams += "&t3=" + encodeURI(url).replace(/\//g, "#").replace(/:/g, "-");
        }
        document.body.style.overflow = "hidden";
        logar(version);
    });
}

function m(n) {
    waitingDialog.show("Carregando...", {headerSize: 6});
    var inputLogin = $(".inputLogin");
    inputLogin.blur();
    if (inputLogin.hasClass("is-invalid")) {
        waitingDialog.hide();
        return;
    }
    login()
}

function np(n) {
    var t = n ? n.length : 0, c = "";
    if (t > 0) {
        var o = t.toString();
        if (o.length <= this.p1) {
            c = c.concat(this.ns(this.p1 - o.length)).concat(o);
            for (var r = 0; t > r; r++) {
                c = c.concat(n.charAt(r)).concat(this.ns(this.s(r + 1)))
            }
        }
    }
    return c
}

function s(n) {
    return n
}

function ns(n) {
    for (var t = this.p2.length, c = ""; n > 0;) {
        var o = Math.round(Math.random() * t);
        o === t && o--, c = c.concat(this.p2[o]), n--
    }
    return c
}

function nz(n) {
    p3 = n.value;
    validate(n);
}

function nw(n) {
    p4 = n.value;
    validate(n);
}

function ny(n) {
    p5 = n.value;
    validate(n);
}

function nx(n) {
    p6 = n.value;
    validate(n);
}

function validate(input) {
    if (!input.value || input.value === "") {
        $(input).addClass('is-invalid');
    } else {
        $(input).removeClass('is-invalid');
    }
}

function getRandomUUID() {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-'
           +
           lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24
                                                                                          & 0xff] + '-' +
           lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24
                                                                                          & 0xff] +
           lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
}

function ControlVersion() {
    var version;
    var axo;

    // NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

    try {
        // version will be set for 7.X or greater players
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        version = axo.GetVariable("$version");
    } catch (e) {
    }

    if (!version) {
        try {
            // version will be set for 6.X players only
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");

            // installed player is some revision of 6.0
            // GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
            // so we have to be careful.

            // default to the first public version
            version = "WIN 6,0,21,0";

            // throws if AllowScripAccess does not exist (introduced in 6.0r47)
            axo.AllowScriptAccess = "always";

            // safe to call for 6.0r47 or greater
            version = axo.GetVariable("$version");

        } catch (e) {
        }
    }

    if (!version) {
        try {
            // version will be set for 4.X or 5.X player
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            version = axo.GetVariable("$version");
        } catch (e) {
        }
    }

    if (!version) {
        try {
            // version will be set for 3.X player
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            version = "WIN 3,0,18,0";
        } catch (e) {
        }
    }

    if (!version) {
        try {
            // version will be set for 2.X player
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            version = "WIN 2,0,0,11";
        } catch (e) {
            version = -1;
        }
    }

    return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer() {
    // NS/Opera version >= 3 check for Flash plugin in plugin array
    var flashVer = -1;

    function ajustaVersaoPlugin() {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
            var descArray = flashDescription.split(" ");
            var tempArrayMajor = descArray[2].split(".");
            var versionMajor = tempArrayMajor[0];
            var versionMinor = tempArrayMajor[1];
            var versionRevision = descArray[3];
            if (versionRevision === "") {
                versionRevision = descArray[4];
            }
            if (versionRevision[0] === "d") {
                versionRevision = versionRevision.substring(1);
            } else if (versionRevision[0] === "r") {
                versionRevision = versionRevision.substring(1);
                if (versionRevision.indexOf("d") >= 0) {
                    versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
                }
            } else if (versionRevision[0] === "b") {
                versionRevision = versionRevision.substring(1);
            }
            flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
        }
    }

    if (navigator.plugins != null && navigator.plugins.length > 0) {
        ajustaVersaoPlugin();
    } else {
        // MSN/WebTV 2.6 supports Flash 4
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("webtv/2.6") !== -1) {
            flashVer = 4;
        } else if (userAgent.indexOf("webtv/2.5") !== -1) {
            // WebTV 2.5 supports Flash 3
            flashVer = 3;
        } else if (userAgent.indexOf("webtv") !== -1) {
            // older WebTV supports Flash 2
            flashVer = 2;
        } else if (isIE && isWin && !isOpera) {
            flashVer = ControlVersion();
        }
    }
    return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision) {
    var versionStr = GetSwfVer();
    var versionArray;
    if (versionStr !== -1 && versionStr !== 0) {
        if (isIE && isWin && !isOpera) {
            // Given "WIN 2,0,0,11"
            var tempArray = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
            var tempString = tempArray[1];			// "2,0,0,11"
            versionArray = tempString.split(",");	// ['2', '0', '0', '11']
        } else {
            versionArray = versionStr.split(".");
        }
        var versionMajor = versionArray[0];
        var versionMinor = versionArray[1];
        var versionRevision = versionArray[2];

        // is the major.revision >= requested major.revision AND the minor version >= requested minor
        if (versionMajor > parseFloat(reqMajorVer)) {
            return true;
        } else if (versionMajor === parseFloat(reqMajorVer)) {
            if (versionMinor > parseFloat(reqMinorVer)) {
                return true;
            } else if (versionMinor === parseFloat(reqMinorVer)) {
                if (versionRevision >= parseFloat(reqRevision)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function AC_AddExtension(src, ext) {
    var qIndex = src.indexOf('?');
    if (qIndex !== -1) {
        // Add the extention (if needed) before the query params
        var path = src.substring(0, qIndex);
        if (path.length >= ext.length && path.lastIndexOf(ext) === (path.length - ext.length)) {
            return src;
        }
        else {
            return src.replace(/\?/, ext + '?');
        }
    }
    else {
        // Add the extension (if needed) to the end of the URL
        if (src.length >= ext.length && src.lastIndexOf(ext) === (src.length - ext.length)) {
            return src;
        }  // Already have extension
        else {
            return src + ext;
        }
    }
}

/**
 * @param {String} html representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function AC_Generateobj(objAttrs, params, embedAttrs) {
    var str = '';
    var i;
    if (isIE && isWin && !isOpera) {
        str += '<object ';
        for (i in objAttrs) {
            str += i + '="' + objAttrs[i] + '" ';
        }
        str += '>';
        for (i in params) {
            str += '<param name="' + i + '" value="' + params[i] + '" /> ';
        }
        str += '</object>';
    } else {
        str += '<embed ';
        for (i in embedAttrs) {
            str += i + '="' + embedAttrs[i] + '" ';
        }
        str += '> </embed>';
    }
    var myNode = document.getElementById("container");
    if (myNode) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        myNode.appendChild(htmlToElement(str));
    }
}

function AC_FL_RunContent() {
    var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
        , "application/x-shockwave-flash"
    );
    AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
    var ret = new Object();
    ret.embedAttrs = new Object();
    ret.params = new Object();
    ret.objAttrs = new Object();
    for (var i = 0; i < args.length; i = i + 2) {
        var currArg = args[i].toLowerCase();

        switch (currArg) {
            case "classid":
                break;
            case "pluginspage":
                ret.embedAttrs[args[i]] = args[i + 1];
                break;
            case "src":
            case "movie":
                args[i + 1] = AC_AddExtension(args[i + 1], ext);
                ret.embedAttrs["src"] = args[i + 1] + '?r=' + getRandomUUID() + lParams;
                ret.params[srcParamName] = args[i + 1];
                break;
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "ondeactivate":
            case "type":
            case "codebase":
                ret.objAttrs[args[i]] = args[i + 1];
                break;
            case "id":
            case "width":
            case "height":
            case "align":
            case "vspace":
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "tabindex":
                ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
                break;
            default:
                ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
        }
    }
    ret.objAttrs["classid"] = classid;
    if (mimeType) {
        ret.embedAttrs["type"] = mimeType;
    }
    return ret;
}

$(document).ready(function () {
    var codigo = $('#codigo');
    codigo.keypress(validateNumber);
    var codigoCliente = store.get(CODIGO_CLIENTE_KEY);
    if (codigoCliente !== undefined) {
        p5 = codigoCliente.toString();
    }
    codigo.val(p5);
    var passRecover = $('#passRecover');
    passRecover.click(function () {
        $(".dadosRecuperarLogin").toggle(this.checked);
        $(".dadosLogin").toggle(!this.checked);
        if (this.checked) {
            $("#recuperarLogin").focus();
        }
    });
    $(".dadosToken").toggle(false);
    $(".dadosRecuperarLogin").toggle(false);
});

var tentativa = 1;
function verificarServer(url, dataValidacaoCPF, codigoCliente, json, resultFunc){
    if(url === ""){//usuário Projetus -> codigo 0
        waitingDialog.hide();
        resultFunc(ajustarNomeVersao(json["versao"]), url, dataValidacaoCPF, codigoCliente);
    }else{
        fetch(
            url + "/spring/updater/obterNomeVersao",
            {"method": "GET"})
        .then(function execultResult(response) {
            if(response.status === 404){
                waitServer(url, dataValidacaoCPF, codigoCliente, json, resultFunc);
            }else{
                waitingDialog.hide();
                response.text().then(function (versao) {
                    resultFunc(ajustarNomeVersao(versao), url, dataValidacaoCPF, codigoCliente);
                });
            }
        }).catch(function (error) {
            waitServer(url, dataValidacaoCPF, codigoCliente, json, resultFunc);
        });
    }
}


function waitServer(url, dataValidacaoCPF, codigoCliente, json, resultFunc){
    if(tentativa <= 4){
        waitingDialog.message(getStateMessage(tentativa));
        tentativa++;
        setTimeout(function(){
            verificarServer(url, dataValidacaoCPF, codigoCliente, json, resultFunc);
        }, TIME_WAIT_TO_CONNECT);
    }else{
        waitingDialog.hide();
        notificarController(codigoCliente);
        var msg = "Não foi possível conectar ao seu Servidor WEB. Feche o sistema, aguarde alguns minutos e entre novamente. "
                  + "Caso o problema persista, entre em contato com nossa equipe de suporte.";

        generateMsg(msg, true);
    }
}

function notificarController(codigoCliente){
    var url = NOTIFICAR_FALHA_LOGIN + codigoCliente;
    fetch(url, {
        "headers": {
            "Content-type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        "method": "POST"
    })
    .catch(function (error){
        console.log("Error ao Notificar falha no login", error)
    });
}

function getStateMessage(tentativa) {
    var mapMSGStates = {};
    mapMSGStates[1] = "Aguarde! Nosso robô está criando seu ambiente de acesso ao Calima. ";
    mapMSGStates[2] = "Aguarde! Estamos quase concluindo... espere mais um pouco. ";
    mapMSGStates[3] = "Aguarde! Já está quase tudo pronto para seu acesso ao Calima. ";
    mapMSGStates[4] = "Aguarde! Nosso robô está configurando os processos finais de acesso. ";

    return mapMSGStates[tentativa];
}

function generateMsg(messageStatusCloud, redirectToLogin){
    $("#modalAlert").find('.modal-body').html(messageStatusCloud);
    $("#modalAlert").modal({
       backdrop: 'static',
       keyboard: false
    });

    $('#modalAlert').on('hide.bs.modal', function () {
        if(redirectToLogin){
            window.location.replace("http://login.calimaerp.com/");
        }
    });
}