(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1491:function(e,a,t){"use strict";t.r(a);var r=t(12),n=t(6),l=t(0),o=t.n(l),i=t(98),c=t(19),s=t(30),p=t(198),u=t(148),d=t(2),b=t(815),m=t(826),f=t(825),O=t(827);const E={label:"N\xfamero da Conta",value:"false"},P=[E,{label:"C\xf3digo Reduzido",value:"true"}],j={label:"Plano de Contas Referencial",value:0},g=[j,{label:"Plano de Contas da Empresa Completo",value:1},{label:"Plano de Contas da Empresa - Somente Contas COM Refer\xeancia",value:2},{label:"Plano de Contas da Empresa - Somente Contas SEM Refer\xeancia",value:3}];var v=t(828);const D="Plano de Contas Referencial";t.d(a,"default",function(){return L});const C=Object(n.a)(Object(n.a)({},Object(O.a)(D,"printPlanoContaRefRelacao","planocontarefrelpass")),{},{module:"MCG"});function L(e){const a=Object(s.g)(),t=Object(i.b)({mode:"onBlur"}),O=Object(c.c)(e=>e.globalReducer),L=Object(l.useState)(!0),y=Object(r.a)(L,2),R=y[0],h=y[1];Object(l.useEffect)(()=>{if(!Object(d.Yb)(O.globalParameter.empresa)){const e=O.globalParameter.empresa,a=e.id,r=e.grupoEmpresa;setTimeout(()=>{t.setValue("idGerEmpresa",a),t.setValue("idGerGrupoEmpresaAtual",r.id),t.setValue("tipoImpressao",j.value,!0),t.setValue("ordenarPeloCodigoReduzido",E.value)},800)}},[]);return o.a.createElement(d.ib,Object.assign({},e,{title:D,useGlobalParameter:!0,globalParameter:O.globalParameter,dependencies:[()=>Object(b.a)(O.globalParameter),()=>Object(m.a)(O.globalParameter),()=>Object(f.a)(O.globalParameter)]}),o.a.createElement(v.a,{formProps:t,printerData:C,history:a},o.a.createElement(d.K,{formProps:t,id:"idGerEmpresa",hidden:!0}),o.a.createElement(d.K,{formProps:t,id:"idsGerGrupoEmpresaPais[]",hidden:!0}),o.a.createElement(d.K,{formProps:t,id:"idGerGrupoEmpresaAtual",hidden:!0}),o.a.createElement(p.a,null,o.a.createElement(u.a,null,o.a.createElement(d.K,{formProps:Object(n.a)(Object(n.a)({},t),{},{validation:{required:!0}}),id:"tipoImpressao",inputDropDownProps:{optionsProvider:g,selectProps:{isClearable:!1}},isPrependLabel:!0,label:"Tipo de Impress\xe3o",onChange:()=>{h(0===t.getValues().tipoImpressao)},placeholder:"Selecione o Tipo de Impress\xe3o",type:d.L.DROP_DOWN}))),o.a.createElement(p.a,null,o.a.createElement(u.a,null,o.a.createElement(d.K,{disabled:R,formProps:Object(n.a)(Object(n.a)({},t),{},{validation:{required:!0}}),id:"ordenarPeloCodigoReduzido",inputDropDownProps:{optionsProvider:P,selectProps:{isClearable:!1}},isPrependLabel:!0,label:"Ordenar Por",placeholder:"Selecione o Tipo de Ordena\xe7\xe3o",type:d.L.DROP_DOWN})))))}},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},821:function(e,a,t){"use strict";t.d(a,"e",function(){return r}),t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l}),t.d(a,"c",function(){return o}),t.d(a,"d",function(){return i}),t.d(a,"f",function(){return c});const r={label:"",value:"0"},n={label:"",value:"1"},l={label:"",value:"2"},o={label:"",value:"3"},i={label:"",value:"4"},c={label:"",value:"6"}},823:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r={label:"Gr\xe1fico - PDF",value:"grafico"},n=[{label:"Texto - CalimaDesk",value:"texto"},r,{label:"E-mail - PDF",value:"email"}];a.b=n},825:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa&&e.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&e.empresa.grupoEmpresa.grupoEmpresaConfig||(a="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),a}t.d(a,"a",function(){return r})},826:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}t.d(a,"a",function(){return r})},827:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t(821),n=t(823);function l(e,a,t,l=r.e.value,o="MLF"){return{anoLabel:"Ano",classKey:t,dtFinalLabel:"Data Final",dtInicialLabel:"Data Inicial",module:o,pageNumber:"1",passObj:{},printerConfigTypeEnum:l,printerDataEmail:{},printerTypeEnum:n.a.value,refFinalLabel:"Refer\xeancia Final",refInicialLabel:"Refer\xeancia Inicial",reportEventType:a,reportSequence:!1,title:e}}},828:function(e,a,t){"use strict";var r=t(6),n=t(200),l=t(0),o=t.n(l),i=t(395),c=t(198),s=t(148),p=t(786),u=t(2),d=t(821),b=t(823),m=t(256);a.a=(e=>{Object(l.useEffect)(()=>{const a=e.printerData,t=a.printerTypeEnum,n=a.printerConfigTypeEnum;let l=Object(r.a)(Object(r.a)({},e.printerData),{},{printerTypeEnum:t&&t.length>0?t[0]:b.a.value});const o=Object(u.zb)(),i=Object(u.zb)();switch(n){case d.a.value:l=Object(r.a)(Object(r.a)({},l),{},{dtInicial:Object(u.Nb)(o.toDate())});break;case d.b.value:l=Object(r.a)(Object(r.a)({},l),{},{dtFinal:Object(u.Nb)(i.endOf("month").toDate()),dtInicial:Object(u.Nb)(o.toDate())});break;case d.c.value:l=Object(r.a)(Object(r.a)({},l),{},{referenciaInicial:Object(u.Mb)(o.toDate(),u.V)});break;case d.d.value:l=Object(r.a)(Object(r.a)({},l),{},{referenciaFinal:Object(u.Mb)(o.toDate(),u.V),referenciaInicial:Object(u.Mb)(i.toDate(),u.V)});break;case d.f.value:l=Object(r.a)(Object(r.a)({},l),{},{ano:String(o.year())})}e.formProps.reset(l)},[e.printerData.printerConfigTypeEnum,e.printerData.printerTypeEnum]);const a=o.a.createElement(u.K,{id:"dtInicial",label:e.printerData.dtInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE}),t=e.printerData.printerConfigTypeEnum===d.a.value?a:null,f=e.printerData.printerConfigTypeEnum===d.b.value?o.a.createElement(o.a.Fragment,null,a,o.a.createElement(u.K,{id:"dtFinal",label:e.printerData.dtFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.DATE})):null,O=o.a.createElement(u.K,{id:"refInicial",label:e.printerData.refInicialLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE}),E=e.printerData.printerConfigTypeEnum===d.c.value?O:null,P=e.printerData.printerConfigTypeEnum===d.d.value?o.a.createElement(o.a.Fragment,null,O,o.a.createElement(u.K,{id:"refFinal",label:e.printerData.refFinalLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),type:u.L.REFERENCE})):null,j=e.printerData.printerConfigTypeEnum===d.f.value?o.a.createElement(u.K,{id:"ano",label:e.printerData.anoLabel,isPrependLabel:!0,formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputMaskedProps:{mask:"9999"},type:u.L.MASK}):null;return o.a.createElement(i.a,{noValidate:!0},e.children,o.a.createElement(u.c,{formProps:e.formProps,firstOpen:e.extraConfigOpened||!1},o.a.createElement(u.d,{title:"Configura\xe7\xf5es adicionais do Relat\xf3rio"},o.a.createElement(u.K,{id:"title",label:"T\xedtulo",isPrependLabel:!0,placeholder:"T\xedtulo",iconAppend:"undo-alt",appendClickHandler:()=>{e.formProps.setValue("title",e.printerData.title,!0)},formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{maxLength:120,minLength:5,required:!0}})}),o.a.createElement(u.K,{id:"pageNumber",label:"P\xe1gina Inicial",isPrependLabel:!0,placeholder:"P\xe1gina Inicial",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{min:0,required:!0}}),type:u.L.NUMBER}),o.a.createElement(c.a,{className:"mb-3 mt-3"},o.a.createElement(s.a,null,o.a.createElement(p.a,{type:"switch",label:"Sequenciar Relat\xf3rios",id:"reportSequence",name:"reportSequence",innerRef:e.formProps.register}))),t,f,E,P,j,o.a.createElement(u.K,{id:"printerTypeEnum",label:"Tipo de Impress\xe3o",isPrependLabel:!0,placeholder:"Selecione o tipo de impress\xe3o",formProps:Object(r.a)(Object(r.a)({},e.formProps),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:b.b,selectProps:{isClearable:!1}},type:u.L.DROP_DOWN}))),o.a.createElement(u.R,{handleSubmit:e.formProps.handleSubmit((a,t)=>{t.preventDefault();let l=[];if(e.validateExtras&&(l=e.validateExtras(e.printerData,a)),l&&l.length){const e={message:o.a.createElement(u.C,{erros:l}),type:u.f.ERROR};u.pb.emit(u.a.SHOW,e)}else e.printerData.passObj=a,Object(u.tc)("Seu relat\xf3rio est\xe1 sendo gerado...",Object(r.a)(Object(r.a)({},u.I),{},{delay:3e3})),Object(m.c)(e.printerData,{errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:()=>{Object(m.a)({errorFunction:e=>{Object(u.tc)(e,u.A)},thenFunction:e=>{const a=e.headers["content-disposition"],t=a.slice(0,a.lastIndexOf(";")).split("filename=")[1].replace(/"/g,"");Object(n.saveAs)(e.data,t)}})}})}),hideCancelButton:!0}))})}}]);
//# sourceMappingURL=149.3b6cced3.chunk.js.map