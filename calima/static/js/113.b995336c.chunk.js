(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1522:function(e,a,r){"use strict";r.r(a);var t=r(6),n=r(13),i=r(0),l=r.n(i),o=r(98),c=r(20),u=r(35),s=r(198),p=r(148),m=r(786),d=r(2),b=r(815),f=r(826),E=r(825),O=r(827),P=r(882),j=r(821),g=r(828);const v="Livro Caixa - Simplificado",D="printCaixaSimplificado",C="caixasimplificadorelpass";r.d(a,"default",function(){return y});const L="MCG";function y(e){const a=Object(u.g)(),r=Object(o.b)({mode:"onBlur",defaultValues:{idsGerGrupoEmpresaPais:[]}}),y=Object(c.c)(e=>e.globalReducer),h=Object(i.useState)(!1),F=Object(n.a)(h,2),R=F[0],G=F[1],A=y.globalParameter,I=A.empresa,S=A.empresaMCG,T=Object(t.a)(Object(t.a)({},Object(O.a)(v,D,C,j.d.value,L)),{},{refFinal:S.refAtual,refInicial:S.refAtual});return Object(i.useEffect)(()=>{null!==I&&(null===I.matriz&&(G(!0),r.getValues().isAcumularMatrizFilial=I.centralizar),r.reset({consolidar:P.d.value,idGerEmpresa:I.id,idGerGrupoEmpresaAtual:I.grupoEmpresa.id,idGerGrupoEmpresaRaiz:I.idGrupoEmpresaRaiz}))},[]),l.a.createElement(d.hb,Object.assign({},e,{title:v,useGlobalParameter:!0,globalParameter:y.globalParameter,dependencies:[()=>Object(b.a)(y.globalParameter),()=>Object(f.a)(y.globalParameter),()=>Object(E.a)(y.globalParameter)]}),l.a.createElement(g.a,{formProps:r,printerData:T,history:a},l.a.createElement(d.K,{formProps:r,id:"idGerEmpresa",hidden:!0}),l.a.createElement(d.K,{formProps:r,id:"idGerGrupoEmpresaAtual",hidden:!0}),l.a.createElement(d.K,{formProps:r,id:"idGerGrupoEmpresaRaiz",hidden:!0}),l.a.createElement(s.a,{className:"mb-3"},l.a.createElement(p.a,null,l.a.createElement(m.a,{id:"checkSomenteContaCaixa",label:"Somente conta caixa",name:"somenteContaCaixa",innerRef:r.register,type:"switch"})),l.a.createElement(p.a,null,l.a.createElement(m.a,{id:"checkArmazenarPagina",label:"Armazenar p\xe1gina",name:"armazenarPagina",innerRef:r.register,type:"switch"}))),l.a.createElement(s.a,{className:"mb-3"},l.a.createElement(p.a,null,l.a.createElement(m.a,{id:"checkSaltarPag",label:"Saltar p\xe1gina entre conta",name:"saltarPag",innerRef:r.register,type:"switch"})),R&&l.a.createElement(p.a,null,l.a.createElement(m.a,{id:"checkIsAcumularMatrizFilial",label:"Acumular matriz e filiais",name:"isAcumularMatrizFilial",innerRef:r.register,type:"switch"}))),l.a.createElement(d.K,{id:"consolidar",label:"Consolida\xe7\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de Consolida\xe7\xe3o",formProps:Object(t.a)(Object(t.a)({},r),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:P.a,selectProps:{isClearable:!1}},type:d.L.DROP_DOWN,onChange:function(e){const a=r.getValues().consolidar;let t=v;a===P.c.value?t="Livro Caixa - Simplificado (Hierarquia Inferior)":a===P.b.value&&(t="Livro Caixa - Simplificado (Grupo Atual)"),r.setValue("title",t)}})))}},815:function(e,a,r){"use strict";function t(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}r.d(a,"a",function(){return t})},821:function(e,a,r){"use strict";r.d(a,"e",function(){return t}),r.d(a,"a",function(){return n}),r.d(a,"b",function(){return i}),r.d(a,"c",function(){return l}),r.d(a,"d",function(){return o}),r.d(a,"f",function(){return c});const t={label:"",value:"0"},n={label:"",value:"1"},i={label:"",value:"2"},l={label:"",value:"3"},o={label:"",value:"4"},c={label:"",value:"6"}},822:function(e,a,r){"use strict";r.d(a,"a",function(){return t});const t={label:"Gr\xe1fico - PDF",value:"grafico"},n=[{label:"Texto - CalimaDesk",value:"texto"},t,{label:"E-mail - PDF",value:"email"}];a.b=n},825:function(e,a,r){"use strict";function t(e){let a=null;return e.empresa&&e.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&e.empresa.grupoEmpresa.grupoEmpresaConfig||(a="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),a}r.d(a,"a",function(){return t})},826:function(e,a,r){"use strict";function t(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}r.d(a,"a",function(){return t})},827:function(e,a,r){"use strict";r.d(a,"a",function(){return i});var t=r(821),n=r(822);function i(e,a,r,i=t.e.value,l="MLF"){return{anoLabel:"Ano",classKey:r,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:l,pageNumber:"1",passObj:{},printerConfigTypeEnum:i,printerDataEmail:{},printerTypeEnum:n.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,r){"use strict";var t=r(6),n=r(200),i=r(0),l=r.n(i),o=r(395),c=r(198),u=r(148),s=r(786),p=r(2),m=r(821),d=r(822),b=r(256);a.a=(e=>{Object(i.useEffect)(()=>{const a=e.printerData,r=a.printerTypeEnum,n=a.printerConfigTypeEnum;let i=Object(t.a)(Object(t.a)({},e.printerData),{},{printerTypeEnum:r&&r.length>0?r[0]:d.a.value});const l=Object(p.yb)(),o=Object(p.yb)();switch(n){case m.a.value:i=Object(t.a)(Object(t.a)({},i),{},{dtInicial:Object(p.Mb)(l.toDate())});break;case m.b.value:i=Object(t.a)(Object(t.a)({},i),{},{dtFinal:Object(p.Mb)(o.endOf("month").toDate()),dtInicial:Object(p.Mb)(l.toDate())});break;case m.c.value:i=Object(t.a)(Object(t.a)({},i),{},{referenciaInicial:Object(p.Lb)(l.toDate(),p.V)});break;case m.d.value:i=Object(t.a)(Object(t.a)({},i),{},{referenciaFinal:Object(p.Lb)(l.toDate(),p.V),referenciaInicial:Object(p.Lb)(o.toDate(),p.V)});break;case m.f.value:i=Object(t.a)(Object(t.a)({},i),{},{ano:String(l.year())})}e.formProps.reset(i)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=l.a.createElement(p.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.DATE}),r=e.printerData.printerConfigTypeEnum===m.a.value?a:null,f=e.printerData.printerConfigTypeEnum===m.b.value?l.a.createElement(l.a.Fragment,null,a,l.a.createElement(p.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.DATE})):null,E=l.a.createElement(p.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.REFERENCE}),O=e.printerData.printerConfigTypeEnum===m.c.value?E:null,P=e.printerData.printerConfigTypeEnum===m.d.value?l.a.createElement(l.a.Fragment,null,E,l.a.createElement(p.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{required:!0}}),type:p.L.REFERENCE})):null,j=e.printerData.printerConfigTypeEnum===m.f.value?l.a.createElement(p.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:p.L.MASK}):null;return l.a.createElement(o.a,{noValidate:!0},e.children,l.a.createElement(p.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},l.a.createElement(p.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},l.a.createElement(p.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),l.a.createElement(p.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:p.L.NUMBER}),l.a.createElement(c.a,{className:"mb-3 mt-3"},l.a.createElement(u.a,null,l.a.createElement(s.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),r,f,O,P,j,l.a.createElement(p.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(t.a)(Object(t.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:d.b,selectProps:{isClearable:!1}},type:p.L.DROP_DOWN}))),l.a.createElement(p.R,{handleSubmit:e.formProps.handleSubmit((a,r)=>{r.preventDefault();let i=[];if(e.validateExtras&&(i=e.validateExtras(e.printerData,a)),i&&i.length){const e={message:l.a.createElement(p.C,{erros:i}),type:p.f.ERROR};p.ob.emit(p.a.SHOW,e)}else e.printerData.passObj=a,Object(p.sc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(t.a)(Object(t.a)({},p.I),{},{delay:3e3})),Object(b.c)(e.printerData,{errorFunction:e=>{Object(p.sc)(e,p.A)},thenFunction:()=>{Object(b.a)({errorFunction:e=>{Object(p.sc)(e,p.A)},thenFunction:e=>{const a=e.headers["content-disposition"],r=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(n.saveAs)(e.data,r)}})}})}),hideCancelButton:!0}))})},882:function(e,a,r){"use strict";r.d(a,"d",function(){return t}),r.d(a,"b",function(){return n}),r.d(a,"c",function(){return i}),r.d(a,"a",function(){return l});const t={value:"1",label:"Normal"},n={value:"2",label:"Grupo Atual"},i={value:"3",label:"Hierarquia Inferior"},l=[t,n,i]}}]);
//# sourceMappingURL=113.b995336c.chunk.js.map