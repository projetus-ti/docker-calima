for(var URL_CONTROLLER_LOGIN_TOKEN="https://controller-bypass.projetusti.com.br/login/api/token",URL_LOGIN_SITUACAO="https://controller-bypass.projetusti.com.br/login/api/informacaoCliente/consultarSituacao?codigoClienteProjetus\x3d",URL_VALIDAR_LOGIN="https://controller-bypass.projetusti.com.br/login/api/autenticacao/validarLogin",URL_RECUPERAR_LOGIN="http://controller-bypass.projetusti.com.br/login/api/autenticacao/recuperar?login\x3d",URL_LOGIN_TOKEN="http://controller-bypass.projetusti.com.br/login/api/autenticacao/recuperarLoginTokenTemporario?token\x3d",
NOTIFICAR_FALHA_LOGIN="https://controller.projetusti.com.br/login/api/autenticacao/notificarFalhaLogin?codigoCliente\x3d",TOKEN_KEY="accessToken",CODIGO_CLIENTE_KEY="codigoKey",CODE_STATUS_CLOUD_PRONTO=90,TIME_WAIT_TO_CONNECT=45E3,isIE=-1!==navigator.appVersion.indexOf("MSIE"),isWin=-1!==navigator.appVersion.toLowerCase().indexOf("win"),isOpera=-1!==navigator.userAgent.indexOf("Opera"),requiredMajorVersion=10,requiredMinorVersion=0,requiredRevision=0,hasProductInstall=DetectFlashVer(6,0,65),hasRequestedVersion=
DetectFlashVer(requiredMajorVersion,requiredMinorVersion,requiredRevision),lut=[],i=0;256>i;i++)lut[i]=(16>i?"0":"")+i.toString(16);var p3="",p4="",p1=3,p2="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",p5="",p6="",p7=!1,lParams="",accessToken=store.get(TOKEN_KEY);
toastr.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!0,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut",escapeHtml:!0};
function obterTokenLoginController(a){fetch(URL_CONTROLLER_LOGIN_TOKEN,{headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type\x3dpassword\x26username\x3d02e3030bdcd918b3a2cb517a5a537a3d\x26password\x3dC%2BxFgQ06llg%3D",method:"POST"}).then(function(b){return b.json().then(function(b){store.set(TOKEN_KEY,b.access_token);accessToken=store.get(TOKEN_KEY);a()})})}
function servicoHabilitado(a){var b=!0,d=a.urlDebito,c=a.mensagemDebito;a=a.debito;d&&c&&a&&(b=!1,showErro(c.replace("em Ok","aqui"),0,0,function(){window.open(d,"_blank")}));return b}function ajustarNomeVersao(a){a||(a="Main");return a}
function consultarSituacaoController(a,b,d){a=URL_LOGIN_SITUACAO+a.replace(/[^\d]/,"")+"\x26logando\x3dtrue";executarController(a,{method:"POST"},function(a){if(servicoHabilitado(a)){var c,g;if("1"==a.status)showErro(a.descricaoStatus);else{var f=a.codigoCliente,h=a.calimaUrlAcessoServidor;0==f&&(h="");null!=h?0<h.indexOf("localhost")&&0<window.location.href.indexOf("login.calimaerp")?showErro("Você não possui o serviço de nuvem em seu pacote e por isso não é possível acessar pelo http://login.calimaerp.com/. Para adquirir esse serviço entre em contato com o setor de vendas."):
(store.set(CODIGO_CLIENTE_KEY,f),0==f?c=CODE_STATUS_CLOUD_PRONTO:(c=a.containerStatus,g=a.containerStatusMessage),c===CODE_STATUS_CLOUD_PRONTO?verificarServer(h,b,f,a,d):(waitingDialog.hide(),generateMsg(g,!1))):(waitingDialog.hide(),showErro("Ocorreu um erro na comunicação com o calima. Por favor, solicite suporte."))}}},function(a){showErro(getErrosJson(a))})}
function validarLoginController(a,b,d,c){executarController(URL_VALIDAR_LOGIN,{body:JSON.stringify({login:a,senha:b}),method:"POST"},function(a){if(a.codigoClienteProjetus!=d)waitingDialog.hide(),showWarning("Usuário informado não está cadastrado para esse cliente. Contate o Administrador do Sistema.");else{var b="";!a.cpf&&a.dataLimiteObrigatoriedadeCpf&&(b=a.dataLimiteObrigatoriedadeCpf);consultarSituacaoController(d,b,c)}},function(a){waitingDialog.hide();showErro(getErrosJson(a))})}
function loginTokenController(a,b){executarController(URL_LOGIN_TOKEN+a,{method:"POST"},function(a){p3=a.usuario;p4=a.senha;b()},function(a){waitingDialog.hide();showErro(getErrosJson(a))})}function recuperarLoginController(a,b){executarController(URL_RECUPERAR_LOGIN+a,{method:"POST"},function(a){b(a)},function(a){showErro(getErrosJson(a))})}function getErrosJson(a){var b=[];a.errors.forEach(function(a){b.push(a.description)});return b.join(" ")}
function ajustaOptions(a,b,d){void 0===a&&(a=5E3);void 0===b&&(b=1E3);toastr.options.timeOut=a;toastr.options.extendedTimeOut=b;void 0!==d&&(toastr.options.onclick=d,toastr.options.onCloseClick=d)}function showWarning(a,b,d,c){ajustaOptions(b,d,c);toastr.warning(a)}function showErro(a,b,d,c){ajustaOptions(b,d,c);toastr.error(a)}function showSuccess(a,b,d,c){ajustaOptions(b,d,c);toastr.success(a)}
function executarController(a,b,d,c){accessToken?(setHeaders(b),fetch(a,b).then(function(e){401===e.status?obterTokenLoginController(function(){executarController(a,b,d,c)}):e.json().then(function(a){e.ok?d(a):c(a)})})):obterTokenLoginController(function(){executarController(a,b,d,c)})}function setHeaders(a){a.headers={"Content-type":"application/json",Authorization:"Bearer "+accessToken}}
function validateNumber(a){var b=window.event?a.keyCode:a.which;return 8===a.keyCode||46===a.keyCode?!0:48>b||57<b?!1:!0}function recuperar(a){a=$(".inputRecuperar");a.blur();a.hasClass("is-invalid")||recuperarLoginController(p6,function(a){showSuccess("Sua nova senha foi enviada para o e-mail informado. Por favor verifique sua caixa de entrada.");$("#passRecover").click()})}
function tokenClick(a){$(".dadosLogin").toggle(!a);$(".passRecover").toggle(!a);$(".dadosToken").toggle(a);a?$("#codigoClienteToken").focus():$("#codigo").focus()}function loginToken(a){waitingDialog.show("Carregando...",{headerSize:6});a=$(".inputToken");a.blur();a.hasClass("is-invalid")?waitingDialog.hide():loginTokenController(p4,function(){p7=!0;login()})}
function logar(a){if(hasProductInstall&&!hasRequestedVersion){var b=isIE?"ActiveX":"PlugIn",d=window.location;document.title=document.title.slice(0,47)+" - Flash Player Installation";AC_FL_RunContent("src","playerProductInstall","FlashVars","MMredirectURL\x3d"+d+"\x26MMplayerType\x3d"+b+"\x26MMdoctitle\x3d"+document.title+"","width","100%","height","100%","align","middle","id",a,"quality","high","bgcolor","#0E3047","name",a,"allowScriptAccess","sameDomain","type","application/x-shockwave-flash","pluginspage",
"http://www.adobe.com/go/getflashplayer")}else hasRequestedVersion&&AC_FL_RunContent("src",a,"width","100%","height","100%","align","middle","id",a,"quality","high","bgcolor","#0E3047","wmode","opaque","name",a,"allowScriptAccess","sameDomain","type","application/x-shockwave-flash","pluginspage","http://www.adobe.com/go/getflashplayer")}
function login(){validarLoginController(p3,p4,p5,function(a,b,d,c){toastr.remove();toastr.clear();lParams="\x26t1\x3d"+np(p3)+"\x26t2\x3d"+np(p4)+"\x26t5\x3d"+np(c.toString());p7&&(lParams+="\x26t6\x3d"+p7);d&&(lParams+="\x26t4\x3d"+encodeURI(d));b&&(lParams+="\x26t3\x3d"+encodeURI(b).replace(/\//g,"#").replace(/:/g,"-"));document.body.style.overflow="hidden";logar(a)})}
function m(a){waitingDialog.show("Carregando...",{headerSize:6});a=$(".inputLogin");a.blur();a.hasClass("is-invalid")?waitingDialog.hide():login()}function np(a){var b=a?a.length:0,d="";if(0<b){var c=b.toString();if(c.length<=this.p1)for(d=d.concat(this.ns(this.p1-c.length)).concat(c),c=0;b>c;c++)d=d.concat(a.charAt(c)).concat(this.ns(this.s(c+1)))}return d}function s(a){return a}
function ns(a){for(var b=this.p2.length,d="";0<a;){var c=Math.round(Math.random()*b);c===b&&c--;d=d.concat(this.p2[c]);a--}return d}function nz(a){p3=a.value;validate(a)}function nw(a){p4=a.value;validate(a)}function ny(a){p5=a.value;validate(a)}function nx(a){p6=a.value;validate(a)}function validate(a){a.value&&""!==a.value?$(a).removeClass("is-invalid"):$(a).addClass("is-invalid")}
function getRandomUUID(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,d=4294967295*Math.random()|0,c=4294967295*Math.random()|0;return lut[a&255]+lut[a>>8&255]+lut[a>>16&255]+lut[a>>24&255]+"-"+lut[b&255]+lut[b>>8&255]+"-"+lut[b>>16&15|64]+lut[b>>24&255]+"-"+lut[d&63|128]+lut[d>>8&255]+"-"+lut[d>>16&255]+lut[d>>24&255]+lut[c&255]+lut[c>>8&255]+lut[c>>16&255]+lut[c>>24&255]}
function ControlVersion(){var a,b;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),a=b.GetVariable("$version")}catch(d){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",b.AllowScriptAccess="always",a=b.GetVariable("$version")}catch(d){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),a=b.GetVariable("$version")}catch(d){}if(!a)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),a="WIN 3,0,18,0"}catch(d){}if(!a)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
a="WIN 2,0,0,11"}catch(d){a=-1}return a}
function GetSwfVer(){var a=-1;if(null!=navigator.plugins&&0<navigator.plugins.length){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var a=navigator.plugins["Shockwave Flash"+(navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"")].description.split(" "),b=a[2].split("."),d=b[0],b=b[1],c=a[3];""===c&&(c=a[4]);"d"===c[0]?c=c.substring(1):"r"===c[0]?(c=c.substring(1),0<=c.indexOf("d")&&(c=c.substring(0,c.indexOf("d")))):"b"===c[0]&&(c=c.substring(1));a=d+"."+b+"."+c}}else d=
navigator.userAgent.toLowerCase(),-1!==d.indexOf("webtv/2.6")?a=4:-1!==d.indexOf("webtv/2.5")?a=3:-1!==d.indexOf("webtv")?a=2:isIE&&isWin&&!isOpera&&(a=ControlVersion());return a}function DetectFlashVer(a,b,d){var c=GetSwfVer(),e;if(-1!==c&&0!==c){e=isIE&&isWin&&!isOpera?c.split(" ")[1].split(","):c.split(".");var c=e[0],g=e[1];e=e[2];if(c>parseFloat(a)||c===parseFloat(a)&&(g>parseFloat(b)||g===parseFloat(b)&&e>=parseFloat(d)))return!0}return!1}
function AC_AddExtension(a,b){var d=a.indexOf("?");return-1!==d?(d=a.substring(0,d),d.length>=b.length&&d.lastIndexOf(b)===d.length-b.length?a:a.replace(/\?/,b+"?")):a.length>=b.length&&a.lastIndexOf(b)===a.length-b.length?a:a+b}function htmlToElement(a){var b=document.createElement("template");a=a.trim();b.innerHTML=a;return b.content.firstChild}
function AC_Generateobj(a,b,d){var c="",e;if(isIE&&isWin&&!isOpera){c+="\x3cobject ";for(e in a)c+=e+'\x3d"'+a[e]+'" ';c+="\x3e";for(e in b)c+='\x3cparam name\x3d"'+e+'" value\x3d"'+b[e]+'" /\x3e ';c+="\x3c/object\x3e"}else{c+="\x3cembed ";for(e in d)c+=e+'\x3d"'+d[e]+'" ';c+="\x3e \x3c/embed\x3e"}if(a=document.getElementById("container")){for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(htmlToElement(c))}}
function AC_FL_RunContent(){var a=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(a.objAttrs,a.params,a.embedAttrs)}
function AC_GetArgs(a,b,d,c,e){for(var g={embedAttrs:{},params:{},objAttrs:{}},f=0;f<a.length;f+=2)switch(a[f].toLowerCase()){case "classid":break;case "pluginspage":g.embedAttrs[a[f]]=a[f+1];break;case "src":case "movie":a[f+1]=AC_AddExtension(a[f+1],b);g.embedAttrs.src=a[f+1]+"?r\x3d"+getRandomUUID()+lParams;g.params[d]=a[f+1];break;case "onafterupdate":case "onbeforeupdate":case "onblur":case "oncellchange":case "onclick":case "ondblClick":case "ondrag":case "ondragend":case "ondragenter":case "ondragleave":case "ondragover":case "ondrop":case "onfinish":case "onfocus":case "onhelp":case "onmousedown":case "onmouseup":case "onmouseover":case "onmousemove":case "onmouseout":case "onkeypress":case "onkeydown":case "onkeyup":case "onload":case "onlosecapture":case "onpropertychange":case "onreadystatechange":case "onrowsdelete":case "onrowenter":case "onrowexit":case "onrowsinserted":case "onstart":case "onscroll":case "onbeforeeditfocus":case "onactivate":case "onbeforedeactivate":case "ondeactivate":case "type":case "codebase":g.objAttrs[a[f]]=
a[f+1];break;case "id":case "width":case "height":case "align":case "vspace":case "hspace":case "class":case "title":case "accesskey":case "name":case "tabindex":g.embedAttrs[a[f]]=g.objAttrs[a[f]]=a[f+1];break;default:g.embedAttrs[a[f]]=g.params[a[f]]=a[f+1]}g.objAttrs.classid=c;e&&(g.embedAttrs.type=e);return g}
$(document).ready(function(){var a=$("#codigo");a.keypress(validateNumber);var b=store.get(CODIGO_CLIENTE_KEY);void 0!==b&&(p5=b.toString());a.val(p5);$("#passRecover").click(function(){$(".dadosRecuperarLogin").toggle(this.checked);$(".dadosLogin").toggle(!this.checked);this.checked&&$("#recuperarLogin").focus()});$(".dadosToken").toggle(!1);$(".dadosRecuperarLogin").toggle(!1)});var tentativa=1;
function verificarServer(a,b,d,c,e){""===a?(waitingDialog.hide(),e(ajustarNomeVersao(c.versao),a,b,d)):fetch(a+"/spring/updater/obterNomeVersao",{method:"GET"}).then(function(g){404===g.status?waitServer(a,b,d,c,e):(waitingDialog.hide(),g.text().then(function(c){e(ajustarNomeVersao(c),a,b,d)}))}).catch(function(g){waitServer(a,b,d,c,e)})}
function waitServer(a,b,d,c,e){4>=tentativa?(waitingDialog.message(getStateMessage(tentativa)),tentativa++,setTimeout(function(){verificarServer(a,b,d,c,e)},TIME_WAIT_TO_CONNECT)):(waitingDialog.hide(),notificarController(d),generateMsg("Não conseguimos criar o seu espaço exclusivo para Calima, isso pode ser uma falha temporária, recomendamos tentar acessar o sistema novamente, nosso robô vai tentar reconfigura-lo. Uma dica: esse problema pode estar em sua infraestrutura, por isso verifique no seu firewall as portas de saída no intervalo de 8080 a 8091 que devem estar estar liberadas.",
!0))}function notificarController(a){fetch(NOTIFICAR_FALHA_LOGIN+a,{headers:{"Content-type":"application/json",Authorization:"Bearer "+accessToken},method:"POST"}).catch(function(a){console.log("Error ao Notificar falha no login",a)})}
function getStateMessage(a){return{1:"Aguarde! Nosso robô está criando seu ambiente de acesso ao Calima. ",2:"Aguarde! Estamos quase concluindo... espere mais um pouco. ",3:"Aguarde! Já está quase tudo pronto para seu acesso ao Calima. ",4:"Aguarde! Nosso robô está configurando os processos finais de acesso. "}[a]}
function generateMsg(a,b){$("#modalAlert").find(".modal-body").html(a);$("#modalAlert").modal({backdrop:"static",keyboard:!1});$("#modalAlert").on("hide.bs.modal",function(){b&&window.location.replace("http://login.calimaerp.com/")})};