(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1114:function(e,a,t){"use strict";t.d(a,"a",function(){return o}),t.d(a,"b",function(){return i});const o={label:"O v\xednculo possui afastamento cruzando com per\xedodo de f\xe9rias.",value:"VALIDAR_FERIAS_INTERCESSAO_AFASTAMENTOS"},i=[{label:"O valor do sal\xe1rio informado \xe9 inferior ao sal\xe1rio m\xednimo vigente.",value:"VALIDAR_SALARIO_MINIMO"},{label:"A matr\xedcula do v\xednculo de origem informado nos campos de transfer\xeancia n\xe3o foi encontrado em nenhuma das empresas cadastras no sistema com o CNPJ/CPF informados, ou n\xe3o corresponde a este trabalhador.",value:"VALIDAR_VINCULO_RELACIONADO"},o]},1137:function(e,a,t){},1142:function(e,a,t){"use strict";t.r(a);var o=t(13),i=t(6),r=t(200),l=t(0),s=t.n(l),n=t(98),c=t(20),d=t(774),m=t(775),u=t(394),b=t(393),p=t(195),O=t(46),j=t(125),f=t(198),P=t(148),v=t(22),E=t(2),g=t(847),F=t(831),A=t(1114),I=t(853),D=t(256),h=t(840),z=t(832);const G=[{label:"Per\xedodo Aquisitivo",value:"PERIODO_AQUISITIVO"},{label:"\xdaltimos 12 Meses",value:"ULTIMOS_12_MESES"}],q=[{label:"30 Dias",value:"MES_30_DIAS"},{label:"N\xba de Dias do M\xeas",value:"NRO_DIAS_MES"}];t(1137);var x=e=>{const a=Object(c.c)(e=>e.globalReducer),t=Object(n.b)({defaultValues:e.selectedItem||{},mode:"onBlur"}),r=Object(l.useState)(!1),d=Object(o.a)(r,2),m=d[0],u=d[1],p=Object(l.useState)(!0),O=Object(o.a)(p,2),j=O[0],v=O[1],g=Object(l.useState)(!0),F=Object(o.a)(g,2),A=F[0],D=F[1],z=Object(l.useState)(!0),x=Object(o.a)(z,2),S=x[0],V=x[1],R=Object(l.useState)(!0),y=Object(o.a)(R,2),N=y[0],M=y[1],L=Object(l.useState)(!1),T=Object(o.a)(L,2),C=T[0],_=T[1],X=Object(l.useState)(null),w=Object(o.a)(X,2),B=w[0],k=w[1];Object(l.useEffect)(()=>{setTimeout(()=>{t.register({name:"programado"}),e.selectedItem&&!Object(E.Xb)(e.selectedItem.id)?(v(!e.selectedItem.mp927),M(e.selectedItem.programado)):K()},700)},[]);const K=()=>{const o=e.parentFormProps.getValues();t.setValue("programado",!0),t.setValue("salarioFamilia",!0),t.setValue("faltas",!0),t.setValue("efetivadaOutroSistema",!1),t.setValue("formaDias",a.globalParameter.empresaMFP.diasConsideradosCalculoFerias),t.setValue("formaAcumulo",a.globalParameter.empresaMFP.formaCalculoComissaoFerias),D(!1),Object(E.Xb)(o.proximaFerias)||(t.setValue("dtInicialPerAquisitivo",o.proximaFerias.dtInicialPerAquisitivo),t.setValue("dtFinalPerAquisitivo",o.proximaFerias.dtFinalPerAquisitivo),J())},J=()=>{const e=t.getValues(),a=t.getValues();Object(E.Xb)(e.dtInicialPerAquisitivo)||Object(E.Xb)(e.dtFinalPerAquisitivo)||Object(E.Xb)(a.id)||Object(I.k)(Object(i.a)(Object(i.a)({},e),{},{vinculo:{id:a.id}}),{thenFunction:e=>{_(e)}})},U=a=>{if(!Object(E.Xb)(a.dtInicialPerAquisitivo)&&!Object(E.Xb)(a.dtFinalPerAquisitivo)){const t=e.parentFormProps.getValues();Object(I.a)(Object(i.a)(Object(i.a)({},a),{},{vinculo:t}),{thenFunction:t=>{let o=null;t.perdeuDireitoFerias&&(a.dtInicialPerAquisitivo=t.proximaDtInicialPerAquisitivo,a.dtFinalPerAquisitivo=t.proximaDtFinalPerAquisitivo,o=Object(h.o)("Devido ao v\xednculo estar afastado por mais de 180 dias dentro do per\xedodo aquisitivo informado, o mesmo foi ajustado para in\xedcio em "+t.proximaDtInicialPerAquisitivo+" at\xe9 "+t.proximaDtFinalPerAquisitivo+".",E.f.WARNING));const i='Ao incluir F\xe9rias para o trabalhador, \xe9 necess\xe1rio que seja e enviado ao eSocial um afastamento tempor\xe1rio com o motivo "Gozo de f\xe9rias ou recesso - Afastamento tempor\xe1rio para o gozo de f\xe9rias ou recesso". Para que o evento seja enviado acesse: M\xf3dulo Folha de Pagamento > eSocial > Exporta\xe7\xe3o > eSocial "Selecione o evento 2230 para ser enviado"';(o=o?o.then(e=>Object(h.o)(i,E.f.WARNING)):Object(h.o)(i,E.f.WARNING)).then(t=>e.handleSubmit(a,H))}})}},W=(e,a)=>{const t=Object(E.gc)(Object(E.tc)(e.dtInicialGozo)),o=Object(E.gc)(Object(E.tc)(e.dtFinalGozo)),i=Object(E.gc)(Object(E.tc)(a.dtInicialGozo)),r=Object(E.gc)(Object(E.tc)(a.dtFinalGozo)),l=t===i||t===r,s=o===i||o===r;return e.formaDias!==a.formaDias&&(l||s)},H=(e,a,t)=>{const o=[];if(Object(E.tb)(e.dtInicialPerAquisitivo,e.dtFinalPerAquisitivo)>=0&&o.push("O Per\xedodo aquisitivo inicial n\xe3o pode ser maior ou igual ao Per\xedodo aquisitivo final"),t.ferias.length>0){const a=t.ferias.reduce((e,a)=>Object(E.tb)(e.dtFinalPerAquisitivo,a.dtFinalPerAquisitivo)>0?e:a);if(a){const t=Object(E.Mb)(Object(E.mb)(Object(E.tc)(a.dtFinalPerAquisitivo),1,"day"));Object(E.tb)(e.dtInicialPerAquisitivo,t)<=0&&o.push("O per\xedodo aquisitivo atual deve come\xe7ar em "+t)}}return o.push(...((e,a)=>{const t=[];let o=!1;(Object(E.Xb)(e.dtInicialGozo)||Object(E.Xb)(e.diasGozo)||parseInt(e.diasGozo,10)<=0)&&(o=!0),!o&&!e.mp927&&Object(E.tb)(e.dtInicialGozo,e.dtInicialPerAquisitivo)<0&&(t.push("A data inicial de gozo deve ser posterior ao inicio do periodo aquisitivo"),o=!0);let i=0;for(;i<a.ferias.length&&!1===o;){const r=a.ferias[i];if(r.id!==e.id){const a=r.dtInicialGozo;let i=r.dtFinalGozo;Object(E.Xb)(r.dtFinalGozo)&&(i=Object(E.Mb)(Object(E.mb)(Object(E.tc)(a),parseInt(r.diasGozo,10)-1,"day"))),e.dtFinalGozo=Object(E.Mb)(Object(E.mb)(Object(E.tc)(e.dtInicialGozo),parseInt(e.diasGozo,10)-1,"day")),Object(E.tb)(e.dtInicialGozo,a)>=0&&Object(E.tb)(e.dtInicialGozo,i)<=0&&(t.push("J\xe1 existe f\xe9rias para esse per\xedodo de gozo."),o=!0),!o&&Object(E.tb)(e.dtFinalGozo,a)>=0&&Object(E.tb)(e.dtFinalGozo,i)<=0&&(t.push("J\xe1 existe f\xe9rias para esse per\xedodo de gozo."),o=!0),!o&&Object(E.tb)(e.dtInicialGozo,a)<0&&Object(E.tb)(e.dtFinalGozo,i)>0&&(t.push("J\xe1 existe f\xe9rias para esse per\xedodo de gozo."),o=!0)}const l=!Object(E.Xb)(a)&&!Object(E.Xb)(a.dataDemissaoDeterminado);!o&&l&&Object(E.tb)(e.dtFinal,a.dataDemissaoDeterminado)>0&&(t.push("Data de T\xe9rmino de Contrato com Prazo Determinado esta com valor anterior ao per\xedodo de f\xe9rias."),o=!0);const s=!Object(E.Xb)(a)&&!Object(E.Xb)(a.recisao)&&!Object(E.Xb)(a.recisao.dtAfastamento);!o&&s&&Object(E.tb)(e.dtFinalGozo,a.recisao.dtAfastamento)>0&&(t.push("Data de Afastamento esta com valor anterior ao per\xedodo de f\xe9rias."),o=!0),i++}if(!o&&!Object(E.Xb)(e.dtPagamento))if(e.mp927){let a=B;null===a&&(a=Object(E.ic)(Object(E.gc)(Object(E.mb)(Object(E.tc)(e.dtIniciaoGozo),1,"month")),7)),1===Object(E.tb)(e.dtPagamento,a)&&t.push("Data de Pagamento deve ser at\xe9 5\xba dia \xfatil data de in\xedcio de gozo do m\xeas subsequente.")}else Object(E.tb)(Object(E.Mb)(Object(E.mb)(Object(E.tc)(e.dtInicialGozo),-2,"day")),e.dtPagamento)<0&&t.push("Data de Pagamento deve ser at\xe9 2 dias antes da data de in\xedcio de gozo.");return t})(e,t)),o.push(...((e,a)=>{const t=[];let o=!1;return(Object(E.Xb)(e.dtInicialGozo)||Object(E.Xb)(e.diasGozo)||e.diasGozo<=0)&&(o=!0),o||a.ferias.forEach(a=>{a.id!==e.id&&(0===Object(E.tb)(a.dtPagamento,e.dtPagamento)&&t.push("J\xe1 existe uma ferias para este v\xednculo registrada com esta data de pagamento."),Object(E.tb)(a.dtInicialGozo,e.dtIncialGozo)<=0&&Object(E.tb)(a.dtFinalGozo,e.dtInicialGozo)>=0&&t.push("A Data Inicio de Gozo est\xe1 conflitante com outras f\xe9rias marcadas."),Object(E.tb)(a.dtInicialGozo,e.dtFinalGozo)<=0&&Object(E.tb)(a.dtFinalGozo,e.dtFinalGozo)>=0&&t.push("A Data Final de Gozo est\xe1 conflitante com outras f\xe9rias marcadas."),W(e,a)&&t.push("Duas f\xe9rias com o campo <b>Dias considerados para c\xe1lculo de f\xe9rias</b> diferentes dentro do mesmo m\xeas n\xe3o podem ser calculadas, ambas precisam ter a <b>MESMA</b> forma de c\xe1lculo, ou seja, <b>30 Dias</b> ou <b>N\xba de Dias do M\xeas</b> igualmente."))}),t})(e,t)),o};return s.a.createElement(E.v,{handleSubmit:e=>{N&&(e=>{Object(E.Xb)(e.dtInicialGozo)||Object(E.Xb)(e.diasGozo)||Object(I.i)(e,{thenFunction:a=>{e.dtFinalGozo=a,U(e)}})})(e)},handleCancel:e.handleCancel,formProps:t,validateExtras:H,hideSubmitButton:!N},Object(h.a)(C,s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement("h6",{className:"text-center",style:{color:E.h}},"H\xe1 mais de 180 dias de afastamentos durante este per\xedodo aquisitivo, o mesmo ser\xe1 ajustado ao salvar.")))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.c,{formProps:t},s.a.createElement(E.d,{title:"Par\xe2metros"},s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{style:{width:410,marginRight:20}},s.a.createElement(E.K,{id:"dtInicialPerAquisitivo",label:"Per\xedodo Aquisitivo",formProps:Object(i.a)(Object(i.a)({},t),{},{validation:{required:!0}}),isPrependLabel:!0,type:E.L.DATE,onBlur:()=>{const e=t.getValues();t.setValue("dtFinalPerAquisitivo",Object(E.Mb)(Object(E.mb)(Object(E.mb)(Object(E.tc)(e.dtInicialPerAquisitivo),1,"year"),-1,"day"))),J()}})),s.a.createElement("div",{className:"flex-grow-1"},s.a.createElement(E.K,{id:"dtFinalPerAquisitivo",label:"At\xe9",formProps:Object(i.a)(Object(i.a)({},t),{},{validation:{required:!0}}),isPrependLabel:!0,type:E.L.DATE,onBlur:()=>{J()}}))),s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{style:{width:410,marginRight:20}},s.a.createElement(E.K,{id:"dtInicialGozo",label:"Dt. Inicial de Gozo",formProps:Object(i.a)(Object(i.a)({},t),{},{validation:{required:!0}}),isPrependLabel:!0,type:E.L.DATE,onBlur:()=>{const e=t.getValues();Object(E.tb)(e.dtInicialGozo,"01/02/2020")<0?(e.mp927=!1,t.setValue([{mp927:!1},{incluirTercoFerias:!0}]),v(!0)):v(!1),u(e.mp927),e.mp927||t.setValue("dtPagamento",Object(E.Mb)(Object(E.mb)(Object(E.tc)(e.dtInicialGozo),-2,"day")))}})),s.a.createElement("div",{className:"flex-grow-1"},s.a.createElement(E.K,{id:"diasGozo",label:"Dias de Gozo",formProps:Object(i.a)(Object(i.a)({},t),{},{validation:Object(i.a)(Object(i.a)({required:!0},Object(E.fc)(0,2)),{},{max:31})}),isPrependLabel:!0,type:E.L.NUMBER,tooltipProps:{message:"Total de Dias de Gozo"}}))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.K,{id:"dtPagamento",label:"Dt. Pagamento",formProps:Object(i.a)(Object(i.a)({},t),{},{validation:{required:!0}}),isPrependLabel:!0,type:E.L.DATE}))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.K,{id:"formaDias",label:"Dias considerados para c\xe1lculo de f\xe9rias",formProps:Object(i.a)(Object(i.a)({},t),{},{validation:{required:!0}}),isPrependLabel:!0,inputDropDownProps:{optionsProvider:q},type:E.L.DROP_DOWN}))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.K,{id:"formaAcumulo",label:"Forma de ac\xfamulo (maior remunera\xe7\xe3o)",formProps:Object(i.a)(Object(i.a)({},t),{},{validation:{required:!0}}),isPrependLabel:!0,inputDropDownProps:{optionsProvider:G},type:E.L.DROP_DOWN}))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.n,{id:"efetivadaOutroSistema",formProps:t,label:"J\xe1 foi efetivada"}))),s.a.createElement(f.a,{style:{marginTop:10}},s.a.createElement(P.a,null,s.a.createElement(E.n,{id:"mp927",formProps:t,label:"Pgto at\xe9 o 5\xba dia \xfatil do m\xeas subsequente (MPV-927)",labelProps:{style:{color:E.h}},tooltipProps:{message:"Essa op\xe7\xe3o proporciona liberar e identificar o pagamento das f\xe9rias at\xe9 o 5 dia \xfatil do m\xeas subsequente, referente a MPV-927"},disabled:j,onChange:()=>{const e=t.getValues();if(u(e.mp927),e.mp927){const o=Object(E.gc)(Object(E.mb)(Object(E.tc)(e.dtInicialGozo),1,"month"));Object(I.g)({referencia:o,diaUtil:5,empresa:a.globalParameter.empresa},{thenFunction:e=>{e&&(k(e),t.setValue("dtPagamento",e))}})}else t.setValue([{dtPagamento:Object(E.Mb)(Object(E.mb)(Object(E.tc)(e.dtInicialGozo),-2,"days"))},{incluirTercoFerias:!0}])}})))),s.a.createElement(E.d,{title:"Adicionar ao C\xe1lculo"},s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.n,{id:"primeiraParcela13",formProps:t,label:"1\xaa parcela 13\xba"}))),s.a.createElement(f.a,{style:{marginTop:15}},s.a.createElement(P.a,null,s.a.createElement(E.n,{id:"salarioFamilia",formProps:t,label:"Sal\xe1rio fam\xedlia"}))),s.a.createElement("div",{className:"check-input-label",style:{marginTop:15}},s.a.createElement(E.K,{id:"diasAbonoPecuniario",label:"Abono Pecuni\xe1rio",formProps:t,isPrependLabel:!0,type:E.L.NUMBER}),s.a.createElement(b.a,null,"dia(s)")),s.a.createElement("div",{className:"check-input-label"},s.a.createElement(E.n,{id:"salarioTrabalhado",formProps:t,tooltipProps:{message:"N\xfamero de dias trabalhados a receber nas f\xe9rias."},onChange:()=>{const e=t.getValues();V(!e.salarioTrabalhado),e.salarioTrabalhado||t.setValue("diasSalarioTrabalhado",null)}}),s.a.createElement(E.K,{id:"diasSalarioTrabalhado",label:"Dias Trabalhados",formProps:t,isPrependLabel:!0,type:E.L.NUMBER,tooltipProps:{message:"N\xfamero de dias trabalhados a receber nas f\xe9rias."},disabled:S}),s.a.createElement(b.a,null,"dia(s)")),s.a.createElement("div",{className:"check-input-label"},s.a.createElement(E.n,{id:"faltas",formProps:t,onChange:()=>{const e=t.getValues();D(!e.faltas),e.faltas||t.setValue("diasFaltas",null)}}),s.a.createElement(E.K,{id:"diasFaltas",label:"Faltas",formProps:t,isPrependLabel:!0,type:E.L.NUMBER,tooltipProps:{message:"Se nenhum valor for informado este campo ser\xe1 calculado."},disabled:A}),s.a.createElement(b.a,null,"dia(s)")),Object(h.a)(m,s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.n,{id:"incluirTercoFerias",formProps:t,label:"Pagar 1/3 de F\xe9rias",labelProps:{style:{color:E.h}},tooltipProps:{message:"Devido a MPV-927 torna-se opcional o pagamento referente ao 1/3 de F\xe9rias durante o per\xedodo de calamidade p\xfablica. O sistema ir\xe1 incluir automaticamente na folha de dezembro o pagamento do mesmo, pois deve ser pago at\xe9 a data em que \xe9 devida a gratifica\xe7\xe3o natalina."}})))))))),Object(h.a)(!N,s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement("h6",{className:"text-center",style:{color:E.m}},"F\xe9rias com c\xe1lculos gerados n\xe3o podem ser alteradas, para realizar ajustes remova o c\xe1lculo de f\xe9rias da refer\xeancia correspondente.")))))};a.default=(e=>{const a=Object(c.c)(e=>e.globalReducer),t="__/__/____",G=Object(n.b)({defaultValues:Object(i.a)({dtPagamento:t,ferias:[],proxDtFinalGozo:t,proxDtFinalPerAquisitivo:t,proxDtInicialGozo:t,proxDtInicialPerAquisitivo:t,ultDtFinalGozo:t,ultDtFinalPerAquisitivo:t,ultDtInicialGozo:t,ultDtInicialPerAquisitivo:t},e.selectedItem),mode:"onBlur"}),q=Object(c.b)(),S=Object(l.useState)(!1),V=Object(o.a)(S,2),R=V[0],y=V[1],N=Object(l.useRef)();Object(l.useEffect)(()=>{setTimeout(()=>{Object(h.q)(G,["ferias"],["categoria","calculoProporcional","proximaFerias","ultimasFerias","empresaMFP","recisao","dataDemissaoDeterminado","trabalhador"]),y(e.selectedItem&&(e.selectedItem.categoria===F.i.value||!0===e.selectedItem.calculoProporcional)),e.selectedItem&&Object(h.c)(G,e.selectedItem,M)},700)},[]);const M=e=>{e.ultimasFerias&&G.setValue([{ultDtFinalPerAquisitivo:e.ultimasFerias.dtInicialPerAquisitivo},{ultDtFinalGozo:e.ultimasFerias.dtFinalGozo},{ultDtInicialGozo:e.ultimasFerias.dtInicialGozo},{ultDtInicialPerAquisitivo:e.ultimasFerias.dtFinalPerAquisitivo},{dtPagamento:e.ultimasFerias.dtPagamento}]),e.proximasFerias&&G.setValue([{proxDtFinalGozo:e.proximasFerias.dtFinalGozo},{proxDtFinalPerAquisitivo:e.proximasFerias.dtFinalPerAquisitivo},{proxDtInicialGozo:e.proximasFerias.dtInicialGozo},{proxDtInicialPerAquisitivo:e.proximasFerias.dtInicialPerAquisitivo}])},L=()=>{G.setValue("vinculo",null)},T=()=>{N.current.close()},C=()=>{q(Object(h.r)()),Object(h.c)(G,e.selectedItem,e=>{if((e=>{let t=!1;return e.ferias.length>0&&(t=e.ferias.filter(e=>e.programado&&!e.efetivadaOutroSistema&&parseInt(a.globalParameter.empresaMFP.referencia,10)<=parseInt(Object(E.gc)(Object(E.tc)(e.dtInicialGozo)),10)).length>0),t})(e)){const a=()=>Object(E.Xb)(e.recisao.dtAfastamento)&&Object(E.Xb)(e.recisao.dtAvisoPrevio)&&Object(E.Xb)(e.recisao.tipoDemissao);e.recisao&&a()&&(e.recisao=null),Object(I.n)(e,{errorFunction:e=>Object(h.o)(e,E.f.ERROR),thenFunction:e=>{e&&-1!==e.indexOf("P<")?Object(D.b)(e.split("P<")[1],{errorFunction:e=>{q(E.mc.hideProgress()),Object(h.o)(e,E.f.ERROR)},thenFunction:e=>{q(E.mc.hideProgress());const a=e.headers["content-disposition"].split("filename=")[1];Object(r.saveAs)(e.data,a)}}):Object(h.o)("Erro ao simular as f\xe9rias",E.f.ERROR)}})}else Object(h.o)("\xc9 necess\xe1rio ter f\xe9rias programadas para poder simular.",E.f.ERROR)})},_=[{dataField:"dtInicialPerAquisitivo",order:E.O.ASC}],X={columns:[{dataField:"status",formatter:(e,a)=>a.programado&&!a.efetivadaOutroSistema?"Programada":"Efetivada",text:"Status"},{dataField:"dtInicialGozo",text:"Data Inicial de Gozo"},{dataField:"diasGozo",text:"Dias de Gozo"},{dataField:"dtInicialPerAquisitivo",text:"Dt. Inicial do Per\xedodo Aquisitivo"},{dataField:"dtFinalPerAquisitivo",text:"Dt. Final do Per\xedodo Aquisitivo"}],detailView:x,detailViewSize:"large",detailViewWikiId:672,formProps:G,hideAddButton:R,hideEditButton:R,hideRemoveButton:R,onBeforeAdd:e=>{const a=G.getValues();let t=null;return a.recisao&&a.recisao.dtAfastamento?t=Object(h.o)("O v\xednculo j\xe1 possui uma rescis\xe3o lan\xe7ada no sistema. Deseja continuar?"):a.dataDemissaoDeterminado&&(t=Object(h.o)("O v\xednculo possui uma data de demiss\xe3o determinada no sistema. Deseja continuar?")),t?t.then(()=>e()):e(),{async:!0}},onBeforeEdit:(e,a)=>(R||a(),{async:!0}),onBeforeRemove:(e,a)=>{if(!R){const t=G.getValues();(e.programado||t.ultimasFerias&&e.id===t.ultimasFerias.id)&&a()}return{async:!0}},propName:"ferias",title:"Hist\xf3rico de F\xe9rias"},w={confirmButton:{label:"Salvar"},onCancel:()=>{L(),T()},onConfirm:()=>{N.current.submit().then(L)}},B=(e,a,t)=>s.a.createElement(u.a,null,s.a.createElement(b.a,null,e),s.a.createElement(p.a,null,s.a.createElement(O.a,{disabled:!0,name:a,innerRef:G.register}),s.a.createElement(j.a,{addonType:"prepend",style:{marginLeft:-1}},"at\xe9"),s.a.createElement(O.a,{disabled:!0,name:t,innerRef:G.register}))),k=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,null,s.a.createElement(P.a,{className:"text-right"},s.a.createElement(v.a,{color:"first",onClick:C},"Simular F\xe9rias"))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.g,{title:"\xdaltimas F\xe9rias"},s.a.createElement("div",{className:"d-flex justify-content-center text-center"},s.a.createElement("div",{style:{width:220}},s.a.createElement(u.a,null,s.a.createElement(b.a,null,"Data do pagamento"),s.a.createElement(O.a,{disabled:!0,name:"dtPagamento",innerRef:G.register,style:{textAlign:"center"}})))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,B("Per\xedodo aquisitivo:","ultDtInicialPerAquisitivo","ultDtFinalPerAquisitivo")),s.a.createElement(P.a,null,B("Gozadas em:","ultDtInicialGozo","ultDtFinalGozo"))),s.a.createElement(f.a,{style:{marginTop:10}},s.a.createElement(P.a,null,B("Programada para:","proxDtInicialPerAquisitivo","proxDtFinalPerAquisitivo")),s.a.createElement(P.a,null,B("Pr\xf3ximo per\xedodo aquisitivo:","proxDtInicialGozo","proxDtFinalGozo")))))),s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(E.w,Object.assign({},e,{defaultSortDirection:E.O.ASC,defaultSorted:_},X,{keyField:"rowIndex"})))));return s.a.createElement(E.hb,{title:"Manuten\xe7\xe3o de F\xe9rias",wrapBody:!0===e.openViaDock,wikiId:1736},s.a.createElement(E.B,{ref:N,formProps:G,editViewProps:e,dtoClassName:g.a,beforePersist:(e,a)=>(Object(I.s)(e,{thenFunction:t=>{t.content&&-1!==t.content.indexOf(A.a.value)?Object(h.o)(s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"lead"},"Existem informa\xe7\xf5es que exigem a sua aten\xe7\xe3o:"),s.a.createElement(d.a,{variant:"flush"},s.a.createElement(m.a,null,A.a.label)),s.a.createElement("p",{className:"lead text-center",style:{marginTop:16,marginBottom:0}},"Deseja ignorar essas advert\xeancias e salvar mesmo assim?"))).then(()=>a(e)):a(e)}}),{async:!0}),externalSubmit:!0},!0===e.openViaDock?s.a.createElement("div",{className:"m-3"},k(),s.a.createElement(E.R,{handleSubmit:()=>{N.current.submit(!1).then(a=>{N.current.close(),e.onDockSubmit&&e.onDockSubmit(a)})},handleClose:T,btnSubmitIcon:"save",btnSubmitLabel:"Salvar"})):s.a.createElement(E.ib,{formProps:G,onAfterPageChange:e=>{"ferias"===e&&Object(h.m)(G,q,M)},finishProps:w},s.a.createElement(E.jb,{id:"vinculo",title:"Sele\xe7\xe3o do v\xednculo"},s.a.createElement(f.a,null,s.a.createElement(P.a,null,s.a.createElement(z.a,{id:"vinculo",formProps:Object(i.a)(Object(i.a)({},G),{},{validation:{required:!0}}),label:"Vinculo",isPrependLabel:!0})))),s.a.createElement(E.jb,{id:"ferias",title:"Programa\xe7\xe3o de F\xe9rias"},k()))))})}}]);
//# sourceMappingURL=13.cdf941e4.chunk.js.map