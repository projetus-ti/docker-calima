(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1613:function(e,a,l){"use strict";l.r(a);var t=l(6),n=l(0),i=l.n(n),o=l(98),r=l(198),c=l(148),s=l(126),d=l(197),u=l(849),m=l(786),b=l(2),p=l(968),f=l(861),v=l(100),g=l(838);const E={codigoReceita:"",variacaoCodigoReceita:""};var h=e=>{const a=Object(o.b)({defaultValues:e.selectedItem||E,mode:"onBlur"}),l={errors:a.errors,getValues:a.getValues,register:a.register,setValue:a.setValue,triggerValidation:a.triggerValidation};return i.a.createElement(b.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:l,validateExtras:(a,l,t)=>{const n=[];if(null!=l&&(null==e.selectedItem||e.selectedItem.uf.id!==a.uf.id)){var i,o=Object(v.a)(l);try{for(o.s();!(i=o.n()).done;){const e=i.value;if(e.uf&&e.uf.id===a.uf.id){n.push("J\xe1 existe um c\xf3digo da receita para essa UF.");break}}}catch(r){o.e(r)}finally{o.f()}return n}}},i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(g.a,{formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0}}),label:"UF",placeholder:"Selecione uma UF",id:"uf",isPrependLabel:!0,inputSearchProps:{selectProps:{isMulti:!1}}}))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(b.K,{id:"codigoReceita",inputProps:!0,label:"C\xf3digo da Receita",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:Object(b.ec)(1,5)}),isPrependLabel:!0,placeholder:"Informe o C\xf3digo da Receita"}))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(b.K,{id:"variacaoCodigoReceita",isPrependLabel:!0,formProps:Object(t.a)(Object(t.a)({},l),{},{validation:Object(b.fc)(0,2)}),label:"Varia\xe7\xe3o",tooltipProps:{message:"Varia\xe7\xe3o do c\xf3digo da receita. Esse campo \xe9 obrigat\xf3rio caso a empresa gere o DCTF."}}))))};const P={notificarVencimento:!0,notificarVencimentoDias:2,recolhimentoMinimo:0};a.default=(e=>{const a=Object(b.Tb)(e),l=Object(o.b)({defaultValues:null==a.id?P:a,mode:"onBlur"});return i.a.createElement(b.hb,{title:"Configura\xe7\xf5es de ICMS"},i.a.createElement(b.B,{formProps:l,editViewProps:e,dtoClassName:p.a,validateExtras:e=>{const a=[];return e.notificarVencimento&&!e.notificarVencimentoDias&&a.push("Dias de Anteced\xeancia do vencimento - Campo n\xe3o pode estar em branco."),null!=e.listaConfigUF&&0!==e.listaConfigUF.length||a.push("Pelo menos 1 c\xf3digo da receita deve ser cadastrado."),a}},i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(b.K,{id:"descricao",label:"Descri\xe7\xe3o",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0,maxLength:50}}),isPrependLabel:!0,placeholder:"Informe a descri\xe7\xe3o da Configura\xe7\xe3o de ICMS"}))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(b.K,{id:"diaVencimento",label:"Dia de Vencimento",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0}}),isPrependLabel:!0,placeholder:"Informe o dia de vencimento",inputDropDownProps:{optionsProvider:f.a},type:b.L.DROP_DOWN}))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(s.a,{style:{marginBottom:"16px"}},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Configura\xe7\xe3o de Notifica\xe7\xe3o"),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(m.a,{type:"switch",label:"Notificar Vencimento de Imposto",name:"notificarVencimento",id:"checkNotificarVencimento",innerRef:l.register,style:{marginBottom:"16px"}}))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(b.K,{id:"notificarVencimentoDias",label:"Dias de Anteced\xeancia do vencimento",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0}}),isPrependLabel:!0,disabled:!l.getValues().notificarVencimento,placeholder:"Informe com quantos de dias de anteced\xeancia gostaria de ser notificado",inputDropDownProps:{optionsProvider:f.a},type:b.L.DROP_DOWN}))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(m.a,{type:"switch",disabled:!l.getValues().notificarVencimento,label:"Notificar o cliente/respons\xe1vel por Connect/email, sobre o vencimento do Imposto",name:"notificarVencimentoPorEmail",id:"checkNotificarVencimentoPorEmail",innerRef:l.register}))))))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(b.K,{id:"recolhimentoMinimo",label:"Recolhimento M\xednimo",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0}}),isPrependLabel:!0,placeholder:"Informe o valor do recolhimento m\xednimo",type:b.L.NUMBER}))),i.a.createElement(r.a,null,i.a.createElement(c.a,null,i.a.createElement(b.w,Object.assign({columns:[{dataField:"uf.sigla",sort:!0,text:"UF"},{dataField:"codigoReceita",sort:!0,text:"Codigo da Receita"}],title:"Lista de C\xf3digo de Receita",detailView:h,keyField:"uf.id",formProps:l,propName:"listaConfigUF"},e))))))})},829:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t="br.com.projetusinformatica.calima.ger.model.dto.cepuf"},838:function(e,a,l){"use strict";var t=l(6),n=l(0),i=l.n(n),o=l(2),r=l(829);a.a=(e=>{return i.a.createElement(o.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(t.a)(Object(t.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"sigla",text:"Sigla"},{dataField:"nome",text:"Nome"}],dtoClassName:r.a,searchViewId:"CepUFSearchView"}),label:e.label?e.label:"UF",placeholder:e.placeholder?e.placeholder:"Informe a UF",type:o.L.INPUT_SEARCH,onChange:a=>{e.searchFilter&&e.searchFilter.setFilter(r.a,a),e.onChange&&e.onChange(a)}}))})},849:function(e,a,l){"use strict";var t=l(3),n=l(9),i=l(0),o=l.n(i),r=l(1),c=l.n(r),s=l(8),d=l.n(s),u=l(5),m={tag:u.q,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,l=e.cssModule,i=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(u.m)(d()(a,"card-title"),l);return o.a.createElement(i,Object(t.a)({},r,{className:c}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},861:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t=[{label:"01",value:1},{label:"02",value:2},{label:"03",value:3},{label:"04",value:4},{label:"05",value:5},{label:"06",value:6},{label:"07",value:7},{label:"08",value:8},{label:"09",value:9},{label:"10",value:10},{label:"11",value:11},{label:"12",value:12},{label:"13",value:13},{label:"14",value:14},{label:"15",value:15},{label:"16",value:16},{label:"17",value:17},{label:"18",value:18},{label:"19",value:19},{label:"20",value:20},{label:"21",value:21},{label:"22",value:22},{label:"23",value:23},{label:"24",value:24},{label:"25",value:25},{label:"26",value:26},{label:"27",value:27},{label:"28",value:28},{label:"29",value:29},{label:"30",value:30},{label:"31",value:31}]},968:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t="br.com.projetusinformatica.calima.mlf.model.dto.configicmsdifal"}}]);
//# sourceMappingURL=263.124aa149.chunk.js.map