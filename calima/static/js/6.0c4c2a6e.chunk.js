(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1121:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return n}),t.d(a,"c",function(){return o});const r="demonstracaoresultadorelrv",n="printDemonstracaoResultado",o="Demonstra\xe7\xe3o do Resultado"},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},816:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Utilizar Natureza da Conta",value:"NATUREZA"},n=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},r];a.b=n},817:function(e,a,t){"use strict";var r=t(6),n=t(0),o=t.n(n),i=t(2),s=t(257);a.a=(e=>o.a.createElement(i.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||s.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:i.L.INPUT_SEARCH})))},818:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var r=t(2),n=t(816);function o(e=null,a=null,t=null){return{designType:r.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:t,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:n.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,t){"use strict";function r(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}t.d(a,"a",function(){return r})},820:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(19),i=t(395),s=t(2),c=t(256),l=t(49),u=t(6),d=t(12),p=t(25),m=t(198),E=t(148),f=t(786),O=t(782),b=t(779),A=t(780),P=t(783),S=t(781),C=t(816),R=t(98);const v={contato:"",email:""};var g=e=>{const a=Object(R.b)({defaultValues:e.selectedItem||v,mode:"onBlur"}),t={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return n.a.createElement(s.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:t,validateExtras:(e,a,t)=>[]},n.a.createElement(s.K,{id:"contato",isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},t),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),n.a.createElement(s.K,{id:"email",isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},t),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var D=e=>{return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Dados para Envio do E-mail"),n.a.createElement(s.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:!0}})}),n.a.createElement(s.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:g,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),n.a.createElement("p",null,"Copiar para:"),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),n.a.createElement(s.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:s.L.TEXT_AREA}))},I=t(817);var T=e=>{const a=Object(o.c)(e=>e.globalReducer),t=Object(r.useState)(1),i=Object(d.a)(t,2),c=i[0],l=i[1];Object(r.useEffect)(()=>{const t=e.reportViewOptions,r=t.printingTypes,n=t.reportViewType;let o=Object(u.a)(Object(u.a)({},e.reportBasicValues),{},{designType:r&&r.length>0?r[0]:s.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const i=Object(s.zb)(),c=Object(s.zb)();switch(n){case s.r.value:o=Object(u.a)(Object(u.a)({},o),{},{dtInicial:Object(s.Nb)(i.toDate())});break;case s.s.value:o=Object(u.a)(Object(u.a)({},o),{},{dtFinal:Object(s.Nb)(c.endOf("month").toDate()),dtInicial:Object(s.Nb)(i.toDate())});break;case s.T.value:o=Object(u.a)(Object(u.a)({},o),{},{referenciaInicial:Object(s.Mb)(i.toDate(),s.V)});break;case s.U.value:o=Object(u.a)(Object(u.a)({},o),{},{referenciaFinal:Object(s.Mb)(i.toDate(),s.V),referenciaInicial:Object(s.Mb)(c.toDate(),s.V)});break;case s.b.value:o=Object(u.a)(Object(u.a)({},o),{},{ano:String(i.year())})}e.formProps.reset(o)},[e.reportViewOptions,a.globalParameter.empresa]);const R=({target:e})=>{const a=e.tabIndex;c!==a&&l(a)},v=n.a.createElement(s.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:s.L.DATE}),g=e.reportViewOptions.reportViewType===s.r.value?v:null,T=e.reportViewOptions.reportViewType===s.s.value?n.a.createElement(n.a.Fragment,null,v,n.a.createElement(s.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:s.L.DATE})):null,j=n.a.createElement(s.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:s.L.REFERENCE}),N=e.reportViewOptions.reportViewType===s.T.value?j:null,L=e.reportViewOptions.reportViewType===s.U.value?n.a.createElement(n.a.Fragment,null,j,n.a.createElement(s.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:s.L.REFERENCE})):null,F=e.reportViewOptions.reportViewType===s.b.value?n.a.createElement(s.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:s.L.MASK}):null,M=e.reportViewOptions.exibirPaginaInicial?n.a.createElement(s.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:s.L.NUMBER}):null,h=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{className:"align-items-center"},n.a.createElement(E.a,{xs:2},n.a.createElement(f.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),n.a.createElement(E.a,null,n.a.createElement(I.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,V=e.reportViewOptions.exibirSegmentacaoFolha?n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,w=e.reportViewOptions.exibirConfiguracaoDataAtual?n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,_=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,q=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,x=e.reportBasicValues.exibirFormatacaoValor?n.a.createElement(n.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),n.a.createElement(s.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:C.b,selectProps:{isClearable:!1}},type:s.L.DROP_DOWN})):null;return n.a.createElement(s.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},n.a.createElement(s.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{tabs:!0},n.a.createElement(b.a,null,n.a.createElement(A.a,{className:Object(p.a)({active:1===c}),tabIndex:1,onClick:R},"Configura\xe7\xf5es Gerais")),n.a.createElement(b.a,null,n.a.createElement(A.a,{className:Object(p.a)({active:2===c}),tabIndex:2,onClick:R,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),n.a.createElement(b.a,null,n.a.createElement(A.a,{className:Object(p.a)({active:3===c}),tabIndex:3,onClick:R,disabled:!0},"Connect"))),n.a.createElement(P.a,{className:"mb-5",activeTab:c},n.a.createElement(S.a,{tabId:1,className:"mb-0 p-3"},n.a.createElement(s.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),n.a.createElement(s.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),M,h,V,w,x,_,q,g,T,N,L,F,n.a.createElement("hr",null),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),n.a.createElement(s.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:s.u,selectProps:{isClearable:!1}},type:s.L.DROP_DOWN}),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(E.a,null,n.a.createElement(f.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),n.a.createElement(S.a,{tabId:2,className:"mb-0 p-3"},n.a.createElement(D,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),n.a.createElement(S.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(o.c)(e=>e.globalReducer).headerDrawerToggle,t=Object(o.b)();const r=r=>{e.addExtraParameters&&(r=e.addExtraParameters(r)),r.saveSession=!1,Object(c.d)(r,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(s.tc)(e,s.A),thenFunction:()=>{a||t(Object(l.e)()),e.afterSubmit&&e.afterSubmit()}})};return n.a.createElement(i.a,{noValidate:!0},e.children,n.a.createElement(T,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),n.a.createElement(s.R,{handleSubmit:e.handleSubmit((a,t)=>{t.preventDefault();let o=[];if(e.validateExtras&&(o=e.validateExtras(a)),o&&o.length){const e={message:n.a.createElement(s.C,{erros:o}),type:s.f.ERROR};s.pb.emit(s.a.SHOW,e)}else Object(s.tc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",s.I),r(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(s.Cb)(e.routeProps,e.routeProps.history)}}))})},826:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}t.d(a,"a",function(){return r})},830:function(e,a,t){"use strict";t.d(a,"v",function(){return s}),t.d(a,"N",function(){return c}),t.d(a,"P",function(){return l}),t.d(a,"G",function(){return u}),t.d(a,"I",function(){return d}),t.d(a,"F",function(){return p}),t.d(a,"K",function(){return m}),t.d(a,"E",function(){return E}),t.d(a,"J",function(){return f}),t.d(a,"d",function(){return O}),t.d(a,"M",function(){return b}),t.d(a,"n",function(){return A}),t.d(a,"z",function(){return P}),t.d(a,"S",function(){return S}),t.d(a,"zb",function(){return C}),t.d(a,"yb",function(){return R}),t.d(a,"xb",function(){return v}),t.d(a,"wb",function(){return g}),t.d(a,"bb",function(){return D}),t.d(a,"A",function(){return I}),t.d(a,"vb",function(){return T}),t.d(a,"y",function(){return j}),t.d(a,"eb",function(){return N}),t.d(a,"tb",function(){return L}),t.d(a,"V",function(){return F}),t.d(a,"ub",function(){return M}),t.d(a,"f",function(){return h}),t.d(a,"r",function(){return V}),t.d(a,"t",function(){return w}),t.d(a,"Ab",function(){return _}),t.d(a,"x",function(){return q}),t.d(a,"qb",function(){return x}),t.d(a,"j",function(){return U}),t.d(a,"sb",function(){return y}),t.d(a,"B",function(){return G}),t.d(a,"R",function(){return z}),t.d(a,"a",function(){return B}),t.d(a,"gb",function(){return Q}),t.d(a,"X",function(){return H}),t.d(a,"ob",function(){return K}),t.d(a,"cb",function(){return k}),t.d(a,"rb",function(){return J}),t.d(a,"pb",function(){return X}),t.d(a,"p",function(){return Z}),t.d(a,"W",function(){return W}),t.d(a,"nb",function(){return Y}),t.d(a,"s",function(){return $}),t.d(a,"mb",function(){return ee}),t.d(a,"hb",function(){return ae}),t.d(a,"T",function(){return te}),t.d(a,"fb",function(){return re}),t.d(a,"k",function(){return ne}),t.d(a,"q",function(){return oe}),t.d(a,"H",function(){return ie}),t.d(a,"L",function(){return se}),t.d(a,"w",function(){return ce}),t.d(a,"o",function(){return le}),t.d(a,"g",function(){return ue}),t.d(a,"u",function(){return de}),t.d(a,"Y",function(){return pe}),t.d(a,"Z",function(){return me}),t.d(a,"U",function(){return Ee}),t.d(a,"i",function(){return fe}),t.d(a,"jb",function(){return Oe}),t.d(a,"lb",function(){return be}),t.d(a,"ab",function(){return Ae}),t.d(a,"h",function(){return Pe}),t.d(a,"ib",function(){return Se}),t.d(a,"m",function(){return Ce}),t.d(a,"l",function(){return Re}),t.d(a,"D",function(){return ve}),t.d(a,"C",function(){return ge}),t.d(a,"kb",function(){return De}),t.d(a,"c",function(){return Ie}),t.d(a,"e",function(){return Te}),t.d(a,"O",function(){return je}),t.d(a,"Q",function(){return Ne}),t.d(a,"b",function(){return Le}),t.d(a,"db",function(){return Fe});var r=t(100),n=t(2),o=t(99);function i(){return Object(n.wb)("/mcg")}function s(e,a){Object(n.sc)(i().post("/gerarLancamentosFolhaPagamento",e),a)}function c(e,a){Object(n.sc)(i().post("/integrarFolhaPagamento",e),a)}function l(e,a){Object(n.sc)(i().post("/importar",e),a)}function u(e,a){const t=new FormData;t.append("empresa.id",String(e.empresa.id)),t.append("importarDuplicados",String(e.importarDuplicados)),t.append("importarLancamentosCardinal",String(e.importarLancamentosCardinal));var o,s=Object(r.a)(e.arquivos);try{for(s.s();!(o=s.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(c){s.e(c)}finally{s.f()}Object(n.sc)(i().post("/importarLancamentoCSV",t),a)}function d(e,a){const t=new FormData;t.append("empresa.id",String(e.empresa.id));var o,s=Object(r.a)(e.arquivos);try{for(s.s();!(o=s.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(c){s.e(c)}finally{s.f()}Object(n.sc)(i().post("/importarLancamentoPadraoCSV",t),a)}function p(e,a){const t=new FormData;t.append("grupoHistoricoDestino.id",String(e.grupoHistoricoDestino.id));var o,s=Object(r.a)(e.arquivos);try{for(s.s();!(o=s.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(c){s.e(c)}finally{s.f()}Object(n.sc)(i().post("/importarHistoricoCSV",t),a)}function m(e,a){const t=new FormData;t.append("idEmpresa",String(e.idEmpresa)),t.append("grupoPlanoContaDestino.id",String(e.grupoPlanoContaDestino.id));var o,s=Object(r.a)(e.arquivos);try{for(s.s();!(o=s.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(c){s.e(c)}finally{s.f()}Object(n.sc)(i().post("/importarPlanoContaCSV",t),a)}function E(e,a){Object(n.sc)(i().post("/importarHistorico",e),a)}function f(e,a){Object(n.sc)(i().post("/importarPlanoConta",e),a)}function O(e,a){Object(n.sc)(i().get("/buscarConfigLivroFolhaMCG/"+e),a)}function b(e,a){Object(n.sc)(i().post("/integracaoFiscalContabil",e),a)}function A(e,a,t){Object(n.sc)(i().post("/encerrarContas",{contaResultadoEncerramento:e,force:a}),t)}function P(e,a){Object(n.sc)(i().get("/getDataUltimaContaEncerrada/"+e),a)}function S(e,a){Object(n.sc)(i().post("/limparEncerramentoContaResultadoApos",e),a)}function C(e,a){Object(n.sc)(i().post("/validarReferenciaSPEDECFIrpjCsll",e),a)}function R(e,a){Object(n.sc)(i().post("/validarReferenciaSPEDECFImuneIsenta",e),a)}function v(e,a){Object(n.sc)(i().post("/validarRefRemuneracaoSocio",e),a)}function g(e,a){Object(n.sc)(i().post("/validarQuadroSocietario",e),a)}function D(e,a){Object(n.sc)(i().get("/obterLucroPrejuizoClassificacao/"+e),a)}function I(e,a){Object(n.sc)(i().post("/getSaldo",e),a)}function T(e,a){Object(n.sc)(i().post("/validarDadosSpedECF",e),a)}function j(e,a,t){Object(n.sc)(Object(o.i)().post("/gerarSpedECF",{usuario:e,ecfExportacaoParam:a}),t)}function N(e,a){Object(n.sc)(i().post("/recuperarLancamentoConta",e),a)}function L(e,a){Object(n.sc)(i().post("/transferirLancamentoConta",e),a)}function F(e,a){Object(n.sc)(i().post("/obterBancoPlanoConta",e),a)}function M(e,a){Object(n.sc)(i().get("/validarConfigLivroFolha/"+e),a)}function h(e,a){Object(n.sc)(i().get("/changeLivroFolha/"+e),a)}function V(e,a){Object(n.sc)(i().post("/fecharRestaurar",e),a)}function w(e,a){Object(n.sc)(i().post("/forceFecharRestaurar",e),a)}function _(e,a){Object(n.sc)(i().post("/verificarErros",e),a)}function q(e,a){const t=new FormData;if(t.append("usuario.id",String(e.usuario.id)),e.arquivoRTFEscrituracaoSubstituida){var o,s=Object(r.a)(e.arquivoRTFEscrituracaoSubstituida);try{for(s.s();!(o=s.n()).done;){const e=o.value;t.append("arquivoRTFEscrituracaoSubstituida",e.file,e.nomeArquivo)}}catch(c){s.e(c)}finally{s.f()}}for(const r in e)"arquivoRTFEscrituracaoSubstituida"!==r&&"usuario"!==r&&null!==e[r]&&t.append(r,e[r]);Object(n.sc)(i().post("/gerarSpedContabil",t),a)}function x(e,a){Object(n.sc)(i().post("/salvarLucroPrejuizoClassificacao",e),a)}function U(e,a){Object(n.sc)(i().post("/consultarMovimentacao",e),a)}function y(e,a){Object(n.sc)(i().post("/totalizadorLancamento",e),a)}function G(e,a){Object(n.sc)(i().post("/getSaldoAnterior",e),a)}function z(e,a){Object(n.sc)(i().post("/isDataEncerrada",e),a)}function B(e,a){Object(n.sc)(i().post("/abrirContas",e),a)}function Q(e,a){Object(n.sc)(i().post("/removeLancamentoPeriodo",e),a)}function H(e,a){Object(n.sc)(i().get("/obterContasClassificacaoIndireto/"+e),a)}function K(e,a){Object(n.sc)(i().post("/salvarClassificacaoIndireto",e),a)}function k(e,a){Object(n.sc)(i().get("/obterMutacaoPatrimonioLiquido/"+e),a)}function J(e,a){Object(n.sc)(i().post("/salvarMutacaoPatrimonioLiquido",e),a)}function X(e,a){Object(n.sc)(i().post("/salvarContaResultado",e),a)}function Z(e,a){Object(n.sc)(i().post("/excluirContaResultado",e),a)}function W(e,a){Object(n.sc)(i().get("/obterContasClassificacaoDireto/"+e),a)}function Y(e,a){Object(n.sc)(i().post("/salvarClassificacaoDireto",e),a)}function $(e,a){Object(n.sc)(i().post("/findSubGrupo",e),a)}function ee(e,a,t){Object(n.sc)(i().post("/removerTodosPlanosConta",{idGrupoPlanoConta:e,usuario:a}),t)}function ae(e,a,t,r){Object(n.sc)(i().post("/removeList",{listaPlanoConta:e,apagarFilha:a,usuario:t}),r)}function te(e,a){Object(n.sc)(i().post("/listSubGrupo",e),a)}function re(e,a,t,r){Object(n.sc)(i().post("/referenciarContas",{idsPlanoConta:e,idPlanoContaReferencial:a,idPlanoContaReferencialECF:t}),r)}function ne(e,a,t,r){Object(n.sc)(i().post("/desvincularContas",{idsPlanoConta:e,idPlanoContaReferencial:a,idPlanoContaReferencialECF:t}),r)}function oe(e,a,t){Object(n.sc)(i().post("/existeLancamentoEmContaAnalitica",{idPlanoConta:e,idEmpresa:a}),t)}function ie(e,a){const t=new FormData;t.append("idGerEmpresa",String(e.idGerEmpresa)),t.append("tipoImportacao",String(e.tipoImportacao)),t.append("sobescrever",String(e.sobescrever)),t.append("versaoSuperiorA2",String(e.versaoSuperiorA2)),t.append("arquivo",e.arquivo[0].file,e.arquivo[0].nomeArquivo),!1!==e.versaoSuperiorA2||Object(n.Yb)(e.dtInicial)||Object(n.Yb)(e.dtFinal)||(t.append("dtInicial",e.dtInicial),t.append("dtFinal",e.dtFinal)),Object(n.sc)(i().post("/importarLancamentoMCG",t),a)}function se(e,a){const t=new FormData;t.append("empresa.id",String(e.empresa.id)),t.append("usuario.id",String(e.usuario.id));var o,s=Object(r.a)(e.arquivos);try{for(s.s();!(o=s.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(c){s.e(c)}finally{s.f()}Object(n.sc)(i().post("/importarSpedContabil",t),a)}function ce(e,a){const t=new FormData;t.append("refInicial",e.refInicial),t.append("refFinal",e.refFinal),t.append("idGerEmpresa",String(e.idGerEmpresa)),t.append("usuario.id",String(e.usuario.id)),Object(n.Yb)(e.arquivoSFP)||t.append("arquivoSFP",e.arquivoSFP[0].file,e.arquivoSFP[0].nomeArquivo),Object(n.sc)(i().post("/gerarManadContabil",t),a)}function le(e,a){Object(n.sc)(i().post("/evolucaoContaContabilGraf",e),a)}function ue(e,a){Object(n.sc)(i().post("/composicaoReceitaDespesasGraf",e),a)}function de(e,a){Object(n.sc)(i().post("/gerarFCONTContabil",e),a)}function pe(e,a,t){const r=new FormData;r.append("idBancoMCG",a),r.append("arquivoSelecionado",e[0].file,e[0].nomeArquivo),Object(n.sc)(i().post("/obterDadosArquivoExtrato",r),t)}function me(e,a,t,r,o,s){const c=new FormData;c.append("idGrupoPlanoConta",String(e)),c.append("idEmpresa",String(a)),c.append("idBancoMCG",String(t)),c.append("dtInicial",String(r)),c.append("dtFinal",String(o)),Object(n.sc)(i().post("/obterDadosConciliacaoBancariaPeriodo",c),s)}function Ee(e,a){Object(n.sc)(i().post("/obterBancoListPlanoConta",e),a)}function fe(e,a){Object(n.sc)(i().post("/conciliarLancamentosExtrato",e),a)}function Oe(e,a){Object(n.sc)(i().post("/removerConciliarLancamentosExtrato",e),a)}function be(e,a){Object(n.sc)(i().post("/removerLancamentosExtratoBancario",e),a)}function Ae(e,a,t,r,o,s,c,l){const u=new FormData;u.append("idGrupoPlanoConta",String(e)),u.append("idEmpresa",String(a)),u.append("dtInicial",String(t)),u.append("dtFinal",String(r)),u.append("historico",String(o)),u.append("valor",String(s)),u.append("operacaoConsultaValor",String(c)),Object(n.sc)(i().post("/obterLancamentosSaldoPeriodo",u),l)}function Pe(e,a){Object(n.sc)(i().post("/conciliarLancamentosConta",e),a)}function Se(e,a){Object(n.sc)(i().post("/removerConciliarLancamentosConta",e),a)}function Ce(e,a){Object(n.sc)(i().get("/eLalurAContas/"+e),a)}function Re(e,a){Object(n.sc)(i().get("/eLacsAContas/"+e),a)}function ve(e,a){Object(n.sc)(i().post("/getSaldoDebito",e),a)}function ge(e,a){Object(n.sc)(i().post("/getSaldoCredito",e),a)}function De(e,a){Object(n.sc)(i().post("/removerLancamentoLote",e),a)}function Ie(e,a){Object(n.sc)(i().post("/atualizaCalculoIrpjCsll",e),a)}function Te(e,a){Object(n.sc)(i().post("/buscarLancamentosHonorarios",e),a)}function je(e,a,t){Object(n.sc)(i().post("/integrarHonorarios",{integracaoHonorariosParam:e,lancamentos:a}),t)}function Ne(e,a){Object(n.sc)(i().post("/isAlteraCalculoIRPJorCSLL",e),a)}function Le(e,a,t){Object(n.sc)(i().post("/alterarPlanoContaNaturezaConfig",{idsPlanoConta:e,enumPlanoContaNaturezaConta:a}),t)}function Fe(e,a){Object(n.sc)(i().get("/prepararContaResultado/"+e),a)}},844:function(e,a,t){"use strict";t.d(a,"d",function(){return r}),t.d(a,"a",function(){return n}),t.d(a,"e",function(){return o}),t.d(a,"c",function(){return i}),t.d(a,"b",function(){return s});const r={value:"1",label:"Normal"},n=[r,{value:"2",label:"Grupo Atual"},{value:"3",label:"Hierarquia Inferior"}],o={value:1,label:"Normal"},i={value:2,label:"Grupo Atual"},s=[o,i,{value:3,label:"Hierarquia Inferior"}]},845:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.ger.model.dto.responsavel"},847:function(e,a,t){"use strict";var r=t(6),n=t(0),o=t.n(n),i=t(2),s=t(845);a.a=(e=>o.a.createElement(i.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"nome",text:"Nome"},{dataField:"cpf",text:"CPF"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cei",text:"CEI"},{dataField:"tipo",text:"Tipo"},{dataField:"telefone",text:"Telefone"},{dataField:"email",text:"E-mail"}],dtoClassName:s.a,searchViewId:"ResponsavelSearchView"}),label:e.label?e.label:"Respons\xe1vel",placeholder:e.placeholder?e.placeholder:"Informe o Respons\xe1vel",type:i.L.INPUT_SEARCH})))},849:function(e,a,t){"use strict";var r=t(3),n=t(9),o=t(0),i=t.n(o),s=t(1),c=t.n(s),l=t(8),u=t.n(l),d=t(5),p={tag:d.q,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.m)(u()(a,"card-title"),t);return i.a.createElement(o,Object(r.a)({},s,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},861:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.mcg.model.dto.customizacaotermo"},866:function(e,a,t){"use strict";class r{constructor(){this.TERMO_PADRAO='CONT\xc9M O PRESENTE LIVRO <FOL_TOT/> FOLHAS, NUMERADAS SEQUENCIALMENTE POR PROCESSAMENTO ELETR\xd4NICO DE DADOS DE <FOL_INI/> A <FOL_FIM/> E SE DESTINA A SERVIR DE LIVRO <TIP_LIV/> NRO. <NUM_LIV/> DA EMPRESA "<R_SOC_EMP/>", INSCRITA NO <CNPJ_CPF_EMP/>, COM SEDE A <END_EMP/>, CEP.: <CEP/>, NA CIDADE DE <CID_EMP/>, ESTADO DE <UF_EMP/>, TENDO SEUS ATOS CONSTITUTIVOS ARQUIVADOS NA <CART_EMP/> NO LIVRO <LIV_REG_EMP/>, SOB O N\xdaMERO <NUM_REG_EMP/>, EM <DAT_REG_EMP/>.'}getCustomizacaoTermosTipoEnum(){return u}getTermoDefault(){return this.TERMO_PADRAO}}class n{constructor(){this.TERMO_PADRAO='\nCONT\xc9M O PRESENTE LIVRO <FOL_TOT/> FOLHAS, NUMERADAS SEQUENCIALMENTE POR PROCESSAMENTO ELETR\xd4NICO DE DADOS DE <FOL_INI/> A <FOL_FIM/> QUE SE DESTINOU A SERVIR DE LIVRO <TIP_LIV/> NRO. <NUM_LIV/> DA EMPRESA "<R_SOC_EMP/>", INSCRITA NO <CNPJ_CPF_EMP/>, COM SEDE A <END_EMP/>, CEP.: <CEP/>, NA CIDADE DE <CID_EMP/>, ESTADO DE <UF_EMP/>,  TENDO SEUS ATOS CONSTITUTIVOS ARQUIVADOS NA <CART_EMP/> NO LIVRO <LIV_REG_EMP/>, SOB O N\xdaMERO <NUM_REG_EMP/>, EM <DAT_REG_EMP/>, COM ESCRITURA\xc7\xc3O REFERENTE AO PER\xcdODO DE <PER_APURACAO/>.\n'}getCustomizacaoTermosTipoEnum(){return u}getTermoDefault(){return this.TERMO_PADRAO}}class o{constructor(){this.TERMO_PADRAO="SOB AS PENAS DA LEI, DECLARAMOS QUE AS INFORMA\xc7\xd5ES AQUI CONTIDAS S\xc3O VERDADEIRAS E NOS RESPONSABILIZAMOS POR TODAS ELAS.\nEM CUMPRIMENTO AO QUE DETERMINA O PAR\xc1GRAFO 2\xba DO ARTIGO 1.184 DO C\xd3DIGO CIVIL BRASILEIRO, LEI 10.406 DE 10/01/2002, ASSINAMOS O PRESENTE TERMO DE RESPONSABILIDADE RELATIVO A FIDELIDADE E A REALIDADE DOS SALDOS DAS CONTAS AQUI LAVRADAS, CONSOANTE AS EXIG\xcaNCIAS DO ART. 1.188 DO MESMO C\xd3DIGO. OS REGISTROS DO EXERC\xcdCIO FORAM REALIZADOS COM AMPARO EM DOCUMENTA\xc7\xc3O COMPETENTE, REPASSADA AO PROFISSIONAL ENCARREGADO DA ESCRITA CONT\xc1BIL, ESTE NA QUALIDADE DE PROPOSTO DOS S\xd3CIOS DA EMPRESA, ASSIM COMO, OS INVENT\xc1RIOS F\xcdSICOS DOS ELEMENTOS PATRIMONIAIS E AS PERTINENTES AVALIA\xc7\xd5ES, ESTES EFETUADOS SOB DIRETA RESPONSABILIDADE DO EMPRES\xc1RIO SIGNAT\xc1RIO DESTE TERMO."}getCustomizacaoTermosTipoEnum(){return p}getTermoDefault(){return this.TERMO_PADRAO}}class i{constructor(){this.TERMO_PADRAO="Prezados Senhores:\nDeclaramos, para os devidos fins, como administrador e respons\xe1vel legal da empresa <R_SOC_EMP/>, CNPJ <CNPJ_CPF_EMP/>, que as informa\xe7\xf5es relativas ao per\xedodo base <PER_APURACAO/>, fornecidos a Vossas Senhorias para escritura\xe7\xe3o e elabora\xe7\xe3o das demonstra\xe7\xf5es cont\xe1beis, obriga\xe7\xf5es acess\xf3rias, apura\xe7\xe3o de impostos e arquivos eletr\xf4nicos exigidos pela fiscaliza\xe7\xe3o federal, estadual, municipal, trabalhista e previdenci\xe1ria s\xe3o fidedignas.\nTamb\xe9m declaramos:\n  (a). Que os controles internos adotados pela nossa empresa s\xe3o de responsabilidade da administra\xe7\xe3o e est\xe3o adequados ao tipo de atividade e volume de transa\xe7\xf5es;\n  (b). Que n\xe3o realizamos nenhum tipo de opera\xe7\xe3o que possa ser considerada ilegal, frente \xe0 legisla\xe7\xe3o vigente;\n  (c). Que todos os documentos que geramos e recebemos de nossos fornecedores est\xe3o revestidos de total idoneidade;\n  (d). Que os estoques registrados em conta pr\xf3pria foram por n\xf3s avaliados, contados e levantados fisicamente e perfazem a realidade do per\xedodo encerrado em <DT_PER_APURACAO_FIM/>;\n  (e). Que as informa\xe7\xf5es registradas no sistema de gest\xe3o e controle interno, denominado Calima ERP Cont\xe1bil, s\xe3o controladas e validadas com documenta\xe7\xe3o suporte adequada, sendo de nossa inteira responsabilidade todo o conte\xfado do banco de dados e arquivos eletr\xf4nicos gerados.\nAl\xe9m disso, declaramos que n\xe3o temos conhecimento de quaisquer fatos ocorridos no per\xedodo base que posssam afetar as demonstra\xe7\xf5es cont\xe1beis ou que as afetam at\xe9 a data desta carta ou, ainda, que possam afetar a continuidade das opera\xe7\xf5es da empresa.\nTamb\xe9m confirmamos que n\xe3o houve:\n  (a). Fraude envolvendo administra\xe7\xe3o ou empregados em cargos de responsabilidade ou confian\xe7a;\n  (b). Fraude envolvendo terceiros que poderiam ter efeito material nas demonstra\xe7\xf5es cont\xe1beis;\n  (c). Viola\xe7\xe3o ou poss\xedveis viola\xe7\xf5es de lei, normas ou regulamentos cujos efeitos deveriam ser considerados para divulga\xe7\xe3o nas demonstra\xe7\xf5es cont\xe1beis, ou mesmo dar origem ao registro de provis\xe3o para conting\xeancias passivas."}getCustomizacaoTermosTipoEnum(){return E}getTermoDefault(){return this.TERMO_PADRAO}}class s{constructor(){this.TERMO_PADRAO="RECONHECEMOS A EXATID\xc3O DO PRESENTE DEMONSTRATIVO DO RESULTADO DO EXERC\xcdCIO, APRESENTANDO UM <LUC_PREJ_LIQUIDO/> DE <VALOR/> (<VALOR_EXTENSO/>).\n\nSOB AS PENAS DA LEI, DECLARAMOS QUE AS INFORMA\xc7\xd5ES AQUI CONTIDAS S\xc3O VERDADEIRAS E NOS RESPONSABILIZAMOS POR TODAS ELAS."}getCustomizacaoTermosTipoEnum(){return m}getTermoDefault(){return this.TERMO_PADRAO}}class c{constructor(){this.TERMO_PADRAO="DECLARO, SOB AS PENAS DA LEI, QUE AS INFORMA\xc7\xd5ES AQUI CONTIDAS, REFLETEM A DOCUMENTA\xc7\xc3O QUE ME FOI ENTREGUE, S\xc3O VERDADEIRAS E ME RESPONSABILIZO POR TODAS ELAS."}getCustomizacaoTermosTipoEnum(){return d}getTermoDefault(){return this.TERMO_PADRAO}}class l{constructor(){this.TERMO_PADRAO="DECLARO, SOB AS PENAS DA LEI, QUE AS INFORMA\xc7\xd5ES AQUI CONTIDAS, S\xc3O VERDADEIRAS E ME RESPONSABILIZO POR TODAS ELAS."}getCustomizacaoTermosTipoEnum(){return d}getTermoDefault(){return this.TERMO_PADRAO}}t.d(a,"a",function(){return u}),t.d(a,"f",function(){return d}),t.d(a,"b",function(){return p}),t.d(a,"e",function(){return m}),t.d(a,"c",function(){return E}),t.d(a,"g",function(){return f}),t.d(a,"h",function(){return O}),t.d(a,"d",function(){return b});const u={value:"ABERTURA_ENCERRAMENTO",label:"Termo de Abertura e Encerramento"},d={value:"VERACIDADE",label:"Declara\xe7\xe3o Individualizada de Veracidade"},p={value:"BALANCO_PATRIMONIAL",label:"Termo do Balan\xe7o Patrimonial"},m={value:"DEMONSTRCAO_RESULTADO",label:"Termo da Demonstra\xe7\xe3o do Resultado"},E={value:"CARTA_RESPONSABILIDADE",label:"Carta de Responsabilidade"};function f(e){const a=[new r,new o,new i,new s,new c].find(a=>a.getCustomizacaoTermosTipoEnum().value===e);return null===a?null:a.getTermoDefault()}function O(e){const a=[new n,new l].find(a=>a.getCustomizacaoTermosTipoEnum().value===e);return null===a?null:a.getTermoDefault()}const b=[u,d,p,m,E]},872:function(e,a,t){"use strict";var r=t(6),n=t(0),o=t.n(n),i=t(2),s=t(861),c=t(866);a.a=(e=>{const a=Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"descricao",text:"Descri\xe7\xe3o"},{dataField:"termo",text:"Termo"}],dtoClassName:s.a,searchExpressions:function(){return e.apenasCartaResponsabilidade?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:c.c.value}]:e.apenasIndividualizadaVeracidade?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:c.f.value}]:e.apenasDemonstracaoResultado?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:c.e.value}]:e.apenasAberturaEncerramento?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:c.a.value}]:e.apenasBalancoPatrimonial?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:c.b.value}]:[]},searchViewId:"CustomizacaoTermoSearchView"});return o.a.createElement(i.K,Object.assign({},e,{type:i.L.INPUT_SEARCH,inputSearchProps:a}))})},883:function(e,a,t){"use strict";t.d(a,"d",function(){return r}),t.d(a,"b",function(){return n}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return i});const r={value:"1",label:"Normal"},n={value:"2",label:"Grupo Atual"},o={value:"3",label:"Hierarquia Inferior"},i=[r,n,o]}}]);
//# sourceMappingURL=6.0c4c2a6e.chunk.js.map