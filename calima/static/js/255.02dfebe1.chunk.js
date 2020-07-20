(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{1012:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t="br.com.projetusinformatica.calima.mcg.model.dto.laluraconfig"},1227:function(e,a,l){"use strict";l.r(a);var t=l(6),r=l(13),n=l(14),o=l(0),c=l.n(o),i=l(201),s=l.n(i),u=l(98),m=l(20),d=l(395),b=l(198),p=l(148),E=l(22),v=l(2),f=l(815),g=l(826),O=l(1012),P=l(983),N=l(886);a.default=(e=>{const a=Object(m.c)(e=>e.globalReducer),l=a.globalParameter.empresaMCG,i=Object(u.b)({defaultValues:{ano:Number(Object(v.Mb)(Object(v.xb)(),"YYYY")),mes:N.a.value},mode:"onBlur"}),C=Object(o.useState)(null),j=Object(r.a)(C,2),h=j[0],y=j[1];Object(o.useEffect)(()=>{setTimeout(()=>{i.setValue("empresaMCG.id",l.id,!0)},500)},[]);const A=[{dataField:"rowNumber",hidden:!0,text:"Row Number"},{dataField:"codigo",editable:!1,sort:!0,text:"C\xf3digo"},{dataField:"descricao",editable:!1,sort:!0,text:"Descri\xe7\xe3o"},Object(v.Eb)({dataField:"tipoLancamento",editable:!1,sort:!0,text:"Tipo"},P.a)];return c.a.createElement(v.hb,{title:"Integra\xe7\xe3o - M\xf3dulo Folha de Pagamento",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(f.a)(a.globalParameter),()=>Object(g.a)(a.globalParameter)]},c.a.createElement(d.a,null,c.a.createElement(b.a,null,c.a.createElement(p.a,null,c.a.createElement(v.K,{formProps:Object(t.a)(Object(t.a)({},i),{},{validation:{required:!0,min:1900,maxLength:4}}),id:"ano",isPrependLabel:!0,label:"Ano",type:v.L.NUMBER,placeholder:"Informe o ano."})),c.a.createElement(p.a,null,c.a.createElement(v.K,{id:"mes",label:"M\xeas",isPrependLabel:!0,placeholder:"Selecione um M\xeas",formProps:Object(t.a)(Object(t.a)({},i),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:N.c,selectProps:{isClearable:!1}},type:v.L.DROP_DOWN}))),c.a.createElement(b.a,null,c.a.createElement(p.a,null,c.a.createElement(v.K,{formProps:i,id:"receita",disabled:!0,isPrependLabel:!0,label:"Receita"})),c.a.createElement(p.a,null,c.a.createElement(v.K,{formProps:i,id:"despesas",disabled:!0,isPrependLabel:!0,label:"Despesas"})),c.a.createElement(p.a,null,c.a.createElement(v.K,{formProps:i,id:"resultado",disabled:!0,isPrependLabel:!0,label:"Resultado"}))),c.a.createElement(b.a,{className:"mb-3"},c.a.createElement(p.a,null,c.a.createElement(E.a,{className:"ml-0",color:"warning",onClick:null},c.a.createElement(n.a,{icon:"exclamation-triangle"})," Impostos"),c.a.createElement(E.a,{className:"ml-3",color:"primary",onClick:()=>{const e={className:O.a,fetchType:"ALL",max:900,sortFieldName:"ano",start:0};e.expressions=[{fieldName:"empresaMCG.id",value:l.id},{fieldName:"ano",value:i.getValues().ano}],Object(v.Ib)(e,{errorFunction:e=>{Object(v.sc)(e,v.A)},thenFunction:e=>{y(e.content)}})}},c.a.createElement(n.a,{icon:"sync"})," Consultar"),c.a.createElement(E.a,{className:"ml-3",color:"success",onClick:null},c.a.createElement(n.a,{icon:"info-circle"})," Calcular")),c.a.createElement(p.a,null,c.a.createElement(E.a,{className:"float-right",onClick:i.handleSubmit(()=>((a=!0)=>{Object(v.Bb)(e,e.history,a)})()),color:"danger"},c.a.createElement(n.a,{icon:"check-circle"})," Fechar"))),c.a.createElement(v.db,{formProps:i},c.a.createElement(v.cb,{title:"e-Lalur A"},c.a.createElement(v.c,{formProps:i},c.a.createElement(v.d,{title:"Parte A"},c.a.createElement(s.a,{keyField:"id",data:h||[],columns:A,responsive:!0,striped:!0}),c.a.createElement("pre",null,JSON.stringify(i.getValues(),null,2))),c.a.createElement(v.d,{title:"Parte B"},c.a.createElement(s.a,{keyField:"id",data:h||[],columns:A,responsive:!0,striped:!0}),c.a.createElement("pre",null,JSON.stringify(i.getValues(),null,2))),c.a.createElement(v.d,{title:"Imposto"},c.a.createElement(s.a,{keyField:"id",data:h||[],columns:A,responsive:!0,striped:!0}),c.a.createElement("pre",null,JSON.stringify(i.getValues(),null,2))))),c.a.createElement(v.cb,{title:"e-Lacs B"},c.a.createElement(v.c,{formProps:i},c.a.createElement(v.d,{title:"Parte A"},c.a.createElement(s.a,{keyField:"id",data:h||[],columns:A,responsive:!0,striped:!0}),c.a.createElement("pre",null,JSON.stringify(i.getValues(),null,2))),c.a.createElement(v.d,{title:"Parte B"},c.a.createElement(s.a,{keyField:"id",data:h||[],columns:A,responsive:!0,striped:!0}),c.a.createElement("pre",null,JSON.stringify(i.getValues(),null,2))),c.a.createElement(v.d,{title:"Imposto"},c.a.createElement(s.a,{keyField:"id",data:h||[],columns:A,responsive:!0,striped:!0}),c.a.createElement("pre",null,JSON.stringify(i.getValues(),null,2))))))))})},815:function(e,a,l){"use strict";function t(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}l.d(a,"a",function(){return t})},826:function(e,a,l){"use strict";function t(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}l.d(a,"a",function(){return t})},886:function(e,a,l){"use strict";l.d(a,"b",function(){return t}),l.d(a,"a",function(){return r}),l.d(a,"c",function(){return n});const t=[{label:"Janeiro",value:1},{label:"Fevereiro",value:2},{label:"Mar\xe7o",value:3},{label:"Abril",value:4},{label:"Maio",value:5},{label:"Junho",value:6},{label:"Julho",value:7},{label:"Agosto",value:8},{label:"Setembro",value:9},{label:"Outubro",value:10},{label:"Novembro",value:11},{label:"Dezembro",value:12}],r={label:"Janeiro",value:"1"},n=[r,{label:"Fevereiro",value:"2"},{label:"Mar\xe7o",value:"3"},{label:"Abril",value:"4"},{label:"Maio",value:"5"},{label:"Junho",value:"6"},{label:"Julho",value:"7"},{label:"Agosto",value:"8"},{label:"Setembro",value:"9"},{label:"Outubro",value:"10"},{label:"Novembro",value:"11"},{label:"Dezembro",value:"12"}]},983:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t=[{label:"Adi\xe7\xe3o",value:"ADICAO"},{label:"Exclus\xe3o",value:"EXCLUSAO"},{label:"Compensa\xe7\xe3o de Prejuizo",value:"COMPENSACAO"},{label:"Lucro",value:"LUCRO"},{label:"R\xf3tulo",value:"ROTULO"}]}}]);
//# sourceMappingURL=255.02dfebe1.chunk.js.map