(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1554:function(e,a,r){"use strict";r.r(a);var t=r(149),i=r(6),o=r(0),n=r.n(o),l=r(98),s=r(19),c=r(394),m=r(198),p=r(148),d=r(786),u=r(2),b=r(815),E=r(826),f=r(825),g=r(818),P=r(819),O=r(820);const v=Object(i.a)(Object(i.a)({},Object(g.a)("An\xe1lise Financeira - \xcdndices de Liquidez")),{},{gerarCabecalhoPadraoAdministradora:!0}),j=Object(i.a)(Object(i.a)({},Object(P.a)("printAnaliseFinanceira",u.T.value)),{},{exibirConfiguracaoDadosEmpresa:!0,exibirSegmentacaoFolha:!0});a.default=(e=>{const a=Object(s.c)(e=>e.globalReducer),r=Object(l.b)({defaultValues:v,mode:"onBlur"}),o=r.handleSubmit,g=Object(t.a)(r,["handleSubmit"]);return n.a.createElement(u.ib,{title:"An\xe1lise Financeira - \xcdndices de Liquidez",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(b.a)(a.globalParameter),()=>Object(E.a)(a.globalParameter),()=>Object(f.a)(a.globalParameter)],wikiId:1049},n.a.createElement(O.a,Object.assign({},e,{handleSubmit:o,formProps:g,localStorageKey:"analisefinanceirarelrv",routeProps:e,reportBasicValues:v,reportViewOptions:j}),n.a.createElement(c.a,{tag:m.a},n.a.createElement(p.a,null,n.a.createElement(d.a,{id:"idimprimirData",label:"Incluir Assinatura",name:"imprimirData",innerRef:g.register,type:"switch"}),Object(u.xc)((e=>({message:e,placement:"top-start"}))("Imprime a data completa do lan\xe7amento no formato dd/mm/aaaa ao inv\xe9s de apenas o dia."),"imprimirData"))),g.getValues().imprimirData?n.a.createElement(m.a,null,n.a.createElement(p.a,null,n.a.createElement(u.K,{formProps:Object(i.a)(Object(i.a)({},g),{},{validation:{required:!0}}),id:"dataAssinatura",label:"Data da Assinatura",placeholder:"Informe a Data da Assinatura",isPrependLabel:!0,type:u.L.DATE}))):null))})},815:function(e,a,r){"use strict";function t(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}r.d(a,"a",function(){return t})},816:function(e,a,r){"use strict";r.d(a,"a",function(){return t});const t={label:"Utilizar Natureza da Conta",value:"NATUREZA"},i=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},t];a.b=i},817:function(e,a,r){"use strict";var t=r(6),i=r(0),o=r.n(i),n=r(2),l=r(257);a.a=(e=>o.a.createElement(n.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(t.a)(Object(t.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||l.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:n.L.INPUT_SEARCH})))},818:function(e,a,r){"use strict";r.d(a,"a",function(){return o});var t=r(2),i=r(816);function o(e=null,a=null,r=null){return{designType:t.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:r,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:i.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,r){"use strict";function t(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}r.d(a,"a",function(){return t})},820:function(e,a,r){"use strict";var t=r(0),i=r.n(t),o=r(19),n=r(395),l=r(2),s=r(256),c=r(49),m=r(6),p=r(12),d=r(25),u=r(198),b=r(148),E=r(786),f=r(782),g=r(779),P=r(780),O=r(783),v=r(781),j=r(816),h=r(98);const w={contato:"",email:""};var V=e=>{const a=Object(h.b)({defaultValues:e.selectedItem||w,mode:"onBlur"}),r={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return i.a.createElement(l.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:r,validateExtras:(e,a,r)=>[]},i.a.createElement(l.K,{id:"contato",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},r),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),i.a.createElement(l.K,{id:"email",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},r),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var C=e=>{return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Dados para Envio do E-mail"),i.a.createElement(l.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}})}),i.a.createElement(l.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:V,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),i.a.createElement("p",null,"Copiar para:"),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),i.a.createElement(l.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:l.L.TEXT_AREA}))},L=r(817);var x=e=>{const a=Object(o.c)(e=>e.globalReducer),r=Object(t.useState)(1),n=Object(p.a)(r,2),s=n[0],c=n[1];Object(t.useEffect)(()=>{const r=e.reportViewOptions,t=r.printingTypes,i=r.reportViewType;let o=Object(m.a)(Object(m.a)({},e.reportBasicValues),{},{designType:t&&t.length>0?t[0]:l.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const n=Object(l.zb)(),s=Object(l.zb)();switch(i){case l.r.value:o=Object(m.a)(Object(m.a)({},o),{},{dtInicial:Object(l.Nb)(n.toDate())});break;case l.s.value:o=Object(m.a)(Object(m.a)({},o),{},{dtFinal:Object(l.Nb)(s.endOf("month").toDate()),dtInicial:Object(l.Nb)(n.toDate())});break;case l.T.value:o=Object(m.a)(Object(m.a)({},o),{},{referenciaInicial:Object(l.Mb)(n.toDate(),l.V)});break;case l.U.value:o=Object(m.a)(Object(m.a)({},o),{},{referenciaFinal:Object(l.Mb)(n.toDate(),l.V),referenciaInicial:Object(l.Mb)(s.toDate(),l.V)});break;case l.b.value:o=Object(m.a)(Object(m.a)({},o),{},{ano:String(n.year())})}e.formProps.reset(o)},[e.reportViewOptions,a.globalParameter.empresa]);const h=({target:e})=>{const a=e.tabIndex;s!==a&&c(a)},w=i.a.createElement(l.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:l.L.DATE}),V=e.reportViewOptions.reportViewType===l.r.value?w:null,x=e.reportViewOptions.reportViewType===l.s.value?i.a.createElement(i.a.Fragment,null,w,i.a.createElement(l.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:l.L.DATE})):null,F=i.a.createElement(l.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:l.L.REFERENCE}),y=e.reportViewOptions.reportViewType===l.T.value?F:null,I=e.reportViewOptions.reportViewType===l.U.value?i.a.createElement(i.a.Fragment,null,F,i.a.createElement(l.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:l.L.REFERENCE})):null,R=e.reportViewOptions.reportViewType===l.b.value?i.a.createElement(l.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:l.L.MASK}):null,D=e.reportViewOptions.exibirPaginaInicial?i.a.createElement(l.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:l.L.NUMBER}):null,A=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"align-items-center"},i.a.createElement(b.a,{xs:2},i.a.createElement(E.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(L.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,N=e.reportViewOptions.exibirSegmentacaoFolha?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,S=e.reportViewOptions.exibirConfiguracaoDataAtual?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,T=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,q=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,z=e.reportBasicValues.exibirFormatacaoValor?i.a.createElement(i.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),i.a.createElement(l.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:j.b,selectProps:{isClearable:!1}},type:l.L.DROP_DOWN})):null;return i.a.createElement(l.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},i.a.createElement(l.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{tabs:!0},i.a.createElement(g.a,null,i.a.createElement(P.a,{className:Object(d.a)({active:1===s}),tabIndex:1,onClick:h},"Configura\xe7\xf5es Gerais")),i.a.createElement(g.a,null,i.a.createElement(P.a,{className:Object(d.a)({active:2===s}),tabIndex:2,onClick:h,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),i.a.createElement(g.a,null,i.a.createElement(P.a,{className:Object(d.a)({active:3===s}),tabIndex:3,onClick:h,disabled:!0},"Connect"))),i.a.createElement(O.a,{className:"mb-5",activeTab:s},i.a.createElement(v.a,{tabId:1,className:"mb-0 p-3"},i.a.createElement(l.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),i.a.createElement(l.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),D,A,N,S,z,T,q,V,x,y,I,R,i.a.createElement("hr",null),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),i.a.createElement(l.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:l.u,selectProps:{isClearable:!1}},type:l.L.DROP_DOWN}),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),i.a.createElement(v.a,{tabId:2,className:"mb-0 p-3"},i.a.createElement(C,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),i.a.createElement(v.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(o.c)(e=>e.globalReducer).headerDrawerToggle,r=Object(o.b)();const t=t=>{e.addExtraParameters&&(t=e.addExtraParameters(t)),t.saveSession=!1,Object(s.d)(t,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(l.tc)(e,l.A),thenFunction:()=>{a||r(Object(c.e)()),e.afterSubmit&&e.afterSubmit()}})};return i.a.createElement(n.a,{noValidate:!0},e.children,i.a.createElement(x,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),i.a.createElement(l.R,{handleSubmit:e.handleSubmit((a,r)=>{r.preventDefault();let o=[];if(e.validateExtras&&(o=e.validateExtras(a)),o&&o.length){const e={message:i.a.createElement(l.C,{erros:o}),type:l.f.ERROR};l.pb.emit(l.a.SHOW,e)}else Object(l.tc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",l.I),t(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(l.Cb)(e.routeProps,e.routeProps.history)}}))})},825:function(e,a,r){"use strict";function t(e){let a=null;return e.empresa&&e.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&e.empresa.grupoEmpresa.grupoEmpresaConfig||(a="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),a}r.d(a,"a",function(){return t})},826:function(e,a,r){"use strict";function t(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}r.d(a,"a",function(){return t})}}]);
//# sourceMappingURL=121.6e453fa8.chunk.js.map