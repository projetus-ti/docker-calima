(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1622:function(e,a,t){"use strict";t.r(a);var r=t(6),n=t(12),o=t(149),i=t(71),c=t.n(i),l=t(0),s=t.n(l),u=t(98),d=t(19),b=t(395),f=t(394),p=t(198),m=t(148),O=t(786),j=t(2),P=t(815),g=t(822);const v={label:"Retificadora",value:"RETIFICADORA"},h=[v,{label:"Original",value:"ORIGINAL"}];var E=t(846),R=t(49),F=t(817);a.default=(e=>{const a=Object(d.c)(e=>e.globalReducer),t=Object(u.b)({mode:"onBlur"}),i=t.reset,C=Object(o.a)(t,["reset"]),A=Object(d.c)(e=>e.globalReducer).headerDrawerToggle,D=Object(d.b)(),I=Object(l.useState)(!0),M=Object(n.a)(I,2),w=M[0],x=M[1],N=Object(l.useState)(!1),S=Object(n.a)(N,2),T=S[0],Y=S[1];Object(l.useEffect)(()=>{const e=a.globalParameter.usuario;let t,r;null!==a.globalParameter.empresa&&null!==a.globalParameter.empresaMFP&&(r=c()(a.globalParameter.empresaMFP.referencia,"YYYY-MM"),t=a.globalParameter.empresaMFP),setTimeout(()=>{i({agruparRendimentosTrabalhador:!0,anoCalendario:Number(r.format("YYYY"))-1,anoReferencia:Number(r.format("YYYY")),centralizarMatrizFiliais:!0,tipoResponsavel:t.tipoResponsavelDirf,usuario:{id:e.id}})},300)},[]);return s.a.createElement(j.ib,{title:"Exporta\xe7\xe3o - DIRF",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(P.a)(a.globalParameter),()=>Object(g.a)(a.globalParameter)],wikiId:512},s.a.createElement(b.a,null,s.a.createElement(f.a,null,s.a.createElement(j.K,{formProps:C,id:"tipoResponsavel",hidden:!0}),s.a.createElement(j.K,{formProps:C,id:"usuario.id",hidden:!0}),s.a.createElement(F.a,{id:"empresas",formProps:Object(r.a)(Object(r.a)({},C),{},{validation:{required:!0}}),inputSearchProps:{selectProps:{isMulti:!0},validation:{required:!0}},placeholder:"Selecione uma ou v\xe1rias empresas.",isPrependLabel:!0,label:"Empresa(s)"}),s.a.createElement(j.K,{id:"identificadorRetificadora",label:"Tipo",isPrependLabel:!0,placeholder:"Informe o Tipo",formProps:Object(r.a)(Object(r.a)({},C),{},{validation:{required:!0}}),inputDropDownProps:{optionsProvider:h},type:j.L.DROP_DOWN,onChange:()=>{C.getValues().identificadorRetificadora===v.value?(x(!0),Object(j.Yb)(C.getValues().nroUltimaDeclaracao)&&Y(!1)):(x(!1),Y(!0),C.setValue("nroUltimaDeclaracao",null,!0))}}),s.a.createElement(j.K,{placeholder:"Informe o N\xba \xdaltima Declara\xe7\xe3o",id:"nroUltimaDeclaracao",formProps:Object(r.a)(Object(r.a)({},C),{},{validation:{required:T}}),isPrependLabel:!0,label:"N\xba \xdaltima Declara\xe7\xe3o",disabled:w}),s.a.createElement(p.a,null,s.a.createElement(m.a,null,s.a.createElement(j.K,{id:"anoReferencia",formProps:Object(r.a)(Object(r.a)({},C),{},{validation:{min:1930,max:3e3,required:!0}}),isPrependLabel:!0,label:"Ano Refer\xeancia",placeholder:"Informe o Ano Refer\xeancia",type:j.L.NUMBER})),s.a.createElement(m.a,null,s.a.createElement(j.K,{id:"anoCalendario",formProps:Object(r.a)(Object(r.a)({},C),{},{validation:{min:1930,max:3e3,required:!0}}),isPrependLabel:!0,label:"Ano Calend\xe1rio",placeholder:"Informe o Ano Calend\xe1rio",type:j.L.NUMBER}))),s.a.createElement(O.a,{className:"mt-2",type:"switch",id:"centralizarMatrizFiliais",name:"centralizarMatrizFiliais",label:"Centralizar Matriz e filiais",innerRef:C.register}),s.a.createElement(O.a,{className:"mt-2",type:"switch",id:"agruparRendimentosTrabalhador",name:"agruparRendimentosTrabalhador",label:"Agrupar Rendimentos dos trabalhadores com mais de um v\xednculo",innerRef:C.register}),s.a.createElement(O.a,{className:"mt-2",type:"switch",id:"exibirTrabalhadoresFacultativos",name:"exibirTrabalhadoresFacultativos",label:"Gerar para v\xednculos dispensados de informa\xe7\xe3o na Dirf",innerRef:C.register})),s.a.createElement(j.R,{handleSubmit:C.handleSubmit(function(e){Object(E.h)(e,{errorFunction:e=>{Object(j.tc)(e,j.A)},thenFunction:()=>{A||D(Object(R.e)())}})}),handleClose:()=>((a=!0)=>{Object(j.Cb)(e,e.history,a)})()})))})},815:function(e,a,t){"use strict";function r(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return r})},817:function(e,a,t){"use strict";var r=t(6),n=t(0),o=t.n(n),i=t(2),c=t(257);a.a=(e=>o.a.createElement(i.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(r.a)(Object(r.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"razaoSocial",text:"Raz\xe3o Social"},{dataField:"nomeFantasia",text:"Nome Fantasia"},{dataField:"cnpj",text:"CNPJ"},{dataField:"cpf",text:"CPF"},{dataField:"cei",text:"CEI"},{dataField:"ie",text:"IE"},{dataField:"im",text:"IM"},{dataField:"grupo",text:"Grupo"}],dtoClassName:e.dtoClassName||c.a,searchViewId:"EmpresaSearchView"}),label:e.label?e.label:"Empresa",placeholder:e.placeholder?e.placeholder:"Informe a Empresa",type:i.L.INPUT_SEARCH})))},822:function(e,a,t){"use strict";function r(e){let a=null;return e.empresaMFP||(a="A empresa selecionada n\xe3o est\xe1 configurada para o M\xf3dulo Folha de Pagamento. Para configur\xe1-la acesse Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),a}t.d(a,"a",function(){return r})},846:function(e,a,t){"use strict";t.d(a,"c",function(){return o}),t.d(a,"l",function(){return i}),t.d(a,"v",function(){return c}),t.d(a,"x",function(){return l}),t.d(a,"w",function(){return s}),t.d(a,"y",function(){return u}),t.d(a,"f",function(){return d}),t.d(a,"o",function(){return b}),t.d(a,"m",function(){return f}),t.d(a,"a",function(){return p}),t.d(a,"k",function(){return m}),t.d(a,"r",function(){return O}),t.d(a,"e",function(){return j}),t.d(a,"n",function(){return P}),t.d(a,"q",function(){return g}),t.d(a,"s",function(){return v}),t.d(a,"b",function(){return h}),t.d(a,"u",function(){return E}),t.d(a,"t",function(){return R}),t.d(a,"p",function(){return F}),t.d(a,"d",function(){return C}),t.d(a,"i",function(){return A}),t.d(a,"j",function(){return D}),t.d(a,"h",function(){return I}),t.d(a,"g",function(){return M});var r=t(2);function n(){return Object(r.wb)("/mfp")}function o(e,a){Object(r.sc)(n().get("/copiarValorImpostoAnteriorAReferencia/".concat(e)),a)}function i(e,a){Object(r.sc)(n().post("/loadFotoTrabalhador",e),a)}function c(e,a,t){Object(r.sc)(n().post("/validarSalarioVinculo/".concat(e),{valor:a.valor,data:a.data}),t)}function l(e,a){Object(r.sc)(n().post("/verificarQuadroHorarioESocial",e),a)}function s(e,a){Object(r.sc)(n().post("/validarVinculoBeforePersist",e),a)}function u(e,a){Object(r.sc)(n().post("/verificarSituacaoAfastamento",e),a)}function d(e,a){Object(r.sc)(n().post("/existeCalculoVinculoTomadorServico",e),a)}function b(e,a){Object(r.sc)(n().post("/perdeuPeriodoAquisitivoFerias",e),a)}function f(e,a){Object(r.sc)(n().post("/obterDataFinalGozoFerias",e),a)}function p(e,a){Object(r.sc)(n().post("/ajustarPeriodoAquisitivoFeriasPerdidoPorAfastamentos",e),a)}function m(e,a){Object(r.sc)(n().post("/getDiaUtil",e),a)}function O(e,a){Object(r.sc)(n().post("/simularFerias",e),a)}function j(e,a){Object(r.sc)(n().post("/definirAvisoPrevio",e),a)}function P(e,a){Object(r.sc)(n().post("/obterFeriasRescisao",e),a)}function g(e,a){Object(r.sc)(n().post("/rescisaoCalculada",e),a)}function v(e,a){Object(r.sc)(n().post("/simularRescisao",e),a)}function h(e,a){Object(r.sc)(n().delete("/apagarRescisao/".concat(e)),a)}function E(e,a){Object(r.sc)(n().post("/validarEventoVinculo",e),a)}function R(e,a){Object(r.sc)(n().post("/transferirVinculo",e),a)}function F(e,a){Object(r.sc)(n().post("/reintegrarVinculo",e),a)}function C(e,a){Object(r.sc)(n().post("/criarEventosPadroes",e),a)}function A(e,a){Object(r.sc)(n().post("/gerarManad",e),a)}function D(e,a){Object(r.sc)(n().post("/gerarRais",e),a)}function I(e,a){Object(r.sc)(n().post("/gerarDirf",e),a)}function M(e,a){Object(r.sc)(n().post("/gerarCaged",e),a)}}}]);
//# sourceMappingURL=294.2173a0be.chunk.js.map