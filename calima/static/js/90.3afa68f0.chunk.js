(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1007:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return i});const r={value:"DTEMISSAO",label:"Imprimir Data/Hora de Emiss\xe3o"},i=[r,{value:"DTEXTENSO",label:"Imprimir Data por Extenso"},{value:"SEMDATA",label:"N\xe3o Imprimir Data/Hora de Impress\xe3o"}]},1008:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"c",function(){return i}),t.d(a,"b",function(){return l});const r="balancetenormalrelrv",i="BALANCETE",l="printBalanceteNormalNovo"},1193:function(e,a,t){"use strict";t.r(a);var r=t(12),i=t(149),l=t(6),o=t(0),n=t.n(o),s=t(98),c=t(19),m=t(148),d=t(786),p=t(198),u=t(394),b=t(2),E=t(815),f=t(818),g=t(819),O=t(844),P=t(1007),v=t(842),j=t(820),h=t(1008);const C=Object(l.a)(Object(l.a)({},Object(f.a)(h.c)),{},{consolidacao:O.d.value,exibirFormatacaoValor:!0,grau:25,marcarContasSinteticasNegrito:!1,tipo:v.a.value,tipoData:P.a.value,virtualization:!0}),V=Object(l.a)(Object(l.a)({},Object(g.a)(h.b,b.s.value)),{},{dtFinalRequired:!0,dtInicialRequired:!0,exibirConfiguracaoDadosEmpresa:!1,exibirImprimirValoresColoridos:!0,exibirSegmentacaoFolha:!0});a.default=(e=>{const a=Object(c.c)(e=>e.globalReducer),t=Object(s.b)({defaultValues:C,mode:"onBlur"}),f=t.handleSubmit,g=Object(i.a)(t,["handleSubmit"]),w=Object(o.useState)(!0),R=Object(r.a)(w,2),x=R[0],D=R[1],L=Object(o.useState)(!0),N=Object(r.a)(L,2),A=N[0],F=N[1],y=Object(o.useState)(!1),I=Object(r.a)(y,2),S=I[0],T=I[1];Object(o.useEffect)(()=>{a.globalParameter.empresa&&null===a.globalParameter.empresa.matriz&&(T(!0),g.getValues().matrizFilial=a.globalParameter.empresa.centralizar)},[]);const q=S?n.a.createElement(m.a,null,n.a.createElement(d.a,{type:"switch",label:"Acumular Matriz e Filiais",name:"matrizFilial",id:"matrizFilial",innerRef:g.register})):null,z=()=>{g.getValues().tipo===v.d.value?D(!1):D(!0),(()=>{let e;e=!0===g.getValues().acumularReferencias?"BALANCETE ACUMULADO":"BALANCETE",g.getValues().tipo===v.a.value?e+=" ANAL\xcdTICO":g.getValues().tipo===v.g.value?e+=" SINT\xc9TICO":e+=" - GRAU "+g.getValues().grau,g.getValues().matrizFilial&&(e+=" - CONSOLIDADO"),g.setValue("title",e)})()},K=e=>({message:e,placement:"top-start"});return n.a.createElement(b.ib,{title:"Configura\xe7\xe3o de Balancete",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(E.a)(a.globalParameter)]},n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(b.K,{id:"tipo",label:"Tipo de Relat\xf3rio",isPrependLabel:!0,placeholder:"Selecione o tipo de relat\xf3rio",formProps:Object(l.a)(Object(l.a)({},g),{},{validation:{required:!0}}),onChange:z,inputDropDownProps:{optionsProvider:v.j,selectProps:{isClearable:!1}},type:b.L.DROP_DOWN})),n.a.createElement(m.a,null,n.a.createElement(b.K,{id:"grau",label:"Grau",isPrependLabel:!0,placeholder:"digite o grau da conta",formProps:Object(l.a)(Object(l.a)({},g),{},{validation:{max:2147483647}}),disabled:x,type:b.L.NUMBER}))),n.a.createElement(u.a,{tag:p.a},n.a.createElement(m.a,null,n.a.createElement(d.a,{type:"switch",label:"Acumular Refer\xeancias",onChange:z,name:"acumularReferencias",id:"acumularReferencias",innerRef:g.register})),n.a.createElement(m.a,null,n.a.createElement(d.a,{type:"switch",label:"Remover espa\xe7amento dos t\xedtulos das contas",name:"alinharEsquerda",id:"idalinharEsquerda",innerRef:g.register}),Object(b.xc)(K("Caso essa op\xe7\xe3o seja selecionada os t\xedtulos das contas ficar\xe3o sem os espa\xe7amentos e alinhados \xe0 esquerda"),"alinharEsquerda"))),n.a.createElement(u.a,{tag:p.a},n.a.createElement(m.a,null,n.a.createElement(d.a,{type:"switch",label:"Exibir refer\xeancia no formato dd/mm/aaaa",name:"exibirReferenciaFormatoData",id:"idexibirReferenciaFormatoData",innerRef:g.register}),Object(b.xc)(K("Caso essa op\xe7\xe3o seja selecionada a refer\xeancia exibida no cabe\xe7alho do relat\xf3rio ser\xe1 no formato dd/mm/yyyy"),"exibirReferenciaFormatoData")),n.a.createElement(m.a,null,n.a.createElement(d.a,{type:"switch",label:"Exibir contas sint\xe9ticas em negrito",name:"marcarContasSinteticasNegrito",id:"idmarcarContasSinteticasNegrito",innerRef:g.register}),Object(b.xc)(K("Caso essa op\xe7\xe3o seja selecionada as contas sint\xe9ticas ser\xe3o exibidas em negrito."),"marcarContasSinteticasNegrito"))),n.a.createElement(u.a,{tag:p.a},n.a.createElement(m.a,null,n.a.createElement(d.a,{type:"switch",label:"Apresentar somente contas com movimenta\xe7\xe3o",name:"somenteContasMovimentada",id:"idsomenteContasMovimentada",innerRef:g.register}),Object(b.xc)(K("Caso essa op\xe7\xe3o seja selecionada s\xf3 ser\xe1 exibido contas com movimenta\xe7\xe3o no per\xedodo"),"somenteContasMovimentada")),q),n.a.createElement(p.a,{className:"mt-3"},n.a.createElement(m.a,null,n.a.createElement(b.K,{id:"tipoData",label:"Data",isPrependLabel:!0,placeholder:"Selecione o tipo de data",formProps:Object(l.a)(Object(l.a)({},g),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:P.b,selectProps:{isClearable:!1}},type:b.L.DROP_DOWN}))),n.a.createElement("hr",null),n.a.createElement(p.a,{className:"mb-3"},n.a.createElement(m.a,null,n.a.createElement(d.a,{type:"switch",label:"Quebrar P\xe1gina ao Fim de cada Classe",name:"quebrarPaginaFimGrupo",id:"idquebrarPaginaFimGrupo",onChange:()=>{!0===g.getValues().quebrarPaginaFimGrupo?F(!1):F(!0)},innerRef:g.register}),Object(b.xc)(K("Quebrar p\xe1gina ao fim de cada classes do plano de contas - Ativo, Passivo, Receitas, Despesas."),"quebrarPaginaFimGrupo"))),n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(b.K,{id:"tamanhoGrupo",label:"Quantidade de Classes Agrupadas",isPrependLabel:!0,placeholder:"digite a quantidade de classes agrupadas",formProps:Object(l.a)(Object(l.a)({},g),{},{validation:{max:2147483647}}),disabled:A,type:b.L.NUMBER}))),n.a.createElement("hr",null),n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(b.K,{id:"consolidacao",label:"Consolida\xe7\xe3o",isPrependLabel:!0,placeholder:"Selecione uma consolida\xe7\xe3o",formProps:Object(l.a)(Object(l.a)({},g),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:O.a,selectProps:{isClearable:!1}},type:b.L.DROP_DOWN}))),n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(b.K,{id:"dtAssinatura",label:"Data Assinatura",isPrependLabel:!0,placeholder:"digite a data de assinatura",formProps:g,type:b.L.DATE,tooltipProps:K("Caso este campo esteja vazio a data de assinatura ser\xe1 o \xfaltimo dia da refer\xeancia.")}))),n.a.createElement(j.a,Object.assign({},e,{handleSubmit:f,formProps:g,localStorageKey:h.a,routeProps:e,reportBasicValues:Object(l.a)(Object(l.a)({},C),{title:"BALANCETE ANAL\xcdTICO"}),reportViewOptions:V,validateExtras:()=>{const e=[];return g.getValues().tipo===v.d.value&&0===Number(g.getValues().grau)&&e.push("Campo grau n\xe3o pode ser igual a 0."),!0===g.getValues().quebrarPaginaFimGrupo&&0===Number(g.getValues().tamanhoGrupo)&&e.push("Campo Quantidade de classes agrupadas n\xe3o pode ser igual a 0."),e}})))})},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},816:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Utilizar Natureza da Conta",value:"NATUREZA"},i=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},r];a.b=i},817:function(e,a,t){"use strict";var r=t(6),i=t(0),l=t.n(i),o=t(2),n=t(257);a.a=(e=>l.a.createElement(o.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||n.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:o.L.INPUT_SEARCH})))},818:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t(2),i=t(816);function l(e=null,a=null,t=null){return{designType:r.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:t,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:i.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,t){"use strict";function r(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}t.d(a,"a",function(){return r})},820:function(e,a,t){"use strict";var r=t(0),i=t.n(r),l=t(19),o=t(395),n=t(2),s=t(256),c=t(49),m=t(6),d=t(12),p=t(25),u=t(198),b=t(148),E=t(786),f=t(782),g=t(779),O=t(780),P=t(783),v=t(781),j=t(816),h=t(98);const C={contato:"",email:""};var V=e=>{const a=Object(h.b)({defaultValues:e.selectedItem||C,mode:"onBlur"}),t={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return i.a.createElement(n.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:t,validateExtras:(e,a,t)=>[]},i.a.createElement(n.K,{id:"contato",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},t),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),i.a.createElement(n.K,{id:"email",isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},t),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var w=e=>{return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Dados para Envio do E-mail"),i.a.createElement(n.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}})}),i.a.createElement(n.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:V,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),i.a.createElement("p",null,"Copiar para:"),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),i.a.createElement(n.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:n.L.TEXT_AREA}))},R=t(817);var x=e=>{const a=Object(l.c)(e=>e.globalReducer),t=Object(r.useState)(1),o=Object(d.a)(t,2),s=o[0],c=o[1];Object(r.useEffect)(()=>{const t=e.reportViewOptions,r=t.printingTypes,i=t.reportViewType;let l=Object(m.a)(Object(m.a)({},e.reportBasicValues),{},{designType:r&&r.length>0?r[0]:n.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const o=Object(n.zb)(),s=Object(n.zb)();switch(i){case n.r.value:l=Object(m.a)(Object(m.a)({},l),{},{dtInicial:Object(n.Nb)(o.toDate())});break;case n.s.value:l=Object(m.a)(Object(m.a)({},l),{},{dtFinal:Object(n.Nb)(s.endOf("month").toDate()),dtInicial:Object(n.Nb)(o.toDate())});break;case n.T.value:l=Object(m.a)(Object(m.a)({},l),{},{referenciaInicial:Object(n.Mb)(o.toDate(),n.V)});break;case n.U.value:l=Object(m.a)(Object(m.a)({},l),{},{referenciaFinal:Object(n.Mb)(o.toDate(),n.V),referenciaInicial:Object(n.Mb)(s.toDate(),n.V)});break;case n.b.value:l=Object(m.a)(Object(m.a)({},l),{},{ano:String(o.year())})}e.formProps.reset(l)},[e.reportViewOptions,a.globalParameter.empresa]);const h=({target:e})=>{const a=e.tabIndex;s!==a&&c(a)},C=i.a.createElement(n.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:n.L.DATE}),V=e.reportViewOptions.reportViewType===n.r.value?C:null,x=e.reportViewOptions.reportViewType===n.s.value?i.a.createElement(i.a.Fragment,null,C,i.a.createElement(n.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:n.L.DATE})):null,D=i.a.createElement(n.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:n.L.REFERENCE}),L=e.reportViewOptions.reportViewType===n.T.value?D:null,N=e.reportViewOptions.reportViewType===n.U.value?i.a.createElement(i.a.Fragment,null,D,i.a.createElement(n.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:n.L.REFERENCE})):null,A=e.reportViewOptions.reportViewType===n.b.value?i.a.createElement(n.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:n.L.MASK}):null,F=e.reportViewOptions.exibirPaginaInicial?i.a.createElement(n.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:n.L.NUMBER}):null,y=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"align-items-center"},i.a.createElement(b.a,{xs:2},i.a.createElement(E.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),i.a.createElement(b.a,null,i.a.createElement(R.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,I=e.reportViewOptions.exibirSegmentacaoFolha?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,S=e.reportViewOptions.exibirConfiguracaoDataAtual?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,T=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,q=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,z=e.reportBasicValues.exibirFormatacaoValor?i.a.createElement(i.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),i.a.createElement(n.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:j.b,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN})):null;return i.a.createElement(n.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},i.a.createElement(n.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{tabs:!0},i.a.createElement(g.a,null,i.a.createElement(O.a,{className:Object(p.a)({active:1===s}),tabIndex:1,onClick:h},"Configura\xe7\xf5es Gerais")),i.a.createElement(g.a,null,i.a.createElement(O.a,{className:Object(p.a)({active:2===s}),tabIndex:2,onClick:h,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),i.a.createElement(g.a,null,i.a.createElement(O.a,{className:Object(p.a)({active:3===s}),tabIndex:3,onClick:h,disabled:!0},"Connect"))),i.a.createElement(P.a,{className:"mb-5",activeTab:s},i.a.createElement(v.a,{tabId:1,className:"mb-0 p-3"},i.a.createElement(n.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),i.a.createElement(n.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),F,y,I,S,z,T,q,V,x,L,N,A,i.a.createElement("hr",null),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),i.a.createElement(n.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(m.a)(Object(m.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:n.u,selectProps:{isClearable:!1}},type:n.L.DROP_DOWN}),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),i.a.createElement(u.a,{className:"mb-3"},i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),i.a.createElement(v.a,{tabId:2,className:"mb-0 p-3"},i.a.createElement(w,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),i.a.createElement(v.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(l.c)(e=>e.globalReducer).headerDrawerToggle,t=Object(l.b)();const r=r=>{e.addExtraParameters&&(r=e.addExtraParameters(r)),r.saveSession=!1,Object(s.d)(r,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(n.tc)(e,n.A),thenFunction:()=>{a||t(Object(c.e)()),e.afterSubmit&&e.afterSubmit()}})};return i.a.createElement(o.a,{noValidate:!0},e.children,i.a.createElement(x,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),i.a.createElement(n.R,{handleSubmit:e.handleSubmit((a,t)=>{t.preventDefault();let l=[];if(e.validateExtras&&(l=e.validateExtras(a)),l&&l.length){const e={message:i.a.createElement(n.C,{erros:l}),type:n.f.ERROR};n.pb.emit(n.a.SHOW,e)}else Object(n.tc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",n.I),r(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(n.Cb)(e.routeProps,e.routeProps.history)}}))})},842:function(e,a,t){"use strict";t.d(a,"b",function(){return r}),t.d(a,"e",function(){return l}),t.d(a,"k",function(){return o}),t.d(a,"h",function(){return n}),t.d(a,"a",function(){return s}),t.d(a,"g",function(){return c}),t.d(a,"d",function(){return m}),t.d(a,"j",function(){return d}),t.d(a,"c",function(){return p}),t.d(a,"l",function(){return u}),t.d(a,"f",function(){return b}),t.d(a,"i",function(){return E});const r={label:"Anal\xedtico",value:"1"},i={label:"Sint\xe9tico",value:"2"},l={label:"Grau da Conta",value:"3"},o=[r,i],n=[r,i,l],s={label:"Anal\xedtico",value:"analitico"},c={label:"Sint\xe9tico",value:"sintetico"},m={label:"Grau da Conta",value:"grauConta"},d=[s,c,m],p={label:"Anal\xedtico",value:1},u={label:"Sint\xe9tico",value:2},b={label:"Grau da Conta",value:3},E=[p,u,b]},844:function(e,a,t){"use strict";t.d(a,"d",function(){return r}),t.d(a,"a",function(){return i}),t.d(a,"e",function(){return l}),t.d(a,"c",function(){return o}),t.d(a,"b",function(){return n});const r={value:"1",label:"Normal"},i=[r,{value:"2",label:"Grupo Atual"},{value:"3",label:"Hierarquia Inferior"}],l={value:1,label:"Normal"},o={value:2,label:"Grupo Atual"},n=[l,o,{value:3,label:"Hierarquia Inferior"}]}}]);
//# sourceMappingURL=90.3afa68f0.chunk.js.map