for(var URL_CONTROLLER_LOGIN_TOKEN="https://login-api-controller.projetusti.com.br/token",URL_LOGIN_SITUACAO="https://login-api-controller.projetusti.com.br/informacaoCliente/consultarSituacao?codigoClienteProjetus\x3d",URL_VALIDAR_LOGIN="https://login-api-controller.projetusti.com.br/autenticacao/validarLogin",URL_RECUPERAR_LOGIN="https://login-api-controller.projetusti.com.br/autenticacao/recuperar?login\x3d",URL_LOGIN_TOKEN="https://login-api-controller.projetusti.com.br/autenticacao/recuperarLoginTokenTemporario?token\x3d",
NOTIFICAR_FALHA_LOGIN="https://login-api-controller.projetusti.com.br/autenticacao/notificarFalhaLogin?codigoCliente\x3d",REGISTRAR_ACESSO_LOGIN="https://login-api-controller.projetusti.com.br/calima/registrarAcesso",TOKEN_KEY="accessToken",CODE_STATUS_CLOUD_PRONTO=90,TIME_WAIT_TO_CONNECT=45E3,isIE=-1!==navigator.appVersion.indexOf("MSIE"),isWin=-1!==navigator.appVersion.toLowerCase().indexOf("win"),isOpera=-1!==navigator.userAgent.indexOf("Opera"),isAppElectron=-1!==navigator.userAgent.indexOf("Electron"),
requiredMajorVersion=10,requiredMinorVersion=0,requiredRevision=0,hasProductInstall=DetectFlashVer(6,0,65),hasRequestedVersion=DetectFlashVer(requiredMajorVersion,requiredMinorVersion,requiredRevision),urlServer="",origemAcesso="",origemVersion="",lut=[],i=0;256>i;i++)lut[i]=(16>i?"0":"")+i.toString(16);var p3="",p4="",p1=3,p2="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",p6="",p7=!1,lParams="",accessToken=store.get(TOKEN_KEY);
toastr.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!0,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut",escapeHtml:!0};
function obterTokenLoginController(a){fetch(URL_CONTROLLER_LOGIN_TOKEN,{headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type\x3dpassword\x26username\x3d02e3030bdcd918b3a2cb517a5a537a3d\x26password\x3dC%2BxFgQ06llg%3D",method:"POST"}).then(function(b){return b.json().then(function(b){store.set(TOKEN_KEY,b.access_token);accessToken=store.get(TOKEN_KEY);a()})})}
function servicoHabilitado(a){var b=!0,c=a.urlDebito,d=a.mensagemDebito;a=a.debito;c&&d&&a&&(b=!1,waitingDialog.hide(),showErro(d.replace("em Ok","aqui"),0,0,function(){window.open(c,"_blank")}));return b}function ajustarNomeVersao(a){a||(a="Main");return a}
function consultarSituacaoController(a,b,c){a=URL_LOGIN_SITUACAO+a.replace(/[^\d]/,"")+"\x26logando\x3dtrue";executarController(a,{method:"POST"},function(a){if(servicoHabilitado(a)){var d,f;if("1"==a.status)waitingDialog.hide(),showErro(a.descricaoStatus);else{var g=a.codigoCliente,h=a.calimaUrlProxied;urlServer=a.calimaUrlProxied;0==g&&(urlServer=window.location.href.split("?")[0],h="");null!=h?0<h.indexOf("localhost")&&(0<window.location.href.indexOf("login.calimaerp")||0<window.location.href.indexOf("objectstorage.sa-saopaulo"))?
(waitingDialog.hide(),showErro("Você não possui o serviço de nuvem em seu pacote e por isso não é possível acessar pelo http://login.calimaerp.com/. Para adquirir esse serviço entre em contato com o setor de vendas.")):(d=a.aplicationReleaseName)&&d.includes("react")?(waitingDialog.hide(),generateMsg("Você já foi migrado para o Calima 5.0, não é possível acessar usando esse Aplicativo, Utilize um browser (Chrome ou Firefox) para acessar o sistema usando o endereço http://calima.app")):(0==g?d=CODE_STATUS_CLOUD_PRONTO:
(d=a.containerStatus,f=a.containerStatusMessage),d===CODE_STATUS_CLOUD_PRONTO?verificarServer(h,b,g,a,c):(waitingDialog.hide(),generateMsg(f,!1))):(waitingDialog.hide(),showErro("Ocorreu um erro na comunicação com o calima. Por favor, solicite suporte."))}}},function(a){waitingDialog.hide();showErro(getErrosJson(a))})}
function validarLoginController(a,b,c){executarController(URL_VALIDAR_LOGIN,{body:JSON.stringify({login:a,senha:b}),method:"POST"},function(a){var b=a.codigoClienteProjetus;p3=a.usuario;var d="";!a.cpf&&a.dataLimiteObrigatoriedadeCpf&&(d=a.dataLimiteObrigatoriedadeCpf);notificarOrigemAcessoController(b,p3);consultarSituacaoController(b.toString(),d,c)},function(a){waitingDialog.hide();showErro(getErrosJson(a))})}
function notificarOrigemAcessoController(a,b){if(isAppElectron)window.ipcRenderer&&window.ipcRenderer.invoke&&window.ipcRenderer.invoke("versao").then(function(c){origemAcesso="ELECTRON";origemVersion=c;notificarAcessoController(origemAcesso,origemVersion,a,b)});else{var c=navigator.userAgent.toLowerCase(),d=-1!==c.indexOf("edg/"),e=-1!==c.indexOf("safari/"),f=-1!==c.indexOf("firefox/"),g=-1!==c.indexOf("chrome")&&!d;try{d?(origemAcesso="Edge",origemVersion=c.split("edg/")[1]):g?(origemAcesso="Chrome",
origemVersion=c.split("chrome/")[1].split(" ")[0]):e?(origemAcesso="Safari",origemVersion=c.split("safari/")[1].split(" ")[0]):f&&(origemAcesso="Firefox",origemVersion=c.split("firefox/")[1].split(" ")[0]),notificarAcessoController(origemAcesso,origemVersion,a,b)}catch(h){}}}
function notificarAcessoController(a,b,c,d){fetch(REGISTRAR_ACESSO_LOGIN,{headers:{"Content-type":"application/json",Authorization:"Bearer "+accessToken},body:JSON.stringify({codigoCliente:c,usuario:d,browser:a,versao:b}),method:"POST"}).catch(function(a){console.log("Error ao registrar acessso no login",a)})}
function loginTokenController(a,b){executarController(URL_LOGIN_TOKEN+a,{method:"POST"},function(a){p3=a.usuario;p4=a.senha;b()},function(a){waitingDialog.hide();showErro(getErrosJson(a))})}function recuperarLoginController(a,b){executarController(URL_RECUPERAR_LOGIN+a,{method:"POST"},function(a){b(a)},function(a){waitingDialog.hide();showErro(getErrosJson(a))})}function getErrosJson(a){var b=[];a.errors.forEach(function(a){b.push(a.description)});return b.join(" ")}
function ajustaOptions(a,b,c,d){void 0===a&&(a=5E3);void 0===b&&(b=1E3);toastr.options.timeOut=a;toastr.options.extendedTimeOut=b;void 0!==c&&(toastr.options.onclick=c,toastr.options.onCloseClick=c);void 0!==toastr.options.positionClass&&void 0===d&&(toastr.options.positionClass="toast-top-right");void 0!==d&&(toastr.options.positionClass="toast-top-full-width")}function showWarning(a,b,c,d){ajustaOptions(b,c,d);toastr.warning(a)}
function showErro(a,b,c,d,e){ajustaOptions(b,c,d,e);toastr.error(a)}function showSuccess(a,b,c,d){ajustaOptions(b,c,d);toastr.success(a)}function executarController(a,b,c,d){accessToken?(setHeaders(b),fetch(a,b).then(function(e){401===e.status?obterTokenLoginController(function(){executarController(a,b,c,d)}):e.json().then(function(a){e.ok?c(a):d(a)})})):obterTokenLoginController(function(){executarController(a,b,c,d)})}
function setHeaders(a){a.headers={"Content-type":"application/json",Authorization:"Bearer "+accessToken}}function validateNumber(a){var b=window.event?a.keyCode:a.which;return 8===a.keyCode||46===a.keyCode?!0:48>b||57<b?!1:!0}function recuperar(a){a=$(".inputRecuperar");a.blur();a.hasClass("is-invalid")||recuperarLoginController(p6,function(a){showSuccess("Sua nova senha foi enviada para o e-mail informado. Por favor verifique sua caixa de entrada.");$("#passRecover").click()})}
function tokenClick(a){$(".dadosLogin").toggle(!a);$(".passRecover").toggle(!a);$(".dadosToken").toggle(a);a?$("#codigoClienteToken").focus():$("#codigo").focus()}function loginToken(a){waitingDialog.show("Carregando...",{headerSize:6});a=$(".inputToken");a.blur();a.hasClass("is-invalid")?waitingDialog.hide():loginTokenController(p4,function(){p7=!0;login()})}
function logar(a){if(hasProductInstall&&!hasRequestedVersion){var b=isIE?"ActiveX":"PlugIn",c=window.location;document.title=document.title.slice(0,47)+" - Flash Player Installation";AC_FL_RunContent("src","playerProductInstall","FlashVars","MMredirectURL\x3d"+c+"\x26MMplayerType\x3d"+b+"\x26MMdoctitle\x3d"+document.title+"","width","100%","height","100%","align","middle","id",a,"quality","high","bgcolor","#0E3047","name",a,"allowScriptAccess","always","type","application/x-shockwave-flash","pluginspage",
"http://www.adobe.com/go/getflashplayer")}else hasRequestedVersion&&AC_FL_RunContent("src",a,"width","100%","height","100%","align","middle","id",a,"quality","high","bgcolor","#0E3047","wmode","opaque","name",a,"allowScriptAccess","always","type","application/x-shockwave-flash","pluginspage","http://www.adobe.com/go/getflashplayer");window.PROJETUS_CRISP&&window.PROJETUS_CRISP.hide&&window.PROJETUS_CRISP.hide()}
function login(){validarLoginController(p3,p4,function(a,b,c){toastr.remove();toastr.clear();lParams="\x26t1\x3d"+encodeURI(np(p3))+"\x26t2\x3d"+np(p4)+"\x26t5\x3d"+np(c.toString());p7&&(lParams+="\x26t6\x3d"+p7);b&&(lParams+="\x26t4\x3d"+encodeURI(b));a&&(lParams+="\x26t3\x3d"+encodeURI(a).replace(/\//g,"#").replace(/:/g,"-"));document.body.style.overflow="hidden";logar("Main")})}
function m(a){waitingDialog.show("Carregando...",{headerSize:6});a=$(".inputLogin");a.blur();a.hasClass("is-invalid")?waitingDialog.hide():login()}function np(a){var b=a?a.length:0,c="";if(0<b){var d=b.toString();if(d.length<=this.p1)for(c=c.concat(this.ns(this.p1-d.length)).concat(d),d=0;b>d;d++)c=c.concat(a.charAt(d)).concat(this.ns(this.s(d+1)))}return c}function s(a){return a}
function ns(a){for(var b=this.p2.length,c="";0<a;){var d=Math.round(Math.random()*b);d===b&&d--;c=c.concat(this.p2[d]);a--}return c}function nz(a){p3=a.value;validate(a)}function nw(a){p4=a.value;validate(a)}function nx(a){p6=a.value;validate(a)}function validate(a){a.value&&""!==a.value?$(a).removeClass("is-invalid"):$(a).addClass("is-invalid")}
function getRandomUUID(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,c=4294967295*Math.random()|0,d=4294967295*Math.random()|0;return lut[a&255]+lut[a>>8&255]+lut[a>>16&255]+lut[a>>24&255]+"-"+lut[b&255]+lut[b>>8&255]+"-"+lut[b>>16&15|64]+lut[b>>24&255]+"-"+lut[c&63|128]+lut[c>>8&255]+"-"+lut[c>>16&255]+lut[c>>24&255]+lut[d&255]+lut[d>>8&255]+lut[d>>16&255]+lut[d>>24&255]}
function ControlVersion(){var a,b;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),a=b.GetVariable("$version")}catch(c){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",b.AllowScriptAccess="always",a=b.GetVariable("$version")}catch(c){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),a=b.GetVariable("$version")}catch(c){}if(!a)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),a="WIN 3,0,18,0"}catch(c){}if(!a)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
a="WIN 2,0,0,11"}catch(c){a=-1}return a}
function GetSwfVer(){var a=-1;if(null!=navigator.plugins&&0<navigator.plugins.length){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var a=navigator.plugins["Shockwave Flash"+(navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"")].description.split(" "),b=a[2].split("."),c=b[0],b=b[1],d=a[3];""===d&&(d=a[4]);"d"===d[0]?d=d.substring(1):"r"===d[0]?(d=d.substring(1),0<=d.indexOf("d")&&(d=d.substring(0,d.indexOf("d")))):"b"===d[0]&&(d=d.substring(1));a=c+"."+b+"."+d}}else c=
navigator.userAgent.toLowerCase(),-1!==c.indexOf("webtv/2.6")?a=4:-1!==c.indexOf("webtv/2.5")?a=3:-1!==c.indexOf("webtv")?a=2:isIE&&isWin&&!isOpera&&(a=ControlVersion());return a}function DetectFlashVer(a,b,c){var d=GetSwfVer(),e;if(-1!==d&&0!==d){e=isIE&&isWin&&!isOpera?d.split(" ")[1].split(","):d.split(".");var d=e[0],f=e[1];e=e[2];if(d>parseFloat(a)||d===parseFloat(a)&&(f>parseFloat(b)||f===parseFloat(b)&&e>=parseFloat(c)))return!0}return!1}
function AC_AddExtension(a,b){var c=a.indexOf("?");return-1!==c?(c=a.substring(0,c),c.length>=b.length&&c.lastIndexOf(b)===c.length-b.length?a:a.replace(/\?/,b+"?")):a.length>=b.length&&a.lastIndexOf(b)===a.length-b.length?a:a+b}function htmlToElement(a){var b=document.createElement("template");a=a.trim();b.innerHTML=a;return b.content.firstChild}
function AC_Generateobj(a,b,c){var d="",e;if(isIE&&isWin&&!isOpera){d+="\x3cobject ";for(e in a)d+=e+'\x3d"'+a[e]+'" ';d+="\x3e";for(e in b)d+='\x3cparam name\x3d"'+e+'" value\x3d"'+b[e]+'" /\x3e ';d+="\x3c/object\x3e"}else{d+="\x3cembed ";for(e in c)d+=e+'\x3d"'+c[e]+'" ';d+="\x3e \x3c/embed\x3e"}if(a=document.getElementById("container")){for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(htmlToElement(d))}}
function AC_FL_RunContent(){var a=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(a.objAttrs,a.params,a.embedAttrs)}
function AC_GetArgs(a,b,c,d,e){for(var f={embedAttrs:{},params:{},objAttrs:{}},g=0;g<a.length;g+=2)switch(a[g].toLowerCase()){case "classid":break;case "pluginspage":f.embedAttrs[a[g]]=a[g+1];break;case "src":case "movie":a[g+1]=AC_AddExtension(a[g+1],b);f.embedAttrs.src=urlServer+a[g+1]+"?r\x3d"+getRandomUUID()+lParams;f.params[c]=a[g+1];break;case "onafterupdate":case "onbeforeupdate":case "onblur":case "oncellchange":case "onclick":case "ondblClick":case "ondrag":case "ondragend":case "ondragenter":case "ondragleave":case "ondragover":case "ondrop":case "onfinish":case "onfocus":case "onhelp":case "onmousedown":case "onmouseup":case "onmouseover":case "onmousemove":case "onmouseout":case "onkeypress":case "onkeydown":case "onkeyup":case "onload":case "onlosecapture":case "onpropertychange":case "onreadystatechange":case "onrowsdelete":case "onrowenter":case "onrowexit":case "onrowsinserted":case "onstart":case "onscroll":case "onbeforeeditfocus":case "onactivate":case "onbeforedeactivate":case "ondeactivate":case "type":case "codebase":f.objAttrs[a[g]]=
a[g+1];break;case "id":case "width":case "height":case "align":case "vspace":case "hspace":case "class":case "title":case "accesskey":case "name":case "tabindex":f.embedAttrs[a[g]]=f.objAttrs[a[g]]=a[g+1];break;default:f.embedAttrs[a[g]]=f.params[a[g]]=a[g+1]}f.objAttrs.classid=d;e&&(f.embedAttrs.type=e);return f}
$(document).ready(function(){$("#passRecover").click(function(){$(".dadosRecuperarLogin").toggle(this.checked);$(".dadosLogin").toggle(!this.checked);this.checked&&$("#recuperarLogin").focus()});$(".dadosToken").toggle(!1);$(".dadosRecuperarLogin").toggle(!1);verifyCookieSameSite()});var tentativa=1;
function verificarServer(a,b,c,d,e){""===a?(waitingDialog.hide(),e(a,b,c)):fetch(a+"/spring/updater/obterNomeVersao",{method:"GET"}).then(function(f){404===f.status?waitServer(a,b,c,d,e):(waitingDialog.hide(),f.text().then(function(d){e(a,b,c)}))}).catch(function(f){waitServer(a,b,c,d,e)})}
function waitServer(a,b,c,d,e){4>=tentativa?(waitingDialog.message(getStateMessage(tentativa)),tentativa++,setTimeout(function(){verificarServer(a,b,c,d,e)},TIME_WAIT_TO_CONNECT)):(waitingDialog.hide(),notificarController(c),generateMsg("Não foi possível conectar ao seu Servidor WEB. Feche o sistema, aguarde alguns minutos e entre novamente. Caso o problema persista, entre em contato com nossa equipe de suporte.",!0))}
function notificarController(a){fetch(NOTIFICAR_FALHA_LOGIN+a,{headers:{"Content-type":"application/json",Authorization:"Bearer "+accessToken},method:"POST"}).catch(function(a){console.log("Error ao Notificar falha no login",a)})}
function getStateMessage(a){return{1:"Aguarde! Nosso robô está criando seu ambiente de acesso ao Calima. ",2:"Aguarde! Estamos quase concluindo... espere mais um pouco. ",3:"Aguarde! Já está quase tudo pronto para seu acesso ao Calima. ",4:"Aguarde! Nosso robô está configurando os processos finais de acesso. "}[a]}
function generateMsg(a,b){$("#modalAlert").find(".modal-body").html(a);$("#modalAlert").modal({backdrop:"static",keyboard:!1});$("#modalAlert").on("hide.bs.modal",function(){b&&window.location.replace("http://login.calimaerp.com/")})}
function verifyCookieSameSite(){var a=""===document.cookie,b=navigator.userAgent.toLowerCase(),c=-1!==b.indexOf("edg"),b=-1!==b.indexOf("chrome")&&!c,c="http://login.calimaerp.com/"===document.location.href;b&&a&&c&&(showErro("Detectamos uma incompatibilidade nas configurações do seu navegador com o Calima. Clique aqui e siga os passos para realizar as configurações corretas.",0,0,function(){window.open("https://ajuda.projetusti.com.br/index.php?curid\x3d6466#Erro_ao_Acessar_o_Calima_pelo_Browser_Google_Chrome",
"_blank")},"toast-top-full-width"),$("#toast-container").children().css("max-width","none"))}$(document).ready(function(){if(!isAppElectron){var a=location.search,b=(new URLSearchParams(a)).get("acesso"),c="calima-electron"===b;""===a||null===b?redirect():c||(isNaN(Number(b))?redirect():12!==b.length?redirect():validateParam(Number(b)))}});function validateParam(a){var b=getISOToNumber(getLocalDate());(a+1<b||a>b+1)&&redirect()}
function getLocalDate(){return(new Date(Date.now()-108E5)).toISOString()}function getISOToNumber(a){a=a.slice(0,16).replace(/[^0-9]/g,"");return Number(a)}function redirect(){window.location.replace("https://www.calimaerp.com/app")}
$(document).ready(function(){isAppElectron?($(".flash").toggle(!1),window.ipcRenderer.on("exit",function(a,b){document.getElementById("Main").onExitAppElectron(b)}),window.ipcRenderer.on("resultValidateAppA3",function(a,b){document.getElementById("Main").resultValidateAppA3(b)})):$(".flash").toggle(!0)});function callAppA3(a){window.ipcRenderer.send("callAppA3",a)}function validateAppA3(){window.ipcRenderer.send("validateAppA3")};