(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1444:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t(0),s=t.n(r),c=t(98),i=t(19),o=t(395),l=t(198),u=t(148),d=t(126),m=t(197),b=t(849),p=t(786),f=t(2),E=t(815),g=t(824),j=t(870),O=t(168),h=t(894);a.default=(e=>{const a=Object(i.c)(e=>e.globalReducer),t=Object(c.b)({defaultValues:{especies:[],isConhecimentoTransporteEntrada:!0,isConhecimentoTransporteSaida:!0,isContaPagar:!0,isContaReceber:!0,isEntrada:!0,isSaida:!0},mode:"onBlur"}),C=Object(i.b)();Object(r.useEffect)(()=>{a.globalParameter.empresa&&(P(),a.globalParameter.empresaMLF&&F())},[]);const P=()=>{const e=a.globalParameter,n=e.usuario,r=e.empresa.id;setTimeout(()=>{t.setValue("idEmpresa",r),t.setValue("idUsuario",n.id)},1e3)},F=()=>{const e=a.globalParameter.empresaMLF.referenciaAtual,n=Object(f.Nb)(Object(f.jc)(e,1)),r=Object(f.Nb)(Object(f.ic)(e));setTimeout(()=>{t.setValue("dtInicial",Object(f.uc)(n)),t.setValue("dtFinal",Object(f.uc)(r))},500)},N=e=>e.every(e=>!e),S=e=>{Object(j.f)(e,{errorFunction:e=>{Object(f.tc)(e,f.A)},thenFunction:()=>{C(Object(O.c)())}})};return s.a.createElement(f.ib,{title:"Refazer Lan\xe7amentos Cont\xe1beis",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(E.a)(a.globalParameter),()=>Object(g.a)(a.globalParameter)]},s.a.createElement(o.a,null,s.a.createElement(f.K,{formProps:t,id:"idEmpresa",hidden:!0}),s.a.createElement(f.K,{formProps:t,id:"idUsuario",hidden:!0}),s.a.createElement(l.a,null,s.a.createElement(u.a,null,s.a.createElement(f.K,{formProps:Object(n.a)(Object(n.a)({},t),{},{validation:{required:!0}}),id:"dtInicial",label:"Data Inicial",placeholder:"Informe a Data Inicial do per\xedodo que deseja refazer os lan\xe7amentos cont\xe1beis",isPrependLabel:!0,type:f.L.DATE,onChange:()=>{if(t.getValues().dtInicial){const e=Object(f.uc)(String(t.getValues().dtInicial)),a=Object(f.ic)(Object(f.hc)(e));t.setValue("dtFinal",Object(f.uc)(Object(f.Nb)(a)))}else t.setValue("dtFinal",null)}})),s.a.createElement(u.a,null,s.a.createElement(f.K,{formProps:Object(n.a)(Object(n.a)({},t),{},{validation:{required:!0}}),id:"dtFinal",label:"Data Final",placeholder:"Informe a Data Final do per\xedodo que deseja refazer os lan\xe7amentos cont\xe1beis",isPrependLabel:!0,type:f.L.DATE}))),s.a.createElement(l.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{style:{marginBottom:"16px"}},s.a.createElement(m.a,null,s.a.createElement(b.a,null,"Filtros Adicionais"),s.a.createElement(l.a,{className:"mb-3"},s.a.createElement(u.a,null,s.a.createElement(p.a,{type:"switch",label:"Notas de Entrada",name:"isEntrada",id:"isEntrada",innerRef:t.register})),s.a.createElement(u.a,null,s.a.createElement(p.a,{type:"switch",label:"Contas a Pagar",name:"isContaPagar",id:"isContaPagar",innerRef:t.register})),s.a.createElement(u.a,null,s.a.createElement(p.a,{type:"switch",label:"Conhecimentos de Transporte - Entrada",name:"isConhecimentoTransporteEntrada",id:"isConhecimentoTransporteEntrada",innerRef:t.register}))),s.a.createElement(l.a,{className:"mb-3"},s.a.createElement(u.a,null,s.a.createElement(p.a,{type:"switch",label:"Notas de Sa\xedda",name:"isSaida",id:"isSaida",innerRef:t.register})),s.a.createElement(u.a,null,s.a.createElement(p.a,{type:"switch",label:"Contas a Receber",name:"isContaReceber",id:"isContaReceber",innerRef:t.register})),s.a.createElement(u.a,null,s.a.createElement(p.a,{type:"switch",label:"Conhecimentos de Transporte - Sa\xedda",name:"isConhecimentoTransporteSaida",id:"isConhecimentoTransporteSaida",innerRef:t.register}))),s.a.createElement(l.a,{className:"mb-3"},s.a.createElement(u.a,null,s.a.createElement(h.a,{formProps:t,id:"especies",isPrependLabel:!0,tooltipProps:{message:"Caso n\xe3o seja informado, o sistema ir\xe1 considerar todas as Esp\xe9cies"},inputSearchProps:{selectProps:{isMulti:!0}}}))))))),s.a.createElement(l.a,null,s.a.createElement(u.a,null,s.a.createElement(f.R,{handleSubmit:t.handleSubmit(e=>{const a=(()=>{const e=[];return Object(f.ub)(Object(f.Nb)(t.getValues().dtInicial,f.t),Object(f.Nb)(t.getValues().dtFinal,f.t))>0&&e.push("Data Final n\xe3o pode ser menor que a Data Inicial."),N([t.getValues().isConhecimentoTransporteEntrada,t.getValues().isConhecimentoTransporteSaida,t.getValues().isContaPagar,t.getValues().isContaReceber,t.getValues().isEntrada,t.getValues().isSaida])&&e.push("Pelo menos um tipo de nota deve ser selecionado."),e})();if(a.length>0){const e={message:s.a.createElement(f.C,{erros:a}),type:f.f.WARNING};f.pb.emit(f.a.SHOW,e)}else{const a={message:"Os lan\xe7amentos cont\xe1beis informados nas notas ser\xe3o apagados para a recontabiliza\xe7\xe3o.\nDeseja continuar?!",onOkClick:()=>S(e),type:f.f.WARNING_YES_NO};f.pb.emit(f.a.SHOW,a)}}),handleClose:()=>((a=!0)=>{Object(f.Cb)(e,e.history,a)})()})))))})},815:function(e,a,t){"use strict";function n(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return n})},824:function(e,a,t){"use strict";function n(e){let a=null;return e.empresaMLF||(a="A empresa fiscal da empresa selecionada deve estar configurada. Para configurar acesse:\nM\xf3dulo Fiscal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return n})},849:function(e,a,t){"use strict";var n=t(3),r=t(9),s=t(0),c=t.n(s),i=t(1),o=t.n(i),l=t(8),u=t.n(l),d=t(5),m={tag:d.q,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.m)(u()(a,"card-title"),t);return c.a.createElement(s,Object(n.a)({},i,{className:o}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},870:function(e,a,t){"use strict";t.d(a,"b",function(){return s}),t.d(a,"c",function(){return c}),t.d(a,"d",function(){return i}),t.d(a,"f",function(){return o}),t.d(a,"g",function(){return l}),t.d(a,"a",function(){return u}),t.d(a,"e",function(){return d}),t.d(a,"h",function(){return m});var n=t(2);function r(){return Object(n.wb)("/mlf")}function s(e,a,t){Object(n.sc)(r().post("/findEspecieByModelo",{modelo:e,isImportacao:a}),t)}function c(e,a){Object(n.sc)(r().get("/findReinfCFOPConfig/".concat(e)),a)}function i(e,a){Object(n.sc)(r().get("/getLivroFolhaMLF/".concat(e)),a)}function o(e,a){Object(n.sc)(r().post("/refazerLancamentosContabeis",e),a)}function l(e,a){Object(n.sc)(r().post("/refazerLancamentosReinf",e),a)}function u(e,a){Object(n.sc)(r().get("/findConfigReinfEmpresa/".concat(e)),a)}function d(e,a){Object(n.sc)(r().post("/importarIntegracaoFiscalContabil",e),a)}function m(e,a,t){Object(n.sc)(r().post("/validarIE",{inscricaoEstadual:e,unidadeFederacao:a}),t)}},877:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n="br.com.projetusinformatica.calima.ger.model.dto.especie"},894:function(e,a,t){"use strict";var n=t(6),r=t(0),s=t.n(r),c=t(2),i=t(877);a.a=(e=>s.a.createElement(c.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(n.a)(Object(n.a)({},e.inputSearchProps),{},{columns:[{dataField:"abreviacao",text:"Abrevia\xe7\xe3o"},{dataField:"descricao",text:"Descri\xe7\xe3o"}],dtoClassName:i.a,searchViewId:"EspecieSearchView"}),label:"Esp\xe9cie",placeholder:"Informe a Esp\xe9cie",type:c.L.INPUT_SEARCH})))}}]);
//# sourceMappingURL=221.e2e29ab4.chunk.js.map