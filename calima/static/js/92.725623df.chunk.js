(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1536:function(e,a,t){"use strict";t.r(a);var r=t(149),o=t(6),i=t(0),l=t.n(i),n=t(98),s=t(20),c=t(2),m=t(815),p=t(826),d=t(818),u=t(819),b=t(835),E=t(820);const f=Object(o.a)(Object(o.a)({},Object(d.a)("Relacionamentos de Plano de Contas")),{},{idPlanoConta:[]}),P=Object(o.a)(Object(o.a)({},Object(u.a)("printPlanoContaRelacionamentos")),{},{exibirConfiguracaoDadosEmpresa:!1});a.default=(e=>{const a=Object(s.c)(e=>e.globalReducer),t=Object(n.b)({defaultValues:f,mode:"onBlur"}),o=t.handleSubmit,d=Object(r.a)(t,["handleSubmit"]);Object(i.useEffect)(()=>{if(a.globalParameter.empresa){const e=a.globalParameter.grupoPlanoConta.id;setTimeout(()=>{d.register({name:"idPlanoConta"}),d.setValue("idGrupoPlanoConta",e,!0)},1e3)}},[]);return l.a.createElement(c.hb,{title:"Relacionamentos de Plano de Contas",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(m.a)(a.globalParameter),()=>Object(p.a)(a.globalParameter)],wikiId:5878,wikiTitle:"Relacionamentos de Plano de Contas"},l.a.createElement(b.a,{id:"planoConta",formProps:d,onChange:()=>{const e=[];d.getValues().planoConta&&(e.push(d.getValues().planoConta.id),d.setValue("idPlanoConta",e,!0))},label:"Conta",placeholder:"Informe a conta",tooltipProps:{message:"Caso nenhuma conta seja informada todas ser\xe3o buscadas"}}),l.a.createElement(c.K,{formProps:d,id:"idGrupoPlanoConta",hidden:!0}),l.a.createElement(E.a,Object.assign({},e,{handleSubmit:o,formProps:d,localStorageKey:"planoContarelacionamentosrv",routeProps:e,reportBasicValues:f,reportViewOptions:P})))})},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},816:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Utilizar Natureza da Conta",value:"NATUREZA"},o=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},r];a.b=o},817:function(e,a,t){"use strict";var r=t(6),o=t(0),i=t.n(o),l=t(2),n=t(257);a.a=(e=>i.a.createElement(l.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||n.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:l.L.INPUT_SEARCH})))},818:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var r=t(2),o=t(816);function i(e=null,a=null,t=null){return{designType:r.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:t,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:o.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,t){"use strict";function r(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}t.d(a,"a",function(){return r})},820:function(e,a,t){"use strict";var r=t(0),o=t.n(r),i=t(20),l=t(395),n=t(2),s=t(256),c=t(49),m=t(6),p=t(13),d=t(25),u=t(198),b=t(148),E=t(786),f=t(782),P=t(779),g=t(780),O=t(783),h=t(781),C=t(816),v=t(98);const j={contato:"",email:""};var w=e=>{const a=Object(v.b)({defaultValues:e.selectedItem||j,mode:"onBlur"}),t={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return o.a.createElement(n.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:t,validateExtras:(e,a,t)=>[]},o.a.createElement(n.K,{id:"contato",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},t),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),o.a.createElement(n.K,{id:"email",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},t),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var V=e=>{return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Dados para Envio do E-mail"),o.a.createElement(n.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}})}),o.a.createElement(n.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:w,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),o.a.createElement("p",null,"Copiar para:"),o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),o.a.createElement(n.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:n.L.TEXT_AREA}))},R=t(817);var x=e=>{const a=Object(i.c)(e=>e.globalReducer),t=Object(r.useState)(1),l=Object(p.a)(t,2),s=l[0],c=l[1];Object(r.useEffect)(()=>{const t=e.reportViewOptions,r=t.printingTypes,o=t.reportViewType;let i=Object(m.a)(Object(m.a)({},e.reportBasicValues),{},{designType:r&&r.length>0?r[0]:n.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const l=Object(n.yb)(),s=Object(n.yb)();switch(o){case n.r.value:i=Object(m.a)(Object(m.a)({},i),{},{dtInicial:Object(n.Mb)(l.toDate())});break;case n.s.value:i=Object(m.a)(Object(m.a)({},i),{},{dtFinal:Object(n.Mb)(s.endOf("month").toDate()),dtInicial:Object(n.Mb)(l.toDate())});break;case n.T.value:i=Object(m.a)(Object(m.a)({},i),{},{referenciaInicial:Object(n.Lb)(l.toDate(),n.V)});break;case n.U.value:i=Object(m.a)(Object(m.a)({},i),{},{referenciaFinal:Object(n.Lb)(l.toDate(),n.V),referenciaInicial:Object(n.Lb)(s.toDate(),n.V)});break;case n.b.value:i=Object(m.a)(Object(m.a)({},i),{},{ano:String(l.year())})}e.formProps.reset(i)},[e.reportViewOptions,a.globalParameter.empresa]);const v=({target:e})=>{const a=e.tabIndex;s!==a&&c(a)},j=o.a.createElement(n.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:n.L.DATE}),w=e.reportViewOptions.reportViewType===n.r.value?j:null,x=e.reportViewOptions.reportViewType===n.s.value?o.a.createElement(o.a.Fragment,null,j,o.a.createElement(n.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:n.L.DATE})):null,L=o.a.createElement(n.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:n.L.REFERENCE}),F=e.reportViewOptions.reportViewType===n.T.value?L:null,y=e.reportViewOptions.reportViewType===n.U.value?o.a.createElement(o.a.Fragment,null,L,o.a.createElement(n.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:n.L.REFERENCE})):null,I=e.reportViewOptions.reportViewType===n.b.value?o.a.createElement(n.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:n.L.MASK}):null,D=e.reportViewOptions.exibirPaginaInicial?o.a.createElement(n.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:n.L.NUMBER}):null,N=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{className:"align-items-center"},o.a.createElement(b.a,{xs:2},o.a.createElement(E.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),o.a.createElement(b.a,null,o.a.createElement(R.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,S=e.reportViewOptions.exibirSegmentacaoFolha?o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,A=e.reportViewOptions.exibirConfiguracaoDataAtual?o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,T=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,q=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,K=e.reportBasicValues.exibirFormatacaoValor?o.a.createElement(o.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),o.a.createElement(n.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:C.b,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN})):null;return o.a.createElement(n.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},o.a.createElement(n.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{tabs:!0},o.a.createElement(P.a,null,o.a.createElement(g.a,{className:Object(d.a)({active:1===s}),tabIndex:1,onClick:v},"Configura\xe7\xf5es Gerais")),o.a.createElement(P.a,null,o.a.createElement(g.a,{className:Object(d.a)({active:2===s}),tabIndex:2,onClick:v,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),o.a.createElement(P.a,null,o.a.createElement(g.a,{className:Object(d.a)({active:3===s}),tabIndex:3,onClick:v,disabled:!0},"Connect"))),o.a.createElement(O.a,{className:"mb-5",activeTab:s},o.a.createElement(h.a,{tabId:1,className:"mb-0 p-3"},o.a.createElement(n.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),o.a.createElement(n.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),D,N,S,A,K,T,q,w,x,F,y,I,o.a.createElement("hr",null),o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),o.a.createElement(n.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:n.u,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN}),o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),o.a.createElement(u.a,{className:"mb-3"},o.a.createElement(b.a,null,o.a.createElement(E.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),o.a.createElement(h.a,{tabId:2,className:"mb-0 p-3"},o.a.createElement(V,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),o.a.createElement(h.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(i.c)(e=>e.globalReducer).headerDrawerToggle,t=Object(i.b)();const r=r=>{e.addExtraParameters&&(r=e.addExtraParameters(r)),r.saveSession=!1,Object(s.d)(r,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(n.sc)(e,n.A),thenFunction:()=>{a||t(Object(c.e)()),e.afterSubmit&&e.afterSubmit()}})};return o.a.createElement(l.a,{noValidate:!0},e.children,o.a.createElement(x,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),o.a.createElement(n.R,{handleSubmit:e.handleSubmit((a,t)=>{t.preventDefault();let i=[];if(e.validateExtras&&(i=e.validateExtras(a)),i&&i.length){const e={message:o.a.createElement(n.C,{erros:i}),type:n.f.ERROR};n.ob.emit(n.a.SHOW,e)}else Object(n.sc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",n.I),r(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(n.Bb)(e.routeProps,e.routeProps.history)}}))})},826:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}t.d(a,"a",function(){return r})},835:function(e,a,t){"use strict";var r=t(6),o=t(0),i=t.n(o),l=t(20),n=t(2),s=t(836);a.a=(e=>{const a=Object(l.c)(e=>e.globalReducer);return i.a.createElement(n.K,Object.assign({},e,{isPrependLabel:!0,searchViewProps:Object(r.a)(Object(r.a)({},e.searchViewProps),{},{filtroContaResultado:e.filtroContaResultado,hideExtraFields:!0,useDefaultSelectRow:!0}),inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"conta",text:"Conta"},{dataField:"analitica",text:"Anal\xedtica"},{dataField:"codigoReduzido",text:"C.R."},{dataField:"descricao",text:"Descri\xe7\xe3o"}],dtoClassName:s.a,searchExpressions:function(){let t=[];return e.analitica&&(t=[{alias:"c",conditionalGroup:"c_",fieldName:"analitica",value:!0}]),e.sintetica&&(t=[{alias:"c",conditionalGroup:"c_",fieldName:"analitica",value:!1}]),t.push({alias:"g",conditionalGroup:"g_",fieldName:"grupoPlanoConta.id",value:e.idGrupoPlanoConta||a.globalParameter.grupoPlanoConta.id}),e.filtroContaResultado&&e.filtroContaResultado.forEach(e=>{t.push(e)}),t},searchViewId:"PlanoContaSearchView"}),label:e.label?e.label:"Plano de Contas",placeholder:e.placeholder?e.placeholder:"Informe o Plano de Contas",type:n.L.INPUT_SEARCH}))})},836:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.ger.model.dto.planoconta"}}]);
//# sourceMappingURL=92.725623df.chunk.js.map