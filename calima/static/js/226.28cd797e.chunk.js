(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1524:function(e,a,t){"use strict";t.r(a);var r=t(6),n=t(0),i=t.n(n),l=t(98),o=t(19),c=t(30),s=t(394),p=t(198),u=t(148),b=t(786),m=t(2),d=t(815),f=t(824),O=t(827),j=t(821);const E={label:"Sint\xe9tico",value:1},P=[E,{label:"Anal\xedtico",value:2},{label:"Sem movimento CST de entrada",value:3},{label:"Sem movimento CST de sa\xedda",value:4},{label:"CST de sa\xedda isento",value:5}];var v=t(828);const g="demonstrativocstrelpass";t.d(a,"default",function(){return y});const D="printDemonstrativoCst",L="Demonstrativo CST PIS/COFINS";function y(e){const a=Object(c.g)(),t=Object(l.b)({mode:"onBlur"}),y=Object(o.c)(e=>e.globalReducer),S=y.globalParameter.empresaMLF,F=Object(r.a)(Object(r.a)({},Object(O.a)(L,D,g,j.b.value)),{},{dtFinal:Object(m.Nb)(Object(m.jc)(S.referenciaAtual,0)),dtInicial:Object(m.Nb)(Object(m.jc)(S.referenciaAtual,1))});return Object(n.useEffect)(()=>{if(!Object(m.Yb)(y.globalParameter.empresa)){const e=y.globalParameter.empresa.id;setTimeout(()=>{t.setValue("idGerEmpresa",e),t.setValue("formaImpressao",E.value)},800)}},[]),Object(n.useEffect)(()=>{const e=t.getValues().formaImpressao;F.title="".concat(L,1===e?" Sint\xe9tico":2===e?" Anal\xedtico":3===e?" Sem movimento CST de entrada":4===e?" Sem movimento CST de sa\xedda":" CST de Sa\xedda Isento")},[t.getValues().formaImpressao]),i.a.createElement(m.ib,Object.assign({},e,{title:L,useGlobalParameter:!0,globalParameter:y.globalParameter,dependencies:[()=>Object(d.a)(y.globalParameter),()=>Object(f.a)(y.globalParameter)]}),i.a.createElement(v.a,{formProps:t,printerData:F,history:a},i.a.createElement(m.K,{formProps:t,id:"idGerEmpresa",hidden:!0}),i.a.createElement(s.a,{tag:p.a},i.a.createElement(u.a,null,i.a.createElement(b.a,{type:"switch",id:"idexibirESPagDiferentes",name:"exibirESPagDiferentes",label:"Exibir entrada e sa\xedda em p\xe1ginas distintas",innerRef:t.register}))),i.a.createElement(p.a,null,i.a.createElement(u.a,null,i.a.createElement(m.K,{formProps:Object(r.a)(Object(r.a)({},t),{},{validation:{required:!0}}),id:"formaImpressao",inputDropDownProps:{optionsProvider:P},isPrependLabel:!0,label:"Forma de impress\xe3o",placeholder:"Informe a Forma de impress\xe3o",type:m.L.DROP_DOWN})))))}},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},821:function(e,a,t){"use strict";t.d(a,"e",function(){return r}),t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i}),t.d(a,"c",function(){return l}),t.d(a,"d",function(){return o}),t.d(a,"f",function(){return c});const r={label:"",value:"0"},n={label:"",value:"1"},i={label:"",value:"2"},l={label:"",value:"3"},o={label:"",value:"4"},c={label:"",value:"6"}},823:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Gr\xe1fico - PDF",value:"grafico"},n=[{label:"Texto - CalimaDesk",value:"texto"},r,{label:"E-mail - PDF",value:"email"}];a.b=n},824:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMLF||(a="A empresa fiscal da empresa selecionada deve estar configurada. Para configurar acesse:\nM\xf3dulo Fiscal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return r})},827:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var r=t(821),n=t(823);function i(e,a,t,i=r.e.value,l="MLF"){return{anoLabel:"Ano",classKey:t,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:l,pageNumber:"1",passObj:{},printerConfigTypeEnum:i,printerDataEmail:{},printerTypeEnum:n.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,t){"use strict";var r=t(6),n=t(200),i=t(0),l=t.n(i),o=t(395),c=t(198),s=t(148),p=t(786),u=t(2),b=t(821),m=t(823),d=t(256);a.a=(e=>{Object(i.useEffect)(()=>{const a=e.printerData,t=a.printerTypeEnum,n=a.printerConfigTypeEnum;let i=Object(r.a)(Object(r.a)({},e.printerData),{},{printerTypeEnum:t&&t.length>0?t[0]:m.a.value});const l=Object(u.zb)(),o=Object(u.zb)();switch(n){case b.a.value:i=Object(r.a)(Object(r.a)({},i),{},{dtInicial:Object(u.Nb)(l.toDate())});break;case b.b.value:i=Object(r.a)(Object(r.a)({},i),{},{dtFinal:Object(u.Nb)(o.endOf("month").toDate()),dtInicial:Object(u.Nb)(l.toDate())});break;case b.c.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaInicial:Object(u.Mb)(l.toDate(),u.V)});break;case b.d.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaFinal:Object(u.Mb)(l.toDate(),u.V),referenciaInicial:Object(u.Mb)(o.toDate(),u.V)});break;case b.f.value:i=Object(r.a)(Object(r.a)({},i),{},{ano:String(l.year())})}e.formProps.reset(i)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=l.a.createElement(u.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE}),t=e.printerData.printerConfigTypeEnum===b.a.value?a:null,f=e.printerData.printerConfigTypeEnum===b.b.value?l.a.createElement(l.a.Fragment,null,a,l.a.createElement(u.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE})):null,O=l.a.createElement(u.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE}),j=e.printerData.printerConfigTypeEnum===b.c.value?O:null,E=e.printerData.printerConfigTypeEnum===b.d.value?l.a.createElement(l.a.Fragment,null,O,l.a.createElement(u.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE})):null,P=e.printerData.printerConfigTypeEnum===b.f.value?l.a.createElement(u.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:u.L.MASK}):null;return l.a.createElement(o.a,{noValidate:!0},e.children,l.a.createElement(u.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},l.a.createElement(u.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},l.a.createElement(u.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),l.a.createElement(u.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:u.L.NUMBER}),l.a.createElement(c.a,{className:"mb-3 mt-3"},l.a.createElement(s.a,null,l.a.createElement(p.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),t,f,j,E,P,l.a.createElement(u.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:m.b,selectProps:{isClearable:!1}},type:u.L.DROP_DOWN}))),l.a.createElement(u.R,{handleSubmit:e.formProps.handleSubmit((a,t)=>{t.preventDefault();let i=[];if(e.validateExtras&&(i=e.validateExtras(e.printerData,a)),i&&i.length){const e={message:l.a.createElement(u.C,{erros:i}),type:u.f.ERROR};u.pb.emit(u.a.SHOW,e)}else e.printerData.passObj=a,Object(u.tc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(r.a)(Object(r.a)({},u.I),{},{delay:3e3})),Object(d.c)(e.printerData,{errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:()=>{Object(d.a)({errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:e=>{const a=e.headers["content-disposition"],t=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(n.saveAs)(e.data,t)}})}})}),hideCancelButton:!0}))})}}]);
//# sourceMappingURL=226.28cd797e.chunk.js.map