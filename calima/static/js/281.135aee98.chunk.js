(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1234:function(n,t,e){"use strict";e.r(t);var o=e(6),a=e(12),r=e(149),c=e(0),i=e.n(c),u=e(98),s=e(19),d=e(395),p=e(198),f=e(148),l=e(394),b=e(786),m=e(2),j=e(815),O=e(826),C=e(825),g=e(830),v=e(49);t.default=(n=>{const t=Object(s.c)(n=>n.globalReducer),e=Object(s.c)(n=>n.globalReducer).headerDrawerToggle,S=Object(u.b)({mode:"onBlur"}),E=S.reset,P=Object(r.a)(S,["reset"]),F=Object(c.useState)(!1),q=Object(a.a)(F,2),L=q[0],R=q[1],h=Object(s.b)();Object(c.useEffect)(()=>{if(null!==t.globalParameter.empresaMCG&&null!=t.globalParameter.empresa){const n=t.globalParameter,e=n.empresaMCG,o=e.refAtual,a=e.refFinal,r=n.empresa.id,c=n.usuario;setTimeout(()=>{E({idGerEmpresa:r,refFinal:a,refInicial:o,usuario:{id:c.id}})},400)}},[]);return i.a.createElement(m.ib,{title:"Manuten\xe7\xe3o de MANAD",useGlobalParameter:!0,globalParameter:t.globalParameter,dependencies:[()=>Object(C.a)(t.globalParameter),()=>Object(j.a)(t.globalParameter),()=>Object(O.a)(t.globalParameter)]},i.a.createElement(d.a,null,i.a.createElement(m.K,{formProps:P,id:"idGerEmpresa",hidden:!0}),i.a.createElement(m.K,{formProps:P,id:"usuario.id",hidden:!0}),i.a.createElement(p.a,null,i.a.createElement(f.a,null,i.a.createElement(m.K,{formProps:Object(o.a)(Object(o.a)({},P),{},{validation:{required:!0}}),id:"refInicial",placeholder:"Informe a Refer\xeancia Inicial",isPrependLabel:!0,label:"Refer\xeancia Inicial",type:m.L.REFERENCE})),i.a.createElement(f.a,null,i.a.createElement(m.K,{formProps:Object(o.a)(Object(o.a)({},P),{},{validation:{required:!0}}),id:"refFinal",placeholder:"Informe a Refer\xeancia a Referencia Final",isPrependLabel:!0,label:"Refer\xeancia Final",type:m.L.REFERENCE}))),i.a.createElement(l.a,{tag:p.a,className:"mt-2"},i.a.createElement(f.a,null,i.a.createElement(b.a,{onChange:()=>{R(!L)},id:"incorporarSFP",innerRef:P.register,label:"Incorporar Arquivo MANAD SFP",type:"switch"}))),L&&i.a.createElement(p.a,null,i.a.createElement(f.a,null,i.a.createElement(m.D,{acceptedTypes:".txt",formProps:P,isMultiple:!1,limitSizeBytes:m.X,propImageName:"arquivoSFP",maxFiles:1}))),i.a.createElement(m.R,{handleSubmit:P.handleSubmit(n=>{const t=function(){const n=[];return L&&Object(m.Yb)(P.getValues().arquivoSFP)&&n.push("Nenhum Arquivo selecionado"),n}();if(t.length>0){const n={message:i.a.createElement(m.C,{erros:t}),type:m.f.WARNING};m.pb.emit(m.a.SHOW,n)}else!function(n){Object(g.w)(n,{errorFunction:n=>{Object(m.tc)(n,m.A)},thenFunction:()=>{e||h(Object(v.e)())}})}(n)}),handleClose:()=>((t=!0)=>{Object(m.Cb)(n,n.history,t)})()})))})},815:function(n,t,e){"use strict";function o(n){let t=null;return n.empresa||(t="Pelo menos uma empresa deve estar selecionada."),t}e.d(t,"a",function(){return o})},825:function(n,t,e){"use strict";function o(n){let t=null;return n.empresa&&n.empresa.grupoEmpresaRaiz.grupoEmpresaConfig&&n.empresa.grupoEmpresa.grupoEmpresaConfig||(t="O Grupo de empresas n\xe3o est\xe1 configurado para a empresa selecionada. Para configurar acesse:\nModulo Principal > Manuten\xe7\xe3o > Configura\xe7\xf5es > Grupo de Empresa"),t}e.d(t,"a",function(){return o})},826:function(n,t,e){"use strict";function o(n){let t=null;return n.empresaMCG||(t="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),t}e.d(t,"a",function(){return o})},830:function(n,t,e){"use strict";e.d(t,"v",function(){return i}),e.d(t,"N",function(){return u}),e.d(t,"P",function(){return s}),e.d(t,"G",function(){return d}),e.d(t,"I",function(){return p}),e.d(t,"F",function(){return f}),e.d(t,"K",function(){return l}),e.d(t,"E",function(){return b}),e.d(t,"J",function(){return m}),e.d(t,"d",function(){return j}),e.d(t,"M",function(){return O}),e.d(t,"n",function(){return C}),e.d(t,"z",function(){return g}),e.d(t,"S",function(){return v}),e.d(t,"zb",function(){return S}),e.d(t,"yb",function(){return E}),e.d(t,"xb",function(){return P}),e.d(t,"wb",function(){return F}),e.d(t,"bb",function(){return q}),e.d(t,"A",function(){return L}),e.d(t,"vb",function(){return R}),e.d(t,"y",function(){return h}),e.d(t,"eb",function(){return D}),e.d(t,"tb",function(){return A}),e.d(t,"V",function(){return I}),e.d(t,"ub",function(){return G}),e.d(t,"f",function(){return w}),e.d(t,"r",function(){return y}),e.d(t,"t",function(){return M}),e.d(t,"Ab",function(){return N}),e.d(t,"x",function(){return x}),e.d(t,"qb",function(){return z}),e.d(t,"j",function(){return T}),e.d(t,"sb",function(){return B}),e.d(t,"B",function(){return H}),e.d(t,"R",function(){return V}),e.d(t,"a",function(){return K}),e.d(t,"gb",function(){return Y}),e.d(t,"X",function(){return k}),e.d(t,"ob",function(){return J}),e.d(t,"cb",function(){return W}),e.d(t,"rb",function(){return Q}),e.d(t,"pb",function(){return U}),e.d(t,"p",function(){return X}),e.d(t,"W",function(){return Z}),e.d(t,"nb",function(){return $}),e.d(t,"s",function(){return _}),e.d(t,"mb",function(){return nn}),e.d(t,"hb",function(){return tn}),e.d(t,"T",function(){return en}),e.d(t,"fb",function(){return on}),e.d(t,"k",function(){return an}),e.d(t,"q",function(){return rn}),e.d(t,"H",function(){return cn}),e.d(t,"L",function(){return un}),e.d(t,"w",function(){return sn}),e.d(t,"o",function(){return dn}),e.d(t,"g",function(){return pn}),e.d(t,"u",function(){return fn}),e.d(t,"Y",function(){return ln}),e.d(t,"Z",function(){return bn}),e.d(t,"U",function(){return mn}),e.d(t,"i",function(){return jn}),e.d(t,"jb",function(){return On}),e.d(t,"lb",function(){return Cn}),e.d(t,"ab",function(){return gn}),e.d(t,"h",function(){return vn}),e.d(t,"ib",function(){return Sn}),e.d(t,"m",function(){return En}),e.d(t,"l",function(){return Pn}),e.d(t,"D",function(){return Fn}),e.d(t,"C",function(){return qn}),e.d(t,"kb",function(){return Ln}),e.d(t,"c",function(){return Rn}),e.d(t,"e",function(){return hn}),e.d(t,"O",function(){return Dn}),e.d(t,"Q",function(){return An}),e.d(t,"b",function(){return In}),e.d(t,"db",function(){return Gn});var o=e(100),a=e(2),r=e(99);function c(){return Object(a.wb)("/mcg")}function i(n,t){Object(a.sc)(c().post("/gerarLancamentosFolhaPagamento",n),t)}function u(n,t){Object(a.sc)(c().post("/integrarFolhaPagamento",n),t)}function s(n,t){Object(a.sc)(c().post("/importar",n),t)}function d(n,t){const e=new FormData;e.append("empresa.id",String(n.empresa.id)),e.append("importarDuplicados",String(n.importarDuplicados)),e.append("importarLancamentosCardinal",String(n.importarLancamentosCardinal));var r,i=Object(o.a)(n.arquivos);try{for(i.s();!(r=i.n()).done;){const n=r.value;e.append("arquivos",n.file,n.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.sc)(c().post("/importarLancamentoCSV",e),t)}function p(n,t){const e=new FormData;e.append("empresa.id",String(n.empresa.id));var r,i=Object(o.a)(n.arquivos);try{for(i.s();!(r=i.n()).done;){const n=r.value;e.append("arquivos",n.file,n.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.sc)(c().post("/importarLancamentoPadraoCSV",e),t)}function f(n,t){const e=new FormData;e.append("grupoHistoricoDestino.id",String(n.grupoHistoricoDestino.id));var r,i=Object(o.a)(n.arquivos);try{for(i.s();!(r=i.n()).done;){const n=r.value;e.append("arquivos",n.file,n.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.sc)(c().post("/importarHistoricoCSV",e),t)}function l(n,t){const e=new FormData;e.append("idEmpresa",String(n.idEmpresa)),e.append("grupoPlanoContaDestino.id",String(n.grupoPlanoContaDestino.id));var r,i=Object(o.a)(n.arquivos);try{for(i.s();!(r=i.n()).done;){const n=r.value;e.append("arquivos",n.file,n.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.sc)(c().post("/importarPlanoContaCSV",e),t)}function b(n,t){Object(a.sc)(c().post("/importarHistorico",n),t)}function m(n,t){Object(a.sc)(c().post("/importarPlanoConta",n),t)}function j(n,t){Object(a.sc)(c().get("/buscarConfigLivroFolhaMCG/"+n),t)}function O(n,t){Object(a.sc)(c().post("/integracaoFiscalContabil",n),t)}function C(n,t,e){Object(a.sc)(c().post("/encerrarContas",{contaResultadoEncerramento:n,force:t}),e)}function g(n,t){Object(a.sc)(c().get("/getDataUltimaContaEncerrada/"+n),t)}function v(n,t){Object(a.sc)(c().post("/limparEncerramentoContaResultadoApos",n),t)}function S(n,t){Object(a.sc)(c().post("/validarReferenciaSPEDECFIrpjCsll",n),t)}function E(n,t){Object(a.sc)(c().post("/validarReferenciaSPEDECFImuneIsenta",n),t)}function P(n,t){Object(a.sc)(c().post("/validarRefRemuneracaoSocio",n),t)}function F(n,t){Object(a.sc)(c().post("/validarQuadroSocietario",n),t)}function q(n,t){Object(a.sc)(c().get("/obterLucroPrejuizoClassificacao/"+n),t)}function L(n,t){Object(a.sc)(c().post("/getSaldo",n),t)}function R(n,t){Object(a.sc)(c().post("/validarDadosSpedECF",n),t)}function h(n,t,e){Object(a.sc)(Object(r.i)().post("/gerarSpedECF",{usuario:n,ecfExportacaoParam:t}),e)}function D(n,t){Object(a.sc)(c().post("/recuperarLancamentoConta",n),t)}function A(n,t){Object(a.sc)(c().post("/transferirLancamentoConta",n),t)}function I(n,t){Object(a.sc)(c().post("/obterBancoPlanoConta",n),t)}function G(n,t){Object(a.sc)(c().get("/validarConfigLivroFolha/"+n),t)}function w(n,t){Object(a.sc)(c().get("/changeLivroFolha/"+n),t)}function y(n,t){Object(a.sc)(c().post("/fecharRestaurar",n),t)}function M(n,t){Object(a.sc)(c().post("/forceFecharRestaurar",n),t)}function N(n,t){Object(a.sc)(c().post("/verificarErros",n),t)}function x(n,t){const e=new FormData;if(e.append("usuario.id",String(n.usuario.id)),n.arquivoRTFEscrituracaoSubstituida){var r,i=Object(o.a)(n.arquivoRTFEscrituracaoSubstituida);try{for(i.s();!(r=i.n()).done;){const n=r.value;e.append("arquivoRTFEscrituracaoSubstituida",n.file,n.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}}for(const o in n)"arquivoRTFEscrituracaoSubstituida"!==o&&"usuario"!==o&&null!==n[o]&&e.append(o,n[o]);Object(a.sc)(c().post("/gerarSpedContabil",e),t)}function z(n,t){Object(a.sc)(c().post("/salvarLucroPrejuizoClassificacao",n),t)}function T(n,t){Object(a.sc)(c().post("/consultarMovimentacao",n),t)}function B(n,t){Object(a.sc)(c().post("/totalizadorLancamento",n),t)}function H(n,t){Object(a.sc)(c().post("/getSaldoAnterior",n),t)}function V(n,t){Object(a.sc)(c().post("/isDataEncerrada",n),t)}function K(n,t){Object(a.sc)(c().post("/abrirContas",n),t)}function Y(n,t){Object(a.sc)(c().post("/removeLancamentoPeriodo",n),t)}function k(n,t){Object(a.sc)(c().get("/obterContasClassificacaoIndireto/"+n),t)}function J(n,t){Object(a.sc)(c().post("/salvarClassificacaoIndireto",n),t)}function W(n,t){Object(a.sc)(c().get("/obterMutacaoPatrimonioLiquido/"+n),t)}function Q(n,t){Object(a.sc)(c().post("/salvarMutacaoPatrimonioLiquido",n),t)}function U(n,t){Object(a.sc)(c().post("/salvarContaResultado",n),t)}function X(n,t){Object(a.sc)(c().post("/excluirContaResultado",n),t)}function Z(n,t){Object(a.sc)(c().get("/obterContasClassificacaoDireto/"+n),t)}function $(n,t){Object(a.sc)(c().post("/salvarClassificacaoDireto",n),t)}function _(n,t){Object(a.sc)(c().post("/findSubGrupo",n),t)}function nn(n,t,e){Object(a.sc)(c().post("/removerTodosPlanosConta",{idGrupoPlanoConta:n,usuario:t}),e)}function tn(n,t,e,o){Object(a.sc)(c().post("/removeList",{listaPlanoConta:n,apagarFilha:t,usuario:e}),o)}function en(n,t){Object(a.sc)(c().post("/listSubGrupo",n),t)}function on(n,t,e,o){Object(a.sc)(c().post("/referenciarContas",{idsPlanoConta:n,idPlanoContaReferencial:t,idPlanoContaReferencialECF:e}),o)}function an(n,t,e,o){Object(a.sc)(c().post("/desvincularContas",{idsPlanoConta:n,idPlanoContaReferencial:t,idPlanoContaReferencialECF:e}),o)}function rn(n,t,e){Object(a.sc)(c().post("/existeLancamentoEmContaAnalitica",{idPlanoConta:n,idEmpresa:t}),e)}function cn(n,t){const e=new FormData;e.append("idGerEmpresa",String(n.idGerEmpresa)),e.append("tipoImportacao",String(n.tipoImportacao)),e.append("sobescrever",String(n.sobescrever)),e.append("versaoSuperiorA2",String(n.versaoSuperiorA2)),e.append("arquivo",n.arquivo[0].file,n.arquivo[0].nomeArquivo),!1!==n.versaoSuperiorA2||Object(a.Yb)(n.dtInicial)||Object(a.Yb)(n.dtFinal)||(e.append("dtInicial",n.dtInicial),e.append("dtFinal",n.dtFinal)),Object(a.sc)(c().post("/importarLancamentoMCG",e),t)}function un(n,t){const e=new FormData;e.append("empresa.id",String(n.empresa.id)),e.append("usuario.id",String(n.usuario.id));var r,i=Object(o.a)(n.arquivos);try{for(i.s();!(r=i.n()).done;){const n=r.value;e.append("arquivos",n.file,n.nomeArquivo)}}catch(u){i.e(u)}finally{i.f()}Object(a.sc)(c().post("/importarSpedContabil",e),t)}function sn(n,t){const e=new FormData;e.append("refInicial",n.refInicial),e.append("refFinal",n.refFinal),e.append("idGerEmpresa",String(n.idGerEmpresa)),e.append("usuario.id",String(n.usuario.id)),Object(a.Yb)(n.arquivoSFP)||e.append("arquivoSFP",n.arquivoSFP[0].file,n.arquivoSFP[0].nomeArquivo),Object(a.sc)(c().post("/gerarManadContabil",e),t)}function dn(n,t){Object(a.sc)(c().post("/evolucaoContaContabilGraf",n),t)}function pn(n,t){Object(a.sc)(c().post("/composicaoReceitaDespesasGraf",n),t)}function fn(n,t){Object(a.sc)(c().post("/gerarFCONTContabil",n),t)}function ln(n,t,e){const o=new FormData;o.append("idBancoMCG",t),o.append("arquivoSelecionado",n[0].file,n[0].nomeArquivo),Object(a.sc)(c().post("/obterDadosArquivoExtrato",o),e)}function bn(n,t,e,o,r,i){const u=new FormData;u.append("idGrupoPlanoConta",String(n)),u.append("idEmpresa",String(t)),u.append("idBancoMCG",String(e)),u.append("dtInicial",String(o)),u.append("dtFinal",String(r)),Object(a.sc)(c().post("/obterDadosConciliacaoBancariaPeriodo",u),i)}function mn(n,t){Object(a.sc)(c().post("/obterBancoListPlanoConta",n),t)}function jn(n,t){Object(a.sc)(c().post("/conciliarLancamentosExtrato",n),t)}function On(n,t){Object(a.sc)(c().post("/removerConciliarLancamentosExtrato",n),t)}function Cn(n,t){Object(a.sc)(c().post("/removerLancamentosExtratoBancario",n),t)}function gn(n,t,e,o,r,i,u,s){const d=new FormData;d.append("idGrupoPlanoConta",String(n)),d.append("idEmpresa",String(t)),d.append("dtInicial",String(e)),d.append("dtFinal",String(o)),d.append("historico",String(r)),d.append("valor",String(i)),d.append("operacaoConsultaValor",String(u)),Object(a.sc)(c().post("/obterLancamentosSaldoPeriodo",d),s)}function vn(n,t){Object(a.sc)(c().post("/conciliarLancamentosConta",n),t)}function Sn(n,t){Object(a.sc)(c().post("/removerConciliarLancamentosConta",n),t)}function En(n,t){Object(a.sc)(c().get("/eLalurAContas/"+n),t)}function Pn(n,t){Object(a.sc)(c().get("/eLacsAContas/"+n),t)}function Fn(n,t){Object(a.sc)(c().post("/getSaldoDebito",n),t)}function qn(n,t){Object(a.sc)(c().post("/getSaldoCredito",n),t)}function Ln(n,t){Object(a.sc)(c().post("/removerLancamentoLote",n),t)}function Rn(n,t){Object(a.sc)(c().post("/atualizaCalculoIrpjCsll",n),t)}function hn(n,t){Object(a.sc)(c().post("/buscarLancamentosHonorarios",n),t)}function Dn(n,t,e){Object(a.sc)(c().post("/integrarHonorarios",{integracaoHonorariosParam:n,lancamentos:t}),e)}function An(n,t){Object(a.sc)(c().post("/isAlteraCalculoIRPJorCSLL",n),t)}function In(n,t,e){Object(a.sc)(c().post("/alterarPlanoContaNaturezaConfig",{idsPlanoConta:n,enumPlanoContaNaturezaConta:t}),e)}function Gn(n,t){Object(a.sc)(c().get("/prepararContaResultado/"+n),t)}}}]);
//# sourceMappingURL=281.135aee98.chunk.js.map