(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1602:function(e,a,o){"use strict";o.r(a);var i=o(149),r=o(6),t=o(71),l=o.n(t),n=o(0),s=o.n(n),c=o(98),d=o(19),p=o(2),u=o(815),m=o(822),b=o(825),E=o(818),O=o(819),g=o(843),f=o(832),v=o(820);const P=Object(r.a)(Object(r.a)({},Object(E.a)("Termo Aditivo")),{},{vinculosSelecionados:[]}),A=Object(r.a)(Object(r.a)({},Object(O.a)("printTermoAditivo")),{},{exibirConfiguracaoDadosEmpresa:!1});a.default=(e=>{const a=Object(d.c)(e=>e.globalReducer),o=Object(c.b)({defaultValues:P,mode:"onBlur"}),t=o.handleSubmit,E=Object(i.a)(o,["handleSubmit"]);return Object(n.useEffect)(()=>{setTimeout(()=>{E.setValue("data",Object(p.Nb)(Object(p.yb)()),!0)},1e3)},[]),s.a.createElement(p.ib,{title:"Termo Aditivo",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(u.a)(a.globalParameter),()=>Object(m.a)(a.globalParameter),()=>Object(b.a)(a.globalParameter)],wikiId:5162,wikiTitle:"Relat\xf3rio - Termo Aditivo de Contrato"},s.a.createElement(v.a,Object.assign({},e,{handleSubmit:t,formProps:E,localStorageKey:"termoaditivorv",routeProps:e,reportBasicValues:P,reportViewOptions:A,validateExtras:function(){const e=E.getValues(),a=[];return e.vinculosSelecionados.forEach(o=>{l()(e.data,"DD/MM/YYYY").isBefore(l()(o.dataAdmissao,"DD/MM/YYYY"))&&a.push("A data para o Termo Aditivo \xe9 anterior \xe0 Data de Admiss\xe3o de todos os Trabalhadores Cargo selecionados.")}),a}}),s.a.createElement(g.a,{formProps:Object(r.a)(Object(r.a)({},E),{},{validation:{required:!0}}),label:"Termo",searchViewProps:{apenasTermoAditivo:!0},apenasTermoAditivo:!0,placeholder:"Selecione o Termo",id:"termo",isPrependLabel:!0,inputSearchProps:{size:"xl"}}),s.a.createElement(f.a,{id:"vinculosSelecionados",formProps:Object(r.a)(Object(r.a)({},E),{},{validation:{required:!0}}),label:"Trabalhador",isPrependLabel:!0,inputSearchProps:{selectProps:{isMulti:!0}},placeholder:"Selecione o Trabalhador(es)"}),s.a.createElement(p.K,{id:"data",placeholder:"Informe a Data",formProps:E,isPrependLabel:!0,label:"Data",type:p.L.DATE})))})},815:function(e,a,o){"use strict";function i(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}o.d(a,"a",function(){return i})},816:function(e,a,o){"use strict";o.d(a,"a",function(){return i});const i={label:"Utilizar Natureza da Conta",value:"NATUREZA"},r=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},i];a.b=r},817:function(e,a,o){"use strict";var i=o(6),r=o(0),t=o.n(r),l=o(2),n=o(257);a.a=(e=>t.a.createElement(l.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(i.a)(Object(i.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||n.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:l.L.INPUT_SEARCH})))},818:function(e,a,o){"use strict";o.d(a,"a",function(){return t});var i=o(2),r=o(816);function t(e=null,a=null,o=null){return{designType:i.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:o,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:r.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,o){"use strict";function i(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}o.d(a,"a",function(){return i})},820:function(e,a,o){"use strict";var i=o(0),r=o.n(i),t=o(19),l=o(395),n=o(2),s=o(256),c=o(49),d=o(6),p=o(12),u=o(25),m=o(198),b=o(148),E=o(786),O=o(782),g=o(779),f=o(780),v=o(783),P=o(781),A=o(816),C=o(98);const R={contato:"",email:""};var T=e=>{const a=Object(C.b)({defaultValues:e.selectedItem||R,mode:"onBlur"}),o={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return r.a.createElement(n.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:o,validateExtras:(e,a,o)=>[]},r.a.createElement(n.K,{id:"contato",isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},o),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),r.a.createElement(n.K,{id:"email",isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},o),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var S=e=>{return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Dados para Envio do E-mail"),r.a.createElement(n.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:!0}})}),r.a.createElement(n.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:T,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),r.a.createElement("p",null,"Copiar para:"),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),r.a.createElement(n.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:n.L.TEXT_AREA}))},I=o(817);var _=e=>{const a=Object(t.c)(e=>e.globalReducer),o=Object(i.useState)(1),l=Object(p.a)(o,2),s=l[0],c=l[1];Object(i.useEffect)(()=>{const o=e.reportViewOptions,i=o.printingTypes,r=o.reportViewType;let t=Object(d.a)(Object(d.a)({},e.reportBasicValues),{},{designType:i&&i.length>0?i[0]:n.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const l=Object(n.zb)(),s=Object(n.zb)();switch(r){case n.r.value:t=Object(d.a)(Object(d.a)({},t),{},{dtInicial:Object(n.Nb)(l.toDate())});break;case n.s.value:t=Object(d.a)(Object(d.a)({},t),{},{dtFinal:Object(n.Nb)(s.endOf("month").toDate()),dtInicial:Object(n.Nb)(l.toDate())});break;case n.T.value:t=Object(d.a)(Object(d.a)({},t),{},{referenciaInicial:Object(n.Mb)(l.toDate(),n.V)});break;case n.U.value:t=Object(d.a)(Object(d.a)({},t),{},{referenciaFinal:Object(n.Mb)(l.toDate(),n.V),referenciaInicial:Object(n.Mb)(s.toDate(),n.V)});break;case n.b.value:t=Object(d.a)(Object(d.a)({},t),{},{ano:String(l.year())})}e.formProps.reset(t)},[e.reportViewOptions,a.globalParameter.empresa]);const C=({target:e})=>{const a=e.tabIndex;s!==a&&c(a)},R=r.a.createElement(n.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:n.L.DATE}),T=e.reportViewOptions.reportViewType===n.r.value?R:null,_=e.reportViewOptions.reportViewType===n.s.value?r.a.createElement(r.a.Fragment,null,R,r.a.createElement(n.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:n.L.DATE})):null,h=r.a.createElement(n.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:n.L.REFERENCE}),N=e.reportViewOptions.reportViewType===n.T.value?h:null,F=e.reportViewOptions.reportViewType===n.U.value?r.a.createElement(r.a.Fragment,null,h,r.a.createElement(n.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:n.L.REFERENCE})):null,x=e.reportViewOptions.reportViewType===n.b.value?r.a.createElement(n.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:n.L.MASK}):null,D=e.reportViewOptions.exibirPaginaInicial?r.a.createElement(n.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:n.L.NUMBER}):null,V=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"align-items-center"},r.a.createElement(b.a,{xs:2},r.a.createElement(E.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),r.a.createElement(b.a,null,r.a.createElement(I.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,j=e.reportViewOptions.exibirSegmentacaoFolha?r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,L=e.reportViewOptions.exibirConfiguracaoDataAtual?r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,w=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,M=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,G=e.reportBasicValues.exibirFormatacaoValor?r.a.createElement(r.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),r.a.createElement(n.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:A.b,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN})):null;return r.a.createElement(n.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},r.a.createElement(n.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{tabs:!0},r.a.createElement(g.a,null,r.a.createElement(f.a,{className:Object(u.a)({active:1===s}),tabIndex:1,onClick:C},"Configura\xe7\xf5es Gerais")),r.a.createElement(g.a,null,r.a.createElement(f.a,{className:Object(u.a)({active:2===s}),tabIndex:2,onClick:C,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),r.a.createElement(g.a,null,r.a.createElement(f.a,{className:Object(u.a)({active:3===s}),tabIndex:3,onClick:C,disabled:!0},"Connect"))),r.a.createElement(v.a,{className:"mb-5",activeTab:s},r.a.createElement(P.a,{tabId:1,className:"mb-0 p-3"},r.a.createElement(n.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),r.a.createElement(n.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),D,V,j,L,G,w,M,T,_,N,F,x,r.a.createElement("hr",null),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),r.a.createElement(n.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:n.u,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN}),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(E.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),r.a.createElement(P.a,{tabId:2,className:"mb-0 p-3"},r.a.createElement(S,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),r.a.createElement(P.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(t.c)(e=>e.globalReducer).headerDrawerToggle,o=Object(t.b)();const i=i=>{e.addExtraParameters&&(i=e.addExtraParameters(i)),i.saveSession=!1,Object(s.d)(i,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(n.tc)(e,n.A),thenFunction:()=>{a||o(Object(c.e)()),e.afterSubmit&&e.afterSubmit()}})};return r.a.createElement(l.a,{noValidate:!0},e.children,r.a.createElement(_,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),r.a.createElement(n.R,{handleSubmit:e.handleSubmit((a,o)=>{o.preventDefault();let t=[];if(e.validateExtras&&(t=e.validateExtras(a)),t&&t.length){const e={message:r.a.createElement(n.C,{erros:t}),type:n.f.ERROR};n.pb.emit(n.a.SHOW,e)}else Object(n.tc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",n.I),i(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(n.Cb)(e.routeProps,e.routeProps.history)}}))})},822:function(e,a,o){"use strict";function i(e){let a=null;return e.empresaMFP||(a="A empresa selecionada n\xe3o est\xe1 configurada para o M\xf3dulo Folha de Pagamento. Para configur\xe1-la acesse Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}o.d(a,"a",function(){return i})},825:function(e,a,o){"use strict";function i(e){let a=null;return e.empresa&&e.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&e.empresa.grupoEmpresa.grupoEmpresaConfig||(a="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),a}o.d(a,"a",function(){return i})},831:function(e,a,o){"use strict";o.d(a,"j",function(){return r}),o.d(a,"h",function(){return l}),o.d(a,"l",function(){return n}),o.d(a,"e",function(){return s}),o.d(a,"b",function(){return c}),o.d(a,"o",function(){return f}),o.d(a,"i",function(){return v}),o.d(a,"d",function(){return I}),o.d(a,"k",function(){return V}),o.d(a,"g",function(){return G}),o.d(a,"f",function(){return y}),o.d(a,"c",function(){return q}),o.d(a,"n",function(){return B}),o.d(a,"a",function(){return U}),o.d(a,"p",function(){return z}),o.d(a,"m",function(){return K});const i={extraFields:{codigoEsocial:"202",codigoSefip:"02"},label:"02 / 202 - Trabalhador Avulso",value:"TRABAVULSO"},r={extraFields:{codigoEsocial:"105",codigoSefip:"04"},label:"04 / 105 - Empregado - Prazo determinado (Lei n\xb0 9.601/98)",value:"EMP_CONTR_PRAZO_DETERMINADO"},t={extraFields:{codigoEsocial:"721",codigoSefip:"05"},label:"05 / 721 - C.I. - Diretor n\xe3o empregado com FGTS (Lei n\xba 8.036/90, art. 16)",value:"DIRETOR_NAO_EMP_COM_FGTS"},l={extraFields:{codigoEsocial:"104",codigoSefip:"06"},label:"06 / 104 - Empregado dom\xe9stico",value:"EMPREGADO_DOMESTICO"},n={extraFields:{codigoEsocial:"103",codigoSefip:"07"},label:"07 / 103 - Menor Aprendiz (Lei n\xba 11.180/2005)",value:"MENOR_APRENDIZ"},s={extraFields:{codigoEsocial:"722",codigoSefip:"11"},label:"11 / 722 - C.I. - Diretor n\xe3o empregado e demais empres\xe1rios sem FGTS",value:"DIRETOR_EMPRESARIO_NAO_EMP_SEM_FGTS"},c={extraFields:{codigoEsocial:"701",codigoSefip:"13"},label:"13 / 701 - C.I. \u2013 Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre remunera\xe7\xe3o; trabalhador associado \xe0 cooperativa de produ\xe7\xe3o",value:"AUTONOMO_CONTRIB_REMUNERACAO"},d={extraFields:{codigoEsocial:"701",codigoSefip:"14"},label:"14 / 701 - C.I. - Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre sal\xe1rio base",value:"AUTONOMO_CONTRIB_SAL_BASE"},p={extraFields:{codigoEsocial:"712",codigoSefip:"15"},label:"15 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre remunera\xe7\xe3o",value:"TRANSPORTADOR_CONTRIB_REMUNERACAO"},u={extraFields:{codigoEsocial:"712",codigoSefip:"16"},label:"16 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre sal\xe1rio base",value:"TRANSPORTADOR_CONTRIB_SAL_BASE"},m={extraFields:{codigoEsocial:"731",codigoSefip:"17"},label:"17 / 731 - C.I. - Cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"COOPERADO"},b={extraFields:{codigoEsocial:"734",codigoSefip:"18"},label:"18 / 734 - C.I. - Transportador cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"TRANSPORTADOR_COOPERADO"},E={extraFields:{codigoEsocial:"101",codigoSefip:"23"},label:"23 / 101 - C.I. - Transportador aut\xf4nomo contratado por outro C.I. equiparado \xe0 empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"TRANSP_AUT_CONTRATADO_POR_CI"},O={extraFields:{codigoEsocial:"101",codigoSefip:"25"},label:"25 / 101 - C.I. - Transportador cooperado que presta servi\xe7os a entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dio da cooperativa de trabalho",value:"TRANSP_COOP_PRESTA_SERV_ENTIDADE_BENE"},g={extraFields:{codigoEsocial:"401",codigoSefip:"26"},label:"26 / 401 - Dirigente sindical, em rela\xe7\xe3o ao adicional pago pelo sindicato; magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho; magistrado dos Tribunais Eleitorais, quando, nas tr\xeas situa\xe7\xf5es, for mantida a qualidade de segurado empregado (sem FGTS)",value:"DIRIGENTE_SINDICAL"},f={extraFields:{codigoEsocial:"106"},label:"106 - Trabalhador Tempor\xe1rio - contrato nos termos da Lei 6.019/74",value:"TRABALHADOR_TEMPORARIO"},v={extraFields:{codigoEsocial:"111"},label:"111 - Empregado - contrato de trabalho intermitente",value:"EMPREGADO_TRABALHADOR_INTERMITENTE"},P={extraFields:{codigoEsocial:"201"},label:"201 - Trabalhador Avulso Portu\xe1rio",value:"TRABALHADOR_AVULSO_PORTUARIO"},A={extraFields:{codigoEsocial:"305"},label:"305 - Servidor P\xfablico indicado para conselho ou \xf3rg\xe3o deliberativo, na condi\xe7\xe3o de representante do governo, \xf3rg\xe3o ou entidade da administra\xe7\xe3o p\xfablica",value:"SERVIDOR_PUBLICO_CONSELHO"},C={extraFields:{codigoEsocial:"308"},label:"308 - Conscrito",value:"CONSCRITO"},R={extraFields:{codigoEsocial:"410"},label:"410 - Trabalhador cedido - informa\xe7\xe3o prestada pelo Cession\xe1rio",value:"TRABALHADOR_CEDIDO"},T={extraFields:{codigoEsocial:"711"},label:"711 - Contribuinte individual - Transportador aut\xf4nomo de passageiros",value:"CI_TRANSP_AUT_PASSAGEIROS"},S={extraFields:{codigoEsocial:"712"},label:"712 - Contribuinte individual - Transportador aut\xf4nomo de carga",value:"CI_TRANSP_AUT_CARGA"},I={extraFields:{codigoEsocial:"723"},label:"723 - Contribuinte individual - empres\xe1rios, s\xf3cios e membro de conselho de administra\xe7\xe3o ou fiscal",value:"CI_EMPRESARIO_SOCIO"},_={extraFields:{codigoEsocial:"738"},label:"738 - Contribuinte individual - Cooperado filiado a Cooperativa de Produ\xe7\xe3o",value:"CI_COOPERADO_COOPERATIVA_PRODUCAO"},h={extraFields:{codigoEsocial:"741"},label:"741 - Contribuinte individual - Microempreendedor Individual",value:"CI_MICROEMPREENDEDOR_INDIVIDUAL"},N={extraFields:{codigoEsocial:"751"},label:"751 - Contribuinte individual - magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho ou da Justi\xe7a Eleitoral que seja aposentado de qualquer regime previdenci\xe1rio",value:"CI_MAGISTRADO_CLASSISTA"},F={extraFields:{codigoEsocial:"761"},label:"761 - Contribuinte individual - Associado eleito para dire\xe7\xe3o de Cooperativa, associa\xe7\xe3o ou entidade de classe qualquer natureza ou finalidade, bem como o s\xedndico ou administrador eleito para exercer atividade de dire\xe7\xe3o condominial, desde que recebam remunera\xe7\xe3o",value:"CI_ASSOCIADO_ELEITO_COOPERATIVA"},x={extraFields:{codigoEsocial:"771"},label:"771 - Contribuinte individual - Membro de conselho tutelar, nos termos da Lei n\xba 8.069, de 13 julho 1990",value:"CI_MEMBRO_CONSELHO_TUTELAR"},D={extraFields:{codigoEsocial:"781"},label:"781 - Ministro de confiss\xe3o religiosa ou membro de vida consagrada, de congrega\xe7\xe3o ou de ordem religiosa",value:"MINISTRO_RELIGIOSO"},V={extraFields:{codigoEsocial:"901",codigoSefip:"45"},label:"45 / 901 - Estagi\xe1rio",value:"ESTAGIARIO"},j={extraFields:{codigoEsocial:"902"},label:"902 - M\xe9dico Residente",value:"MEDICO_RESIDENTE"},L={extraFields:{codigoEsocial:"903"},label:"903 - Bolsista, nos termos da lei 8958/1994",value:"BOLSISTA"},w={extraFields:{codigoEsocial:"904"},label:"904 - Participante de curso de forma\xe7\xe3o, como etapa de concurso p\xfablico, sem v\xednculo de emprego/estatut\xe1rio",value:"PARTICIPANTE_CURSO_SEM_VINCULO"},M={extraFields:{codigoEsocial:"905"},label:"905 - Atleta n\xe3o profissional em forma\xe7\xe3o que receba bolsa",value:"ATLETA_NAO_PROFISSIONAL"},G={extraFields:{codigoEsocial:"107"},label:"107 - Empregado - Contrato de trabalho Verde e Amarelo - sem acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_SEM_ANT_FGTS"},y={extraFields:{codigoEsocial:"108"},label:"108 - Empregado - Contrato de trabalho Verde e Amarelo - com acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_COM_ANT_FGTS"},q=[{extraFields:{codigoEsocial:"101",codigoSefip:"01"},label:"01 / 101 - Empregado",value:"EMPREGADO"},i,{extraFields:{codigoEsocial:"101",codigoSefip:"03"},label:"03 / 101 - Trabalhador n\xe3o vinculado ao RGPS, mas com direito ao FGTS",value:"TRAB_CONTR_NAO_VINC_RGPS"},r,t,l,n,s,{extraFields:{codigoEsocial:"309",codigoSefip:"12"},label:"12 / 309 - Demais agentes p\xfablicos",value:"DEMAIS_AGENTES_PUBLICOS"},c,d,p,u,m,b,{extraFields:{codigoEsocial:"303",codigoSefip:"19"},label:"19 / 303 - Agente Pol\xedtico",value:"AGENTE_POLITICO"},{extraFields:{codigoEsocial:"306",codigoSefip:"20"},label:"20 / 306 - Servidor P\xfablico ocupante, exclusivamente, de cargo em comiss\xe3o, Servidor P\xfablico ocupante de cargo tempor\xe1rio",value:"SERV_PUBLICO_TEMPORARIO"},{extraFields:{codigoEsocial:"301",codigoSefip:"21"},label:"21 / 301 - Servidor P\xfablico titular de cargo efetivo, magistrado, membro do Minist\xe9rio P\xfablico e do Tribunal e Conselho de Contas",value:"SERV_PUBLICO_EFETIVO"},{extraFields:{codigoEsocial:"101",codigoSefip:"22"},label:"22 / 101 - C.I. - Contratado por outro C.I. equiparado a empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"CI_CONTRATADO_POR_CI"},E,{extraFields:{codigoEsocial:"101",codigoSefip:"24"},label:"24 / 101 - C.I. - Cooperado que presta servi\xe7os \xe0 entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dioda cooperativa de trabalho",value:"COOPERADO_PRESTA_SERV_ENTIDADE_BENE"},O,g,{extraFields:{codigoEsocial:"102"},label:"102 - Empregado - Trabalhador Rural por Pequeno Prazo da Lei 11.718/2008",value:"EMPREGADO_TRABALHADOR_RURAL"},f,v,P,{extraFields:{codigoEsocial:"302"},label:"302 - Servidor P\xfablico Ocupante de Cargo exclusivo em comiss\xe3o",value:"SERVIDOR_PUBLICO_EXCLUSIVO"},A,{extraFields:{codigoEsocial:"307"},label:"307 - Militar efetivo",value:"MILITAR_EFETIVO"},C,R,T,S,I,_,h,N,F,x,D,V,j,L,w,M,G,y],B=[t,s,I],U=[i,c,O,d,p,b,m,u,E,T,S],z=[p,u,b,E,O],K=[P,i,A,C,g,R,c,d,T,S,t,s,I,m,b,_,h,N,F,x,D,V,j,L,w,M]},832:function(e,a,o){"use strict";var i=o(6),r=o(0),t=o.n(r),l=o(2),n=o(833),s=o(831);a.a=(e=>{const a=Object(i.a)(Object(i.a)({},e.inputSearchProps),{},{columns:[{dataField:"matricula",text:"Matr\xedcula"},{dataField:"nome",text:"Trabalhador"},{dataField:"categoria",text:"Categoria"},{dataField:"dataAdmissao",text:"Dt. Admiss\xe3o"},{dataField:"dataAfastamentoMovimentacao",text:"Dt. \xdaltimo Afastamento"},{dataField:"dataAfastamentoRecisao",text:"Dt. Rescis\xe3o"},{dataField:"cpf",text:"CPF"}],dtoClassName:n.a,searchExpressions:function(){let a=[];return e.apenasAutonomos&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:s.a}]),e.apenasAprendizes&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:s.l.value}]),e.apenasDomesticos&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:s.h.value}]),e.apenasEstagiarios&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:s.k.value}]),e.apenasSocios&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:s.n}]),a},searchViewId:"VinculoSearchView"});return t.a.createElement(l.K,Object.assign({},e,{isPrependLabel:!0,type:l.L.INPUT_SEARCH,inputSearchProps:a,searchViewProps:{apenasInativos:e.apenasInativos}}))})},833:function(e,a,o){"use strict";o.d(a,"a",function(){return i});const i="br.com.projetusinformatica.calima.mfp.model.dto.vinculoexample"},843:function(e,a,o){"use strict";var i=o(6),r=o(0),t=o.n(r),l=o(2),n=o(858),s=o(865);a.a=(e=>{const a=Object(i.a)(Object(i.a)({},e.inputSearchProps),{},{columns:[{dataField:"descricao",text:"Descri\xe7\xe3o"},{dataField:"termo",text:"Termo"}],dtoClassName:n.a,searchExpressions:function(){return e.apenasAbonoPecuniario?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.a.value}]:e.apenasTipo?[{alias:"c1",conditionalGroup:"c_1",fieldName:"tipo",value:s.g.value},{alias:"c2",conditionalGroup:"c_1",fieldName:"tipo",value:s.f.value},{alias:"c3",conditionalGroup:"c_1",fieldName:"tipo",value:s.A.value}]:e.apenasAcordo?[{alias:"c1",conditionalGroup:"c_1",fieldName:"tipo",value:s.e.value},{alias:"c2",conditionalGroup:"c_1",fieldName:"tipo",value:s.d.value},{alias:"c3",conditionalGroup:"c_1",fieldName:"tipo",value:s.B.value}]:e.apenasTermosCompensacaoHoras?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.H.value}]:e.apenasTermoAditivo?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.G.value}]:e.apenasCartaRecomendacao?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.k.value}]:e.apenasAvisoFerias?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.c.value}]:e.apenasReciboEntregaCtps?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.D.value}]:e.apenasReciboDevolucaoCtps?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.C.value}]:e.apenasReciboCestaBasica?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.E.value}]:e.apenasReciboValeTransporte?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.M.value}]:e.apenasDeclaracaoOpcaoFgts?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.w.value}]:e.apenasValeAlimentacaoRefeicaoRecibo?[{alias:"c1",conditionalGroup:"c_1",fieldName:"tipo",value:s.J.value},{alias:"c2",conditionalGroup:"c_1",fieldName:"tipo",value:s.K.value}]:e.apenasProrrogacaoHoraExtra?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.b.value}]:e.apenasCartaSuspensao?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.l.value}]:e.apenasCartaPreposicao?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.j.value}]:e.apenasMsgContraCheque?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.z.value}]:e.apenasMsgAniversario?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.y.value}]:e.apenasReciboProLabore?[{alias:"c",conditionalGroup:"c_",fieldName:"tipo",value:s.F.value}]:[]},searchViewId:"CustomizacaoTermosSearchView"});return t.a.createElement(l.K,Object.assign({},e,{type:l.L.INPUT_SEARCH,inputSearchProps:a}))})}}]);
//# sourceMappingURL=54.bee37030.chunk.js.map