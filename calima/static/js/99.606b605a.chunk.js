(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1406:function(e,a,t){"use strict";t.r(a),t.d(a,"REPORT_EVENT",function(){return L}),t.d(a,"REPORT_TITLE",function(){return y}),t.d(a,"default",function(){return T});var n=t(6),r=t(0),l=t.n(r),i=t(98),o=t(20),c=t(35),u=t(198),s=t(148),b=t(393),p=t(786),d=t(394),m=t(2),f=t(815),E=t(823),O=t(827),v=t(821),P=t(842),j=t(846),g=t(828),D=t(837);const L="printRelacaoSaidaAliquota",y="Rela\xe7\xe3o de Sa\xeddas Por Al\xedquota",R=Object(n.a)(Object(n.a)({},Object(O.a)(y,L,D.a,v.b.value)),{},{dtFinal:"31/12/2017",dtInicial:"01/12/2017"});function T(e){const a=Object(c.g)(),t=Object(i.b)({mode:"onBlur"}),n=Object(o.c)(e=>e.globalReducer);return Object(r.useEffect)(()=>{if(null!==n.globalParameter.empresa){const e=n.globalParameter.empresa.id;setTimeout(()=>{t.setValue("idGerEmpresa",e),t.setValue("sintetico",!1)},800)}},[]),l.a.createElement(m.hb,Object.assign({},e,{title:y,useGlobalParameter:!0,globalParameter:n.globalParameter,dependencies:[()=>Object(f.a)(n.globalParameter),()=>Object(E.a)(n.globalParameter)]}),l.a.createElement(g.a,{formProps:t,printerData:R,history:a},l.a.createElement(m.K,{formProps:t,id:"idGerEmpresa",hidden:!0}),l.a.createElement(u.a,null,l.a.createElement(s.a,null,l.a.createElement(b.a,{style:{marginRight:20}},"Modelo do Relat\xf3rio"),l.a.createElement(p.a,{id:"sinteticoFalse",value:"false",label:P.a.label,inline:!0,type:"radio",name:"sintetico",innerRef:t.register}),l.a.createElement(p.a,{id:"sinteticoTrue",inline:!0,label:P.g.label,name:"sintetico",value:"true",type:"radio",innerRef:t.register}))),l.a.createElement(u.a,null,l.a.createElement(s.a,null,l.a.createElement(m.K,{id:"origemLancamentoInt",label:"Origem do Lan\xe7amento",isPrependLabel:!0,placeholder:"Informe a Origem do Lan\xe7amento",formProps:t,inputDropDownProps:{optionsProvider:j.a},type:m.L.DROP_DOWN}))),l.a.createElement(d.a,{tag:u.a},l.a.createElement(s.a,null,l.a.createElement(p.a,{id:"subtotalDiario",innerRef:t.register,label:"Exibir Subtotais Por Dia",name:"subtotalDiario",type:"switch"})))))}},815:function(e,a,t){"use strict";function n(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return n})},821:function(e,a,t){"use strict";t.d(a,"e",function(){return n}),t.d(a,"a",function(){return r}),t.d(a,"b",function(){return l}),t.d(a,"c",function(){return i}),t.d(a,"d",function(){return o}),t.d(a,"f",function(){return c});const n={label:"",value:"0"},r={label:"",value:"1"},l={label:"",value:"2"},i={label:"",value:"3"},o={label:"",value:"4"},c={label:"",value:"6"}},822:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n={label:"Gr\xe1fico - PDF",value:"grafico"},r=[{label:"Texto - CalimaDesk",value:"texto"},n,{label:"E-mail - PDF",value:"email"}];a.b=r},823:function(e,a,t){"use strict";function n(e){let a=null;return e.empresaMLF||(a="A empresa fiscal da empresa selecionada deve estar configurada. Para configurar acesse:\nM\xf3dulo Fiscal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return n})},827:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(821),r=t(822);function l(e,a,t,l=n.e.value,i="MLF"){return{anoLabel:"Ano",classKey:t,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:i,pageNumber:"1",passObj:{},printerConfigTypeEnum:l,printerDataEmail:{},printerTypeEnum:r.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,t){"use strict";var n=t(6),r=t(200),l=t(0),i=t.n(l),o=t(395),c=t(198),u=t(148),s=t(786),b=t(2),p=t(821),d=t(822),m=t(256);a.a=(e=>{Object(l.useEffect)(()=>{const a=e.printerData,t=a.printerTypeEnum,r=a.printerConfigTypeEnum;let l=Object(n.a)(Object(n.a)({},e.printerData),{},{printerTypeEnum:t&&t.length>0?t[0]:d.a.value});const i=Object(b.yb)(),o=Object(b.yb)();switch(r){case p.a.value:l=Object(n.a)(Object(n.a)({},l),{},{dtInicial:Object(b.Mb)(i.toDate())});break;case p.b.value:l=Object(n.a)(Object(n.a)({},l),{},{dtFinal:Object(b.Mb)(o.endOf("month").toDate()),dtInicial:Object(b.Mb)(i.toDate())});break;case p.c.value:l=Object(n.a)(Object(n.a)({},l),{},{referenciaInicial:Object(b.Lb)(i.toDate(),b.V)});break;case p.d.value:l=Object(n.a)(Object(n.a)({},l),{},{referenciaFinal:Object(b.Lb)(i.toDate(),b.V),referenciaInicial:Object(b.Lb)(o.toDate(),b.V)});break;case p.f.value:l=Object(n.a)(Object(n.a)({},l),{},{ano:String(i.year())})}e.formProps.reset(l)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=i.a.createElement(b.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{required:!0}}),type:b.L.DATE}),t=e.printerData.printerConfigTypeEnum===p.a.value?a:null,f=e.printerData.printerConfigTypeEnum===p.b.value?i.a.createElement(i.a.Fragment,null,a,i.a.createElement(b.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{required:!0}}),type:b.L.DATE})):null,E=i.a.createElement(b.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{required:!0}}),type:b.L.REFERENCE}),O=e.printerData.printerConfigTypeEnum===p.c.value?E:null,v=e.printerData.printerConfigTypeEnum===p.d.value?i.a.createElement(i.a.Fragment,null,E,i.a.createElement(b.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{required:!0}}),type:b.L.REFERENCE})):null,P=e.printerData.printerConfigTypeEnum===p.f.value?i.a.createElement(b.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:b.L.MASK}):null;return i.a.createElement(o.a,{noValidate:!0},e.children,i.a.createElement(b.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},i.a.createElement(b.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},i.a.createElement(b.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),i.a.createElement(b.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:b.L.NUMBER}),i.a.createElement(c.a,{className:"mb-3 mt-3"},i.a.createElement(u.a,null,i.a.createElement(s.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),t,f,O,v,P,i.a.createElement(b.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(n.a)(Object(n.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:d.b,selectProps:{isClearable:!1}},type:b.L.DROP_DOWN}))),i.a.createElement(b.R,{handleSubmit:e.formProps.handleSubmit((a,t)=>{t.preventDefault();let l=[];if(e.validateExtras&&(l=e.validateExtras(e.printerData,a)),l&&l.length){const e={message:i.a.createElement(b.C,{erros:l}),type:b.f.ERROR};b.ob.emit(b.a.SHOW,e)}else e.printerData.passObj=a,Object(b.sc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(n.a)(Object(n.a)({},b.I),{},{delay:3e3})),Object(m.c)(e.printerData,{errorFunction:e=>{Object(b.sc)(e,b.A)},thenFunction:()=>{Object(m.a)({errorFunction:e=>{Object(b.sc)(e,b.A)},thenFunction:e=>{const a=e.headers["content-disposition"],t=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(r.saveAs)(e.data,t)}})}})}),hideCancelButton:!0}))})},837:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n="relacaoentradasaidarelpass"},842:function(e,a,t){"use strict";t.d(a,"b",function(){return n}),t.d(a,"e",function(){return l}),t.d(a,"k",function(){return i}),t.d(a,"h",function(){return o}),t.d(a,"a",function(){return c}),t.d(a,"g",function(){return u}),t.d(a,"d",function(){return s}),t.d(a,"j",function(){return b}),t.d(a,"c",function(){return p}),t.d(a,"l",function(){return d}),t.d(a,"f",function(){return m}),t.d(a,"i",function(){return f});const n={label:"Anal\xedtico",value:"1"},r={label:"Sint\xe9tico",value:"2"},l={label:"Grau da Conta",value:"3"},i=[n,r],o=[n,r,l],c={label:"Anal\xedtico",value:"analitico"},u={label:"Sint\xe9tico",value:"sintetico"},s={label:"Grau da Conta",value:"grauConta"},b=[c,u,s],p={label:"Anal\xedtico",value:1},d={label:"Sint\xe9tico",value:2},m={label:"Grau da Conta",value:3},f=[p,d,m]},846:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=[{intValue:[0],label:"Manual",value:0},{intValue:[1],label:"Arquivo Digital (XML e TXT)",value:1},{intValue:[2],label:"SINTEGRA",value:2},{intValue:[3],label:"SPED",value:3},{intValue:[4],label:"Integra\xe7\xe3o Rest (JSON)",value:4}]}}]);
//# sourceMappingURL=99.606b605a.chunk.js.map