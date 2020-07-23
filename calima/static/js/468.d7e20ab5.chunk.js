(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{1020:function(e,a,t){"use strict";t.d(a,"a",function(){return l});const l="br.com.projetusinformatica.calima.mcg.model.dto.lucroprejuizo"},1216:function(e,a,t){"use strict";t.r(a);var l=t(12),r=t(6),o=t(0),n=t.n(o),c=t(98),u=t(19),i=t(198),s=t(148),d=t(126),m=t(197),b=t(196),E=t(393),p=t(2),L=t(1020);a.default=(e=>{const a=Object(p.Ub)(e),t=Object(u.c)(e=>e.globalReducer),P=Object(c.b)({defaultValues:Object(r.a)({empresa:t.globalParameter.empresa},a),mode:"onBlur"}),j=Object(o.useState)(""),O=Object(l.a)(j,2),B=O[0],g=O[1],f=Object(o.useState)(""),v=Object(l.a)(f,2),R=v[0],A=v[1],h=Object(o.useState)(""),M=Object(l.a)(h,2),y=M[0],x=M[1];Object(o.useEffect)(()=>{P.getValues().id?(N(),V()):(g("0"),A("0"))},[]),Object(o.useEffect)(()=>{q()});const N=()=>{g((+P.getValues().saldoAnteriorLucroAcumulado+ +P.getValues().ajusteCredorPeriodoBaseAnterior+ +P.getValues().correcaoMonetariaLucroAcumulado+ +P.getValues().reversaoReserva+ +P.getValues().outroRecurso+ +P.getValues().lucroLiquidoPeriodoBaseProvIR-(+P.getValues().saldoAnteriorPrejuizoAcumulado+ +P.getValues().ajusteDevedorPeridoBaseAnterior+ +P.getValues().correcMonetariaPrejuizoAcumulado+ +P.getValues().prejuizoLiquidoPeriodoBaseProvIR)).toFixed(2))},V=()=>{A((+P.getValues().transferenciaReserva+ +P.getValues().divLucroDistribuidoPagoCreditado+ +P.getValues().impostoLucroLiquido+ +P.getValues().parcelaLucroIncorporadaCapital+ +P.getValues().outraAplicacao).toFixed(2))},K=Object(o.useState)(""),U=Object(l.a)(K,2),z=U[0],C=U[1],q=()=>{C(+B-+R<0?"red":"black"),x((+B-+R).toFixed(2))};return n.a.createElement(p.ib,{title:"Manuten\xe7\xe3o de Lucros/Preju\xedzos"},n.a.createElement(p.B,{formProps:P,editViewProps:e,dtoClassName:L.a},n.a.createElement(p.K,{formProps:P,id:"empresa.id",hidden:!0}),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{required:!0}}),id:"referencia",isPrependLabel:!0,label:"Refer\xeancia",type:p.L.REFERENCE}))),n.a.createElement(d.a,null,n.a.createElement(m.a,null,n.a.createElement(p.eb,{formProps:P},n.a.createElement(p.db,{title:"Recursos"},n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"saldoAnteriorLucroAcumulado",isPrependLabel:!0,label:"Saldo Anterior de Lucros Acumulados",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"ajusteCredorPeriodoBaseAnterior",isPrependLabel:!0,label:"Ajustes Credores de Per\xedodos Base Anteriores",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"correcaoMonetariaLucroAcumulado",isPrependLabel:!0,label:"Corre\xe7\xe3o Monet\xe1ria dos Lucros Acumulados",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"reversaoReserva",isPrependLabel:!0,label:"Revers\xe3o de Reservas",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"outroRecurso",isPrependLabel:!0,label:"Outros Recursos",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"lucroLiquidoPeriodoBaseProvIR",isPrependLabel:!0,label:"Lucro L\xedquido do Per\xedodo Base Depois Prov. p/IR",type:p.L.NUMBER,onBlur:N}))),n.a.createElement("hr",null),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"saldoAnteriorPrejuizoAcumulado",isPrependLabel:!0,label:"Saldo Anterior de Preju\xedzos Acumulados",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"ajusteDevedorPeridoBaseAnterior",isPrependLabel:!0,label:"Ajuste Devedores de Per\xedodo Base Anteriores",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"correcMonetariaPrejuizoAcumulado",isPrependLabel:!0,label:"Corre\xe7\xe3o Monet\xe1ria dos Preju\xedzos Acumulados",type:p.L.NUMBER,onBlur:N}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"prejuizoLiquidoPeriodoBaseProvIR",isPrependLabel:!0,label:"Preju\xedzos L\xedquidos do Per\xedodo Base Depois Prov. p/IR",type:p.L.NUMBER,onBlur:N})))),n.a.createElement(p.db,{title:"Aplica\xe7\xf5es"},n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"transferenciaReserva",isPrependLabel:!0,label:"Transfer\xeancia de Reservas",type:p.L.NUMBER,onBlur:V}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"divLucroDistribuidoPagoCreditado",isPrependLabel:!0,label:"Div. Lucros ou Distribu\xeddos, Pagos, Creditados",type:p.L.NUMBER,onBlur:V}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"impostoLucroLiquido",isPrependLabel:!0,label:"Imposto Sobre Lucro L\xedquido - Art.35 Lei 7713/8",type:p.L.NUMBER,onBlur:V}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"parcelaLucroIncorporadaCapital",isPrependLabel:!0,label:"Parcelas dos Lucros Incorporadas ao Capital",type:p.L.NUMBER,onBlur:V}))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(p.K,{formProps:Object(r.a)(Object(r.a)({},P),{},{validation:{maxLength:13}}),id:"outraAplicacao",isPrependLabel:!0,label:"Outras Aplica\xe7\xf5es",type:p.L.NUMBER,onBlur:V}))))))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(d.a,null,n.a.createElement(b.a,{className:"font-weight-bold bg-light justify-content-center"},"Totalizadores"),n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,null,"Soma dos Recursos: "))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,{style:{fontWeight:"bold"}},B," "))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,null,"Soma das Aplica\xe7\xf5es: "))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,{style:{fontWeight:"bold"}},R," "))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,null,"Lucros/Preju\xedzos Acumulados: "))),n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,{style:{color:z,fontWeight:"bold"}},y," ")))))))})}}]);
//# sourceMappingURL=468.d7e20ab5.chunk.js.map