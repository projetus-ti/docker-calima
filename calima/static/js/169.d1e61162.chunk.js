(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1582:function(e,a,r){"use strict";r.r(a);var t=r(149),i=r(6),o=r(0),l=r.n(o),n=r(98),s=r(19),c=r(2),m=r(815),p=r(822),d=r(818),b=r(819),u=r(820);const E=Object(i.a)(Object(i.a)({},Object(d.a)("Rela\xe7\xe3o de Tomadores de Servi\xe7o")),{},{gerarCabecalhoPadraoAdministradora:!0}),f=Object(i.a)(Object(i.a)({},Object(b.a)("printRelacaoTomadoresServico")),{},{exibirConfiguracaoDadosEmpresa:!1});a.default=(e=>{const a=Object(s.c)(e=>e.globalReducer),r=Object(n.b)({defaultValues:E,mode:"onBlur"}),i=r.handleSubmit,o=Object(t.a)(r,["handleSubmit"]);return l.a.createElement(c.ib,{title:"Rela\xe7\xe3o de Tomadores de Servi\xe7o",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(m.a)(a.globalParameter),()=>Object(p.a)(a.globalParameter)]},l.a.createElement(u.a,Object.assign({},e,{handleSubmit:i,formProps:o,localStorageKey:"relacaotomadoresservicorv",routeProps:e,reportBasicValues:E,reportViewOptions:f,extraConfigOpened:!0})))})},815:function(e,a,r){"use strict";function t(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}r.d(a,"a",function(){return t})},816:function(e,a,r){"use strict";r.d(a,"a",function(){return t});const t={label:"Utilizar Natureza da Conta",value:"NATUREZA"},i=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},t];a.b=i},817:function(e,a,r){"use strict";var t=r(6),i=r(0),o=r.n(i),l=r(2),n=r(257);a.a=(e=>o.a.createElement(l.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(t.a)(Object(t.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||n.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:l.L.INPUT_SEARCH})))},818:function(e,a,r){"use strict";r.d(a,"a",function(){return o});var t=r(2),i=r(816);function o(e=null,a=null,r=null){return{designType:t.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:r,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:i.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,r){"use strict";function t(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}r.d(a,"a",function(){return t})},820:function(e,a,r){"use strict";var t=r(0),i=r.n(t),o=r(19),l=r(395),n=r(2),s=r(256),c=r(49),m=r(6),p=r(12),d=r(25),b=r(198),u=r(148),E=r(786),f=r(782),P=r(779),O=r(780),g=r(783),v=r(781),j=r(816),h=r(98);const w={contato:"",email:""};var V=e=>{const a=Object(h.b)({defaultValues:e.selectedItem||w,mode:"onBlur"}),r={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return i.a.createElement(n.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:r,validateExtras:(e,a,r)=>[]},i.a.createElement(n.K,{id:"contato",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},r),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),i.a.createElement(n.K,{id:"email",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},r),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var C=e=>{return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Dados para Envio do E-mail"),i.a.createElement(n.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}})}),i.a.createElement(n.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:V,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),i.a.createElement("p",null,"Copiar para:"),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),i.a.createElement(n.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:n.L.TEXT_AREA}))},x=r(817);var F=e=>{const a=Object(o.c)(e=>e.globalReducer),r=Object(t.useState)(1),l=Object(p.a)(r,2),s=l[0],c=l[1];Object(t.useEffect)(()=>{const r=e.reportViewOptions,t=r.printingTypes,i=r.reportViewType;let o=Object(m.a)(Object(m.a)({},e.reportBasicValues),{},{designType:t&&t.length>0?t[0]:n.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const l=Object(n.zb)(),s=Object(n.zb)();switch(i){case n.r.value:o=Object(m.a)(Object(m.a)({},o),{},{dtInicial:Object(n.Nb)(l.toDate())});break;case n.s.value:o=Object(m.a)(Object(m.a)({},o),{},{dtFinal:Object(n.Nb)(s.endOf("month").toDate()),dtInicial:Object(n.Nb)(l.toDate())});break;case n.T.value:o=Object(m.a)(Object(m.a)({},o),{},{referenciaInicial:Object(n.Mb)(l.toDate(),n.V)});break;case n.U.value:o=Object(m.a)(Object(m.a)({},o),{},{referenciaFinal:Object(n.Mb)(l.toDate(),n.V),referenciaInicial:Object(n.Mb)(s.toDate(),n.V)});break;case n.b.value:o=Object(m.a)(Object(m.a)({},o),{},{ano:String(l.year())})}e.formProps.reset(o)},[e.reportViewOptions,a.globalParameter.empresa]);const h=({target:e})=>{const a=e.tabIndex;s!==a&&c(a)},w=i.a.createElement(n.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:n.L.DATE}),V=e.reportViewOptions.reportViewType===n.r.value?w:null,F=e.reportViewOptions.reportViewType===n.s.value?i.a.createElement(i.a.Fragment,null,w,i.a.createElement(n.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:n.L.DATE})):null,L=i.a.createElement(n.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:n.L.REFERENCE}),R=e.reportViewOptions.reportViewType===n.T.value?L:null,y=e.reportViewOptions.reportViewType===n.U.value?i.a.createElement(i.a.Fragment,null,L,i.a.createElement(n.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:n.L.REFERENCE})):null,I=e.reportViewOptions.reportViewType===n.b.value?i.a.createElement(n.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:n.L.MASK}):null,D=e.reportViewOptions.exibirPaginaInicial?i.a.createElement(n.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:n.L.NUMBER}):null,N=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{className:"align-items-center"},i.a.createElement(u.a,{xs:2},i.a.createElement(E.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),i.a.createElement(u.a,null,i.a.createElement(x.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,S=e.reportViewOptions.exibirSegmentacaoFolha?i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,A=e.reportViewOptions.exibirConfiguracaoDataAtual?i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,T=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,q=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,K=e.reportBasicValues.exibirFormatacaoValor?i.a.createElement(i.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),i.a.createElement(n.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:j.b,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN})):null;return i.a.createElement(n.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},i.a.createElement(n.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{tabs:!0},i.a.createElement(P.a,null,i.a.createElement(O.a,{className:Object(d.a)({active:1===s}),tabIndex:1,onClick:h},"Configura\xe7\xf5es Gerais")),i.a.createElement(P.a,null,i.a.createElement(O.a,{className:Object(d.a)({active:2===s}),tabIndex:2,onClick:h,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),i.a.createElement(P.a,null,i.a.createElement(O.a,{className:Object(d.a)({active:3===s}),tabIndex:3,onClick:h,disabled:!0},"Connect"))),i.a.createElement(g.a,{className:"mb-5",activeTab:s},i.a.createElement(v.a,{tabId:1,className:"mb-0 p-3"},i.a.createElement(n.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),i.a.createElement(n.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),D,N,S,A,K,T,q,V,F,R,y,I,i.a.createElement("hr",null),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),i.a.createElement(n.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:n.u,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN}),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(u.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),i.a.createElement(v.a,{tabId:2,className:"mb-0 p-3"},i.a.createElement(C,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),i.a.createElement(v.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(o.c)(e=>e.globalReducer).headerDrawerToggle,r=Object(o.b)();const t=t=>{e.addExtraParameters&&(t=e.addExtraParameters(t)),t.saveSession=!1,Object(s.d)(t,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(n.tc)(e,n.A),thenFunction:()=>{a||r(Object(c.e)()),e.afterSubmit&&e.afterSubmit()}})};return i.a.createElement(l.a,{noValidate:!0},e.children,i.a.createElement(F,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),i.a.createElement(n.R,{handleSubmit:e.handleSubmit((a,r)=>{r.preventDefault();let o=[];if(e.validateExtras&&(o=e.validateExtras(a)),o&&o.length){const e={message:i.a.createElement(n.C,{erros:o}),type:n.f.ERROR};n.pb.emit(n.a.SHOW,e)}else Object(n.tc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",n.I),t(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(n.Cb)(e.routeProps,e.routeProps.history)}}))})},822:function(e,a,r){"use strict";function t(e){let a=null;return e.empresaMFP||(a="A empresa selecionada n\xe3o est\xe1 configurada para o M\xf3dulo Folha de Pagamento. Para configur\xe1-la acesse Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}r.d(a,"a",function(){return t})}}]);
//# sourceMappingURL=169.d1e61162.chunk.js.map