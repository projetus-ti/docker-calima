(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1467:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(13),r=a(0),i=a.n(r),c=a(98),u=a(20),l=a(198),s=a(148),d=a(786),p=a(2),f=a(815),b=a(826);const m={label:"ECF original",value:"original"},O=[{label:"ECF retificadora",value:"retificadora"},m,{label:"ECF original com mudan\xe7a de forma de tributa\xe7\xe3o (Art. 5o da Instru\xe7\xe3o Normativa no 166/1999)",value:"originalMudancaFormaTributacao"}],v={value:"regular",label:"Regular (In\xedcio no Primeiro Dia do Ano)"},j=[v,{value:"abertura",label:"Abertura (In\xedcio de Atividades no Ano-Calend\xe1rio)"},{value:"cisao",label:"Resultante de Cis\xe3o/Fus\xe3o ou Remanescente de Cis\xe3o, Ou Realizou Incorpora\xe7\xe3o"},{value:"tranformacao",label:"Resultante de Transforma\xe7\xe3o"},{value:"anoCalendario",label:"In\xedcio de Obrigatoriedade da Entrega no Curso do Ano Calend\xe1rio"}],C={value:"NORMAL",label:"Normal (Sem ocorr\xeancia de situa\xe7\xe3o especial ou evento)"},E={value:"EXTINCAO",label:"Extin\xe7\xe3o"},g=[C,E,{value:"FUSAO",label:"Fus\xe3o"},{value:"INCORPORADA",label:"Incorpora\xe7\xe3o - Incorporada"},{value:"INCORPORADORA",label:"Incorpora\xe7\xe3o - Incorporadora"},{value:"CISAO_TOTAL",label:"Cis\xe3o Total"},{value:"CISAO_PARCIAL",label:"Cis\xe3o Parcial"},{value:"TRANSFORMACAO",label:"Transforma\xe7\xe3o"},{value:"DESENQUADRAMENTO_IMUNE_ISENTA",label:"Desenquadramento de Imune - Isenta"},{value:"INCLUSAO_SIMPLES_NACIONAL",label:"Inclus\xe3o no Simples Nacional"}],P={label:"ECF de empresa n\xe3o participante de SCP como s\xf3cio ostensivo",value:"naoParticipanteSCP"},S=[P,{label:"ECF de empresa participante de SCP como s\xf3cio ostensivo",value:"participanteSCP"},{label:"ECF da SCP",value:"scp"}];var F=a(830);t.default=(e=>{const t=Object(u.c)(e=>e.globalReducer),a=Object(r.useState)(!1),D=Object(o.a)(a,2),A=D[0],L=D[1],R=Object(c.b)({defaultValues:{empresa:{id:t.globalParameter.empresa.id},idEmpresa:t.globalParameter.empresa.id},mode:"onBlur"});Object(r.useEffect)(()=>{const e=t.globalParameter.empresaMCG;e&&null!==e.refAtual&&(R.getValues().dtInicial=Object(p.Mb)(Object(p.ic)(e.refAtual,1)),R.getValues().dtFinal=Object(p.Mb)(Object(p.ic)(e.refAtual,0))),setTimeout(()=>{R.setValue("inicioPeriodo",v.value),R.setValue("situacaoEspecial",C.value),R.setValue("tipoECF",P.value),R.setValue("retificadora",m.value,!0)},500)},[]);return i.a.createElement(p.hb,{title:"Gera\xe7\xe3o SPED ECF - Escritura\xe7\xe3o Cont\xe1bil Fiscal",useGlobalParameter:!0,globalParameter:t.globalParameter,dependencies:[()=>Object(f.a)(t.globalParameter),()=>Object(b.a)(t.globalParameter)],wikiId:207},i.a.createElement(p.B,{formProps:R,editViewProps:e,dtoClassName:"br.com.projetusinformatica.calima.mcg.model.dto.ecfexportacaoparam",validateExtras:()=>{const e=[],t=R.getValues(),a=t.dtInicial,n=t.dtFinal,o=t.dtSitEspecial;Object(p.tc)(n)<Object(p.tc)(a)&&e.push("A Data Final n\xe3o pode ser menor que a Data Inicial");const r=Object(p.gc)(Object(p.tc)(a));return+Object(p.gc)(Object(p.tc)(n))-+r>=12&&e.push("As datas informadas s\xe3o superiores a 1(um) ano. N\xe3o \xe9 permitido a gera\xe7\xe3o de mais um ano no arquivo"),!0===A&&Object(p.Xb)(o)&&e.push("Data da Situa\xe7\xe3o Especial - Campo n\xe3o pode estar em branco."),e},beforePersist:e=>(Object(F.qb)(e,{thenFunction:a=>{let n="";a.length>0?a.forEach(e=>{n+=e.message,n+="\n"}):Object(F.w)(t.globalParameter.usuario,e);const o={message:n,type:p.f.ERROR};p.ob.emit(p.a.SHOW,o)}}),{async:!0})},i.a.createElement(p.K,{id:"idEmpresa",formProps:R,hidden:!0}),i.a.createElement(p.K,{id:"empresa.id",formProps:R,hidden:!0}),i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(p.K,{id:"dtInicial",label:"Data Inicial",isPrependLabel:!0,formProps:Object(n.a)(Object(n.a)({},R),{},{validation:{required:!0}}),type:p.L.DATE})),i.a.createElement(s.a,null,i.a.createElement(p.K,{id:"dtFinal",label:"Data Final",isPrependLabel:!0,formProps:Object(n.a)(Object(n.a)({},R),{},{validation:{required:!0}}),type:p.L.DATE}))),i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(d.a,{name:"gerarQ100",id:"gerarQ100",label:"Gerar Registro Q100",innerRef:R.register,type:"switch"})),i.a.createElement(s.a,null,i.a.createElement(d.a,{name:"gerarArquivoVazio",id:"gerarArquivoVazio",label:"Gerar Arquivo Vazio",innerRef:R.register,type:"switch"}))),i.a.createElement("br",null),i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(p.K,{formProps:Object(n.a)(Object(n.a)({},R),{},{validation:{required:!0}}),id:"inicioPeriodo",isPrependLabel:!0,label:"Situa\xe7\xe3o In\xedcio Per\xedodo",placeholder:"Selecione a Situa\xe7\xe3o In\xedcio Per\xedodo.",inputDropDownProps:{optionsProvider:j},type:p.L.DROP_DOWN}))),i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(p.K,{formProps:Object(n.a)(Object(n.a)({},R),{},{validation:{required:!0}}),id:"situacaoEspecial",isPrependLabel:!0,label:"Situa\xe7\xe3o Especial",placeholder:"Selecione a Situa\xe7\xe3o Especial.",inputDropDownProps:{optionsProvider:g},onChange:e=>{null===R.getValues().situacaoEspecial||e===C.value||e===E.value?(L(!1),R.setValue("dtSitEspecial",null)):L(!0)},type:p.L.DROP_DOWN}))),A?i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(p.K,{formProps:R,id:"dtSitEspecial",isPrependLabel:!0,label:"Data da Situa\xe7\xe3o Especial",placeholder:"Informe a Data da Situa\xe7\xe3o Especial",type:p.L.DATE}))):null,i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(p.K,{formProps:R,id:"tipoECF",isPrependLabel:!0,label:"Tipo ECF",placeholder:"Selecione o Tipo ECF.",inputDropDownProps:{optionsProvider:S},type:p.L.DROP_DOWN}))),i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(p.K,{formProps:Object(n.a)(Object(n.a)({},R),{},{validation:{required:!0}}),id:"retificadora",isPrependLabel:!0,label:"Escritura\xe7\xe3o Retificadora",placeholder:"Selecione a Escritura\xe7\xe3o Retificadora.",inputDropDownProps:{optionsProvider:O},type:p.L.DROP_DOWN})))))})},815:function(e,t,a){"use strict";function n(e){let t=null;return e.empresa||(t="Pelo menos uma empresa deve estar selecionada."),t}a.d(t,"a",function(){return n})},826:function(e,t,a){"use strict";function n(e){let t=null;return e.empresaMCG||(t="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),t}a.d(t,"a",function(){return n})},830:function(e,t,a){"use strict";a.d(t,"t",function(){return c}),a.d(t,"L",function(){return u}),a.d(t,"N",function(){return l}),a.d(t,"E",function(){return s}),a.d(t,"G",function(){return d}),a.d(t,"D",function(){return p}),a.d(t,"I",function(){return f}),a.d(t,"C",function(){return b}),a.d(t,"H",function(){return m}),a.d(t,"c",function(){return O}),a.d(t,"K",function(){return v}),a.d(t,"l",function(){return j}),a.d(t,"x",function(){return C}),a.d(t,"Q",function(){return E}),a.d(t,"ub",function(){return g}),a.d(t,"tb",function(){return P}),a.d(t,"sb",function(){return S}),a.d(t,"rb",function(){return F}),a.d(t,"Y",function(){return D}),a.d(t,"y",function(){return A}),a.d(t,"qb",function(){return L}),a.d(t,"w",function(){return R}),a.d(t,"ab",function(){return q}),a.d(t,"ob",function(){return I}),a.d(t,"T",function(){return h}),a.d(t,"pb",function(){return w}),a.d(t,"e",function(){return y}),a.d(t,"p",function(){return N}),a.d(t,"r",function(){return T}),a.d(t,"vb",function(){return G}),a.d(t,"v",function(){return M}),a.d(t,"lb",function(){return V}),a.d(t,"h",function(){return x}),a.d(t,"nb",function(){return K}),a.d(t,"z",function(){return _}),a.d(t,"P",function(){return z}),a.d(t,"a",function(){return B}),a.d(t,"cb",function(){return H}),a.d(t,"V",function(){return Q}),a.d(t,"jb",function(){return U}),a.d(t,"Z",function(){return W}),a.d(t,"mb",function(){return X}),a.d(t,"kb",function(){return k}),a.d(t,"n",function(){return J}),a.d(t,"U",function(){return Y}),a.d(t,"ib",function(){return Z}),a.d(t,"q",function(){return $}),a.d(t,"hb",function(){return ee}),a.d(t,"db",function(){return te}),a.d(t,"R",function(){return ae}),a.d(t,"bb",function(){return ne}),a.d(t,"i",function(){return oe}),a.d(t,"o",function(){return re}),a.d(t,"F",function(){return ie}),a.d(t,"J",function(){return ce}),a.d(t,"u",function(){return ue}),a.d(t,"m",function(){return le}),a.d(t,"f",function(){return se}),a.d(t,"s",function(){return de}),a.d(t,"W",function(){return pe}),a.d(t,"X",function(){return fe}),a.d(t,"S",function(){return be}),a.d(t,"g",function(){return me}),a.d(t,"eb",function(){return Oe}),a.d(t,"gb",function(){return ve}),a.d(t,"k",function(){return je}),a.d(t,"j",function(){return Ce}),a.d(t,"B",function(){return Ee}),a.d(t,"A",function(){return ge}),a.d(t,"fb",function(){return Pe}),a.d(t,"b",function(){return Se}),a.d(t,"d",function(){return Fe}),a.d(t,"M",function(){return De}),a.d(t,"O",function(){return Ae});var n=a(100),o=a(2),r=a(99);function i(){return Object(o.vb)("/mcg")}function c(e,t){Object(o.rc)(i().post("/gerarLancamentosFolhaPagamento",e),t)}function u(e,t){Object(o.rc)(i().post("/integrarFolhaPagamento",e),t)}function l(e,t){Object(o.rc)(i().post("/importar",e),t)}function s(e,t){const a=new FormData;a.append("empresa.id",String(e.empresa.id)),a.append("importarDuplicados",String(e.importarDuplicados)),a.append("importarLancamentosCardinal",String(e.importarLancamentosCardinal));var r,c=Object(n.a)(e.arquivos);try{for(c.s();!(r=c.n()).done;){const e=r.value;a.append("arquivos",e.file,e.nomeArquivo)}}catch(u){c.e(u)}finally{c.f()}Object(o.rc)(i().post("/importarLancamentoCSV",a),t)}function d(e,t){const a=new FormData;a.append("empresa.id",String(e.empresa.id));var r,c=Object(n.a)(e.arquivos);try{for(c.s();!(r=c.n()).done;){const e=r.value;a.append("arquivos",e.file,e.nomeArquivo)}}catch(u){c.e(u)}finally{c.f()}Object(o.rc)(i().post("/importarLancamentoPadraoCSV",a),t)}function p(e,t){const a=new FormData;a.append("grupoHistoricoDestino.id",String(e.grupoHistoricoDestino.id));var r,c=Object(n.a)(e.arquivos);try{for(c.s();!(r=c.n()).done;){const e=r.value;a.append("arquivos",e.file,e.nomeArquivo)}}catch(u){c.e(u)}finally{c.f()}Object(o.rc)(i().post("/importarHistoricoCSV",a),t)}function f(e,t){const a=new FormData;a.append("idEmpresa",String(e.idEmpresa)),a.append("grupoPlanoContaDestino.id",String(e.grupoPlanoContaDestino.id));var r,c=Object(n.a)(e.arquivos);try{for(c.s();!(r=c.n()).done;){const e=r.value;a.append("arquivos",e.file,e.nomeArquivo)}}catch(u){c.e(u)}finally{c.f()}Object(o.rc)(i().post("/importarPlanoContaCSV",a),t)}function b(e,t){Object(o.rc)(i().post("/importarHistorico",e),t)}function m(e,t){Object(o.rc)(i().post("/importarPlanoConta",e),t)}function O(e,t){Object(o.rc)(i().get("/buscarConfigLivroFolhaMCG/"+e),t)}function v(e,t){Object(o.rc)(i().post("/integracaoFiscalContabil",e),t)}function j(e,t,a){Object(o.rc)(i().post("/encerrarContas",{contaResultadoEncerramento:e,force:t}),a)}function C(e,t){Object(o.rc)(i().get("/getDataUltimaContaEncerrada/"+e),t)}function E(e,t){Object(o.rc)(i().post("/limparEncerramentoContaResultadoApos",e),t)}function g(e,t){Object(o.rc)(i().post("/validarReferenciaSPEDECFIrpjCsll",e),t)}function P(e,t){Object(o.rc)(i().post("/validarReferenciaSPEDECFImuneIsenta",e),t)}function S(e,t){Object(o.rc)(i().post("/validarRefRemuneracaoSocio",e),t)}function F(e,t){Object(o.rc)(i().post("/validarQuadroSocietario",e),t)}function D(e,t){Object(o.rc)(i().get("/obterLucroPrejuizoClassificacao/"+e),t)}function A(e,t){Object(o.rc)(i().post("/getSaldo",e),t)}function L(e,t){Object(o.rc)(i().post("/validarDadosSpedECF",e),t)}function R(e,t,a){Object(o.rc)(Object(r.i)().post("/gerarSpedECF",{usuario:e,ecfExportacaoParam:t}),a)}function q(e,t){Object(o.rc)(i().post("/recuperarLancamentoConta",e),t)}function I(e,t){Object(o.rc)(i().post("/transferirLancamentoConta",e),t)}function h(e,t){Object(o.rc)(i().post("/obterBancoPlanoConta",e),t)}function w(e,t){Object(o.rc)(i().get("/validarConfigLivroFolha/"+e),t)}function y(e,t){Object(o.rc)(i().get("/changeLivroFolha/"+e),t)}function N(e,t){Object(o.rc)(i().post("/fecharRestaurar",e),t)}function T(e,t){Object(o.rc)(i().post("/forceFecharRestaurar",e),t)}function G(e,t){Object(o.rc)(i().post("/verificarErros",e),t)}function M(e,t){const a=new FormData;if(a.append("usuario.id",String(e.usuario.id)),e.arquivoRTFEscrituracaoSubstituida){var r,c=Object(n.a)(e.arquivoRTFEscrituracaoSubstituida);try{for(c.s();!(r=c.n()).done;){const e=r.value;a.append("arquivoRTFEscrituracaoSubstituida",e.file,e.nomeArquivo)}}catch(u){c.e(u)}finally{c.f()}}for(const n in e)"arquivoRTFEscrituracaoSubstituida"!==n&&"usuario"!==n&&null!==e[n]&&a.append(n,e[n]);Object(o.rc)(i().post("/gerarSpedContabil",a),t)}function V(e,t){Object(o.rc)(i().post("/salvarLucroPrejuizoClassificacao",e),t)}function x(e,t){Object(o.rc)(i().post("/consultarMovimentacao",e),t)}function K(e,t){Object(o.rc)(i().post("/totalizadorLancamento",e),t)}function _(e,t){Object(o.rc)(i().post("/getSaldoAnterior",e),t)}function z(e,t){Object(o.rc)(i().post("/isDataEncerrada",e),t)}function B(e,t){Object(o.rc)(i().post("/abrirContas",e),t)}function H(e,t){Object(o.rc)(i().post("/removeLancamentoPeriodo",e),t)}function Q(e,t){Object(o.rc)(i().get("/obterContasClassificacaoIndireto/"+e),t)}function U(e,t){Object(o.rc)(i().post("/salvarClassificacaoIndireto",e),t)}function W(e,t){Object(o.rc)(i().get("/obterMutacaoPatrimonioLiquido/"+e),t)}function X(e,t){Object(o.rc)(i().post("/salvarMutacaoPatrimonioLiquido",e),t)}function k(e,t){Object(o.rc)(i().post("/salvarContaResultado",e),t)}function J(e,t){Object(o.rc)(i().post("/excluirContaResultado",e),t)}function Y(e,t){Object(o.rc)(i().get("/obterContasClassificacaoDireto/"+e),t)}function Z(e,t){Object(o.rc)(i().post("/salvarClassificacaoDireto",e),t)}function $(e,t){Object(o.rc)(i().post("/findSubGrupo",e),t)}function ee(e,t,a){Object(o.rc)(i().post("/removerTodosPlanosConta",{idGrupoPlanoConta:e,usuario:t}),a)}function te(e,t,a,n){Object(o.rc)(i().post("/removeList",{listaPlanoConta:e,apagarFilha:t,usuario:a}),n)}function ae(e,t){Object(o.rc)(i().post("/listSubGrupo",e),t)}function ne(e,t,a,n){Object(o.rc)(i().post("/referenciarContas",{idsPlanoConta:e,idPlanoContaReferencial:t,idPlanoContaReferencialECF:a}),n)}function oe(e,t,a,n){Object(o.rc)(i().post("/desvincularContas",{idsPlanoConta:e,idPlanoContaReferencial:t,idPlanoContaReferencialECF:a}),n)}function re(e,t,a){Object(o.rc)(i().post("/existeLancamentoEmContaAnalitica",{idPlanoConta:e,idEmpresa:t}),a)}function ie(e,t){const a=new FormData;a.append("idGerEmpresa",String(e.idGerEmpresa)),a.append("tipoImportacao",String(e.tipoImportacao)),a.append("sobescrever",String(e.sobescrever)),a.append("versaoSuperiorA2",String(e.versaoSuperiorA2)),a.append("arquivo",e.arquivo[0].file,e.arquivo[0].nomeArquivo),!1!==e.versaoSuperiorA2||Object(o.Xb)(e.dtInicial)||Object(o.Xb)(e.dtFinal)||(a.append("dtInicial",e.dtInicial),a.append("dtFinal",e.dtFinal)),Object(o.rc)(i().post("/importarLancamentoMCG",a),t)}function ce(e,t){const a=new FormData;a.append("empresa.id",String(e.empresa.id)),a.append("usuario.id",String(e.usuario.id));var r,c=Object(n.a)(e.arquivos);try{for(c.s();!(r=c.n()).done;){const e=r.value;a.append("arquivos",e.file,e.nomeArquivo)}}catch(u){c.e(u)}finally{c.f()}Object(o.rc)(i().post("/importarSpedContabil",a),t)}function ue(e,t){const a=new FormData;a.append("refInicial",e.refInicial),a.append("refFinal",e.refFinal),a.append("idGerEmpresa",String(e.idGerEmpresa)),a.append("usuario.id",String(e.usuario.id)),Object(o.Xb)(e.arquivoSFP)||a.append("arquivoSFP",e.arquivoSFP[0].file,e.arquivoSFP[0].nomeArquivo),Object(o.rc)(i().post("/gerarManadContabil",a),t)}function le(e,t){Object(o.rc)(i().post("/evolucaoContaContabilGraf",e),t)}function se(e,t){Object(o.rc)(i().post("/composicaoReceitaDespesasGraf",e),t)}function de(e,t){Object(o.rc)(i().post("/gerarFCONTContabil",e),t)}function pe(e,t,a){const n=new FormData;n.append("idBancoMCG",t),n.append("arquivoSelecionado",e[0].file,e[0].nomeArquivo),Object(o.rc)(i().post("/obterDadosArquivoExtrato",n),a)}function fe(e,t,a,n,r,c){const u=new FormData;u.append("idGrupoPlanoConta",String(e)),u.append("idEmpresa",String(t)),u.append("idBancoMCG",String(a)),u.append("dtInicial",String(n)),u.append("dtFinal",String(r)),Object(o.rc)(i().post("/obterDadosConciliacaoBancariaPeriodo",u),c)}function be(e,t){Object(o.rc)(i().post("/obterBancoListPlanoConta",e),t)}function me(e,t){Object(o.rc)(i().post("/conciliarLancamentosExtrato",e),t)}function Oe(e,t){Object(o.rc)(i().post("/removerConciliarLancamentosExtrato",e),t)}function ve(e,t){Object(o.rc)(i().post("/removerLancamentosExtratoBancario",e),t)}function je(e,t){Object(o.rc)(i().get("/eLalurAContas/"+e),t)}function Ce(e,t){Object(o.rc)(i().get("/eLacsAContas/"+e),t)}function Ee(e,t){Object(o.rc)(i().post("/getSaldoDebito",e),t)}function ge(e,t){Object(o.rc)(i().post("/getSaldoCredito",e),t)}function Pe(e,t){Object(o.rc)(i().post("/removerLancamentoLote",e),t)}function Se(e,t){Object(o.rc)(i().post("/atualizaCalculoIrpjCsll",e),t)}function Fe(e,t){Object(o.rc)(i().post("/buscarLancamentosHonorarios",e),t)}function De(e,t,a){Object(o.rc)(i().post("/integrarHonorarios",{integracaoHonorariosParam:e,lancamentos:t}),a)}function Ae(e,t){Object(o.rc)(i().post("/isAlteraCalculoIRPJorCSLL",e),t)}}}]);
//# sourceMappingURL=312.28101357.chunk.js.map