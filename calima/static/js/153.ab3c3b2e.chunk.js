(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1019:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a="br.com.projetusinformatica.calima.mcg.model.dto.laluraconfig"},1563:function(t,e,n){"use strict";n.r(e);var a=n(6),o=n(12),r=n(14),c=n(0),i=n.n(c),s=n(201),u=n.n(s),l=n(98),d=n(19),p=n(22),f=n(44),b=n(395),m=n(198),O=n(148),j=n(2),C=n(815),g=n(826),v=n(1019),P=n(988),E=n(97),S=n(255),F=n(147),L=n(392),h=n(830),A=n(834);var D=t=>{const e=Object(l.b)({defaultValues:Object(a.a)({},t.selectedItem),mode:"onBlur"});Object(c.useEffect)(()=>{setTimeout(()=>{n(),o()},500)},[]);const n=()=>{e.getValues().origemServidor?e.setValue("origemDosDados","Padr\xe3o da tabela ECF do ano de "+e.getValues().ano,!0):e.setValue("origemDosDados","Migra\xe7\xe3o de dados do ano "+(e.getValues().ano-1),!0)},o=()=>{t.selectedItem.contasCadastradas&&("lalur"===t.abaAtual?Object(h.m)(t.selectedItem.id,{errorFunction:t=>{Object(j.tc)(t,j.A)},thenFunction:t=>{e.reset(Object(a.a)(Object(a.a)({},e.getValues()),{},{planoConta:t}))}}):Object(h.l)(t.selectedItem.id,{errorFunction:t=>{Object(j.tc)(t,j.A)},thenFunction:t=>{e.setValue("planoConta",t,!0)}}))};return i.a.createElement(E.a,{isOpen:!0,centered:!0,size:"lg",toggle:t.onClose},i.a.createElement(S.a,{toggle:t.onClose},"Manuten\xe7\xe3o de Livro de Apura\xe7\xe3o parte A"),i.a.createElement(F.a,null,i.a.createElement(j.K,{formProps:Object(a.a)(Object(a.a)({},e),{},{validation:{required:!0}}),id:"codigo",isPrependLabel:!0,disabled:!0,label:"C\xf3digo",placeholder:"Informe o c\xf3digo."}),i.a.createElement(j.K,{formProps:Object(a.a)(Object(a.a)({},e),{},{validation:{required:!0}}),id:"descricao",isPrependLabel:!0,disabled:!0,label:"Descri\xe7\xe3o",placeholder:"Informe o descri\xe7\xe3o."}),i.a.createElement(j.K,{formProps:Object(a.a)(Object(a.a)({},e),{},{validation:{required:!0}}),id:"ano",isPrependLabel:!0,disabled:!0,label:"Ano",placeholder:"Informe o ano.",type:j.L.NUMBER}),i.a.createElement(j.K,{formProps:e,id:"origemDosDados",isPrependLabel:!0,disabled:!0,label:"Origem dos dados",placeholder:"Informe a origem dos dados."}),i.a.createElement(j.K,{formProps:Object(a.a)(Object(a.a)({},e),{},{validation:{required:!0}}),id:"tipoLancamento",isPrependLabel:!0,disabled:!0,label:"Tipo de Lan\xe7amento",placeholder:"Informe o Tipo de Lan\xe7amento",inputDropDownProps:{optionsProvider:P.a},type:j.L.DROP_DOWN}),i.a.createElement(A.a,{id:"planoConta",formProps:e,inputSearchProps:{selectProps:{isMulti:!0}}})),i.a.createElement(L.a,null,i.a.createElement(j.R,{handleClose:t.onClose,handleSubmit:()=>{Object(j.tc)("Ajustar",j.A)},btnSubmitIcon:"check",btnCloseLabel:"Cancel",btnSubmitLabel:"Confirmar"})))};e.default=(t=>{const e=Object(d.c)(t=>t.globalReducer),n=e.globalParameter.empresaMCG,s=Object(l.b)({defaultValues:{ano:Object(j.Nb)(Object(j.yb)(),"YYYY")},mode:"onBlur"}),E=Object(c.useState)(null),S=Object(o.a)(E,2),F=S[0],L=S[1],h=Object(c.useState)(null),A=Object(o.a)(h,2),q=A[0],R=A[1],I=Object(c.useState)("lalur"),y=Object(o.a)(I,2),w=y[0],x=y[1];Object(c.useEffect)(()=>{setTimeout(()=>{s.setValue("empresaMCG.id",n.id,!0)},500)},[]);const G=t=>()=>{R(t)};const N=[{dataField:"codigo",editable:!1,sort:!0,style:(t,e)=>e.contasCadastradas?{color:j.l}:{color:"black"},text:"C\xf3digo"},{dataField:"descricao",editable:!1,sort:!0,style:(t,e)=>e.contasCadastradas?{color:j.l}:{color:"black"},text:"Descri\xe7\xe3o"},Object(j.Fb)({dataField:"tipoLancamento",editable:!1,sort:!0,style:(t,e)=>e.contasCadastradas?{color:j.l}:{color:"black"},text:"Tipo"},P.a),{dataField:"actions",formatter:(t,e)=>i.a.createElement(p.a,{id:"buttonEdit"+e.id,color:"neutral-secondary",onClick:G(e),className:"btn-pill d-30 p-0 align-top btn-animated-icon btn-animated-icon--secondary"},i.a.createElement("span",{className:"btn-wrapper--icon"},i.a.createElement(r.a,{color:"black",icon:"pen"})),i.a.createElement(f.a,{target:"buttonEdit"+e.id,placement:"top"},"Editar")),headerAlign:()=>"center",headerStyle:()=>({width:"7%"}),style:(t,e)=>({backgroundColor:e.color,color:"white",textAlign:"center"}),text:"A\xe7\xf5es"}];return i.a.createElement(j.ib,{title:"Lalur A",useGlobalParameter:!0,globalParameter:e.globalParameter,dependencies:[()=>Object(C.a)(e.globalParameter),()=>Object(g.a)(e.globalParameter)]},q&&i.a.createElement(D,{selectedItem:q,abaAtual:w,onClose:()=>{R(null)}}),i.a.createElement(b.a,null,i.a.createElement(j.K,{formProps:Object(a.a)(Object(a.a)({},s),{},{validation:{required:!0}}),id:"ano",isPrependLabel:!0,label:"Ano",placeholder:"Informe o ano."}),i.a.createElement(m.a,{className:"mb-3"},i.a.createElement(O.a,null,i.a.createElement(p.a,{className:"ml-0",color:"primary",onClick:()=>{const t={className:v.a,fetchType:"ALL",max:900,sortFieldName:"ano",start:0};t.expressions=Object(j.ob)([{expressions:[{fieldName:"ano",operation:j.N.EQUAL,value:Number(s.getValues().ano)}],fieldName:"empresaMCG.id",value:n.id}]),Object(j.Jb)(t,{errorFunction:t=>{Object(j.tc)(t,j.A)},thenFunction:t=>{L(t.content)}})}},i.a.createElement(r.a,{icon:"sync"})," Consultar")),i.a.createElement(O.a,null,i.a.createElement(p.a,{className:"float-right",onClick:s.handleSubmit(()=>((e=!0)=>{Object(j.Cb)(t,t.history,e)})()),color:"danger"},i.a.createElement(r.a,{icon:"check-circle"})," Fechar"))),i.a.createElement(j.eb,{formProps:s,onChange:t=>{x(t)}},i.a.createElement(j.db,{title:"e-Lalur A",id:"lalur"},i.a.createElement(u.a,{keyField:"id",data:F||[],columns:N,responsive:!0,striped:!0}),i.a.createElement("pre",null,JSON.stringify(s.getValues(),null,2))),i.a.createElement(j.db,{title:"e-Lacs B",id:"lacs"}))))})},815:function(t,e,n){"use strict";function a(t){let e=null;return t.empresa||(e="Pelo menos uma empresa deve estar selecionada."),e}n.d(e,"a",function(){return a})},826:function(t,e,n){"use strict";function a(t){let e=null;return t.empresaMCG||(e="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),e}n.d(e,"a",function(){return a})},830:function(t,e,n){"use strict";n.d(e,"v",function(){return i}),n.d(e,"N",function(){return s}),n.d(e,"P",function(){return u}),n.d(e,"G",function(){return l}),n.d(e,"I",function(){return d}),n.d(e,"F",function(){return p}),n.d(e,"K",function(){return f}),n.d(e,"E",function(){return b}),n.d(e,"J",function(){return m}),n.d(e,"d",function(){return O}),n.d(e,"M",function(){return j}),n.d(e,"n",function(){return C}),n.d(e,"z",function(){return g}),n.d(e,"S",function(){return v}),n.d(e,"zb",function(){return P}),n.d(e,"yb",function(){return E}),n.d(e,"xb",function(){return S}),n.d(e,"wb",function(){return F}),n.d(e,"bb",function(){return L}),n.d(e,"A",function(){return h}),n.d(e,"vb",function(){return A}),n.d(e,"y",function(){return D}),n.d(e,"eb",function(){return q}),n.d(e,"tb",function(){return R}),n.d(e,"V",function(){return I}),n.d(e,"ub",function(){return y}),n.d(e,"f",function(){return w}),n.d(e,"r",function(){return x}),n.d(e,"t",function(){return G}),n.d(e,"Ab",function(){return N}),n.d(e,"x",function(){return V}),n.d(e,"qb",function(){return M}),n.d(e,"j",function(){return k}),n.d(e,"sb",function(){return T}),n.d(e,"B",function(){return z}),n.d(e,"R",function(){return B}),n.d(e,"a",function(){return H}),n.d(e,"gb",function(){return K}),n.d(e,"X",function(){return U}),n.d(e,"ob",function(){return Y}),n.d(e,"cb",function(){return J}),n.d(e,"rb",function(){return _}),n.d(e,"pb",function(){return Q}),n.d(e,"p",function(){return W}),n.d(e,"W",function(){return X}),n.d(e,"nb",function(){return Z}),n.d(e,"s",function(){return $}),n.d(e,"mb",function(){return tt}),n.d(e,"hb",function(){return et}),n.d(e,"T",function(){return nt}),n.d(e,"fb",function(){return at}),n.d(e,"k",function(){return ot}),n.d(e,"q",function(){return rt}),n.d(e,"H",function(){return ct}),n.d(e,"L",function(){return it}),n.d(e,"w",function(){return st}),n.d(e,"o",function(){return ut}),n.d(e,"g",function(){return lt}),n.d(e,"u",function(){return dt}),n.d(e,"Y",function(){return pt}),n.d(e,"Z",function(){return ft}),n.d(e,"U",function(){return bt}),n.d(e,"i",function(){return mt}),n.d(e,"jb",function(){return Ot}),n.d(e,"lb",function(){return jt}),n.d(e,"ab",function(){return Ct}),n.d(e,"h",function(){return gt}),n.d(e,"ib",function(){return vt}),n.d(e,"m",function(){return Pt}),n.d(e,"l",function(){return Et}),n.d(e,"D",function(){return St}),n.d(e,"C",function(){return Ft}),n.d(e,"kb",function(){return Lt}),n.d(e,"c",function(){return ht}),n.d(e,"e",function(){return At}),n.d(e,"O",function(){return Dt}),n.d(e,"Q",function(){return qt}),n.d(e,"b",function(){return Rt}),n.d(e,"db",function(){return It});var a=n(100),o=n(2),r=n(99);function c(){return Object(o.wb)("/mcg")}function i(t,e){Object(o.sc)(c().post("/gerarLancamentosFolhaPagamento",t),e)}function s(t,e){Object(o.sc)(c().post("/integrarFolhaPagamento",t),e)}function u(t,e){Object(o.sc)(c().post("/importar",t),e)}function l(t,e){const n=new FormData;n.append("empresa.id",String(t.empresa.id)),n.append("importarDuplicados",String(t.importarDuplicados)),n.append("importarLancamentosCardinal",String(t.importarLancamentosCardinal));var r,i=Object(a.a)(t.arquivos);try{for(i.s();!(r=i.n()).done;){const t=r.value;n.append("arquivos",t.file,t.nomeArquivo)}}catch(s){i.e(s)}finally{i.f()}Object(o.sc)(c().post("/importarLancamentoCSV",n),e)}function d(t,e){const n=new FormData;n.append("empresa.id",String(t.empresa.id));var r,i=Object(a.a)(t.arquivos);try{for(i.s();!(r=i.n()).done;){const t=r.value;n.append("arquivos",t.file,t.nomeArquivo)}}catch(s){i.e(s)}finally{i.f()}Object(o.sc)(c().post("/importarLancamentoPadraoCSV",n),e)}function p(t,e){const n=new FormData;n.append("grupoHistoricoDestino.id",String(t.grupoHistoricoDestino.id));var r,i=Object(a.a)(t.arquivos);try{for(i.s();!(r=i.n()).done;){const t=r.value;n.append("arquivos",t.file,t.nomeArquivo)}}catch(s){i.e(s)}finally{i.f()}Object(o.sc)(c().post("/importarHistoricoCSV",n),e)}function f(t,e){const n=new FormData;n.append("idEmpresa",String(t.idEmpresa)),n.append("grupoPlanoContaDestino.id",String(t.grupoPlanoContaDestino.id));var r,i=Object(a.a)(t.arquivos);try{for(i.s();!(r=i.n()).done;){const t=r.value;n.append("arquivos",t.file,t.nomeArquivo)}}catch(s){i.e(s)}finally{i.f()}Object(o.sc)(c().post("/importarPlanoContaCSV",n),e)}function b(t,e){Object(o.sc)(c().post("/importarHistorico",t),e)}function m(t,e){Object(o.sc)(c().post("/importarPlanoConta",t),e)}function O(t,e){Object(o.sc)(c().get("/buscarConfigLivroFolhaMCG/"+t),e)}function j(t,e){Object(o.sc)(c().post("/integracaoFiscalContabil",t),e)}function C(t,e,n){Object(o.sc)(c().post("/encerrarContas",{contaResultadoEncerramento:t,force:e}),n)}function g(t,e){Object(o.sc)(c().get("/getDataUltimaContaEncerrada/"+t),e)}function v(t,e){Object(o.sc)(c().post("/limparEncerramentoContaResultadoApos",t),e)}function P(t,e){Object(o.sc)(c().post("/validarReferenciaSPEDECFIrpjCsll",t),e)}function E(t,e){Object(o.sc)(c().post("/validarReferenciaSPEDECFImuneIsenta",t),e)}function S(t,e){Object(o.sc)(c().post("/validarRefRemuneracaoSocio",t),e)}function F(t,e){Object(o.sc)(c().post("/validarQuadroSocietario",t),e)}function L(t,e){Object(o.sc)(c().get("/obterLucroPrejuizoClassificacao/"+t),e)}function h(t,e){Object(o.sc)(c().post("/getSaldo",t),e)}function A(t,e){Object(o.sc)(c().post("/validarDadosSpedECF",t),e)}function D(t,e,n){Object(o.sc)(Object(r.i)().post("/gerarSpedECF",{usuario:t,ecfExportacaoParam:e}),n)}function q(t,e){Object(o.sc)(c().post("/recuperarLancamentoConta",t),e)}function R(t,e){Object(o.sc)(c().post("/transferirLancamentoConta",t),e)}function I(t,e){Object(o.sc)(c().post("/obterBancoPlanoConta",t),e)}function y(t,e){Object(o.sc)(c().get("/validarConfigLivroFolha/"+t),e)}function w(t,e){Object(o.sc)(c().get("/changeLivroFolha/"+t),e)}function x(t,e){Object(o.sc)(c().post("/fecharRestaurar",t),e)}function G(t,e){Object(o.sc)(c().post("/forceFecharRestaurar",t),e)}function N(t,e){Object(o.sc)(c().post("/verificarErros",t),e)}function V(t,e){const n=new FormData;if(n.append("usuario.id",String(t.usuario.id)),t.arquivoRTFEscrituracaoSubstituida){var r,i=Object(a.a)(t.arquivoRTFEscrituracaoSubstituida);try{for(i.s();!(r=i.n()).done;){const t=r.value;n.append("arquivoRTFEscrituracaoSubstituida",t.file,t.nomeArquivo)}}catch(s){i.e(s)}finally{i.f()}}for(const a in t)"arquivoRTFEscrituracaoSubstituida"!==a&&"usuario"!==a&&null!==t[a]&&n.append(a,t[a]);Object(o.sc)(c().post("/gerarSpedContabil",n),e)}function M(t,e){Object(o.sc)(c().post("/salvarLucroPrejuizoClassificacao",t),e)}function k(t,e){Object(o.sc)(c().post("/consultarMovimentacao",t),e)}function T(t,e){Object(o.sc)(c().post("/totalizadorLancamento",t),e)}function z(t,e){Object(o.sc)(c().post("/getSaldoAnterior",t),e)}function B(t,e){Object(o.sc)(c().post("/isDataEncerrada",t),e)}function H(t,e){Object(o.sc)(c().post("/abrirContas",t),e)}function K(t,e){Object(o.sc)(c().post("/removeLancamentoPeriodo",t),e)}function U(t,e){Object(o.sc)(c().get("/obterContasClassificacaoIndireto/"+t),e)}function Y(t,e){Object(o.sc)(c().post("/salvarClassificacaoIndireto",t),e)}function J(t,e){Object(o.sc)(c().get("/obterMutacaoPatrimonioLiquido/"+t),e)}function _(t,e){Object(o.sc)(c().post("/salvarMutacaoPatrimonioLiquido",t),e)}function Q(t,e){Object(o.sc)(c().post("/salvarContaResultado",t),e)}function W(t,e){Object(o.sc)(c().post("/excluirContaResultado",t),e)}function X(t,e){Object(o.sc)(c().get("/obterContasClassificacaoDireto/"+t),e)}function Z(t,e){Object(o.sc)(c().post("/salvarClassificacaoDireto",t),e)}function $(t,e){Object(o.sc)(c().post("/findSubGrupo",t),e)}function tt(t,e,n){Object(o.sc)(c().post("/removerTodosPlanosConta",{idGrupoPlanoConta:t,usuario:e}),n)}function et(t,e,n,a){Object(o.sc)(c().post("/removeList",{listaPlanoConta:t,apagarFilha:e,usuario:n}),a)}function nt(t,e){Object(o.sc)(c().post("/listSubGrupo",t),e)}function at(t,e,n,a){Object(o.sc)(c().post("/referenciarContas",{idsPlanoConta:t,idPlanoContaReferencial:e,idPlanoContaReferencialECF:n}),a)}function ot(t,e,n,a){Object(o.sc)(c().post("/desvincularContas",{idsPlanoConta:t,idPlanoContaReferencial:e,idPlanoContaReferencialECF:n}),a)}function rt(t,e,n){Object(o.sc)(c().post("/existeLancamentoEmContaAnalitica",{idPlanoConta:t,idEmpresa:e}),n)}function ct(t,e){const n=new FormData;n.append("idGerEmpresa",String(t.idGerEmpresa)),n.append("tipoImportacao",String(t.tipoImportacao)),n.append("sobescrever",String(t.sobescrever)),n.append("versaoSuperiorA2",String(t.versaoSuperiorA2)),n.append("arquivo",t.arquivo[0].file,t.arquivo[0].nomeArquivo),!1!==t.versaoSuperiorA2||Object(o.Yb)(t.dtInicial)||Object(o.Yb)(t.dtFinal)||(n.append("dtInicial",t.dtInicial),n.append("dtFinal",t.dtFinal)),Object(o.sc)(c().post("/importarLancamentoMCG",n),e)}function it(t,e){const n=new FormData;n.append("empresa.id",String(t.empresa.id)),n.append("usuario.id",String(t.usuario.id));var r,i=Object(a.a)(t.arquivos);try{for(i.s();!(r=i.n()).done;){const t=r.value;n.append("arquivos",t.file,t.nomeArquivo)}}catch(s){i.e(s)}finally{i.f()}Object(o.sc)(c().post("/importarSpedContabil",n),e)}function st(t,e){const n=new FormData;n.append("refInicial",t.refInicial),n.append("refFinal",t.refFinal),n.append("idGerEmpresa",String(t.idGerEmpresa)),n.append("usuario.id",String(t.usuario.id)),Object(o.Yb)(t.arquivoSFP)||n.append("arquivoSFP",t.arquivoSFP[0].file,t.arquivoSFP[0].nomeArquivo),Object(o.sc)(c().post("/gerarManadContabil",n),e)}function ut(t,e){Object(o.sc)(c().post("/evolucaoContaContabilGraf",t),e)}function lt(t,e){Object(o.sc)(c().post("/composicaoReceitaDespesasGraf",t),e)}function dt(t,e){Object(o.sc)(c().post("/gerarFCONTContabil",t),e)}function pt(t,e,n){const a=new FormData;a.append("idBancoMCG",e),a.append("arquivoSelecionado",t[0].file,t[0].nomeArquivo),Object(o.sc)(c().post("/obterDadosArquivoExtrato",a),n)}function ft(t,e,n,a,r,i){const s=new FormData;s.append("idGrupoPlanoConta",String(t)),s.append("idEmpresa",String(e)),s.append("idBancoMCG",String(n)),s.append("dtInicial",String(a)),s.append("dtFinal",String(r)),Object(o.sc)(c().post("/obterDadosConciliacaoBancariaPeriodo",s),i)}function bt(t,e){Object(o.sc)(c().post("/obterBancoListPlanoConta",t),e)}function mt(t,e){Object(o.sc)(c().post("/conciliarLancamentosExtrato",t),e)}function Ot(t,e){Object(o.sc)(c().post("/removerConciliarLancamentosExtrato",t),e)}function jt(t,e){Object(o.sc)(c().post("/removerLancamentosExtratoBancario",t),e)}function Ct(t,e,n,a,r,i,s,u){const l=new FormData;l.append("idGrupoPlanoConta",String(t)),l.append("idEmpresa",String(e)),l.append("dtInicial",String(n)),l.append("dtFinal",String(a)),l.append("historico",String(r)),l.append("valor",String(i)),l.append("operacaoConsultaValor",String(s)),Object(o.sc)(c().post("/obterLancamentosSaldoPeriodo",l),u)}function gt(t,e){Object(o.sc)(c().post("/conciliarLancamentosConta",t),e)}function vt(t,e){Object(o.sc)(c().post("/removerConciliarLancamentosConta",t),e)}function Pt(t,e){Object(o.sc)(c().get("/eLalurAContas/"+t),e)}function Et(t,e){Object(o.sc)(c().get("/eLacsAContas/"+t),e)}function St(t,e){Object(o.sc)(c().post("/getSaldoDebito",t),e)}function Ft(t,e){Object(o.sc)(c().post("/getSaldoCredito",t),e)}function Lt(t,e){Object(o.sc)(c().post("/removerLancamentoLote",t),e)}function ht(t,e){Object(o.sc)(c().post("/atualizaCalculoIrpjCsll",t),e)}function At(t,e){Object(o.sc)(c().post("/buscarLancamentosHonorarios",t),e)}function Dt(t,e,n){Object(o.sc)(c().post("/integrarHonorarios",{integracaoHonorariosParam:t,lancamentos:e}),n)}function qt(t,e){Object(o.sc)(c().post("/isAlteraCalculoIRPJorCSLL",t),e)}function Rt(t,e,n){Object(o.sc)(c().post("/alterarPlanoContaNaturezaConfig",{idsPlanoConta:t,enumPlanoContaNaturezaConta:e}),n)}function It(t,e){Object(o.sc)(c().get("/prepararContaResultado/"+t),e)}},834:function(t,e,n){"use strict";var a=n(6),o=n(0),r=n.n(o),c=n(19),i=n(2),s=n(836);e.a=(t=>{const e=Object(c.c)(t=>t.globalReducer);return r.a.createElement(i.K,Object.assign({},t,{isPrependLabel:!0,searchViewProps:Object(a.a)(Object(a.a)({},t.searchViewProps),{},{filtroContaResultado:t.filtroContaResultado,hideExtraFields:!0,useDefaultSelectRow:!0}),inputSearchProps:Object(a.a)(Object(a.a)({},t.inputSearchProps),{},{columns:[{dataField:"conta",text:"Conta"},{dataField:"analitica",text:"Anal\xedtica"},{dataField:"codigoReduzido",text:"C.R."},{dataField:"descricao",text:"Descri\xe7\xe3o"}],dtoClassName:s.a,searchExpressions:()=>{const n=[];return t.analitica&&n.push({alias:"c",conditionalGroup:"c_",fieldName:"analitica",value:!0}),t.sintetica&&n.push({alias:"c",conditionalGroup:"c_",fieldName:"analitica",value:!1}),t.filtroContaResultado&&t.filtroContaResultado.forEach(t=>{n.push(t)}),[{conditionalGroup:"g_",expressions:n,fieldName:"grupoPlanoConta.id",value:t.idGrupoPlanoConta||e.globalParameter.grupoPlanoConta.id}]},searchViewId:"PlanoContaSearchView"}),label:t.label?t.label:"Plano de Contas",placeholder:t.placeholder?t.placeholder:"Informe o Plano de Contas",type:i.L.INPUT_SEARCH}))})},836:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a="br.com.projetusinformatica.calima.ger.model.dto.planoconta"},988:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a=[{label:"Adi\xe7\xe3o",value:"ADICAO"},{label:"Exclus\xe3o",value:"EXCLUSAO"},{label:"Compensa\xe7\xe3o de Prejuizo",value:"COMPENSACAO"},{label:"Lucro",value:"LUCRO"},{label:"R\xf3tulo",value:"ROTULO"}]}}]);
//# sourceMappingURL=153.ab3c3b2e.chunk.js.map