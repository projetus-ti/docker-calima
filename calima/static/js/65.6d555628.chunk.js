(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1590:function(e,a,o){"use strict";o.r(a);var r=o(12),i=o(149),t=o(6),l=o(0),s=o.n(l),n=o(98),c=o(19),d=o(198),m=o(148),p=o(786),u=o(2),b=o(815),E=o(822),O=o(825),g=o(818),f=o(819),P=o(832),v=o(820);const R=Object(t.a)(Object(t.a)({},Object(g.a)("Provis\xe3o de F\xe9rias")),{},{trabalhadores:[]}),A=Object(t.a)(Object(t.a)({},Object(f.a)("printProvisaoFerias",u.T.value)),{},{exibirConfiguracaoDadosEmpresa:!1,refInicialLabel:"Refer\xeancia",refInicialRequired:!0});a.default=(e=>{const a=Object(c.c)(e=>e.globalReducer),o=Object(n.b)({defaultValues:R,mode:"onBlur"}),g=o.handleSubmit,f=Object(i.a)(o,["handleSubmit"]),C=Object(l.useState)(!0),S=Object(r.a)(C,2),I=S[0],T=S[1],h=Object(l.useState)(!1),F=Object(r.a)(h,2),_=F[0],x=F[1],N=Object(l.useState)(!1),j=Object(r.a)(N,2),V=j[0],D=j[1],L=Object(l.useState)(!1),w=Object(r.a)(L,2),M=w[0],y=w[1],G=(e,a)=>Object(u.xc)({message:e,placement:"top-start"},a);Object(l.useEffect)(()=>{setTimeout(()=>{if(null!==a.globalParameter.empresa&&null!==a.globalParameter.empresaMFP){const e=a.globalParameter.empresaMFP.referencia;f.setValue("referenciaInicial",e,!0)}},200)},[]);return s.a.createElement(u.ib,{title:"Provis\xe3o de F\xe9rias",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(b.a)(a.globalParameter),()=>Object(E.a)(a.globalParameter),()=>Object(O.a)(a.globalParameter)],wikiId:1965,wikiTitle:"Relat\xf3rio - Provis\xe3o de F\xe9rias"},s.a.createElement(v.a,Object.assign({},e,{handleSubmit:g,formProps:f,localStorageKey:"provisaoferiasrv",routeProps:e,reportBasicValues:R,reportViewOptions:A}),s.a.createElement(d.a,{style:{marginBottom:"10px"}},s.a.createElement(m.a,null,s.a.createElement(p.a,{type:"switch",label:"Exibir somente os trabalhadores ativos(sem rescis\xe3o)",id:"idisSelecionarNaoDemitidos",name:"isSelecionarNaoDemitidos",innerRef:f.register,checked:_,onChange:()=>{_?(T(!0),D(!1),x(!1),y(!1)):(T(!1),x(!0),y(!0))}}),G("Este campo filtra os trabalhadores que possuem data de demiss\xe3o anterior a refer\xeancia de gera\xe7\xe3o do relat\xf3rio","isSelecionarNaoDemitidos"))),s.a.createElement(d.a,{style:{marginBottom:"10px"}},s.a.createElement(m.a,null,s.a.createElement(p.a,{type:"switch",label:"N\xe3o exibir trabalhadores com afastamentos permanentes ou com mais de 180 dias",id:"idisSelecionarNaoAfastados",name:"isSelecionarNaoAfastados",innerRef:f.register,disabled:I,checked:V,onChange:()=>{D(!V)}}),G("Este campo filtra os trabalhadores com afastamentos permanentes ou com mais de 180 dias pelo INSS durante o per\xedodo aquisitivo correspondente","isSelecionarNaoAfastados"))),s.a.createElement(P.a,{id:"trabalhadores",formProps:Object(t.a)(Object(t.a)({},f),{},{validation:{required:!0}}),label:"Trabalhadores(s)",placeholder:"Selecione Trabalhadore(s)",isPrependLabel:!0,inputSearchProps:{selectProps:{isMulti:!0}},disabled:M})))})},815:function(e,a,o){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}o.d(a,"a",function(){return r})},816:function(e,a,o){"use strict";o.d(a,"a",function(){return r});const r={label:"Utilizar Natureza da Conta",value:"NATUREZA"},i=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},r];a.b=i},817:function(e,a,o){"use strict";var r=o(6),i=o(0),t=o.n(i),l=o(2),s=o(257);a.a=(e=>t.a.createElement(l.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||s.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:l.L.INPUT_SEARCH})))},818:function(e,a,o){"use strict";o.d(a,"a",function(){return t});var r=o(2),i=o(816);function t(e=null,a=null,o=null){return{designType:r.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:o,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:i.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,o){"use strict";function r(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}o.d(a,"a",function(){return r})},820:function(e,a,o){"use strict";var r=o(0),i=o.n(r),t=o(19),l=o(395),s=o(2),n=o(256),c=o(49),d=o(6),m=o(12),p=o(25),u=o(198),b=o(148),E=o(786),O=o(782),g=o(779),f=o(780),P=o(783),v=o(781),R=o(816),A=o(98);const C={contato:"",email:""};var S=e=>{const a=Object(A.b)({defaultValues:e.selectedItem||C,mode:"onBlur"}),o={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return i.a.createElement(s.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:o,validateExtras:(e,a,o)=>[]},i.a.createElement(s.K,{id:"contato",isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},o),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),i.a.createElement(s.K,{id:"email",isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},o),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var I=e=>{return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Dados para Envio do E-mail"),i.a.createElement(s.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:!0}})}),i.a.createElement(s.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:S,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),i.a.createElement("p",null,"Copiar para:"),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),i.a.createElement(s.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:s.L.TEXT_AREA}))},T=o(817);var h=e=>{const a=Object(t.c)(e=>e.globalReducer),o=Object(r.useState)(1),l=Object(m.a)(o,2),n=l[0],c=l[1];Object(r.useEffect)(()=>{const o=e.reportViewOptions,r=o.printingTypes,i=o.reportViewType;let t=Object(d.a)(Object(d.a)({},e.reportBasicValues),{},{designType:r&&r.length>0?r[0]:s.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const l=Object(s.zb)(),n=Object(s.zb)();switch(i){case s.r.value:t=Object(d.a)(Object(d.a)({},t),{},{dtInicial:Object(s.Nb)(l.toDate())});break;case s.s.value:t=Object(d.a)(Object(d.a)({},t),{},{dtFinal:Object(s.Nb)(n.endOf("month").toDate()),dtInicial:Object(s.Nb)(l.toDate())});break;case s.T.value:t=Object(d.a)(Object(d.a)({},t),{},{referenciaInicial:Object(s.Mb)(l.toDate(),s.V)});break;case s.U.value:t=Object(d.a)(Object(d.a)({},t),{},{referenciaFinal:Object(s.Mb)(l.toDate(),s.V),referenciaInicial:Object(s.Mb)(n.toDate(),s.V)});break;case s.b.value:t=Object(d.a)(Object(d.a)({},t),{},{ano:String(l.year())})}e.formProps.reset(t)},[e.reportViewOptions,a.globalParameter.empresa]);const A=({target:e})=>{const a=e.tabIndex;n!==a&&c(a)},C=i.a.createElement(s.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:s.L.DATE}),S=e.reportViewOptions.reportViewType===s.r.value?C:null,h=e.reportViewOptions.reportViewType===s.s.value?i.a.createElement(i.a.Fragment,null,C,i.a.createElement(s.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:s.L.DATE})):null,F=i.a.createElement(s.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:s.L.REFERENCE}),_=e.reportViewOptions.reportViewType===s.T.value?F:null,x=e.reportViewOptions.reportViewType===s.U.value?i.a.createElement(i.a.Fragment,null,F,i.a.createElement(s.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:s.L.REFERENCE})):null,N=e.reportViewOptions.reportViewType===s.b.value?i.a.createElement(s.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:s.L.MASK}):null,j=e.reportViewOptions.exibirPaginaInicial?i.a.createElement(s.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:s.L.NUMBER}):null,V=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"align-items-center"},i.a.createElement(b.a,{xs:2},i.a.createElement(E.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(T.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,D=e.reportViewOptions.exibirSegmentacaoFolha?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,L=e.reportViewOptions.exibirConfiguracaoDataAtual?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,w=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,M=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,y=e.reportBasicValues.exibirFormatacaoValor?i.a.createElement(i.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),i.a.createElement(s.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:R.b,selectProps:{isClearable:!1}},type:s.L.DROP_DOWN})):null;return i.a.createElement(s.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},i.a.createElement(s.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{tabs:!0},i.a.createElement(g.a,null,i.a.createElement(f.a,{className:Object(p.a)({active:1===n}),tabIndex:1,onClick:A},"Configura\xe7\xf5es Gerais")),i.a.createElement(g.a,null,i.a.createElement(f.a,{className:Object(p.a)({active:2===n}),tabIndex:2,onClick:A,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),i.a.createElement(g.a,null,i.a.createElement(f.a,{className:Object(p.a)({active:3===n}),tabIndex:3,onClick:A,disabled:!0},"Connect"))),i.a.createElement(P.a,{className:"mb-5",activeTab:n},i.a.createElement(v.a,{tabId:1,className:"mb-0 p-3"},i.a.createElement(s.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),i.a.createElement(s.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),j,V,D,L,y,w,M,S,h,_,x,N,i.a.createElement("hr",null),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),i.a.createElement(s.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(d.a)(Object(d.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:s.u,selectProps:{isClearable:!1}},type:s.L.DROP_DOWN}),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),i.a.createElement(v.a,{tabId:2,className:"mb-0 p-3"},i.a.createElement(I,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),i.a.createElement(v.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(t.c)(e=>e.globalReducer).headerDrawerToggle,o=Object(t.b)();const r=r=>{e.addExtraParameters&&(r=e.addExtraParameters(r)),r.saveSession=!1,Object(n.d)(r,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(s.tc)(e,s.A),thenFunction:()=>{a||o(Object(c.e)()),e.afterSubmit&&e.afterSubmit()}})};return i.a.createElement(l.a,{noValidate:!0},e.children,i.a.createElement(h,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),i.a.createElement(s.R,{handleSubmit:e.handleSubmit((a,o)=>{o.preventDefault();let t=[];if(e.validateExtras&&(t=e.validateExtras(a)),t&&t.length){const e={message:i.a.createElement(s.C,{erros:t}),type:s.f.ERROR};s.pb.emit(s.a.SHOW,e)}else Object(s.tc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",s.I),r(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(s.Cb)(e.routeProps,e.routeProps.history)}}))})},822:function(e,a,o){"use strict";function r(e){let a=null;return e.empresaMFP||(a="A empresa selecionada n\xe3o est\xe1 configurada para o M\xf3dulo Folha de Pagamento. Para configur\xe1-la acesse Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}o.d(a,"a",function(){return r})},825:function(e,a,o){"use strict";function r(e){let a=null;return e.empresa&&e.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&e.empresa.grupoEmpresa.grupoEmpresaConfig||(a="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),a}o.d(a,"a",function(){return r})},831:function(e,a,o){"use strict";o.d(a,"j",function(){return i}),o.d(a,"h",function(){return l}),o.d(a,"l",function(){return s}),o.d(a,"e",function(){return n}),o.d(a,"b",function(){return c}),o.d(a,"o",function(){return f}),o.d(a,"i",function(){return P}),o.d(a,"d",function(){return T}),o.d(a,"k",function(){return V}),o.d(a,"g",function(){return y}),o.d(a,"f",function(){return G}),o.d(a,"c",function(){return q}),o.d(a,"n",function(){return B}),o.d(a,"a",function(){return U}),o.d(a,"p",function(){return z}),o.d(a,"m",function(){return k});const r={extraFields:{codigoEsocial:"202",codigoSefip:"02"},label:"02 / 202 - Trabalhador Avulso",value:"TRABAVULSO"},i={extraFields:{codigoEsocial:"105",codigoSefip:"04"},label:"04 / 105 - Empregado - Prazo determinado (Lei n\xb0 9.601/98)",value:"EMP_CONTR_PRAZO_DETERMINADO"},t={extraFields:{codigoEsocial:"721",codigoSefip:"05"},label:"05 / 721 - C.I. - Diretor n\xe3o empregado com FGTS (Lei n\xba 8.036/90, art. 16)",value:"DIRETOR_NAO_EMP_COM_FGTS"},l={extraFields:{codigoEsocial:"104",codigoSefip:"06"},label:"06 / 104 - Empregado dom\xe9stico",value:"EMPREGADO_DOMESTICO"},s={extraFields:{codigoEsocial:"103",codigoSefip:"07"},label:"07 / 103 - Menor Aprendiz (Lei n\xba 11.180/2005)",value:"MENOR_APRENDIZ"},n={extraFields:{codigoEsocial:"722",codigoSefip:"11"},label:"11 / 722 - C.I. - Diretor n\xe3o empregado e demais empres\xe1rios sem FGTS",value:"DIRETOR_EMPRESARIO_NAO_EMP_SEM_FGTS"},c={extraFields:{codigoEsocial:"701",codigoSefip:"13"},label:"13 / 701 - C.I. \u2013 Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre remunera\xe7\xe3o; trabalhador associado \xe0 cooperativa de produ\xe7\xe3o",value:"AUTONOMO_CONTRIB_REMUNERACAO"},d={extraFields:{codigoEsocial:"701",codigoSefip:"14"},label:"14 / 701 - C.I. - Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre sal\xe1rio base",value:"AUTONOMO_CONTRIB_SAL_BASE"},m={extraFields:{codigoEsocial:"712",codigoSefip:"15"},label:"15 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre remunera\xe7\xe3o",value:"TRANSPORTADOR_CONTRIB_REMUNERACAO"},p={extraFields:{codigoEsocial:"712",codigoSefip:"16"},label:"16 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre sal\xe1rio base",value:"TRANSPORTADOR_CONTRIB_SAL_BASE"},u={extraFields:{codigoEsocial:"731",codigoSefip:"17"},label:"17 / 731 - C.I. - Cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"COOPERADO"},b={extraFields:{codigoEsocial:"734",codigoSefip:"18"},label:"18 / 734 - C.I. - Transportador cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"TRANSPORTADOR_COOPERADO"},E={extraFields:{codigoEsocial:"101",codigoSefip:"23"},label:"23 / 101 - C.I. - Transportador aut\xf4nomo contratado por outro C.I. equiparado \xe0 empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"TRANSP_AUT_CONTRATADO_POR_CI"},O={extraFields:{codigoEsocial:"101",codigoSefip:"25"},label:"25 / 101 - C.I. - Transportador cooperado que presta servi\xe7os a entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dio da cooperativa de trabalho",value:"TRANSP_COOP_PRESTA_SERV_ENTIDADE_BENE"},g={extraFields:{codigoEsocial:"401",codigoSefip:"26"},label:"26 / 401 - Dirigente sindical, em rela\xe7\xe3o ao adicional pago pelo sindicato; magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho; magistrado dos Tribunais Eleitorais, quando, nas tr\xeas situa\xe7\xf5es, for mantida a qualidade de segurado empregado (sem FGTS)",value:"DIRIGENTE_SINDICAL"},f={extraFields:{codigoEsocial:"106"},label:"106 - Trabalhador Tempor\xe1rio - contrato nos termos da Lei 6.019/74",value:"TRABALHADOR_TEMPORARIO"},P={extraFields:{codigoEsocial:"111"},label:"111 - Empregado - contrato de trabalho intermitente",value:"EMPREGADO_TRABALHADOR_INTERMITENTE"},v={extraFields:{codigoEsocial:"201"},label:"201 - Trabalhador Avulso Portu\xe1rio",value:"TRABALHADOR_AVULSO_PORTUARIO"},R={extraFields:{codigoEsocial:"305"},label:"305 - Servidor P\xfablico indicado para conselho ou \xf3rg\xe3o deliberativo, na condi\xe7\xe3o de representante do governo, \xf3rg\xe3o ou entidade da administra\xe7\xe3o p\xfablica",value:"SERVIDOR_PUBLICO_CONSELHO"},A={extraFields:{codigoEsocial:"308"},label:"308 - Conscrito",value:"CONSCRITO"},C={extraFields:{codigoEsocial:"410"},label:"410 - Trabalhador cedido - informa\xe7\xe3o prestada pelo Cession\xe1rio",value:"TRABALHADOR_CEDIDO"},S={extraFields:{codigoEsocial:"711"},label:"711 - Contribuinte individual - Transportador aut\xf4nomo de passageiros",value:"CI_TRANSP_AUT_PASSAGEIROS"},I={extraFields:{codigoEsocial:"712"},label:"712 - Contribuinte individual - Transportador aut\xf4nomo de carga",value:"CI_TRANSP_AUT_CARGA"},T={extraFields:{codigoEsocial:"723"},label:"723 - Contribuinte individual - empres\xe1rios, s\xf3cios e membro de conselho de administra\xe7\xe3o ou fiscal",value:"CI_EMPRESARIO_SOCIO"},h={extraFields:{codigoEsocial:"738"},label:"738 - Contribuinte individual - Cooperado filiado a Cooperativa de Produ\xe7\xe3o",value:"CI_COOPERADO_COOPERATIVA_PRODUCAO"},F={extraFields:{codigoEsocial:"741"},label:"741 - Contribuinte individual - Microempreendedor Individual",value:"CI_MICROEMPREENDEDOR_INDIVIDUAL"},_={extraFields:{codigoEsocial:"751"},label:"751 - Contribuinte individual - magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho ou da Justi\xe7a Eleitoral que seja aposentado de qualquer regime previdenci\xe1rio",value:"CI_MAGISTRADO_CLASSISTA"},x={extraFields:{codigoEsocial:"761"},label:"761 - Contribuinte individual - Associado eleito para dire\xe7\xe3o de Cooperativa, associa\xe7\xe3o ou entidade de classe qualquer natureza ou finalidade, bem como o s\xedndico ou administrador eleito para exercer atividade de dire\xe7\xe3o condominial, desde que recebam remunera\xe7\xe3o",value:"CI_ASSOCIADO_ELEITO_COOPERATIVA"},N={extraFields:{codigoEsocial:"771"},label:"771 - Contribuinte individual - Membro de conselho tutelar, nos termos da Lei n\xba 8.069, de 13 julho 1990",value:"CI_MEMBRO_CONSELHO_TUTELAR"},j={extraFields:{codigoEsocial:"781"},label:"781 - Ministro de confiss\xe3o religiosa ou membro de vida consagrada, de congrega\xe7\xe3o ou de ordem religiosa",value:"MINISTRO_RELIGIOSO"},V={extraFields:{codigoEsocial:"901",codigoSefip:"45"},label:"45 / 901 - Estagi\xe1rio",value:"ESTAGIARIO"},D={extraFields:{codigoEsocial:"902"},label:"902 - M\xe9dico Residente",value:"MEDICO_RESIDENTE"},L={extraFields:{codigoEsocial:"903"},label:"903 - Bolsista, nos termos da lei 8958/1994",value:"BOLSISTA"},w={extraFields:{codigoEsocial:"904"},label:"904 - Participante de curso de forma\xe7\xe3o, como etapa de concurso p\xfablico, sem v\xednculo de emprego/estatut\xe1rio",value:"PARTICIPANTE_CURSO_SEM_VINCULO"},M={extraFields:{codigoEsocial:"905"},label:"905 - Atleta n\xe3o profissional em forma\xe7\xe3o que receba bolsa",value:"ATLETA_NAO_PROFISSIONAL"},y={extraFields:{codigoEsocial:"107"},label:"107 - Empregado - Contrato de trabalho Verde e Amarelo - sem acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_SEM_ANT_FGTS"},G={extraFields:{codigoEsocial:"108"},label:"108 - Empregado - Contrato de trabalho Verde e Amarelo - com acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_COM_ANT_FGTS"},q=[{extraFields:{codigoEsocial:"101",codigoSefip:"01"},label:"01 / 101 - Empregado",value:"EMPREGADO"},r,{extraFields:{codigoEsocial:"101",codigoSefip:"03"},label:"03 / 101 - Trabalhador n\xe3o vinculado ao RGPS, mas com direito ao FGTS",value:"TRAB_CONTR_NAO_VINC_RGPS"},i,t,l,s,n,{extraFields:{codigoEsocial:"309",codigoSefip:"12"},label:"12 / 309 - Demais agentes p\xfablicos",value:"DEMAIS_AGENTES_PUBLICOS"},c,d,m,p,u,b,{extraFields:{codigoEsocial:"303",codigoSefip:"19"},label:"19 / 303 - Agente Pol\xedtico",value:"AGENTE_POLITICO"},{extraFields:{codigoEsocial:"306",codigoSefip:"20"},label:"20 / 306 - Servidor P\xfablico ocupante, exclusivamente, de cargo em comiss\xe3o, Servidor P\xfablico ocupante de cargo tempor\xe1rio",value:"SERV_PUBLICO_TEMPORARIO"},{extraFields:{codigoEsocial:"301",codigoSefip:"21"},label:"21 / 301 - Servidor P\xfablico titular de cargo efetivo, magistrado, membro do Minist\xe9rio P\xfablico e do Tribunal e Conselho de Contas",value:"SERV_PUBLICO_EFETIVO"},{extraFields:{codigoEsocial:"101",codigoSefip:"22"},label:"22 / 101 - C.I. - Contratado por outro C.I. equiparado a empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"CI_CONTRATADO_POR_CI"},E,{extraFields:{codigoEsocial:"101",codigoSefip:"24"},label:"24 / 101 - C.I. - Cooperado que presta servi\xe7os \xe0 entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dioda cooperativa de trabalho",value:"COOPERADO_PRESTA_SERV_ENTIDADE_BENE"},O,g,{extraFields:{codigoEsocial:"102"},label:"102 - Empregado - Trabalhador Rural por Pequeno Prazo da Lei 11.718/2008",value:"EMPREGADO_TRABALHADOR_RURAL"},f,P,v,{extraFields:{codigoEsocial:"302"},label:"302 - Servidor P\xfablico Ocupante de Cargo exclusivo em comiss\xe3o",value:"SERVIDOR_PUBLICO_EXCLUSIVO"},R,{extraFields:{codigoEsocial:"307"},label:"307 - Militar efetivo",value:"MILITAR_EFETIVO"},A,C,S,I,T,h,F,_,x,N,j,V,D,L,w,M,y,G],B=[t,n,T],U=[r,c,O,d,m,b,u,p,E,S,I],z=[m,p,b,E,O],k=[v,r,R,A,g,C,c,d,S,I,t,n,T,u,b,h,F,_,x,N,j,V,D,L,w,M]},832:function(e,a,o){"use strict";var r=o(6),i=o(0),t=o.n(i),l=o(2),s=o(833),n=o(831);a.a=(e=>{const a=Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"matricula",text:"Matr\xedcula"},{dataField:"nome",text:"Trabalhador"},{dataField:"categoria",text:"Categoria"},{dataField:"dataAdmissao",text:"Dt. Admiss\xe3o"},{dataField:"dataAfastamentoMovimentacao",text:"Dt. \xdaltimo Afastamento"},{dataField:"dataAfastamentoRecisao",text:"Dt. Rescis\xe3o"},{dataField:"cpf",text:"CPF"}],dtoClassName:s.a,searchExpressions:function(){let a=[];return e.apenasAutonomos&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.a}]),e.apenasAprendizes&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.l.value}]),e.apenasDomesticos&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.h.value}]),e.apenasEstagiarios&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.k.value}]),e.apenasSocios&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.n}]),a},searchViewId:"VinculoSearchView"});return t.a.createElement(l.K,Object.assign({},e,{isPrependLabel:!0,type:l.L.INPUT_SEARCH,inputSearchProps:a,searchViewProps:{apenasInativos:e.apenasInativos}}))})},833:function(e,a,o){"use strict";o.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.mfp.model.dto.vinculoexample"}}]);
//# sourceMappingURL=65.6d555628.chunk.js.map