(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1550:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(149),o=t(6),i=t(0),c=t.n(i),s=t(98),l=t(19),u=t(198),p=t(148),d=t(2),m=t(815),b=t(826),f=t(825),O=t(818),E=t(819),g=t(830),j=t(834),P=t(820);const C=Object(o.a)({},Object(O.a)("Relat\xf3rio de Concilia\xe7\xe3o Banc\xe1ria")),v=Object(o.a)(Object(o.a)({},Object(E.a)("printConciliacaoBancaria",d.s.value)),{},{dtFinalRequired:!0,dtInicialRequired:!0,exibirConfiguracaoDadosEmpresa:!1,exibirSegmentacaoFolha:!0});a.default=(e=>{const a=Object(l.c)(e=>e.globalReducer),t=Object(s.b)({defaultValues:C,mode:"onBlur"}),O=t.handleSubmit,E=Object(r.a)(t,["handleSubmit"]),h=Object(i.useState)([]),S=Object(n.a)(h,2),F=S[0],w=S[1],V=Object(i.useState)(!0),L=Object(n.a)(V,2),R=L[0],D=L[1];return c.a.createElement(d.ib,{title:"Relat\xf3rio de Concilia\xe7\xe3o Banc\xe1ria",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(m.a)(a.globalParameter),()=>Object(b.a)(a.globalParameter),()=>Object(f.a)(a.globalParameter)]},c.a.createElement(P.a,Object.assign({},e,{handleSubmit:O,formProps:E,localStorageKey:"conciliacaobancariarv",routeProps:e,reportBasicValues:C,reportViewOptions:v,validateExtras:()=>{const e=[];return E.getValues().planoConta.analitica||e.push("A conta selecionada deve ser do tipo an\xe1litica!"),E.getValues().planoConta.analitica||Object(d.Yb)(E.getValues().bancoMCG)||(e.push("A Conta selecionada n\xe3o possui uma Conta Banc\xe1ria relacionada."),e.push("Configure em M\xf3dulo Contab\xedl > Processos > Concilia\xe7\xe3o Banc\xe1ria - Extrato e Lan\xe7amentos > Plano de Contas - Banco")),e}}),c.a.createElement(u.a,null,c.a.createElement(p.a,null,c.a.createElement(j.a,{id:"planoConta",onChange:()=>{if(D(!0),E.setValue("bancoMCG",!0),E.getValues().planoConta){const e={idEmpresaSelecionada:a.globalParameter.empresa.id,idGrupoPlanoConta:E.getValues().planoConta.id};Object(g.U)(e,{errorFunction:e=>{Object(d.tc)(e,d.A)},thenFunction:e=>{if(0!==e.length)D(!1),w(e);else{const e={message:"O Plano de Contas selecionado n\xe3o possui uma Conta Banc\xe1ria relacionada. Configure esses dados utilizando o Bot\xe3o Plano de Contas - Banco",type:d.f.WARNING};d.pb.emit(d.a.SHOW,e)}}})}},formProps:Object(o.a)(Object(o.a)({},E),{},{validation:{required:!0}}),label:"Conta",placeholder:"Informe a Conta"}))),c.a.createElement(u.a,null,c.a.createElement(p.a,null,c.a.createElement(d.K,{formProps:Object(o.a)(Object(o.a)({},E),{},{validation:{required:!0}}),id:"bancoMCG.id",inputDropDownProps:{optionsProvider:F},isPrependLabel:!0,label:"Banco",placeholder:"Informe o Banco",type:d.L.DROP_DOWN,disabled:R})))))})},815:function(e,a,t){"use strict";function n(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return n})},816:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n={label:"Utilizar Natureza da Conta",value:"NATUREZA"},r=[{label:"Utilizar sinal '-' para valores negativos",value:"PADRAO"},{label:"Utilizar Par\xeanteses '()' para valores negativos",value:"PARENTESE"},n];a.b=r},817:function(e,a,t){"use strict";var n=t(6),r=t(0),o=t.n(r),i=t(2),c=t(257);a.a=(e=>o.a.createElement(i.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(n.a)(Object(n.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||c.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:i.L.INPUT_SEARCH})))},818:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(2),r=t(816);function o(e=null,a=null,t=null){return{designType:n.G.value,empresasSelecionadas:[],envioEmail:{anexos:[],assunto:e,destinatarios:[]},exibirFormatacaoValor:!1,gerarBom:!0,gerarCabecalhoPadrao:!0,gerarCabecalhoPadraoAdministradora:!1,identificadorAjuda:a,identificadorMenu:t,imprimirCodigoEmpresa:!0,imprimirDataHora:!1,imprimirValoresColoridos:!1,requestSolicitacao:{},saldoReportEnum:r.a.value,saveSession:!1,showDadosEmpresa:!0,showLogoAdministradora:!0,startPage:"1",title:e,virtualization:!1}}},819:function(e,a,t){"use strict";function n(e,a=null){return{anoLabel:"Ano",dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",exibirConfiguracaoDadosEmpresa:!0,exibirConfiguracaoDataAtual:!0,exibirConfiguracaoLogoAdministradora:!0,exibirEnviarPorEmail:!0,exibirPaginaInicial:!0,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:e,reportViewType:a}}t.d(a,"a",function(){return n})},820:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(19),i=t(395),c=t(2),s=t(256),l=t(49),u=t(6),p=t(12),d=t(25),m=t(198),b=t(148),f=t(786),O=t(782),E=t(779),g=t(780),j=t(783),P=t(781),C=t(816),v=t(98);const h={contato:"",email:""};var S=e=>{const a=Object(v.b)({defaultValues:e.selectedItem||h,mode:"onBlur"}),t={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return r.a.createElement(c.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:t,validateExtras:(e,a,t)=>[]},r.a.createElement(c.K,{id:"contato",isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},t),{},{validation:{required:!0}}),label:"Contato",placeholder:"Informe o nome do contato"}),r.a.createElement(c.K,{id:"email",isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},t),{},{validation:{required:!0}}),label:"E-mail",placeholder:"Informe o e-mail do contato"}))};var F=e=>{return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Dados para Envio do E-mail"),r.a.createElement(c.K,{id:"envioEmail.assunto",label:"Assunto",isPrependLabel:!0,placeholder:"Assunto",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:!0}})}),r.a.createElement(c.w,Object.assign({columns:[{dataField:"contato",sort:!0,text:"Contato"},{dataField:"email",sort:!0,text:"E-mail"}],title:"Destinat\xe1rio E-mail",detailView:S,keyField:"email",formProps:e.formProps,propName:"envioEmail.destinatarios"},e)),r.a.createElement("p",null,"Copiar para:"),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"enviarEmailAdministradora",name:"envioEmail.enviarEmailAdministradora",label:"Administradora",innerRef:e.formProps.register})),r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"enviarEmailUsuarioLogado",name:"envioEmail.enviarEmailUsuarioLogado",label:"Usu\xe1rio Logado",innerRef:e.formProps.register}))),r.a.createElement(c.K,{id:"envioEmail.mensagem",label:"Mensagem",isPrependLabel:!0,placeholder:"Mensagem",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{maxLength:1e3}}),type:c.L.TEXT_AREA}))},w=t(817);var V=e=>{const a=Object(o.c)(e=>e.globalReducer),t=Object(n.useState)(1),i=Object(p.a)(t,2),s=i[0],l=i[1];Object(n.useEffect)(()=>{const t=e.reportViewOptions,n=t.printingTypes,r=t.reportViewType;let o=Object(u.a)(Object(u.a)({},e.reportBasicValues),{},{designType:n&&n.length>0?n[0]:c.G.value,idGerEmpresa:a.globalParameter.empresa.id,startPage:1});const i=Object(c.zb)(),s=Object(c.zb)();switch(r){case c.r.value:o=Object(u.a)(Object(u.a)({},o),{},{dtInicial:Object(c.Nb)(i.toDate())});break;case c.s.value:o=Object(u.a)(Object(u.a)({},o),{},{dtFinal:Object(c.Nb)(s.endOf("month").toDate()),dtInicial:Object(c.Nb)(i.toDate())});break;case c.T.value:o=Object(u.a)(Object(u.a)({},o),{},{referenciaInicial:Object(c.Mb)(i.toDate(),c.V)});break;case c.U.value:o=Object(u.a)(Object(u.a)({},o),{},{referenciaFinal:Object(c.Mb)(i.toDate(),c.V),referenciaInicial:Object(c.Mb)(s.toDate(),c.V)});break;case c.b.value:o=Object(u.a)(Object(u.a)({},o),{},{ano:String(i.year())})}e.formProps.reset(o)},[e.reportViewOptions,a.globalParameter.empresa]);const v=({target:e})=>{const a=e.tabIndex;s!==a&&l(a)},h=r.a.createElement(c.K,{id:"dtInicial",label:e.reportViewOptions.dtInicialLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtInicialRequired}}),type:c.L.DATE}),S=e.reportViewOptions.reportViewType===c.r.value?h:null,V=e.reportViewOptions.reportViewType===c.s.value?r.a.createElement(r.a.Fragment,null,h,r.a.createElement(c.K,{id:"dtFinal",label:e.reportViewOptions.dtFinalLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.dtFinalRequired}}),type:c.L.DATE})):null,L=r.a.createElement(c.K,{id:"referenciaInicial",label:e.reportViewOptions.refInicialLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refInicialRequired}}),type:c.L.REFERENCE}),R=e.reportViewOptions.reportViewType===c.T.value?L:null,D=e.reportViewOptions.reportViewType===c.U.value?r.a.createElement(r.a.Fragment,null,L,r.a.createElement(c.K,{id:"referenciaFinal",label:e.reportViewOptions.refFinalLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.refFinalRequired}}),type:c.L.REFERENCE})):null,x=e.reportViewOptions.reportViewType===c.b.value?r.a.createElement(c.K,{id:"ano",label:e.reportViewOptions.anoLabel,isPrependLabel:!0,formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:e.reportViewOptions.anoRequired}}),inputMaskedProps:{mask:"9999"},type:c.L.MASK}):null,I=e.reportViewOptions.exibirPaginaInicial?r.a.createElement(c.K,{id:"startPage",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:c.L.NUMBER}):null,y=e.reportViewOptions.exibirConfiguracaoMultiplasEmpresas?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"align-items-center"},r.a.createElement(b.a,{xs:2},r.a.createElement(f.a,{type:"switch",id:"gerarPorEmpresas",name:"gerarPorEmpresas",label:"Gerar por Empresas",innerRef:e.formProps.register})),r.a.createElement(b.a,null,r.a.createElement(w.a,{formProps:e.formProps,label:"Empresa(s)",placeholder:"Selecione uma ou v\xe1rias empresas",id:"empresasSelecionadas",isPrependLabel:!0,inputProps:{disabled:e.formProps.getValues().gerarPorEmpresas,style:{marginBottom:20}},inputSearchProps:{size:"xl",selectProps:{isMulti:!0}}})))):null,q=e.reportViewOptions.exibirSegmentacaoFolha?r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"segmentacaoFolha",name:"segmentacaoFolha",label:"Exibir N\xfamero das P\xe1ginas como Folhas",innerRef:e.formProps.register}))):null,A=e.reportViewOptions.exibirConfiguracaoDataAtual?r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"showCurrentDate",name:"showCurrentDate",label:"Imprimir a Data Atual",innerRef:e.formProps.register}))):null,N=e.reportViewOptions.exibirConfiguracaoLogoAdministradora?r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"showLogoAdministradora",name:"showLogoAdministradora",label:"Imprimir o Logo Administradora",innerRef:e.formProps.register}))):null,T=e.reportViewOptions.exibirConfiguracaoDadosEmpresa?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"showDadosEmpresa",name:"showDadosEmpresa",label:"Imprimir os Dados da Empresa",innerRef:e.formProps.register}))),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"imprimirCodigoEmpresa",name:"imprimirCodigoEmpresa",label:"Imprimir o C\xf3digo Empresa",innerRef:e.formProps.register})))):null,G=e.reportBasicValues.exibirFormatacaoValor?r.a.createElement(r.a.Fragment,null,e.reportViewOptions.exibirImprimirValoresColoridos&&r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"imprimirValoresColoridos",name:"imprimirValoresColoridos",label:"Imprimir Valores Devedores em Azul e Credores em Vermelho",innerRef:e.formProps.register}))),r.a.createElement(c.K,{id:"saldoReportEnum",label:"Tipo de Formata\xe7\xe3o de Valores",isPrependLabel:!0,placeholder:"Selecione o tipo de formata\xe7\xe3o dos valores",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:C.b,selectProps:{isClearable:!1}},type:c.L.DROP_DOWN})):null;return r.a.createElement(c.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},r.a.createElement(c.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{tabs:!0},r.a.createElement(E.a,null,r.a.createElement(g.a,{className:Object(d.a)({active:1===s}),tabIndex:1,onClick:v},"Configura\xe7\xf5es Gerais")),r.a.createElement(E.a,null,r.a.createElement(g.a,{className:Object(d.a)({active:2===s}),tabIndex:2,onClick:v,disabled:!e.reportViewOptions.exibirEnviarPorEmail},"Envio de E-mail")),r.a.createElement(E.a,null,r.a.createElement(g.a,{className:Object(d.a)({active:3===s}),tabIndex:3,onClick:v,disabled:!0},"Connect"))),r.a.createElement(j.a,{className:"mb-5",activeTab:s},r.a.createElement(P.a,{tabId:1,className:"mb-0 p-3"},r.a.createElement(c.K,{formProps:e.formProps,id:"idGerEmpresa",hidden:!0}),r.a.createElement(c.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.reportBasicValues.title,!0)},formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),I,y,q,A,G,N,T,S,V,R,D,x,r.a.createElement("hr",null),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"gerarCabecalhoPadrao",name:"gerarCabecalhoPadrao",label:"Exibir Cabe\xe7alho",innerRef:e.formProps.register}))),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"virtualization",name:"virtualization",label:"Virtualizar Relat\xf3rio",innerRef:e.formProps.register}))),r.a.createElement(c.K,{id:"designType",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(u.a)(Object(u.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:e.reportViewOptions.printingTypes?e.reportViewOptions.printingTypes:c.u,selectProps:{isClearable:!1}},type:c.L.DROP_DOWN}),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"enviarPorEmail",name:"enviarPorEmail",label:"Enviar por E-mail",innerRef:e.formProps.register}))),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(b.a,null,r.a.createElement(f.a,{type:"switch",id:"enviarParaConnect",name:"enviarParaConnect",label:"Enviar para o Connect",innerRef:e.formProps.register})))),r.a.createElement(P.a,{tabId:2,className:"mb-0 p-3"},r.a.createElement(F,{formProps:e.formProps,initialSubject:e.reportBasicValues.title})),r.a.createElement(P.a,{tabId:3,className:"mb-0 p-3"})))))};a.a=(e=>{const a=Object(o.c)(e=>e.globalReducer).headerDrawerToggle,t=Object(o.b)();const n=n=>{e.addExtraParameters&&(n=e.addExtraParameters(n)),n.saveSession=!1,Object(s.d)(n,e.reportViewOptions.reportEventType,{errorFunction:e=>Object(c.tc)(e,c.A),thenFunction:()=>{a||t(Object(l.e)()),e.afterSubmit&&e.afterSubmit()}})};return r.a.createElement(i.a,{noValidate:!0},e.children,r.a.createElement(V,{reportBasicValues:e.reportBasicValues,reportViewOptions:e.reportViewOptions,formProps:e.formProps,extraConfigOpened:e.extraConfigOpened}),r.a.createElement(c.R,{handleSubmit:e.handleSubmit((a,t)=>{t.preventDefault();let o=[];if(e.validateExtras&&(o=e.validateExtras(a)),o&&o.length){const e={message:r.a.createElement(c.C,{erros:o}),type:c.f.ERROR};c.pb.emit(c.a.SHOW,e)}else Object(c.tc)("Seu arquivo est\xe1 sendo gerado. Uma notifica\xe7\xe3o ser\xe1 exibida quando estiver finalizado e o mesmo poder\xe1 ser salvo.",c.I),n(a)}),handleClose:function(){e.handleClose?e.handleClose():e.routeProps&&Object(c.Cb)(e.routeProps,e.routeProps.history)}}))})},825:function(e,a,t){"use strict";function n(e){let a=null;return e.empresa&&e.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&e.empresa.grupoEmpresa.grupoEmpresaConfig||(a="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),a}t.d(a,"a",function(){return n})},826:function(e,a,t){"use strict";function n(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}t.d(a,"a",function(){return n})},830:function(e,a,t){"use strict";t.d(a,"v",function(){return c}),t.d(a,"N",function(){return s}),t.d(a,"P",function(){return l}),t.d(a,"G",function(){return u}),t.d(a,"I",function(){return p}),t.d(a,"F",function(){return d}),t.d(a,"K",function(){return m}),t.d(a,"E",function(){return b}),t.d(a,"J",function(){return f}),t.d(a,"d",function(){return O}),t.d(a,"M",function(){return E}),t.d(a,"n",function(){return g}),t.d(a,"z",function(){return j}),t.d(a,"S",function(){return P}),t.d(a,"zb",function(){return C}),t.d(a,"yb",function(){return v}),t.d(a,"xb",function(){return h}),t.d(a,"wb",function(){return S}),t.d(a,"bb",function(){return F}),t.d(a,"A",function(){return w}),t.d(a,"vb",function(){return V}),t.d(a,"y",function(){return L}),t.d(a,"eb",function(){return R}),t.d(a,"tb",function(){return D}),t.d(a,"V",function(){return x}),t.d(a,"ub",function(){return I}),t.d(a,"f",function(){return y}),t.d(a,"r",function(){return q}),t.d(a,"t",function(){return A}),t.d(a,"Ab",function(){return N}),t.d(a,"x",function(){return T}),t.d(a,"qb",function(){return G}),t.d(a,"j",function(){return B}),t.d(a,"sb",function(){return M}),t.d(a,"B",function(){return z}),t.d(a,"R",function(){return K}),t.d(a,"a",function(){return U}),t.d(a,"gb",function(){return k}),t.d(a,"X",function(){return H}),t.d(a,"ob",function(){return _}),t.d(a,"cb",function(){return W}),t.d(a,"rb",function(){return J}),t.d(a,"pb",function(){return Y}),t.d(a,"p",function(){return Q}),t.d(a,"W",function(){return X}),t.d(a,"nb",function(){return Z}),t.d(a,"s",function(){return $}),t.d(a,"mb",function(){return ee}),t.d(a,"hb",function(){return ae}),t.d(a,"T",function(){return te}),t.d(a,"fb",function(){return ne}),t.d(a,"k",function(){return re}),t.d(a,"q",function(){return oe}),t.d(a,"H",function(){return ie}),t.d(a,"L",function(){return ce}),t.d(a,"w",function(){return se}),t.d(a,"o",function(){return le}),t.d(a,"g",function(){return ue}),t.d(a,"u",function(){return pe}),t.d(a,"Y",function(){return de}),t.d(a,"Z",function(){return me}),t.d(a,"U",function(){return be}),t.d(a,"i",function(){return fe}),t.d(a,"jb",function(){return Oe}),t.d(a,"lb",function(){return Ee}),t.d(a,"ab",function(){return ge}),t.d(a,"h",function(){return je}),t.d(a,"ib",function(){return Pe}),t.d(a,"m",function(){return Ce}),t.d(a,"l",function(){return ve}),t.d(a,"D",function(){return he}),t.d(a,"C",function(){return Se}),t.d(a,"kb",function(){return Fe}),t.d(a,"c",function(){return we}),t.d(a,"e",function(){return Ve}),t.d(a,"O",function(){return Le}),t.d(a,"Q",function(){return Re}),t.d(a,"b",function(){return De}),t.d(a,"db",function(){return xe});var n=t(100),r=t(2),o=t(99);function i(){return Object(r.wb)("/mcg")}function c(e,a){Object(r.sc)(i().post("/gerarLancamentosFolhaPagamento",e),a)}function s(e,a){Object(r.sc)(i().post("/integrarFolhaPagamento",e),a)}function l(e,a){Object(r.sc)(i().post("/importar",e),a)}function u(e,a){const t=new FormData;t.append("empresa.id",String(e.empresa.id)),t.append("importarDuplicados",String(e.importarDuplicados)),t.append("importarLancamentosCardinal",String(e.importarLancamentosCardinal));var o,c=Object(n.a)(e.arquivos);try{for(c.s();!(o=c.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(s){c.e(s)}finally{c.f()}Object(r.sc)(i().post("/importarLancamentoCSV",t),a)}function p(e,a){const t=new FormData;t.append("empresa.id",String(e.empresa.id));var o,c=Object(n.a)(e.arquivos);try{for(c.s();!(o=c.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(s){c.e(s)}finally{c.f()}Object(r.sc)(i().post("/importarLancamentoPadraoCSV",t),a)}function d(e,a){const t=new FormData;t.append("grupoHistoricoDestino.id",String(e.grupoHistoricoDestino.id));var o,c=Object(n.a)(e.arquivos);try{for(c.s();!(o=c.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(s){c.e(s)}finally{c.f()}Object(r.sc)(i().post("/importarHistoricoCSV",t),a)}function m(e,a){const t=new FormData;t.append("idEmpresa",String(e.idEmpresa)),t.append("grupoPlanoContaDestino.id",String(e.grupoPlanoContaDestino.id));var o,c=Object(n.a)(e.arquivos);try{for(c.s();!(o=c.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(s){c.e(s)}finally{c.f()}Object(r.sc)(i().post("/importarPlanoContaCSV",t),a)}function b(e,a){Object(r.sc)(i().post("/importarHistorico",e),a)}function f(e,a){Object(r.sc)(i().post("/importarPlanoConta",e),a)}function O(e,a){Object(r.sc)(i().get("/buscarConfigLivroFolhaMCG/"+e),a)}function E(e,a){Object(r.sc)(i().post("/integracaoFiscalContabil",e),a)}function g(e,a,t){Object(r.sc)(i().post("/encerrarContas",{contaResultadoEncerramento:e,force:a}),t)}function j(e,a){Object(r.sc)(i().get("/getDataUltimaContaEncerrada/"+e),a)}function P(e,a){Object(r.sc)(i().post("/limparEncerramentoContaResultadoApos",e),a)}function C(e,a){Object(r.sc)(i().post("/validarReferenciaSPEDECFIrpjCsll",e),a)}function v(e,a){Object(r.sc)(i().post("/validarReferenciaSPEDECFImuneIsenta",e),a)}function h(e,a){Object(r.sc)(i().post("/validarRefRemuneracaoSocio",e),a)}function S(e,a){Object(r.sc)(i().post("/validarQuadroSocietario",e),a)}function F(e,a){Object(r.sc)(i().get("/obterLucroPrejuizoClassificacao/"+e),a)}function w(e,a){Object(r.sc)(i().post("/getSaldo",e),a)}function V(e,a){Object(r.sc)(i().post("/validarDadosSpedECF",e),a)}function L(e,a,t){Object(r.sc)(Object(o.i)().post("/gerarSpedECF",{usuario:e,ecfExportacaoParam:a}),t)}function R(e,a){Object(r.sc)(i().post("/recuperarLancamentoConta",e),a)}function D(e,a){Object(r.sc)(i().post("/transferirLancamentoConta",e),a)}function x(e,a){Object(r.sc)(i().post("/obterBancoPlanoConta",e),a)}function I(e,a){Object(r.sc)(i().get("/validarConfigLivroFolha/"+e),a)}function y(e,a){Object(r.sc)(i().get("/changeLivroFolha/"+e),a)}function q(e,a){Object(r.sc)(i().post("/fecharRestaurar",e),a)}function A(e,a){Object(r.sc)(i().post("/forceFecharRestaurar",e),a)}function N(e,a){Object(r.sc)(i().post("/verificarErros",e),a)}function T(e,a){const t=new FormData;if(t.append("usuario.id",String(e.usuario.id)),e.arquivoRTFEscrituracaoSubstituida){var o,c=Object(n.a)(e.arquivoRTFEscrituracaoSubstituida);try{for(c.s();!(o=c.n()).done;){const e=o.value;t.append("arquivoRTFEscrituracaoSubstituida",e.file,e.nomeArquivo)}}catch(s){c.e(s)}finally{c.f()}}for(const n in e)"arquivoRTFEscrituracaoSubstituida"!==n&&"usuario"!==n&&null!==e[n]&&t.append(n,e[n]);Object(r.sc)(i().post("/gerarSpedContabil",t),a)}function G(e,a){Object(r.sc)(i().post("/salvarLucroPrejuizoClassificacao",e),a)}function B(e,a){Object(r.sc)(i().post("/consultarMovimentacao",e),a)}function M(e,a){Object(r.sc)(i().post("/totalizadorLancamento",e),a)}function z(e,a){Object(r.sc)(i().post("/getSaldoAnterior",e),a)}function K(e,a){Object(r.sc)(i().post("/isDataEncerrada",e),a)}function U(e,a){Object(r.sc)(i().post("/abrirContas",e),a)}function k(e,a){Object(r.sc)(i().post("/removeLancamentoPeriodo",e),a)}function H(e,a){Object(r.sc)(i().get("/obterContasClassificacaoIndireto/"+e),a)}function _(e,a){Object(r.sc)(i().post("/salvarClassificacaoIndireto",e),a)}function W(e,a){Object(r.sc)(i().get("/obterMutacaoPatrimonioLiquido/"+e),a)}function J(e,a){Object(r.sc)(i().post("/salvarMutacaoPatrimonioLiquido",e),a)}function Y(e,a){Object(r.sc)(i().post("/salvarContaResultado",e),a)}function Q(e,a){Object(r.sc)(i().post("/excluirContaResultado",e),a)}function X(e,a){Object(r.sc)(i().get("/obterContasClassificacaoDireto/"+e),a)}function Z(e,a){Object(r.sc)(i().post("/salvarClassificacaoDireto",e),a)}function $(e,a){Object(r.sc)(i().post("/findSubGrupo",e),a)}function ee(e,a,t){Object(r.sc)(i().post("/removerTodosPlanosConta",{idGrupoPlanoConta:e,usuario:a}),t)}function ae(e,a,t,n){Object(r.sc)(i().post("/removeList",{listaPlanoConta:e,apagarFilha:a,usuario:t}),n)}function te(e,a){Object(r.sc)(i().post("/listSubGrupo",e),a)}function ne(e,a,t,n){Object(r.sc)(i().post("/referenciarContas",{idsPlanoConta:e,idPlanoContaReferencial:a,idPlanoContaReferencialECF:t}),n)}function re(e,a,t,n){Object(r.sc)(i().post("/desvincularContas",{idsPlanoConta:e,idPlanoContaReferencial:a,idPlanoContaReferencialECF:t}),n)}function oe(e,a,t){Object(r.sc)(i().post("/existeLancamentoEmContaAnalitica",{idPlanoConta:e,idEmpresa:a}),t)}function ie(e,a){const t=new FormData;t.append("idGerEmpresa",String(e.idGerEmpresa)),t.append("tipoImportacao",String(e.tipoImportacao)),t.append("sobescrever",String(e.sobescrever)),t.append("versaoSuperiorA2",String(e.versaoSuperiorA2)),t.append("arquivo",e.arquivo[0].file,e.arquivo[0].nomeArquivo),!1!==e.versaoSuperiorA2||Object(r.Yb)(e.dtInicial)||Object(r.Yb)(e.dtFinal)||(t.append("dtInicial",e.dtInicial),t.append("dtFinal",e.dtFinal)),Object(r.sc)(i().post("/importarLancamentoMCG",t),a)}function ce(e,a){const t=new FormData;t.append("empresa.id",String(e.empresa.id)),t.append("usuario.id",String(e.usuario.id));var o,c=Object(n.a)(e.arquivos);try{for(c.s();!(o=c.n()).done;){const e=o.value;t.append("arquivos",e.file,e.nomeArquivo)}}catch(s){c.e(s)}finally{c.f()}Object(r.sc)(i().post("/importarSpedContabil",t),a)}function se(e,a){const t=new FormData;t.append("refInicial",e.refInicial),t.append("refFinal",e.refFinal),t.append("idGerEmpresa",String(e.idGerEmpresa)),t.append("usuario.id",String(e.usuario.id)),Object(r.Yb)(e.arquivoSFP)||t.append("arquivoSFP",e.arquivoSFP[0].file,e.arquivoSFP[0].nomeArquivo),Object(r.sc)(i().post("/gerarManadContabil",t),a)}function le(e,a){Object(r.sc)(i().post("/evolucaoContaContabilGraf",e),a)}function ue(e,a){Object(r.sc)(i().post("/composicaoReceitaDespesasGraf",e),a)}function pe(e,a){Object(r.sc)(i().post("/gerarFCONTContabil",e),a)}function de(e,a,t){const n=new FormData;n.append("idBancoMCG",a),n.append("arquivoSelecionado",e[0].file,e[0].nomeArquivo),Object(r.sc)(i().post("/obterDadosArquivoExtrato",n),t)}function me(e,a,t,n,o,c){const s=new FormData;s.append("idGrupoPlanoConta",String(e)),s.append("idEmpresa",String(a)),s.append("idBancoMCG",String(t)),s.append("dtInicial",String(n)),s.append("dtFinal",String(o)),Object(r.sc)(i().post("/obterDadosConciliacaoBancariaPeriodo",s),c)}function be(e,a){Object(r.sc)(i().post("/obterBancoListPlanoConta",e),a)}function fe(e,a){Object(r.sc)(i().post("/conciliarLancamentosExtrato",e),a)}function Oe(e,a){Object(r.sc)(i().post("/removerConciliarLancamentosExtrato",e),a)}function Ee(e,a){Object(r.sc)(i().post("/removerLancamentosExtratoBancario",e),a)}function ge(e,a,t,n,o,c,s,l){const u=new FormData;u.append("idGrupoPlanoConta",String(e)),u.append("idEmpresa",String(a)),u.append("dtInicial",String(t)),u.append("dtFinal",String(n)),u.append("historico",String(o)),u.append("valor",String(c)),u.append("operacaoConsultaValor",String(s)),Object(r.sc)(i().post("/obterLancamentosSaldoPeriodo",u),l)}function je(e,a){Object(r.sc)(i().post("/conciliarLancamentosConta",e),a)}function Pe(e,a){Object(r.sc)(i().post("/removerConciliarLancamentosConta",e),a)}function Ce(e,a){Object(r.sc)(i().get("/eLalurAContas/"+e),a)}function ve(e,a){Object(r.sc)(i().get("/eLacsAContas/"+e),a)}function he(e,a){Object(r.sc)(i().post("/getSaldoDebito",e),a)}function Se(e,a){Object(r.sc)(i().post("/getSaldoCredito",e),a)}function Fe(e,a){Object(r.sc)(i().post("/removerLancamentoLote",e),a)}function we(e,a){Object(r.sc)(i().post("/atualizaCalculoIrpjCsll",e),a)}function Ve(e,a){Object(r.sc)(i().post("/buscarLancamentosHonorarios",e),a)}function Le(e,a,t){Object(r.sc)(i().post("/integrarHonorarios",{integracaoHonorariosParam:e,lancamentos:a}),t)}function Re(e,a){Object(r.sc)(i().post("/isAlteraCalculoIRPJorCSLL",e),a)}function De(e,a,t){Object(r.sc)(i().post("/alterarPlanoContaNaturezaConfig",{idsPlanoConta:e,enumPlanoContaNaturezaConta:a}),t)}function xe(e,a){Object(r.sc)(i().get("/prepararContaResultado/"+e),a)}},834:function(e,a,t){"use strict";var n=t(6),r=t(0),o=t.n(r),i=t(19),c=t(2),s=t(836);a.a=(e=>{const a=Object(i.c)(e=>e.globalReducer);return o.a.createElement(c.K,Object.assign({},e,{isPrependLabel:!0,searchViewProps:Object(n.a)(Object(n.a)({},e.searchViewProps),{},{filtroContaResultado:e.filtroContaResultado,hideExtraFields:!0,useDefaultSelectRow:!0}),inputSearchProps:Object(n.a)(Object(n.a)({},e.inputSearchProps),{},{columns:[{dataField:"conta",text:"Conta"},{dataField:"analitica",text:"Anal\xedtica"},{dataField:"codigoReduzido",text:"C.R."},{dataField:"descricao",text:"Descri\xe7\xe3o"}],dtoClassName:s.a,searchExpressions:()=>{const t=[];return e.analitica&&t.push({alias:"c",conditionalGroup:"c_",fieldName:"analitica",value:!0}),e.sintetica&&t.push({alias:"c",conditionalGroup:"c_",fieldName:"analitica",value:!1}),e.filtroContaResultado&&e.filtroContaResultado.forEach(e=>{t.push(e)}),[{conditionalGroup:"g_",expressions:t,fieldName:"grupoPlanoConta.id",value:e.idGrupoPlanoConta||a.globalParameter.grupoPlanoConta.id}]},searchViewId:"PlanoContaSearchView"}),label:e.label?e.label:"Plano de Contas",placeholder:e.placeholder?e.placeholder:"Informe o Plano de Contas",type:c.L.INPUT_SEARCH}))})},836:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n="br.com.projetusinformatica.calima.ger.model.dto.planoconta"}}]);
//# sourceMappingURL=60.74cee7c8.chunk.js.map