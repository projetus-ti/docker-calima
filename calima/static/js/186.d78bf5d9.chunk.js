(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1442:function(e,a,t){"use strict";t.r(a),t.d(a,"REPORT_EVENT",function(){return O}),t.d(a,"REPORT_TITLE",function(){return E}),t.d(a,"default",function(){return P});var r=t(6),n=t(0),i=t.n(n),l=t(98),c=t(19),o=t(30),s=t(2),u=t(815),p=t(824),b=t(827),d=t(821),m=t(828),f=t(837);const O="printListagemCodigoEmitente",E="Listagem de C\xf3digos de Emitente",j=Object(r.a)(Object(r.a)({},Object(b.a)(E,O,f.a,d.b.value)),{},{dtFinal:"31/12/2017",dtInicial:"01/12/2017"});function P(e){const a=Object(o.g)(),t=Object(l.b)({mode:"onBlur"}),r=Object(c.c)(e=>e.globalReducer);return Object(n.useEffect)(()=>{if(null!==r.globalParameter.empresa){const e=r.globalParameter.empresa.id;setTimeout(()=>{t.setValue("idGerEmpresa",e)},800)}},[]),i.a.createElement(s.ib,Object.assign({},e,{title:E,useGlobalParameter:!0,globalParameter:r.globalParameter,dependencies:[()=>Object(u.a)(r.globalParameter),()=>Object(p.a)(r.globalParameter)]}),i.a.createElement(m.a,{formProps:t,printerData:j,history:a,extraConfigOpened:!0},i.a.createElement(s.K,{formProps:t,id:"idGerEmpresa",hidden:!0})))}},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},821:function(e,a,t){"use strict";t.d(a,"e",function(){return r}),t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i}),t.d(a,"c",function(){return l}),t.d(a,"d",function(){return c}),t.d(a,"f",function(){return o});const r={label:"",value:"0"},n={label:"",value:"1"},i={label:"",value:"2"},l={label:"",value:"3"},c={label:"",value:"4"},o={label:"",value:"6"}},823:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Gr\xe1fico - PDF",value:"grafico"},n=[{label:"Texto - CalimaDesk",value:"texto"},r,{label:"E-mail - PDF",value:"email"}];a.b=n},824:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMLF||(a="A empresa fiscal da empresa selecionada deve estar configurada. Para configurar acesse:\nM\xf3dulo Fiscal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return r})},827:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var r=t(821),n=t(823);function i(e,a,t,i=r.e.value,l="MLF"){return{anoLabel:"Ano",classKey:t,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:l,pageNumber:"1",passObj:{},printerConfigTypeEnum:i,printerDataEmail:{},printerTypeEnum:n.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,t){"use strict";var r=t(6),n=t(200),i=t(0),l=t.n(i),c=t(395),o=t(198),s=t(148),u=t(786),p=t(2),b=t(821),d=t(823),m=t(256);a.a=(e=>{Object(i.useEffect)(()=>{const a=e.printerData,t=a.printerTypeEnum,n=a.printerConfigTypeEnum;let i=Object(r.a)(Object(r.a)({},e.printerData),{},{printerTypeEnum:t&&t.length>0?t[0]:d.a.value});const l=Object(p.zb)(),c=Object(p.zb)();switch(n){case b.a.value:i=Object(r.a)(Object(r.a)({},i),{},{dtInicial:Object(p.Nb)(l.toDate())});break;case b.b.value:i=Object(r.a)(Object(r.a)({},i),{},{dtFinal:Object(p.Nb)(c.endOf("month").toDate()),dtInicial:Object(p.Nb)(l.toDate())});break;case b.c.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaInicial:Object(p.Mb)(l.toDate(),p.V)});break;case b.d.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaFinal:Object(p.Mb)(l.toDate(),p.V),referenciaInicial:Object(p.Mb)(c.toDate(),p.V)});break;case b.f.value:i=Object(r.a)(Object(r.a)({},i),{},{ano:String(l.year())})}e.formProps.reset(i)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=l.a.createElement(p.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.DATE}),t=e.printerData.printerConfigTypeEnum===b.a.value?a:null,f=e.printerData.printerConfigTypeEnum===b.b.value?l.a.createElement(l.a.Fragment,null,a,l.a.createElement(p.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.DATE})):null,O=l.a.createElement(p.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.REFERENCE}),E=e.printerData.printerConfigTypeEnum===b.c.value?O:null,j=e.printerData.printerConfigTypeEnum===b.d.value?l.a.createElement(l.a.Fragment,null,O,l.a.createElement(p.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.REFERENCE})):null,P=e.printerData.printerConfigTypeEnum===b.f.value?l.a.createElement(p.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:p.L.MASK}):null;return l.a.createElement(c.a,{noValidate:!0},e.children,l.a.createElement(p.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},l.a.createElement(p.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},l.a.createElement(p.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),l.a.createElement(p.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:p.L.NUMBER}),l.a.createElement(o.a,{className:"mb-3 mt-3"},l.a.createElement(s.a,null,l.a.createElement(u.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),t,f,E,j,P,l.a.createElement(p.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:d.b,selectProps:{isClearable:!1}},type:p.L.DROP_DOWN}))),l.a.createElement(p.R,{handleSubmit:e.formProps.handleSubmit((a,t)=>{t.preventDefault();let i=[];if(e.validateExtras&&(i=e.validateExtras(e.printerData,a)),i&&i.length){const e={message:l.a.createElement(p.C,{erros:i}),type:p.f.ERROR};p.pb.emit(p.a.SHOW,e)}else e.printerData.passObj=a,Object(p.tc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(r.a)(Object(r.a)({},p.I),{},{delay:3e3})),Object(m.c)(e.printerData,{errorFunction:e=>{Object(p.tc)(e,p.A)},thenFunction:()=>{Object(m.a)({errorFunction:e=>{Object(p.tc)(e,p.A)},thenFunction:e=>{const a=e.headers["content-disposition"],t=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(n.saveAs)(e.data,t)}})}})}),hideCancelButton:!0}))})},837:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="relacaoentradasaidarelpass"}}]);
//# sourceMappingURL=186.d78bf5d9.chunk.js.map