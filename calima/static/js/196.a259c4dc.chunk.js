(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1438:function(e,a,t){"use strict";t.r(a),t.d(a,"REPORT_EVENT",function(){return j}),t.d(a,"REPORT_TITLE",function(){return g}),t.d(a,"default",function(){return v});var r=t(6),n=t(0),i=t.n(n),l=t(98),o=t(19),c=t(30),s=t(198),u=t(148),p=t(786),d=t(2),b=t(815),m=t(824),f=t(827),E=t(821),O=t(828),P=t(918);const j="printResumoDiarioSaida",g="Resumo Di\xe1rio de Sa\xeddas",D=Object(r.a)(Object(r.a)({},Object(f.a)(g,j,P.a,E.b.value)),{},{dtFinal:"31/12/2017",dtInicial:"01/12/2017"});function v(e){const a=Object(c.g)(),t=Object(l.b)({mode:"onBlur"}),r=Object(o.c)(e=>e.globalReducer);return Object(n.useEffect)(()=>{if(null!==r.globalParameter.empresa){const e=r.globalParameter.empresa.id;setTimeout(()=>{t.setValue("idGerEmpresa",e),t.setValue("origemLancamentoInt",null),t.setValue("orderByNumero",!1),t.setValue("armazenarPaginaInicial",!1),t.setValue("resumo",!0),t.setValue("totalizarDia",!1)},800)}},[]),i.a.createElement(d.ib,Object.assign({},e,{title:g,useGlobalParameter:!0,globalParameter:r.globalParameter,dependencies:[()=>Object(b.a)(r.globalParameter),()=>Object(m.a)(r.globalParameter)],wikiId:6713}),i.a.createElement(O.a,{formProps:t,printerData:D,history:a},i.a.createElement(d.K,{formProps:t,id:"idGerEmpresa",hidden:!0}),i.a.createElement(d.K,{formProps:t,id:"origemLancamentoInt",hidden:!0}),i.a.createElement(d.K,{formProps:t,id:"orderByNumero",hidden:!0}),i.a.createElement(d.K,{formProps:t,id:"armazenarPaginaInicial",hidden:!0}),i.a.createElement(d.K,{formProps:t,id:"resumo",hidden:!0}),i.a.createElement(d.K,{formProps:t,id:"totalizarDia",hidden:!0}),i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement(p.a,{type:"switch",id:"exibirValoresZerados",name:"exibirValoresZerados",label:"Desconsiderar notas canceladas",innerRef:t.register})))))}},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},821:function(e,a,t){"use strict";t.d(a,"e",function(){return r}),t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i}),t.d(a,"c",function(){return l}),t.d(a,"d",function(){return o}),t.d(a,"f",function(){return c});const r={label:"",value:"0"},n={label:"",value:"1"},i={label:"",value:"2"},l={label:"",value:"3"},o={label:"",value:"4"},c={label:"",value:"6"}},823:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Gr\xe1fico - PDF",value:"grafico"},n=[{label:"Texto - CalimaDesk",value:"texto"},r,{label:"E-mail - PDF",value:"email"}];a.b=n},824:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMLF||(a="A empresa fiscal da empresa selecionada deve estar configurada. Para configurar acesse:\nM\xf3dulo Fiscal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return r})},827:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var r=t(821),n=t(823);function i(e,a,t,i=r.e.value,l="MLF"){return{anoLabel:"Ano",classKey:t,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:l,pageNumber:"1",passObj:{},printerConfigTypeEnum:i,printerDataEmail:{},printerTypeEnum:n.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,t){"use strict";var r=t(6),n=t(200),i=t(0),l=t.n(i),o=t(395),c=t(198),s=t(148),u=t(786),p=t(2),d=t(821),b=t(823),m=t(256);a.a=(e=>{Object(i.useEffect)(()=>{const a=e.printerData,t=a.printerTypeEnum,n=a.printerConfigTypeEnum;let i=Object(r.a)(Object(r.a)({},e.printerData),{},{printerTypeEnum:t&&t.length>0?t[0]:b.a.value});const l=Object(p.zb)(),o=Object(p.zb)();switch(n){case d.a.value:i=Object(r.a)(Object(r.a)({},i),{},{dtInicial:Object(p.Nb)(l.toDate())});break;case d.b.value:i=Object(r.a)(Object(r.a)({},i),{},{dtFinal:Object(p.Nb)(o.endOf("month").toDate()),dtInicial:Object(p.Nb)(l.toDate())});break;case d.c.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaInicial:Object(p.Mb)(l.toDate(),p.V)});break;case d.d.value:i=Object(r.a)(Object(r.a)({},i),{},{referenciaFinal:Object(p.Mb)(l.toDate(),p.V),referenciaInicial:Object(p.Mb)(o.toDate(),p.V)});break;case d.f.value:i=Object(r.a)(Object(r.a)({},i),{},{ano:String(l.year())})}e.formProps.reset(i)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=l.a.createElement(p.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.DATE}),t=e.printerData.printerConfigTypeEnum===d.a.value?a:null,f=e.printerData.printerConfigTypeEnum===d.b.value?l.a.createElement(l.a.Fragment,null,a,l.a.createElement(p.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.DATE})):null,E=l.a.createElement(p.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.REFERENCE}),O=e.printerData.printerConfigTypeEnum===d.c.value?E:null,P=e.printerData.printerConfigTypeEnum===d.d.value?l.a.createElement(l.a.Fragment,null,E,l.a.createElement(p.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.REFERENCE})):null,j=e.printerData.printerConfigTypeEnum===d.f.value?l.a.createElement(p.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:p.L.MASK}):null;return l.a.createElement(o.a,{noValidate:!0},e.children,l.a.createElement(p.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},l.a.createElement(p.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},l.a.createElement(p.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),l.a.createElement(p.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:p.L.NUMBER}),l.a.createElement(c.a,{className:"mb-3 mt-3"},l.a.createElement(s.a,null,l.a.createElement(u.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),t,f,O,P,j,l.a.createElement(p.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:b.b,selectProps:{isClearable:!1}},type:p.L.DROP_DOWN}))),l.a.createElement(p.R,{handleSubmit:e.formProps.handleSubmit((a,t)=>{t.preventDefault();let i=[];if(e.validateExtras&&(i=e.validateExtras(e.printerData,a)),i&&i.length){const e={message:l.a.createElement(p.C,{erros:i}),type:p.f.ERROR};p.pb.emit(p.a.SHOW,e)}else e.printerData.passObj=a,Object(p.tc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(r.a)(Object(r.a)({},p.I),{},{delay:3e3})),Object(m.c)(e.printerData,{errorFunction:e=>{Object(p.tc)(e,p.A)},thenFunction:()=>{Object(m.a)({errorFunction:e=>{Object(p.tc)(e,p.A)},thenFunction:e=>{const a=e.headers["content-disposition"],t=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(n.saveAs)(e.data,t)}})}})}),hideCancelButton:!0}))})},918:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="registroentradasaidarelpass"}}]);
//# sourceMappingURL=196.a259c4dc.chunk.js.map