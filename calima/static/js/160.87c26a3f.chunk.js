(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1270:function(e,a,t){"use strict";t.r(a);var r=t(0),i=t.n(r),o=t(98),n=t(19),c=t(198),l=t(148),s=t(2),u=t(815),d=t(822),m=t(957),p=t(839),f=t(838);const h=[{dataField:"ufVara.sigla",order:s.O.ASC}];a.default=(e=>{const a=Object(n.c)(e=>e.globalReducer),t=Object(o.b)({mode:"onBlur"});return i.a.createElement(s.ib,{title:"Manuten\xe7\xe3o de Informa\xe7\xe3o Complementar de Processo Judicial",dependencies:[()=>Object(u.a)(a.globalParameter),()=>Object(d.a)(a.globalParameter)]},i.a.createElement(c.a,null,i.a.createElement(l.a,null,i.a.createElement(f.a,{id:"ufVara",formProps:t})),i.a.createElement(l.a,null,i.a.createElement(p.a,{id:"municipio",formProps:t}))),i.a.createElement(s.Z,Object.assign({},e,e.searchDataGridProps,{columns:[{dataField:"ufVara.sigla",sort:!0,text:"UF"},{dataField:"municipio.nome",sort:!0,text:"Munic\xedpio"},{dataField:"numeroIdentificacaoVara",sort:!1,text:"N\xba Identifica\xe7\xe3o Vara"}],dtoClassName:m.a,defaultSorted:h,searchExpressions:()=>{const e=[],a=t.getValues();return a.ufVara&&e.push({fieldName:"ufVara.sigla",value:a.ufVara.sigla}),a.municipio&&e.push({fieldName:"municipio.codigoMunicipio",value:a.municipio.codigoMunicipio}),e},extraData:Object(s.Tb)(e,"InfoComplementarProcessoJudicialEditView",m.a)})))})},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},822:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMFP||(a="A empresa selecionada n\xe3o est\xe1 configurada para o M\xf3dulo Folha de Pagamento. Para configur\xe1-la acesse Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return r})},829:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.ger.model.dto.cepuf"},835:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.ger.model.dto.ceplocalidade"},838:function(e,a,t){"use strict";var r=t(6),i=t(0),o=t.n(i),n=t(2),c=t(829);a.a=(e=>{return o.a.createElement(n.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"sigla",text:"Sigla"},{dataField:"nome",text:"Nome"}],dtoClassName:c.a,searchViewId:"CepUFSearchView"}),label:e.label?e.label:"UF",placeholder:e.placeholder?e.placeholder:"Informe a UF",type:n.L.INPUT_SEARCH,onChange:a=>{e.searchFilter&&e.searchFilter.setFilter(c.a,a),e.onChange&&e.onChange(a)}}))})},839:function(e,a,t){"use strict";var r=t(6),i=t(0),o=t.n(i),n=t(2),c=t(835),l=t(829);a.a=(e=>{return o.a.createElement(n.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"nome",text:"Nome"},{dataField:"cep",text:"CEP"},{dataField:"codigoMunicipio",text:"C\xf3digo do Munic\xedpio"}],dtoClassName:c.a,searchExpressionsFull:a=>{const t=[];if(e.searchFilter){const a=e.searchFilter.getFilter(l.a);a&&t.push({fieldName:"uf.id",value:a.id})}return t.length>0?t[0].expressions=a:t.push(...a),t},searchViewId:"CepLocalidadeSearchView"}),label:e.label?e.label:"Cidade",placeholder:e.placeholder?e.placeholder:"Informe a Cidade",type:n.L.INPUT_SEARCH,onChange:a=>{e.searchFilter&&e.searchFilter.setFilter(c.a,a),e.onChange&&e.onChange(a)}}))})},957:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.mfp.model.dto.infocomplementarprocessojudicial"}}]);
//# sourceMappingURL=160.87c26a3f.chunk.js.map