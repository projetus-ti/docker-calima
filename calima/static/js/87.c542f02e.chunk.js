(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1052:function(e,a,r){"use strict";r.d(a,"c",function(){return t}),r.d(a,"b",function(){return i}),r.d(a,"a",function(){return o});const t={value:"TODAS",label:"Todas"},i=[t,{value:"SOMENTE_A_PAGAR",label:"Somente contas a pagar"},{value:"SOMENTE_PAGAS",label:"Somente contas pagas"}],o=[t,{value:"BAIXADOS",label:"Somente honor\xe1rios e contas baixados "},{value:"NAO_BAIXADOS",label:"Somente hon\xf3rarios e contas n\xe3o baixados"}]},1601:function(e,a,r){"use strict";r.r(a);var t=r(149),i=r(6),o=r(0),n=r.n(o),l=r(98),s=r(20),c=r(198),m=r(148),p=r(786),d=r(2),u=r(870),b=r(815),E=r(825),f=r(818),P=r(819),g=r(1052),O=r(820);const v=Object(i.a)(Object(i.a)({},Object(f.a)("Fluxo de Caixa")),{},{gerarCabecalhoPadraoAdministradora:!0,status:g.c.value}),h=Object(i.a)(Object(i.a)({},Object(P.a)("printFluxoCaixaMHO")),{},{exibirConfiguracaoDadosEmpresa:!1});a.default=(e=>{const a=Object(s.c)(e=>e.globalReducer),r=Object(l.b)({defaultValues:v,mode:"onBlur"}),o=r.handleSubmit,f=Object(t.a)(r,["handleSubmit"]);return n.a.createElement(d.hb,{title:"Fluxo de Caixa",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(b.a)(a.globalParameter),()=>Object(u.a)(a.globalParameter),()=>Object(E.a)(a.globalParameter)],wikiId:2977},n.a.createElement(O.a,Object.assign({},e,{handleSubmit:o,formProps:f,localStorageKey:"fluxocaixamhorelrv",routeProps:e,reportBasicValues:v,reportViewOptions:h}),n.a.createElement(d.K,{id:"referencia",label:"Refer\xeancia",labelWidth:110,isPrependLabel:!0,formProps:Object(i.a)(Object(i.a)({},f),{},{validation:{required:!0}}),placeholder:"Informe a Refer\xeancia",type:d.L.REFERENCE}),n.a.createElement(d.K,{id:"status",formProps:Object(i.a)(Object(i.a)({},f),{},{validation:{required:!0}}),label:"Status",labelWidth:110,inputDropDownProps:{optionsProvider:g.a,selectProps:{autoFocus:!0,isClearable:!1}},isPrependLabel:!0,placeholder:"Informe o status",type:d.L.DROP_DOWN}),n.a.createElement(c.a,{className:"mb-3"},n.a.createElement(m.a,null,n.a.createElement(p.a,{type:"switch",id:"isContaPagarPaginaDiferente",name:"isContaPagarPaginaDiferente",label:"Imprimir contas a pagar em uma nova p\xe1gina",innerRef:f.register}))),n.a.createElement(c.a,{className:"mb-3"},n.a.createElement(m.a,null,n.a.createElement(p.a,{type:"switch",id:"imprimirCaixa",name:"imprimirCaixa",label:"Imprimir em regime de caixa",innerRef:f.register})))))})},815:function(e,a,r){"use strict";function t(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}r.d(a,"a",function(){return t})},816:function(e,a,r){"use strict";r.d(a,"a",function(){return t});const t={label:"Utilizar Natureza da Conta",value:"NATUREZA"},i=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},t];a.b=i},817:function(e,a,r){"use strict";var t=r(6),i=r(0),o=r.n(i),n=r(2),l=r(257);a.a=(e=>o.a.createElement(n.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(t.a)(Object(t.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||l.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:n.L.INPUT_SEARCH})))},818:function(e,a,r){"use strict";r.d(a,"a",function(){return o});var t=r(2),i=r(816);function o(e=null,a=null,r=null){return{designType:t.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:r,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:i.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,r){"use strict";function t(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}r.d(a,"a",function(){return t})},820:function(e,a,r){"use strict";var t=r(0),i=r.n(t),o=r(20),n=r(395),l=r(2),s=r(256),c=r(49),m=r(6),p=r(13),d=r(25),u=r(198),b=r(148),E=r(786),f=r(782),P=r(779),g=r(780),O=r(783),v=r(781),h=r(816),j=r(98);const w={contato:"",email:""};var C=e=>{const a=Object(j.b)({defaultValues:e.selectedItem||w,mode:"onBlur"}),r={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return i.a.createElement(l.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:r,validateExtras:(e,a,r)=>[]},i.a.createElement(l.K,{id:"contato",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},r),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),i.a.createElement(l.K,{id:"email",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},r),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var V=e=>{return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Dados para Envio do E-mail"),i.a.createElement(l.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}})}),i.a.createElement(l.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:C,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),i.a.createElement("p",null,"Copiar para:"),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),i.a.createElement(l.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:l.L.TEXT_AREA}))},x=r(817);var L=e=>{const a=Object(o.c)(e=>e.globalReducer),r=Object(t.useState)(1),n=Object(p.a)(r,2),s=n[0],c=n[1];Object(t.useEffect)(()=>{const r=e.reportViewOptions,t=r.printingTypes,i=r.reportViewType;let o=Object(m.a)(Object(m.a)({},e.reportBasicValues),{},{designType:t&&t.length>0?t[0]:l.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const n=Object(l.yb)(),s=Object(l.yb)();switch(i){case l.r.value:o=Object(m.a)(Object(m.a)({},o),{},{dtInicial:Object(l.Mb)(n.toDate())});break;case l.s.value:o=Object(m.a)(Object(m.a)({},o),{},{dtFinal:Object(l.Mb)(s.endOf("month").toDate()),dtInicial:Object(l.Mb)(n.toDate())});break;case l.T.value:o=Object(m.a)(Object(m.a)({},o),{},{referenciaInicial:Object(l.Lb)(n.toDate(),l.V)});break;case l.U.value:o=Object(m.a)(Object(m.a)({},o),{},{referenciaFinal:Object(l.Lb)(n.toDate(),l.V),referenciaInicial:Object(l.Lb)(s.toDate(),l.V)});break;case l.b.value:o=Object(m.a)(Object(m.a)({},o),{},{ano:String(n.year())})}e.formProps.reset(o)},[e.reportViewOptions,a.globalParameter.empresa]);const j=({target:e})=>{const a=e.tabIndex;s!==a&&c(a)},w=i.a.createElement(l.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:l.L.DATE}),C=e.reportViewOptions.reportViewType===l.r.value?w:null,L=e.reportViewOptions.reportViewType===l.s.value?i.a.createElement(i.a.Fragment,null,w,i.a.createElement(l.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:l.L.DATE})):null,R=i.a.createElement(l.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:l.L.REFERENCE}),y=e.reportViewOptions.reportViewType===l.T.value?R:null,F=e.reportViewOptions.reportViewType===l.U.value?i.a.createElement(i.a.Fragment,null,R,i.a.createElement(l.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:l.L.REFERENCE})):null,I=e.reportViewOptions.reportViewType===l.b.value?i.a.createElement(l.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:l.L.MASK}):null,D=e.reportViewOptions.exibirPaginaInicial?i.a.createElement(l.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:l.L.NUMBER}):null,A=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"align-items-center"},i.a.createElement(b.a,{xs:2},i.a.createElement(E.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(x.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,S=e.reportViewOptions.exibirSegmentacaoFolha?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,N=e.reportViewOptions.exibirConfiguracaoDataAtual?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,T=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,q=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,K=e.reportBasicValues.exibirFormatacaoValor?i.a.createElement(i.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),i.a.createElement(l.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:h.b,selectProps:{isClearable:!1}},type:l.L.DROP_DOWN})):null;return i.a.createElement(l.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},i.a.createElement(l.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{tabs:!0},i.a.createElement(P.a,null,i.a.createElement(g.a,{className:Object(d.a)({active:1===s}),tabIndex:1,onClick:j},"Configura\xe7\xf5es Gerais")),i.a.createElement(P.a,null,i.a.createElement(g.a,{className:Object(d.a)({active:2===s}),tabIndex:2,onClick:j,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),i.a.createElement(P.a,null,i.a.createElement(g.a,{className:Object(d.a)({active:3===s}),tabIndex:3,onClick:j,disabled:!0},"Connect"))),i.a.createElement(O.a,{className:"mb-5",activeTab:s},i.a.createElement(v.a,{tabId:1,className:"mb-0 p-3"},i.a.createElement(l.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),i.a.createElement(l.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),D,A,S,N,K,T,q,C,L,y,F,I,i.a.createElement("hr",null),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),i.a.createElement(l.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:l.u,selectProps:{isClearable:!1}},type:l.L.DROP_DOWN}),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),i.a.createElement(v.a,{tabId:2,className:"mb-0 p-3"},i.a.createElement(V,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),i.a.createElement(v.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(o.c)(e=>e.globalReducer).headerDrawerToggle,r=Object(o.b)();const t=t=>{e.addExtraParameters&&(t=e.addExtraParameters(t)),t.saveSession=!1,Object(s.d)(t,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(l.sc)(e,l.A),thenFunction:()=>{a||r(Object(c.e)()),e.afterSubmit&&e.afterSubmit()}})};return i.a.createElement(n.a,{noValidate:!0},e.children,i.a.createElement(L,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),i.a.createElement(l.R,{handleSubmit:e.handleSubmit((a,r)=>{r.preventDefault();let o=[];if(e.validateExtras&&(o=e.validateExtras(a)),o&&o.length){const e={message:i.a.createElement(l.C,{erros:o}),type:l.f.ERROR};l.ob.emit(l.a.SHOW,e)}else Object(l.sc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",l.I),t(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(l.Bb)(e.routeProps,e.routeProps.history)}}))})},825:function(e,a,r){"use strict";function t(e){let a=null;return e.empresa&&e.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&e.empresa.grupoEmpresa.grupoEmpresaConfig||(a="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),a}r.d(a,"a",function(){return t})},870:function(e,a,r){"use strict";function t(e){let a=null;return e.administradora.administradoraMHO||(a="A administradora deve ser configurada no m\xf3dulo de Honor\xe1rios. Para configurar acesse:\nM\xf3dulo Honor\xe1rios > Configura\xe7\xf5es > Administradora"),a}r.d(a,"a",function(){return t})}}]);
//# sourceMappingURL=87.c542f02e.chunk.js.map