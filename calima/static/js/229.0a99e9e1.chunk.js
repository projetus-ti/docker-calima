(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1522:function(e,a,t){"use strict";t.r(a);var r=t(6),n=t(0),l=t.n(n),i=t(98),o=t(19),c=t(30),s=t(2),p=t(815),u=t(824),b=t(827),d=t(821);const m={label:"COFINS",value:1},f={label:"CSLL",value:2},O={label:"IRPJ",value:6},P={label:"PIS",value:7},j=[O,f,P,m];var E=t(828);const v="Mem\xf3ria Imposto";t.d(a,"default",function(){return I});const D=Object(r.a)(Object(r.a)({},Object(b.a)(v,"printMemoriaImposto","memoriaimpostorelpass",d.c.value)),{},{refInicial:"201712"});function I(e){const a=Object(o.c)(e=>e.globalReducer),t=Object(c.g)(),b=Object(i.b)({mode:"onBlur"});Object(n.useEffect)(()=>{null!==a.globalParameter.empresa&&setTimeout(()=>{b.setValue("idGerEmpresa",a.globalParameter.empresa.id),b.setValue("tipoImpostoInt",O.value),b.setValue("title",v+" IRPJ"),D.title="".concat(v," IRPJ")},800)},[]);return l.a.createElement(s.ib,Object.assign({},e,{title:"Memoria de c\xe1lculo de Imposto",dependencies:[()=>Object(p.a)(a.globalParameter),()=>Object(u.a)(a.globalParameter)]}),l.a.createElement(E.a,{formProps:b,printerData:D,history:t},l.a.createElement(s.K,{id:"tipoImpostoInt",label:"Tipo de Imposto",isPrependLabel:!0,placeholder:"Selecione o tipo de Imposto",formProps:Object(r.a)(Object(r.a)({},b),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:j,selectProps:{isClearable:!1}},onChange:()=>{switch(b.getValues().tipoImpostoInt){case O.value:b.setValue("title",v+" IRPJ"),D.title="".concat(v," IRPJ");break;case f.value:b.setValue("title",v+" CSLL"),D.title="".concat(v," CSLL");break;case P.value:b.setValue("title",v+" PIS"),D.title="".concat(v," PIS");break;case m.value:b.setValue("title",v+" COFINS"),D.title="".concat(v," COFINS");break;default:b.setValue("title",v),D.title=v}},type:s.L.DROP_DOWN}),l.a.createElement(s.K,{formProps:b,id:"idGerEmpresa",hidden:!0})))}},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},821:function(e,a,t){"use strict";t.d(a,"e",function(){return r}),t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l}),t.d(a,"c",function(){return i}),t.d(a,"d",function(){return o}),t.d(a,"f",function(){return c});const r={label:"",value:"0"},n={label:"",value:"1"},l={label:"",value:"2"},i={label:"",value:"3"},o={label:"",value:"4"},c={label:"",value:"6"}},823:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Gr\xe1fico - PDF",value:"grafico"},n=[{label:"Texto - CalimaDesk",value:"texto"},r,{label:"E-mail - PDF",value:"email"}];a.b=n},824:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMLF||(a="A empresa fiscal da empresa selecionada deve estar configurada. Para configurar acesse:\nM\xf3dulo Fiscal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return r})},827:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t(821),n=t(823);function l(e,a,t,l=r.e.value,i="MLF"){return{anoLabel:"Ano",classKey:t,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:i,pageNumber:"1",passObj:{},printerConfigTypeEnum:l,printerDataEmail:{},printerTypeEnum:n.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,t){"use strict";var r=t(6),n=t(200),l=t(0),i=t.n(l),o=t(395),c=t(198),s=t(148),p=t(786),u=t(2),b=t(821),d=t(823),m=t(256);a.a=(e=>{Object(l.useEffect)(()=>{const a=e.printerData,t=a.printerTypeEnum,n=a.printerConfigTypeEnum;let l=Object(r.a)(Object(r.a)({},e.printerData),{},{printerTypeEnum:t&&t.length>0?t[0]:d.a.value});const i=Object(u.zb)(),o=Object(u.zb)();switch(n){case b.a.value:l=Object(r.a)(Object(r.a)({},l),{},{dtInicial:Object(u.Nb)(i.toDate())});break;case b.b.value:l=Object(r.a)(Object(r.a)({},l),{},{dtFinal:Object(u.Nb)(o.endOf("month").toDate()),dtInicial:Object(u.Nb)(i.toDate())});break;case b.c.value:l=Object(r.a)(Object(r.a)({},l),{},{referenciaInicial:Object(u.Mb)(i.toDate(),u.V)});break;case b.d.value:l=Object(r.a)(Object(r.a)({},l),{},{referenciaFinal:Object(u.Mb)(i.toDate(),u.V),referenciaInicial:Object(u.Mb)(o.toDate(),u.V)});break;case b.f.value:l=Object(r.a)(Object(r.a)({},l),{},{ano:String(i.year())})}e.formProps.reset(l)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=i.a.createElement(u.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE}),t=e.printerData.printerConfigTypeEnum===b.a.value?a:null,f=e.printerData.printerConfigTypeEnum===b.b.value?i.a.createElement(i.a.Fragment,null,a,i.a.createElement(u.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE})):null,O=i.a.createElement(u.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE}),P=e.printerData.printerConfigTypeEnum===b.c.value?O:null,j=e.printerData.printerConfigTypeEnum===b.d.value?i.a.createElement(i.a.Fragment,null,O,i.a.createElement(u.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE})):null,E=e.printerData.printerConfigTypeEnum===b.f.value?i.a.createElement(u.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:u.L.MASK}):null;return i.a.createElement(o.a,{noValidate:!0},e.children,i.a.createElement(u.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},i.a.createElement(u.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},i.a.createElement(u.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),i.a.createElement(u.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:u.L.NUMBER}),i.a.createElement(c.a,{className:"mb-3 mt-3"},i.a.createElement(s.a,null,i.a.createElement(p.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),t,f,P,j,E,i.a.createElement(u.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:d.b,selectProps:{isClearable:!1}},type:u.L.DROP_DOWN}))),i.a.createElement(u.R,{handleSubmit:e.formProps.handleSubmit((a,t)=>{t.preventDefault();let l=[];if(e.validateExtras&&(l=e.validateExtras(e.printerData,a)),l&&l.length){const e={message:i.a.createElement(u.C,{erros:l}),type:u.f.ERROR};u.pb.emit(u.a.SHOW,e)}else e.printerData.passObj=a,Object(u.tc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(r.a)(Object(r.a)({},u.I),{},{delay:3e3})),Object(m.c)(e.printerData,{errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:()=>{Object(m.a)({errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:e=>{const a=e.headers["content-disposition"],t=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(n.saveAs)(e.data,t)}})}})}),hideCancelButton:!0}))})}}]);
//# sourceMappingURL=229.0a99e9e1.chunk.js.map