(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1059:function(e,a,t){"use strict";t.d(a,"a",function(){return l});const l="br.com.projetusinformatica.calima.mfp.model.dto.feriado"},1299:function(e,a,t){"use strict";t.r(a);var l=t(12),r=t(6),n=t(0),c=t.n(n),i=t(98),s=t(19),o=t(198),d=t(148),m=t(394),u=t(786),p=t(2),b=t(815),h=t(822),E=t(1059),f=t(839),j=t(838),O=t(817);a.default=(e=>{const a=Object(s.c)(e=>e.globalReducer),t=Object(p.Ub)(e),g=Object(i.b)({defaultValues:Object(r.a)({empresas:[]},t),mode:"onBlur"}),P=Object(n.useState)(!1),F=Object(l.a)(P,2),x=F[0],C=F[1],S=Object(n.useState)(!0),L=Object(l.a)(S,2),N=L[0],w=L[1],v=Object(n.useState)(!1),I=Object(l.a)(v,2),M=I[0],V=I[1],U=Object(n.useState)(!1),R=Object(l.a)(U,2),y=R[0],K=R[1];return c.a.createElement(p.ib,{title:"Manuten\xe7\xe3o de Feriados",dependencies:[()=>Object(b.a)(a.globalParameter),()=>Object(h.a)(a.globalParameter)]},c.a.createElement(p.B,{formProps:g,editViewProps:e,dtoClassName:E.a,validateExtras:()=>{const e=g.getValues(),a=[];return((4===e.mes||6===e.mes||9===e.mes||11===e.mes)&&e.dia>30||2===e.mes&&e.dia>28)&&a.push("Dia inv\xe1lido"),a}},c.a.createElement(o.a,null,c.a.createElement(d.a,null,c.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},g),{},{validation:{required:!0,maxLength:500}}),isPrependLabel:!0,id:"descricao",label:"Descri\xe7\xe3o"}))),c.a.createElement(o.a,null,c.a.createElement(d.a,{xs:4},c.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},g),{},{validation:Object(r.a)(Object(r.a)({required:!0,maxLength:2},Object(p.gc)(1,31)),{},{min:1,max:31})}),isPrependLabel:!0,id:"dia",label:"Dia",type:p.L.NUMBER})),c.a.createElement(d.a,{xs:4},c.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},g),{},{validation:Object(r.a)(Object(r.a)({required:!0,maxLength:2},Object(p.gc)(1,12)),{},{min:1,max:12})}),isPrependLabel:!0,id:"mes",label:"M\xeas",type:p.L.NUMBER})),c.a.createElement(d.a,{xs:4},c.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},g),{},{validation:Object(r.a)(Object(r.a)({maxLength:4},Object(p.gc)(0,4)),{},{min:1930,max:3e3})}),isPrependLabel:!0,id:"ano",label:"Ano",type:p.L.NUMBER}))),c.a.createElement(o.a,null,c.a.createElement(d.a,null,c.a.createElement(j.a,{id:"uf",formProps:g,disabled:M})),c.a.createElement(d.a,null,c.a.createElement(f.a,{id:"cidade",formProps:g,disabled:y}))),c.a.createElement(m.a,{tag:o.a},c.a.createElement(d.a,null,c.a.createElement(u.a,{id:"isEmpresasSelecionadas",label:"Exclusivo por Empresas",name:"isEmpresasSelecionadas",type:"switch",checked:x,onChange:()=>{x?(w(!0),C(!1),K(!1),V(!1),g.setValue("empresas",null,!0)):(w(!1),C(!0),K(!0),V(!0),g.setValue("uf",null,!0),g.setValue("cidade",null,!0))}}))),c.a.createElement(o.a,null,c.a.createElement(d.a,null,c.a.createElement(O.a,{id:"empresas",formProps:g,label:"Empresas",isPrependLabel:!0,placeholder:"Selecione o Empresa(s)",inputSearchProps:{selectProps:{isMulti:!0}},disabled:N})))))})},815:function(e,a,t){"use strict";function l(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return l})},817:function(e,a,t){"use strict";var l=t(6),r=t(0),n=t.n(r),c=t(2),i=t(257);a.a=(e=>n.a.createElement(c.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(l.a)(Object(l.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||i.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:c.L.INPUT_SEARCH})))},822:function(e,a,t){"use strict";function l(e){let a=null;return e.empresaMFP||(a="A empresa selecionada n\xe3o est\xe1 configurada para o M\xf3dulo Folha de Pagamento. Para configur\xe1-la acesse Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return l})},829:function(e,a,t){"use strict";t.d(a,"a",function(){return l});const l="br.com.projetusinformatica.calima.ger.model.dto.cepuf"},835:function(e,a,t){"use strict";t.d(a,"a",function(){return l});const l="br.com.projetusinformatica.calima.ger.model.dto.ceplocalidade"},838:function(e,a,t){"use strict";var l=t(6),r=t(0),n=t.n(r),c=t(2),i=t(829);a.a=(e=>{return n.a.createElement(c.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(l.a)(Object(l.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"sigla",text:"Sigla"},{dataField:"nome",text:"Nome"}],dtoClassName:i.a,searchViewId:"CepUFSearchView"}),label:e.label?e.label:"UF",placeholder:e.placeholder?e.placeholder:"Informe a UF",type:c.L.INPUT_SEARCH,onChange:a=>{e.searchFilter&&e.searchFilter.setFilter(i.a,a),e.onChange&&e.onChange(a)}}))})},839:function(e,a,t){"use strict";var l=t(6),r=t(0),n=t.n(r),c=t(2),i=t(835),s=t(829);a.a=(e=>{return n.a.createElement(c.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(l.a)(Object(l.a)({},e.inputSearchProps),{},{columns:[{dataField:"nome",text:"Nome"},{dataField:"cep",text:"CEP"},{dataField:"codigoMunicipio",text:"C\xf3digo do Munic\xedpio"}],dtoClassName:i.a,searchExpressionsFull:a=>{const t=[];if(e.searchFilter){const a=e.searchFilter.getFilter(s.a);a&&t.push({fieldName:"uf.id",value:a.id})}return t.length>0?t[0].expressions=a:t.push(...a),t},searchViewId:"CepLocalidadeSearchView"}),label:e.label?e.label:"Cidade",placeholder:e.placeholder?e.placeholder:"Informe a Cidade",type:c.L.INPUT_SEARCH,onChange:a=>{e.searchFilter&&e.searchFilter.setFilter(i.a,a),e.onChange&&e.onChange(a)}}))})}}]);
//# sourceMappingURL=128.c68821aa.chunk.js.map