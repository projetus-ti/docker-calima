(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1066:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.mho.model.dto.contapagarmho"},1067:function(e,a,t){"use strict";var r=t(6),o=t(0),n=t.n(o),l=t(2),i=t(914);a.a=(e=>n.a.createElement(l.K,Object.assign({},e,{isPrependLabel:!0,type:l.L.INPUT_SEARCH,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"descricao",text:"Descri\xe7\xe3o"}],dtoClassName:i.a,searchViewId:"HistoricoPagarMHOSearchView"}),label:"Hist\xf3rico",placeholder:"Informe o Hist\xf3rico"})))},1311:function(e,a,t){"use strict";t.r(a);var r=t(6),o=t(0),n=t.n(o),l=t(98),i=t(19),c=t(198),d=t(148),s=t(2),u=t(871),m=t(1066),b=t(1067);a.default=(e=>{const a=Object(s.Ub)(e),t=Object(i.c)(e=>e.globalReducer),p=Object(l.b)({defaultValues:a,mode:"onBlur"}),f=p.getValues().dataCadastro,P=f||null,E=Object(s.zb)();return Object(o.useEffect)(()=>{setTimeout(()=>{null===P?p.setValue("dataCadastro",Object(s.Nb)(E.toDate(),s.t)):p.setValue("dataCadastro",P),p.triggerValidation("dataCadastro")},500)},[]),n.a.createElement(s.ib,{title:"Manuten\xe7\xe3o de Contas a Pagar",dependencies:[()=>Object(u.a)(t.globalParameter)],wikiId:1109},n.a.createElement(s.B,{formProps:p,editViewProps:e,dtoClassName:m.a},n.a.createElement(c.a,null,n.a.createElement(d.a,null,n.a.createElement(s.K,{formProps:Object(r.a)(Object(r.a)({},p),{},{validation:{required:!0}}),id:"dataCadastro",isPrependLabel:!0,label:"Data de Cadastro",placeholder:p.getValues().dataCadastro,type:s.L.DATE,disabled:!0})),n.a.createElement(d.a,null,n.a.createElement(s.K,{formProps:Object(r.a)(Object(r.a)({},p),{},{validation:{required:!0}}),id:"dataVencimento",isPrependLabel:!0,label:"Data de Vencimento",placeholder:"Informe a Data de Vencimento",type:s.L.DATE}))),n.a.createElement(c.a,null,n.a.createElement(d.a,null,n.a.createElement(s.K,{formProps:Object(r.a)(Object(r.a)({},p),{},{validation:{min:.01,required:!0}}),id:"valor",isPrependLabel:!0,label:"Valor",placeholder:Object(s.Bb)(0),type:s.L.NUMBER})),n.a.createElement(d.a,null,n.a.createElement(s.K,{formProps:Object(r.a)({},p),id:"dataPagamento",isPrependLabel:!0,label:"Data de Pagamento",placeholder:"Informe a Data de Pagamento",type:s.L.DATE}))),n.a.createElement(c.a,null,n.a.createElement(d.a,null,n.a.createElement(b.a,{formProps:Object(r.a)(Object(r.a)({},p),{},{validation:{required:!0}}),label:"Hist\xf3rico",placeholder:"Selecione um hist\xf3rico",id:"historico",isPrependLabel:!0,inputSearchProps:{size:"xl"}}))),n.a.createElement(c.a,null,n.a.createElement(d.a,null,n.a.createElement(s.K,{formProps:Object(r.a)(Object(r.a)({},p),{},{validation:{required:!0}}),id:"descricao",isPrependLabel:!0,label:"Descri\xe7\xe3o",placeholder:"Informe a Descri\xe7\xe3o."})))))})},871:function(e,a,t){"use strict";function r(e){let a=null;return e.administradora.administradoraMHO||(a="A administradora deve ser configurada no m\xf3dulo de Honor\xe1rios. Para configurar acesse:\nM\xf3dulo Honor\xe1rios > Configura\xe7\xf5es > Administradora"),a}t.d(a,"a",function(){return r})},914:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.mho.model.dto.historicopagarmho"}}]);
//# sourceMappingURL=280.9951cd03.chunk.js.map