(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1660:function(e,a,t){"use strict";t.r(a);var r=t(6),n=t(0),i=t.n(n),l=t(98),o=t(19),c=t(30),s=t(2),p=t(815),u=t(824),b=t(827),d=t(821),m=t(828);const f="Resumo Imposto";t.d(a,"default",function(){return j});const O=Object(r.a)(Object(r.a)({},Object(b.a)(f,"printResumoImposto","resumoimpostorelpass",d.c.value)),{},{refInicial:"201712"});function j(e){const a=Object(o.c)(e=>e.globalReducer),t=Object(c.g)(),r=Object(l.b)({mode:"onBlur"});return Object(n.useEffect)(()=>{null!==a.globalParameter.empresa&&setTimeout(()=>{r.setValue("idGerEmpresa",a.globalParameter.empresa.id)},800)},[]),i.a.createElement(s.ib,Object.assign({},e,{title:f,dependencies:[()=>Object(p.a)(a.globalParameter),()=>Object(u.a)(a.globalParameter)]}),i.a.createElement(m.a,{formProps:r,printerData:O,history:t,extraConfigOpened:!0},i.a.createElement(s.K,{formProps:r,id:"idGerEmpresa",hidden:!0})))}},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},821:function(e,a,t){"use strict";t.d(a,"e",function(){return r}),t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i}),t.d(a,"c",function(){return l}),t.d(a,"d",function(){return o}),t.d(a,"f",function(){return c});const r={label:"",value:"0"},n={label:"",value:"1"},i={label:"",value:"2"},l={label:"",value:"3"},o={label:"",value:"4"},c={label:"",value:"6"}},823:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Gr\xe1fico - PDF",value:"grafico"},n=[{label:"Texto - CalimaDesk",value:"texto"},r,{label:"E-mail - PDF",value:"email"}];a.b=n},824:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMLF||(a="A empresa fiscal da empresa selecionada deve estar configurada. Para configurar acesse:\nM\xf3dulo Fiscal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return r})},827:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var r=t(821),n=t(823);function i(e,a,t,i=r.e.value,l="MLF"){return{anoLabel:"Ano",classKey:t,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:l,pageNumber:"1",passObj:{},printerConfigTypeEnum:i,printerDataEmail:{},printerTypeEnum:n.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,t){"use strict";var r=t(6),n=t(200),i=t(0),l=t.n(i),o=t(395),c=t(198),s=t(148),p=t(786),u=t(2),b=t(821),d=t(823),m=t(256);a.a=(e=>{Object(i.useEffect)(()=>{const a=e.printerData,t=a.printerTypeEnum,n=a.printerConfigTypeEnum;let i=Object(r.a)(Object(r.a)({},e.printerData),{},{printerTypeEnum:t&&t.length>0?t[0]:d.a.value});const l=Object(u.zb)(),o=Object(u.zb)();switch(n){case b.a.value:i=Object(r.a)(Object(r.a)({},i),{},{dtInicial:Object(u.Nb)(l.toDate())});break;case b.b.value:i=Object(r.a)(Object(r.a)({},i),{},{dtFinal:Object(u.Nb)(o.endOf("month").toDate()),dtInicial:Object(u.Nb)(l.toDate())});break;case b.c.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaInicial:Object(u.Mb)(l.toDate(),u.V)});break;case b.d.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaFinal:Object(u.Mb)(l.toDate(),u.V),referenciaInicial:Object(u.Mb)(o.toDate(),u.V)});break;case b.f.value:i=Object(r.a)(Object(r.a)({},i),{},{ano:String(l.year())})}e.formProps.reset(i)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=l.a.createElement(u.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE}),t=e.printerData.printerConfigTypeEnum===b.a.value?a:null,f=e.printerData.printerConfigTypeEnum===b.b.value?l.a.createElement(l.a.Fragment,null,a,l.a.createElement(u.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE})):null,O=l.a.createElement(u.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE}),j=e.printerData.printerConfigTypeEnum===b.c.value?O:null,E=e.printerData.printerConfigTypeEnum===b.d.value?l.a.createElement(l.a.Fragment,null,O,l.a.createElement(u.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE})):null,P=e.printerData.printerConfigTypeEnum===b.f.value?l.a.createElement(u.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:u.L.MASK}):null;return l.a.createElement(o.a,{noValidate:!0},e.children,l.a.createElement(u.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},l.a.createElement(u.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},l.a.createElement(u.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),l.a.createElement(u.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:u.L.NUMBER}),l.a.createElement(c.a,{className:"mb-3 mt-3"},l.a.createElement(s.a,null,l.a.createElement(p.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),t,f,j,E,P,l.a.createElement(u.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:d.b,selectProps:{isClearable:!1}},type:u.L.DROP_DOWN}))),l.a.createElement(u.R,{handleSubmit:e.formProps.handleSubmit((a,t)=>{t.preventDefault();let i=[];if(e.validateExtras&&(i=e.validateExtras(e.printerData,a)),i&&i.length){const e={message:l.a.createElement(u.C,{erros:i}),type:u.f.ERROR};u.pb.emit(u.a.SHOW,e)}else e.printerData.passObj=a,Object(u.tc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(r.a)(Object(r.a)({},u.I),{},{delay:3e3})),Object(m.c)(e.printerData,{errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:()=>{Object(m.a)({errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:e=>{const a=e.headers["content-disposition"],t=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(n.saveAs)(e.data,t)}})}})}),hideCancelButton:!0}))})}}]);
//# sourceMappingURL=233.8e05c02f.chunk.js.map