(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1224:function(t,n,e){"use strict";e.r(n);var r=e(6),a=e(149),o=e(13),c=e(14),i=e(25),u=e(0),s=e.n(u),d=e(994),l=e.n(d),f=e(98),p=e(20),b=e(395),m=e(198),j=e(148),O=e(22),C=e(782),g=e(779),v=e(780),E=e(783),S=e(781),P=e(2),F=e(815),q=e(826),h=e(825),L=e(830),A=e(932);n.default=(t=>{const n=Object(p.c)(t=>t.globalReducer),e=Object(u.useState)(1),d=Object(o.a)(e,2),D=d[0],R=d[1],I=Object(f.b)({mode:"onBlur"}),G=I.reset,y=Object(a.a)(I,["reset"]),N=Object(u.useState)([]),w=Object(o.a)(N,2),M=w[0],T=w[1],B=Object(u.useState)([]),x=Object(o.a)(B,2),k=x[0],H=x[1],z=Object(u.useState)([]),V=Object(o.a)(z,2),J=V[0],U=V[1],X=Object(u.useState)([]),K=Object(o.a)(X,2),W=K[0],Q=K[1],Y=Object(u.useState)([]),_=Object(o.a)(Y,2),Z=_[0],$=_[1],tt=Object(u.useState)([]),nt=Object(o.a)(tt,2),et=nt[0],rt=nt[1],at={labels:W},ot={colors:[A.p,A.q,A.e,A.o,A.h,A.g,A.f,A.k,A.i,A.a,A.n],labels:Z},ct={labels:et},it=({target:t})=>{const n=t.tabIndex;D!==n&&R(n)};Object(u.useEffect)(()=>{if(null!==n.globalParameter.empresa){const t=n.globalParameter,e=t.empresa,r=t.empresaMCG.refAtual;setTimeout(()=>{G({dataStr:r,empresa:{id:e.id}})},500)}},[]);return s.a.createElement(P.hb,Object.assign({},t,{title:"Composi\xe7\xe3o de Receita e Despesas",useGlobalParameter:!0,globalParameter:n.globalParameter,dependencies:[()=>Object(F.a)(n.globalParameter),()=>Object(q.a)(n.globalParameter),()=>Object(h.a)(n.globalParameter)]}),s.a.createElement(b.a,null,s.a.createElement(P.K,{formProps:y,id:"empresa.id",hidden:!0}),s.a.createElement(m.a,null,s.a.createElement(j.a,null,s.a.createElement(P.K,{formProps:Object(r.a)(Object(r.a)({},y),{},{validation:{required:!0}}),id:"dataStr",placeholder:"Informe a Refer\xeancia",isPrependLabel:!0,label:"Refer\xeancia",type:P.L.REFERENCE}))),s.a.createElement(m.a,{className:"mb-3"},s.a.createElement(j.a,null,s.a.createElement(O.a,{className:"ml-0",onClick:y.handleSubmit(t=>{Object(L.f)(t,{errorFunction:t=>{Object(P.sc)(t,P.A)},thenFunction:t=>{if(0===t.composicaoResultado.length&&0===t.modeloSintetico.length&&0===t.modeloAnalitico.length){const t={message:"Nenhum dado encontrado relativo a Refer\xeancia Atual para gera\xe7\xe3o dos gr\xe1ficos",type:P.f.WARNING_YES_NO};P.ob.emit(P.a.SHOW,t)}else{const n=[],e=[],r=[],a=[],o=[],c=["TOTAL DA RECEITA","TOTAL DA DESPESA"];t.modeloSintetico.forEach(t=>{const r=-1*Number(t[1]),a=String(t[0]);e.push(a.toUpperCase()),n.push(r)}),t.modeloAnalitico.forEach(t=>{const n=-1*Number(t[1]),e=String(t[0]);a.push(e.toUpperCase()),r.push(n)}),t.composicaoResultado.forEach(t=>{const n=-1*Number(t);o.push(n)}),Q(e),T(n),H(r),$(a),U(o),rt(c)}}})}),color:"primary"},s.a.createElement(c.a,{icon:"sync"})," Consultar"))),s.a.createElement(C.a,{tabs:!0},s.a.createElement(g.a,null,s.a.createElement(v.a,{className:Object(i.a)({active:1===D}),tabIndex:1,onClick:it},"Modelo Sint\xe9tico")),s.a.createElement(g.a,null,s.a.createElement(v.a,{className:Object(i.a)({active:2===D}),tabIndex:2,onClick:it},"Modelo Anal\xedtico")),s.a.createElement(g.a,null,s.a.createElement(v.a,{className:Object(i.a)({active:3===D}),tabIndex:3,onClick:it},"Composi\xe7\xe3o do resultado"))),s.a.createElement(E.a,{className:"mb-1",activeTab:D},s.a.createElement(S.a,{tabId:1,className:"mb-0 p-3"},s.a.createElement(m.a,null,s.a.createElement(j.a,null,s.a.createElement(l.a,{options:at,series:M,type:"pie"})))),s.a.createElement(S.a,{tabId:2,className:"mb-0 p-3"},s.a.createElement(m.a,null,s.a.createElement(j.a,null,s.a.createElement(l.a,{options:ot,series:k,type:"pie"})))),s.a.createElement(S.a,{tabId:3,className:"mb-0 p-3"},s.a.createElement(m.a,null,s.a.createElement(j.a,null,s.a.createElement(l.a,{options:ct,series:J,type:"pie"})))))))})},815:function(t,n,e){"use strict";function r(t){let n=null;return t.empresa||(n="Pelo menos uma empresa deve estar selecionada."),n}e.d(n,"a",function(){return r})},825:function(t,n,e){"use strict";function r(t){let n=null;return t.empresa&&t.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&t.empresa.grupoEmpresa.grupoEmpresaConfig||(n="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),n}e.d(n,"a",function(){return r})},826:function(t,n,e){"use strict";function r(t){let n=null;return t.empresaMCG||(n="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),n}e.d(n,"a",function(){return r})},830:function(t,n,e){"use strict";e.d(n,"t",function(){return i}),e.d(n,"L",function(){return u}),e.d(n,"N",function(){return s}),e.d(n,"E",function(){return d}),e.d(n,"G",function(){return l}),e.d(n,"D",function(){return f}),e.d(n,"I",function(){return p}),e.d(n,"C",function(){return b}),e.d(n,"H",function(){return m}),e.d(n,"c",function(){return j}),e.d(n,"K",function(){return O}),e.d(n,"l",function(){return C}),e.d(n,"x",function(){return g}),e.d(n,"Q",function(){return v}),e.d(n,"ub",function(){return E}),e.d(n,"tb",function(){return S}),e.d(n,"sb",function(){return P}),e.d(n,"rb",function(){return F}),e.d(n,"Y",function(){return q}),e.d(n,"y",function(){return h}),e.d(n,"qb",function(){return L}),e.d(n,"w",function(){return A}),e.d(n,"ab",function(){return D}),e.d(n,"ob",function(){return R}),e.d(n,"T",function(){return I}),e.d(n,"pb",function(){return G}),e.d(n,"e",function(){return y}),e.d(n,"p",function(){return N}),e.d(n,"r",function(){return w}),e.d(n,"vb",function(){return M}),e.d(n,"v",function(){return T}),e.d(n,"lb",function(){return B}),e.d(n,"h",function(){return x}),e.d(n,"nb",function(){return k}),e.d(n,"z",function(){return H}),e.d(n,"P",function(){return z}),e.d(n,"a",function(){return V}),e.d(n,"cb",function(){return J}),e.d(n,"V",function(){return U}),e.d(n,"jb",function(){return X}),e.d(n,"Z",function(){return K}),e.d(n,"mb",function(){return W}),e.d(n,"kb",function(){return Q}),e.d(n,"n",function(){return Y}),e.d(n,"U",function(){return _}),e.d(n,"ib",function(){return Z}),e.d(n,"q",function(){return $}),e.d(n,"hb",function(){return tt}),e.d(n,"db",function(){return nt}),e.d(n,"R",function(){return et}),e.d(n,"bb",function(){return rt}),e.d(n,"i",function(){return at}),e.d(n,"o",function(){return ot}),e.d(n,"F",function(){return ct}),e.d(n,"J",function(){return it}),e.d(n,"u",function(){return ut}),e.d(n,"m",function(){return st}),e.d(n,"f",function(){return dt}),e.d(n,"s",function(){return lt}),e.d(n,"W",function(){return ft}),e.d(n,"X",function(){return pt}),e.d(n,"S",function(){return bt}),e.d(n,"g",function(){return mt}),e.d(n,"eb",function(){return jt}),e.d(n,"gb",function(){return Ot}),e.d(n,"k",function(){return Ct}),e.d(n,"j",function(){return gt}),e.d(n,"B",function(){return vt}),e.d(n,"A",function(){return Et}),e.d(n,"fb",function(){return St}),e.d(n,"b",function(){return Pt}),e.d(n,"d",function(){return Ft}),e.d(n,"M",function(){return qt}),e.d(n,"O",function(){return ht});var r=e(100),a=e(2),o=e(99);function c(){return Object(a.vb)("/mcg")}function i(t,n){Object(a.rc)(c().post("/gerarLancamentosFolhaPagamento",t),n)}function u(t,n){Object(a.rc)(c().post("/integrarFolhaPagamento",t),n)}function s(t,n){Object(a.rc)(c().post("/importar",t),n)}function d(t,n){const e=new FormData;e.append("empresa.id",String(t.empresa.id)),e.append("importarDuplicados",String(t.importarDuplicados)),e.append("importarLancamentosCardinal",String(t.importarLancamentosCardinal));var o,i=Object(r.a)(t.arquivos);try{for(i.s();!(o=i.n()).done;){const t=o.value;e.append("arquivos",t.file,t.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.rc)(c().post("/importarLancamentoCSV",e),n)}function l(t,n){const e=new FormData;e.append("empresa.id",String(t.empresa.id));var o,i=Object(r.a)(t.arquivos);try{for(i.s();!(o=i.n()).done;){const t=o.value;e.append("arquivos",t.file,t.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.rc)(c().post("/importarLancamentoPadraoCSV",e),n)}function f(t,n){const e=new FormData;e.append("grupoHistoricoDestino.id",String(t.grupoHistoricoDestino.id));var o,i=Object(r.a)(t.arquivos);try{for(i.s();!(o=i.n()).done;){const t=o.value;e.append("arquivos",t.file,t.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.rc)(c().post("/importarHistoricoCSV",e),n)}function p(t,n){const e=new FormData;e.append("idEmpresa",String(t.idEmpresa)),e.append("grupoPlanoContaDestino.id",String(t.grupoPlanoContaDestino.id));var o,i=Object(r.a)(t.arquivos);try{for(i.s();!(o=i.n()).done;){const t=o.value;e.append("arquivos",t.file,t.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.rc)(c().post("/importarPlanoContaCSV",e),n)}function b(t,n){Object(a.rc)(c().post("/importarHistorico",t),n)}function m(t,n){Object(a.rc)(c().post("/importarPlanoConta",t),n)}function j(t,n){Object(a.rc)(c().get("/buscarConfigLivroFolhaMCG/"+t),n)}function O(t,n){Object(a.rc)(c().post("/integracaoFiscalContabil",t),n)}function C(t,n,e){Object(a.rc)(c().post("/encerrarContas",{contaResultadoEncerramento:t,force:n}),e)}function g(t,n){Object(a.rc)(c().get("/getDataUltimaContaEncerrada/"+t),n)}function v(t,n){Object(a.rc)(c().post("/limparEncerramentoContaResultadoApos",t),n)}function E(t,n){Object(a.rc)(c().post("/validarReferenciaSPEDECFIrpjCsll",t),n)}function S(t,n){Object(a.rc)(c().post("/validarReferenciaSPEDECFImuneIsenta",t),n)}function P(t,n){Object(a.rc)(c().post("/validarRefRemuneracaoSocio",t),n)}function F(t,n){Object(a.rc)(c().post("/validarQuadroSocietario",t),n)}function q(t,n){Object(a.rc)(c().get("/obterLucroPrejuizoClassificacao/"+t),n)}function h(t,n){Object(a.rc)(c().post("/getSaldo",t),n)}function L(t,n){Object(a.rc)(c().post("/validarDadosSpedECF",t),n)}function A(t,n,e){Object(a.rc)(Object(o.i)().post("/gerarSpedECF",{usuario:t,ecfExportacaoParam:n}),e)}function D(t,n){Object(a.rc)(c().post("/recuperarLancamentoConta",t),n)}function R(t,n){Object(a.rc)(c().post("/transferirLancamentoConta",t),n)}function I(t,n){Object(a.rc)(c().post("/obterBancoPlanoConta",t),n)}function G(t,n){Object(a.rc)(c().get("/validarConfigLivroFolha/"+t),n)}function y(t,n){Object(a.rc)(c().get("/changeLivroFolha/"+t),n)}function N(t,n){Object(a.rc)(c().post("/fecharRestaurar",t),n)}function w(t,n){Object(a.rc)(c().post("/forceFecharRestaurar",t),n)}function M(t,n){Object(a.rc)(c().post("/verificarErros",t),n)}function T(t,n){const e=new FormData;if(e.append("usuario.id",String(t.usuario.id)),t.arquivoRTFEscrituracaoSubstituida){var o,i=Object(r.a)(t.arquivoRTFEscrituracaoSubstituida);try{for(i.s();!(o=i.n()).done;){const t=o.value;e.append("arquivoRTFEscrituracaoSubstituida",t.file,t.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}}for(const r in t)"arquivoRTFEscrituracaoSubstituida"!==r&&"usuario"!==r&&null!==t[r]&&e.append(r,t[r]);Object(a.rc)(c().post("/gerarSpedContabil",e),n)}function B(t,n){Object(a.rc)(c().post("/salvarLucroPrejuizoClassificacao",t),n)}function x(t,n){Object(a.rc)(c().post("/consultarMovimentacao",t),n)}function k(t,n){Object(a.rc)(c().post("/totalizadorLancamento",t),n)}function H(t,n){Object(a.rc)(c().post("/getSaldoAnterior",t),n)}function z(t,n){Object(a.rc)(c().post("/isDataEncerrada",t),n)}function V(t,n){Object(a.rc)(c().post("/abrirContas",t),n)}function J(t,n){Object(a.rc)(c().post("/removeLancamentoPeriodo",t),n)}function U(t,n){Object(a.rc)(c().get("/obterContasClassificacaoIndireto/"+t),n)}function X(t,n){Object(a.rc)(c().post("/salvarClassificacaoIndireto",t),n)}function K(t,n){Object(a.rc)(c().get("/obterMutacaoPatrimonioLiquido/"+t),n)}function W(t,n){Object(a.rc)(c().post("/salvarMutacaoPatrimonioLiquido",t),n)}function Q(t,n){Object(a.rc)(c().post("/salvarContaResultado",t),n)}function Y(t,n){Object(a.rc)(c().post("/excluirContaResultado",t),n)}function _(t,n){Object(a.rc)(c().get("/obterContasClassificacaoDireto/"+t),n)}function Z(t,n){Object(a.rc)(c().post("/salvarClassificacaoDireto",t),n)}function $(t,n){Object(a.rc)(c().post("/findSubGrupo",t),n)}function tt(t,n,e){Object(a.rc)(c().post("/removerTodosPlanosConta",{idGrupoPlanoConta:t,usuario:n}),e)}function nt(t,n,e,r){Object(a.rc)(c().post("/removeList",{listaPlanoConta:t,apagarFilha:n,usuario:e}),r)}function et(t,n){Object(a.rc)(c().post("/listSubGrupo",t),n)}function rt(t,n,e,r){Object(a.rc)(c().post("/referenciarContas",{idsPlanoConta:t,idPlanoContaReferencial:n,idPlanoContaReferencialECF:e}),r)}function at(t,n,e,r){Object(a.rc)(c().post("/desvincularContas",{idsPlanoConta:t,idPlanoContaReferencial:n,idPlanoContaReferencialECF:e}),r)}function ot(t,n,e){Object(a.rc)(c().post("/existeLancamentoEmContaAnalitica",{idPlanoConta:t,idEmpresa:n}),e)}function ct(t,n){const e=new FormData;e.append("idGerEmpresa",String(t.idGerEmpresa)),e.append("tipoImportacao",String(t.tipoImportacao)),e.append("sobescrever",String(t.sobescrever)),e.append("versaoSuperiorA2",String(t.versaoSuperiorA2)),e.append("arquivo",t.arquivo[0].file,t.arquivo[0].nomeArquivo),!1!==t.versaoSuperiorA2||Object(a.Xb)(t.dtInicial)||Object(a.Xb)(t.dtFinal)||(e.append("dtInicial",t.dtInicial),e.append("dtFinal",t.dtFinal)),Object(a.rc)(c().post("/importarLancamentoMCG",e),n)}function it(t,n){const e=new FormData;e.append("empresa.id",String(t.empresa.id)),e.append("usuario.id",String(t.usuario.id));var o,i=Object(r.a)(t.arquivos);try{for(i.s();!(o=i.n()).done;){const t=o.value;e.append("arquivos",t.file,t.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.rc)(c().post("/importarSpedContabil",e),n)}function ut(t,n){const e=new FormData;e.append("refInicial",t.refInicial),e.append("refFinal",t.refFinal),e.append("idGerEmpresa",String(t.idGerEmpresa)),e.append("usuario.id",String(t.usuario.id)),Object(a.Xb)(t.arquivoSFP)||e.append("arquivoSFP",t.arquivoSFP[0].file,t.arquivoSFP[0].nomeArquivo),Object(a.rc)(c().post("/gerarManadContabil",e),n)}function st(t,n){Object(a.rc)(c().post("/evolucaoContaContabilGraf",t),n)}function dt(t,n){Object(a.rc)(c().post("/composicaoReceitaDespesasGraf",t),n)}function lt(t,n){Object(a.rc)(c().post("/gerarFCONTContabil",t),n)}function ft(t,n,e){const r=new FormData;r.append("idBancoMCG",n),r.append("arquivoSelecionado",t[0].file,t[0].nomeArquivo),Object(a.rc)(c().post("/obterDadosArquivoExtrato",r),e)}function pt(t,n,e,r,o,i){const u=new FormData;u.append("idGrupoPlanoConta",String(t)),u.append("idEmpresa",String(n)),u.append("idBancoMCG",String(e)),u.append("dtInicial",String(r)),u.append("dtFinal",String(o)),Object(a.rc)(c().post("/obterDadosConciliacaoBancariaPeriodo",u),i)}function bt(t,n){Object(a.rc)(c().post("/obterBancoListPlanoConta",t),n)}function mt(t,n){Object(a.rc)(c().post("/conciliarLancamentosExtrato",t),n)}function jt(t,n){Object(a.rc)(c().post("/removerConciliarLancamentosExtrato",t),n)}function Ot(t,n){Object(a.rc)(c().post("/removerLancamentosExtratoBancario",t),n)}function Ct(t,n){Object(a.rc)(c().get("/eLalurAContas/"+t),n)}function gt(t,n){Object(a.rc)(c().get("/eLacsAContas/"+t),n)}function vt(t,n){Object(a.rc)(c().post("/getSaldoDebito",t),n)}function Et(t,n){Object(a.rc)(c().post("/getSaldoCredito",t),n)}function St(t,n){Object(a.rc)(c().post("/removerLancamentoLote",t),n)}function Pt(t,n){Object(a.rc)(c().post("/atualizaCalculoIrpjCsll",t),n)}function Ft(t,n){Object(a.rc)(c().post("/buscarLancamentosHonorarios",t),n)}function qt(t,n,e){Object(a.rc)(c().post("/integrarHonorarios",{integracaoHonorariosParam:t,lancamentos:n}),e)}function ht(t,n){Object(a.rc)(c().post("/isAlteraCalculoIRPJorCSLL",t),n)}},932:function(t,n,e){"use strict";e.d(n,"d",function(){return r}),e.d(n,"b",function(){return a}),e.d(n,"m",function(){return o}),e.d(n,"j",function(){return c}),e.d(n,"c",function(){return i}),e.d(n,"l",function(){return u}),e.d(n,"p",function(){return s}),e.d(n,"q",function(){return d}),e.d(n,"e",function(){return l}),e.d(n,"o",function(){return f}),e.d(n,"h",function(){return p}),e.d(n,"g",function(){return b}),e.d(n,"f",function(){return m}),e.d(n,"k",function(){return j}),e.d(n,"i",function(){return O}),e.d(n,"a",function(){return C}),e.d(n,"n",function(){return g});const r="#00E396",a="#008FFB",o="#FEB019",c="#3C44B1",i="#7BDCB5",u="#00D084",s="#f44336",d="#e91e63",l="#9c27b0",f="#673ab7",p="#3f51b5",b="#2196f3",m="#03a9f4",j="#00bcd4",O="#ffeb3b",C="#ffc107",g="#ff9800"}}]);
//# sourceMappingURL=245.40df2a7e.chunk.js.map