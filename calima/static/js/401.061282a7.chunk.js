(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1243:function(t,n,e){"use strict";e.r(n);var o=e(6),c=e(12),r=e(0),i=e.n(r),a=e(98),u=e(2),s=e(936),f=e(846);n.default=(t=>{const n=Object(u.Ub)(t),e=Object(a.b)({defaultValues:n,mode:"onBlur"}),d=Object(r.useState)(!1),l=Object(c.a)(d,2),b=l[0],p=l[1];Object(r.useEffect)(()=>{p(!e.getValues().id)},[]);return i.a.createElement(u.ib,{title:"Manuten\xe7\xe3o de Grupo de Eventos"},i.a.createElement(u.B,{formProps:e,editViewProps:t,dtoClassName:s.a,afterPersist:t=>{b&&Object(f.d)(t,{errorFunction:t=>{Object(u.tc)(t,u.A)},thenFunction:t=>t})}},i.a.createElement(u.K,{formProps:Object(o.a)(Object(o.a)({},e),{},{validation:{maxLength:9}}),id:"codigo",isPrependLabel:!0,label:"C\xf3digo",placeholder:"Informe o C\xf3digo",tooltipProps:{message:"Preenchimento Opcional - Codifica\xe7\xe3o Autom\xe1tica"},type:u.L.NUMBER}),i.a.createElement(u.K,{formProps:Object(o.a)(Object(o.a)({},e),{},{validation:{required:!0,maxLength:120}}),id:"descricao",isPrependLabel:!0,label:"Descri\xe7\xe3o",placeholder:"Informe a Descri\xe7\xe3o."})))})},846:function(t,n,e){"use strict";e.d(n,"c",function(){return r}),e.d(n,"l",function(){return i}),e.d(n,"v",function(){return a}),e.d(n,"x",function(){return u}),e.d(n,"w",function(){return s}),e.d(n,"y",function(){return f}),e.d(n,"f",function(){return d}),e.d(n,"o",function(){return l}),e.d(n,"m",function(){return b}),e.d(n,"a",function(){return p}),e.d(n,"k",function(){return j}),e.d(n,"r",function(){return O}),e.d(n,"e",function(){return m}),e.d(n,"n",function(){return v}),e.d(n,"q",function(){return g}),e.d(n,"s",function(){return P}),e.d(n,"b",function(){return E}),e.d(n,"u",function(){return V}),e.d(n,"t",function(){return h}),e.d(n,"p",function(){return w}),e.d(n,"d",function(){return A}),e.d(n,"i",function(){return F}),e.d(n,"j",function(){return C}),e.d(n,"h",function(){return R}),e.d(n,"g",function(){return D});var o=e(2);function c(){return Object(o.wb)("/mfp")}function r(t,n){Object(o.sc)(c().get("/copiarValorImpostoAnteriorAReferencia/".concat(t)),n)}function i(t,n){Object(o.sc)(c().post("/loadFotoTrabalhador",t),n)}function a(t,n,e){Object(o.sc)(c().post("/validarSalarioVinculo/".concat(t),{valor:n.valor,data:n.data}),e)}function u(t,n){Object(o.sc)(c().post("/verificarQuadroHorarioESocial",t),n)}function s(t,n){Object(o.sc)(c().post("/validarVinculoBeforePersist",t),n)}function f(t,n){Object(o.sc)(c().post("/verificarSituacaoAfastamento",t),n)}function d(t,n){Object(o.sc)(c().post("/existeCalculoVinculoTomadorServico",t),n)}function l(t,n){Object(o.sc)(c().post("/perdeuPeriodoAquisitivoFerias",t),n)}function b(t,n){Object(o.sc)(c().post("/obterDataFinalGozoFerias",t),n)}function p(t,n){Object(o.sc)(c().post("/ajustarPeriodoAquisitivoFeriasPerdidoPorAfastamentos",t),n)}function j(t,n){Object(o.sc)(c().post("/getDiaUtil",t),n)}function O(t,n){Object(o.sc)(c().post("/simularFerias",t),n)}function m(t,n){Object(o.sc)(c().post("/definirAvisoPrevio",t),n)}function v(t,n){Object(o.sc)(c().post("/obterFeriasRescisao",t),n)}function g(t,n){Object(o.sc)(c().post("/rescisaoCalculada",t),n)}function P(t,n){Object(o.sc)(c().post("/simularRescisao",t),n)}function E(t,n){Object(o.sc)(c().delete("/apagarRescisao/".concat(t)),n)}function V(t,n){Object(o.sc)(c().post("/validarEventoVinculo",t),n)}function h(t,n){Object(o.sc)(c().post("/transferirVinculo",t),n)}function w(t,n){Object(o.sc)(c().post("/reintegrarVinculo",t),n)}function A(t,n){Object(o.sc)(c().post("/criarEventosPadroes",t),n)}function F(t,n){Object(o.sc)(c().post("/gerarManad",t),n)}function C(t,n){Object(o.sc)(c().post("/gerarRais",t),n)}function R(t,n){Object(o.sc)(c().post("/gerarDirf",t),n)}function D(t,n){Object(o.sc)(c().post("/gerarCaged",t),n)}},936:function(t,n,e){"use strict";e.d(n,"a",function(){return o});const o="br.com.projetusinformatica.calima.mfp.model.dto.grupoevento"}}]);
//# sourceMappingURL=401.061282a7.chunk.js.map