(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{1240:function(e,a,t){"use strict";t.r(a);var l=t(6),n=t(12),o=t(14),r=t(71),c=t.n(r),i=t(0),s=t.n(i),d=t(201),m=t.n(d),b=t(98),u=t(19),p=t(22),g=t(44),E=t(395),C=t(198),f=t(148),O=t(97),j=t(255),h=t(147),v=t(392),N=t(2),x=t(815),y=t(826),D=t(879),P=t(897),F=t(830),L=t(258),w=t(989),S=t(905),R=t(834),A=t(1118);a.default=(e=>{const a=Object(u.c)(e=>e.globalReducer),t=Object(b.b)({mode:"onBlur"}),r=Object(u.b)(),d=Object(i.useState)([]),k=Object(n.a)(d,2),V=k[0],I=k[1],z=Object(i.useState)([]),Y=Object(n.a)(z,2),K=Y[0],M=Y[1],G=Object(i.useState)([]),q=Object(n.a)(G,2),H=q[0],T=q[1],B=Object(i.useState)(!1),W=Object(n.a)(B,2),J=W[0],X=W[1],_=Object(i.useState)(!1),Q=Object(n.a)(_,2),U=Q[0],Z=Q[1],$=Object(i.useState)([]),ee=Object(n.a)($,2),ae=ee[0],te=ee[1],le=Object(i.useState)(""),ne=Object(n.a)(le,2),oe=ne[0],re=ne[1],ce=Object(i.useState)(null),ie=Object(n.a)(ce,2),se=ie[0],de=ie[1],me=Object(i.useState)(null),be=Object(n.a)(me,2),ue=be[0],pe=be[1],ge=Object(i.useState)([]),Ee=Object(n.a)(ge,2),Ce=Ee[0],fe=Ee[1],Oe=Object(i.useState)([]),je=Object(n.a)(Oe,2),he=je[0],ve=je[1],Ne=Object(i.useState)(0),xe=Object(n.a)(Ne,2),ye=xe[0],De=xe[1],Pe=Object(i.useState)(0),Fe=Object(n.a)(Pe,2),Le=Fe[0],we=Fe[1],Se=Object(i.useState)(0),Re=Object(n.a)(Se,2),Ae=Re[0],ke=Re[1],Ve=Object(i.useState)(0),Ie=Object(n.a)(Ve,2),ze=Ie[0],Ye=Ie[1],Ke=Object(i.useState)(!1),Me=Object(n.a)(Ke,2),Ge=Me[0],qe=Me[1],He=Object(i.useState)(!1),Te=Object(n.a)(He,2),Be=Te[0],We=Te[1],Je=Object(i.useState)(0),Xe=Object(n.a)(Je,2),_e=Xe[0],Qe=Xe[1],Ue=Object(i.useState)(!1),Ze=Object(n.a)(Ue,2),$e=Ze[0],ea=Ze[1],aa=Object(i.useState)(!1),ta=Object(n.a)(aa,2),la=ta[0],na=ta[1],oa=(e,t)=>{let l="";return a.globalParameter.empresaMCG.tipoLancamentoConta===P.a.value?t.crDebito&&(l=t.crDebito):t.contaDebito&&(l=t.contaDebito),l},ra=(e,t)=>{let l="";return a.globalParameter.empresaMCG.tipoLancamentoConta===P.a.value?t.crCredito&&(l=t.crCredito):t.contaCredito&&(l=t.contaCredito),l},ca=[{dataField:"nro",sort:!0,text:"N\xba Lan\xe7amento"},{dataField:"dt",sort:!0,text:"Data"},{dataField:"crDebito",sort:!0,text:"CR D\xe9bito"},{dataField:"contaDebito",sort:!0,text:"D\xe9bito"},{dataField:"crCredito",text:"CR Cr\xe9dito"},{dataField:"contaCredito",text:"Cr\xe9dito"},{dataField:"historico",sort:!0,text:"Hist\xf3rico"},{dataField:"valor",formatter:N.Ab,sort:!0,text:"Valor do Lan\xe7amento"},{dataField:"saldo",formatter:N.Pb,sort:!0,text:"Saldo da Conta"}],ia=[{dataField:"nro",sort:!0,text:"N\xba Lan\xe7amento"},{dataField:"dt",sort:!0,text:"Data"},{dataField:"codigoReduzidoDebito",formatter:oa,sort:!0,text:"D\xe9bito"},{dataField:"codigoReduzidoCredito",formatter:ra,text:"Cr\xe9dito"},{dataField:"historico",sort:!0,text:"Hist\xf3rico"},{dataField:"valor",formatter:N.Ab,sort:!0,text:"Valor do Lan\xe7amento"},{dataField:"saldo",formatter:N.Pb,sort:!0,text:"Saldo da Conta"},{dataField:"conciliar",formatter:(e,a)=>s.a.createElement(p.a,{id:"buttonConciliar"+a.id,onClick:Oa,className:"btn btn-outline-primary btn-sm"},s.a.createElement("span",{className:"btn-wrapper--icon"},s.a.createElement(o.a,{color:"primary",icon:"cog"})),s.a.createElement(g.a,{target:"buttonConciliar"+a.id,placement:"top"},"Conciliar Lan\xe7amento")),headerAlign:()=>"center",style:(e,a)=>({backgroundColor:a.color,color:"white",textAlign:"center"}),text:"Conciliar Lan\xe7amentos"},{dataField:"actions",formatter:(e,a)=>s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{id:"buttonEditNConciliados"+a.id,color:"neutral-secondary",className:"btn-pill d-30 p-0 align-top btn-animated-icon btn-animated-icon--secondary",onClick:ga},s.a.createElement("span",{className:"btn-wrapper--icon"},s.a.createElement(o.a,{color:"black",icon:"pen"})),s.a.createElement(g.a,{target:"buttonEditNConciliados"+a.id,placement:"top"},"Alterar Lan\xe7amento")),s.a.createElement(p.a,{id:"buttonRemoveNConciliados"+a.id,color:"neutral-secondary",onClick:xa,className:"btn-pill d-30 p-0 align-top btn-animated-icon btn-animated-icon--secondary"},s.a.createElement("span",{className:"btn-wrapper--icon"},s.a.createElement(o.a,{color:"black",icon:"times"})),s.a.createElement(g.a,{target:"buttonRemoveNConciliados"+a.id,placement:"top"},"Remover Lan\xe7amento"))),headerAlign:()=>"center",style:(e,a)=>({backgroundColor:a.color,color:"white",textAlign:"center"}),text:"A\xe7\xf5es"}],sa=[{dataField:"nro",sort:!0,text:"N\xba Lan\xe7amento"},{dataField:"dt",sort:!0,text:"Data"},{dataField:"codigoReduzidoDebito",formatter:oa,sort:!0,text:"D\xe9bito"},{dataField:"codigoReduzidoCredito",formatter:ra,text:"Cr\xe9dito"},{dataField:"historico",sort:!0,text:"Hist\xf3rico"},{dataField:"valor",formatter:N.Ab,sort:!0,text:"Valor do Lan\xe7amento"},{dataField:"saldo",formatter:N.Pb,sort:!0,text:"Saldo da Conta"},{dataField:"removerConciliacao",formatter:(e,a)=>s.a.createElement(p.a,{id:"buttonRemoveConciliacao"+a.id,onClick:ja,className:"btn btn-outline-primary btn-sm"},s.a.createElement("span",{className:"btn-wrapper--icon"},s.a.createElement(o.a,{color:"primary",icon:"trash"})),s.a.createElement(g.a,{target:"buttonRemoveConciliacao"+a.id,placement:"top"},"Remover Concilia\xe7\xe3o")),headerAlign:()=>"center",style:(e,a)=>({backgroundColor:a.color,color:"white",textAlign:"center"}),text:"Remover Concilia\xe7\xe3o"},{dataField:"actions",formatter:(e,a)=>s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{id:"buttonEditConciliado"+a.id,color:"neutral-secondary",className:"btn-pill d-30 p-0 align-top btn-animated-icon btn-animated-icon--secondary",onClick:ga},s.a.createElement("span",{className:"btn-wrapper--icon"},s.a.createElement(o.a,{color:"black",icon:"pen"})),s.a.createElement(g.a,{target:"buttonEditConciliado"+a.id,placement:"top"},"Alterar Lan\xe7amento")),s.a.createElement(p.a,{id:"buttonRemoveConciliado"+a.id,color:"neutral-secondary",onClick:Na,className:"btn-pill d-30 p-0 align-top btn-animated-icon btn-animated-icon--secondary"},s.a.createElement("span",{className:"btn-wrapper--icon"},s.a.createElement(o.a,{color:"black",icon:"times"})),s.a.createElement(g.a,{target:"buttonRemoveConciliado"+a.id,placement:"top"},"Remover Lan\xe7amento"))),headerAlign:()=>"center",style:(e,a)=>({backgroundColor:a.color,color:"white",textAlign:"center"}),text:"A\xe7\xf5es"}];function da(){X(!1),T([])}function ma(){Z(!1)}const ba={clickToSelect:!0,mode:N.bb.RADIO,onSelect:e=>{de(e)}},ua={clickToSelect:!0,mode:N.bb.CHECKBOX,onSelect:(e,a)=>{const t=a?[...ae,e]:ae.filter(a=>a.id!==e.id);Qe(a?_e+parseFloat(e.valor):_e-parseFloat(e.valor)),te(t)}},pa={clickToSelect:!0,mode:N.bb.RADIO,onSelect:e=>{pe(e)}};Object(i.useEffect)(()=>{!Object(N.Yb)(ue)&&la&&Ea(A.default,ue)},[la,ue]),Object(i.useEffect)(()=>{!Object(N.Yb)(se)&&la&&Ea(A.default,se)},[la,se]);const ga=()=>{na(!0)},Ea=(a,t)=>{const l=a,n={history:e.history,location:e.location,match:e.match,selectedItem:{idLote:Number(t.idLote)}};r(L.a.showPage(s.a.createElement(l,n)))},Ca=()=>{const e=t.getValues().planoConta.id,l=a.globalParameter.empresa.id,n=t.getValues().periodoDe,o=t.getValues().periodoAte,c=t.getValues().historico,i=t.getValues().valor,s=t.getValues().operacaoConsultaValor,d=[],m=[];Object(F.ab)(e,l,n,o,c,i,s,{errorFunction:e=>{Object(N.tc)(e,N.A)},thenFunction:e=>{r(N.nc.hideProgress()),e.forEach(e=>{e.conciliado?m.push(e):d.push(e)}),m.length>0?M(m):M([]),d.length>0?I(d):I([])}})},fa=()=>{if(na(!1),!Object(N.Yb)(t.getValues().planoConta)){const e=t.getValues().planoConta,l=a.globalParameter.empresaMCG.tipoLancamentoConta===P.a.value?e.codigoReduzido:e.conta;if(se.contaCredito===e.conta){const a=V.filter(a=>a.contaCredito!==e.conta);qe(!0),We(!1),T(a),re("Lan\xe7amentos de contra partida de cr\xe9dito da conta de d\xe9bito ".concat(l," selecionada."))}if(se.contaDebito===e.conta){const a=V.filter(a=>a.contaDebito!==e.conta);We(!0),qe(!1),T(a),re("Lan\xe7amentos de contra partida de d\xe9bito da conta de cr\xe9dito ".concat(l," selecionada."))}}};Object(i.useEffect)(()=>{J&&!Object(N.Yb)(se)&&fa()},[se,J]);const Oa=()=>{X(!0)};Object(i.useEffect)(()=>{U&&!Object(N.Yb)(ue)&&(()=>{na(!1);const e=ue.listaLancamentosConciliados,a=t.getValues().planoConta,l=[],n=[];ue.contaCredito===a.conta&&(l.push(ue),e.forEach(e=>{K.forEach(a=>{e.lancamentoDebito.id===a.id&&n.push(a)})})),ue.contaDebito===a.conta&&(n.push(ue),e.forEach(e=>{K.forEach(a=>{e.lancamentoCredito.id===a.id&&l.push(a)})})),ve(n),fe(l)})()},[ue,U]);const ja=()=>{Z(!0)};Object(i.useEffect)(()=>{(()=>{let e=0;e=V.length>0?V[0].saldo+V[0].valor:0,De(e)})(),(()=>{let e=0;V.length>0?V.forEach(a=>{e+=a.valor}):e=0,we(e)})(),(()=>{let e=0;K.length>0?K.forEach(a=>{e+=a.valor}):e=0,ke(e)})(),(()=>{let e=0;e=V.length>0?V[V.length-1].saldo:0,Ye(e)})()},[V,K]);const ha=()=>{const e=[];return Object(N.Yb)(t.getValues().periodoDe)&&e.push("O filtro de data inicial \xe9 de preenchimento obrigat\xf3rio."),Object(N.Yb)(t.getValues().periodoAte)&&e.push("O filtro de data final \xe9 de preenchimento obrigat\xf3rio."),Object(N.Yb)(t.getValues().planoConta)&&e.push("Selecione uma Conta Cont\xe1bil para consultar."),Object(N.uc)(t.getValues().periodoDe)>Object(N.uc)(t.getValues().periodoAte)&&e.push("A Data Inicial deve ser menor que a Data Final."),Object(N.Yb)(t.getValues().planoConta)||t.getValues().planoConta.analitica||e.push("A conta selecionada deve ser anal\xedtica."),e},va=e=>{const t=Object(N.Ob)(Object(N.uc)(e.dt));Object(F.kb)({empresaMCG:a.globalParameter.empresaMCG,listItem:[e],referencia:t,removerLote:!1},{thenFunction:e=>{Object(S.a)("Lan\xe7amento excluido com sucesso.")}})};Object(i.useEffect)(()=>{$e&&!Object(N.Yb)(ue)&&va(ue)},[ue,$e]);const Na=()=>{Object(S.c)("Tem certeza que deseja excluir o lan\xe7amento selecionado?").then(()=>{ea(!0)})};Object(i.useEffect)(()=>{$e&&!Object(N.Yb)(se)&&va(se)},[se,$e]);const xa=()=>{Object(S.c)("Tem certeza que deseja excluir o lan\xe7amento selecionado?").then(()=>{ea(!0)})};return s.a.createElement(N.ib,{title:"Concilia\xe7\xe3o Cont\xe1bil - Lan\xe7amentos",useGlobalParameter:!0,globalParameter:a.globalParameter,dependencies:[()=>Object(x.a)(a.globalParameter),()=>Object(y.a)(a.globalParameter),()=>Object(D.a)(a.globalParameter)],wikiId:1908},s.a.createElement(E.a,null,s.a.createElement(N.g,null,s.a.createElement(C.a,null,s.a.createElement(f.a,null,s.a.createElement(R.a,{id:"planoConta",formProps:Object(l.a)(Object(l.a)({},t),{},{validation:{required:!0}}),onChange:()=>{Object(N.Yb)(t.getValues().planoConta)||t.getValues().planoConta.analitica||Object(S.a)("A conta selecionada deve ser anal\xedtica.")}}))),s.a.createElement(C.a,null,s.a.createElement(f.a,null,s.a.createElement(N.K,{formProps:Object(l.a)(Object(l.a)({},t),{},{validation:{required:!0}}),id:"periodoDe",isPrependLabel:!0,label:"Data Inicial",placeholder:"Informe a Data Inicial",type:N.L.DATE,onBlur:()=>{const e=c()(Object(N.uc)(t.getValues().periodoDe)).endOf("month");t.setValue("periodoAte",e,!0)}})),s.a.createElement(f.a,null,s.a.createElement(N.K,{formProps:Object(l.a)(Object(l.a)({},t),{},{validation:{required:!0}}),id:"periodoAte",isPrependLabel:!0,label:"Data Final",placeholder:"Informe a Data Final",type:N.L.DATE}))),s.a.createElement(C.a,null,s.a.createElement(f.a,null,s.a.createElement(N.K,{formProps:t,id:"historico",isPrependLabel:!0,label:"Hist\xf3rico",placeholder:"Informe o Hist\xf3rico"}))),s.a.createElement(C.a,null,s.a.createElement(f.a,null,s.a.createElement(N.K,{formProps:Object(l.a)(Object(l.a)({},t),{},{validation:{required:!0}}),id:"operacaoConsultaValor",inputDropDownProps:{optionsProvider:w.c},isPrependLabel:!0,label:"Opera\xe7\xe3o",placeholder:"Informe a Opera\xe7\xe3o",type:N.L.DROP_DOWN})),s.a.createElement(f.a,null,s.a.createElement(N.K,{formProps:Object(l.a)(Object(l.a)({},t),{},{validation:{required:!0}}),id:"valor",isPrependLabel:!0,label:"Valor",placeholder:"Informe o Valor"}))),s.a.createElement("div",{className:"divider my-3"}),s.a.createElement(C.a,null,s.a.createElement(f.a,{md:"auto"},s.a.createElement(p.a,{className:"ml-0",color:"primary",onClick:()=>{const e=ha();if(e.length>0){const a={message:s.a.createElement(N.C,{erros:e}),type:N.f.WARNING};N.pb.emit(N.a.SHOW,a)}else r(N.nc.showProgress({animated:!0,className:"progress-bar-rounded progress-animated-alt",color:"first",label:"Aguarde processando...",striped:!0,value:100})),Ca()}},s.a.createElement(o.a,{icon:"sync"})," Consultar")))),s.a.createElement(N.eb,{formProps:t},s.a.createElement(N.db,{title:"N\xe3o Conciliados"},s.a.createElement(N.g,{title:"Lan\xe7amentos N\xe3o Conciliados"},s.a.createElement("div",{className:"table-area"},s.a.createElement(m.a,{bordered:!0,columns:ia,condensed:!0,data:V,hover:!0,keyField:"id",noDataIndication:"Nenhum informa\xe7\xe3o a ser exibida.",responsive:!0,striped:!0,tabIndexCell:!0,bodyClasses:"table-alternate-spaced table",selectRow:ba})),s.a.createElement("div",{key:"divFotterKey",className:"text-left"},"Registros: ",V.length))),s.a.createElement(N.db,{title:"Conciliados"},s.a.createElement(N.g,{title:"Lan\xe7amentos Conciliados"},s.a.createElement("div",{className:"table-area"},s.a.createElement(m.a,{bordered:!0,columns:sa,condensed:!0,data:K,hover:!0,keyField:"id",noDataIndication:"Nenhum informa\xe7\xe3o a ser exibida.",responsive:!0,striped:!0,tabIndexCell:!0,bodyClasses:"table-alternate-spaced table",selectRow:pa})),s.a.createElement("div",{key:"divFotterKey",className:"text-left"},"Registros: ",K.length)))),s.a.createElement(N.g,null,s.a.createElement(C.a,{className:"text-center font-size-md"},s.a.createElement(f.a,null,s.a.createElement("div",{className:"text-primary"},s.a.createElement("span",{className:"mr-1 badge badge-neutral-primary badge-pill"},"Saldo Inicial: ",Object(N.Pb)(ye)," "))),s.a.createElement(f.a,null,s.a.createElement("div",{className:"text-primary"},s.a.createElement("span",{className:"mr-1 badge badge-neutral-primary badge-pill"},"Saldo a Conciliar: ",Object(N.Pb)(Le)," "))),s.a.createElement(f.a,null,s.a.createElement("div",{className:"text-primary"},s.a.createElement("span",{className:"mr-1 badge badge-neutral-primary badge-pill"},"Saldo Atual: ",Object(N.Pb)(ze)," "))),s.a.createElement(f.a,null,s.a.createElement("div",{className:"text-primary"},s.a.createElement("span",{className:"mr-1 badge badge-neutral-primary badge-pill"}," Saldo Conciliado: ",Object(N.Pb)(Ae)," ")))))),s.a.createElement(O.a,{isOpen:J,toggle:da,size:"xl"},s.a.createElement(j.a,{toggle:da,className:"font-weight-bold"},"Conciliar Lan\xe7amentos"),s.a.createElement(h.a,null,s.a.createElement(N.g,null,s.a.createElement(N.g,null,s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"d-50 rounded-circle bg-neutral-first text-first mr-3 text-center"},s.a.createElement(o.a,{icon:["far","bell"],className:"font-size-md"})),s.a.createElement("div",{className:"flex-grow-1"},s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"},"Lan\xe7amento: "),null===se?null:se.id,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," Data: "),null===se?null:se.dt,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," Valor: "),null===se?null:se.valor,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," D\xe9bito: "),null===se?null:se.contaDebito,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold "}," CR D\xe9bito: "),null===se?null:se.crDebito,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," Cr\xe9dito: "),null===se?null:se.contaCredito,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," CR Cr\xe9dito: "),null===se?null:se.crCredito,s.a.createElement("div",{className:"pb-1 mt-2"},oe)))),s.a.createElement(N.g,{title:"Lan\xe7amentos para Conciliar"},s.a.createElement("div",{className:"table-area mt-2"},s.a.createElement(m.a,{bordered:!0,columns:ca,condensed:!0,data:H,hover:!0,keyField:"id",noDataIndication:"Nenhum informa\xe7\xe3o a ser exibida.",responsive:!0,striped:!0,tabIndexCell:!0,bodyClasses:"table-alternate-spaced table",selectRow:ua})),s.a.createElement("div",{key:"divFotterKey",className:"text-left mt-3"},"Registros: ",H.length)),s.a.createElement(N.g,null,s.a.createElement(C.a,{className:"font-size-md text-center"},s.a.createElement(f.a,null,s.a.createElement("div",{className:"text-danger"},s.a.createElement("span",{className:"mr-1 badge badge-neutral-primary badge-pill"},"Soma d\xe9bitos:"," ",Object(N.Pb)(null===se?null:!0===Be?se.valor:_e)))),s.a.createElement(f.a,null,s.a.createElement("div",{className:"text-primary"},s.a.createElement("span",{className:"mr-1 badge badge-neutral-primary badge-pill"},"Soma cr\xe9ditos:"," ",Object(N.Pb)(null===se?null:!0===Ge?se.valor:_e)))),s.a.createElement(f.a,null,s.a.createElement("div",{className:"text-warning"},s.a.createElement("span",{className:"mr-1 badge badge-neutral-primary badge-pill"},"Saldo Concilia\xe7\xe3o:",Object(N.Pb)(null===se?null:se.valor-_e)))))))),s.a.createElement(v.a,null,s.a.createElement("div",{className:"float-right"},s.a.createElement(p.a,{type:"submit",className:"mr-2",color:"primary",onClick:()=>{let e;const a=[];if(!Object(N.Yb)(t.getValues().planoConta)){const l=t.getValues().planoConta;se.contaCredito===l.conta?e=!0:se.contaDebito===l.conta&&(e=!1),ae.length>0?(ae.forEach(t=>{const n={};n.planoConta=l,e?(n.lancamentoCredito={id:se.id},n.lancamentoDebito={id:t.id}):(n.lancamentoDebito={id:se.id},n.lancamentoCredito={id:t.id}),a.push(n)}),Object(F.h)(a,{errorFunction:e=>{Object(N.tc)(e,N.A)},thenFunction:()=>{r(N.nc.hideProgress()),Object(S.a)("Os Lan\xe7amentos Selecionados Foram Conciliados."),Ca(),X(!1),te([]),de(null),Qe(0)}})):Object(S.a)("\xc9 necess\xe1rio que pelo menos um lan\xe7amento esteja selecionado para conciliar.")}}},s.a.createElement(o.a,{icon:"cog"})," Conciliar"),s.a.createElement(p.a,{color:"danger",onClick:da},s.a.createElement(o.a,{icon:"times"})," Cancelar")))),s.a.createElement(O.a,{isOpen:U,toggle:ma,size:"xl"},s.a.createElement(j.a,{toggle:ma},"Remover Concilia\xe7\xe3o"),s.a.createElement(h.a,null,s.a.createElement(N.g,null,s.a.createElement(N.g,null,s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"d-50 rounded-circle bg-neutral-first text-first mr-3 text-center"},s.a.createElement(o.a,{icon:["far","bell"],className:"font-size-md"})),s.a.createElement("div",{className:"flex-grow-1"},s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," Lan\xe7amento Conciliado "),s.a.createElement("br",null),s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," N\xba do Lan\xe7amento: "),null===ue?null:ue.nro,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," Data: "),null===ue?null:ue.dt,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," CR D\xe9bito: "),null===ue?null:ue.crDebito,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," CR Cr\xe9dito: "),null===ue?null:ue.crCredito,s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," Valor: "),null===ue?null:Object(N.Ab)(ue.valor,null),s.a.createElement("br",null),s.a.createElement("span",{className:"mt-4 mb-3 font-weight-bold"}," Hist\xf3rico: "),null===ue?null:ue.historico))),s.a.createElement(N.g,{title:"Lan\xe7amentos de Cr\xe9ditos"},s.a.createElement("div",{className:"table-area mt-2"},s.a.createElement(m.a,{bordered:!0,columns:ca,condensed:!0,data:Ce,hover:!0,keyField:"id",noDataIndication:"Nenhum informa\xe7\xe3o a ser exibida.",responsive:!0,striped:!0,tabIndexCell:!0,bodyClasses:"table-alternate-spaced table"})),s.a.createElement("div",{key:"divFotterKey",className:"text-left mt-3"},"Registros: ",Ce.length)),s.a.createElement(N.g,{title:"Lan\xe7amentos de D\xe9bitos"},s.a.createElement("div",{className:"table-area mt-2"},s.a.createElement(m.a,{bordered:!0,columns:ca,condensed:!0,data:he,hover:!0,keyField:"id",noDataIndication:"Nenhum informa\xe7\xe3o a ser exibida.",responsive:!0,striped:!0,tabIndexCell:!0,bodyClasses:"table-alternate-spaced table"})),s.a.createElement("div",{key:"divFotterKey",className:"text-left mt-3"},"Registros: ",he.length)))),s.a.createElement(v.a,null,s.a.createElement("div",{className:"float-right"},s.a.createElement(p.a,{type:"submit",className:"mr-2",color:"primary",onClick:()=>{const e=ue.listaLancamentosConciliados;Object(F.ib)(e,{errorFunction:e=>{Object(N.tc)(e,N.A)},thenFunction:()=>{r(N.nc.hideProgress()),Object(S.a)("A Concilia\xe7\xe3o Selecionada Foi Removida."),Ca(),Z(!1),de(null),Qe(0)}})}},s.a.createElement(o.a,{icon:"trash"})," Remover Concilia\xe7\xe3o"),s.a.createElement(p.a,{color:"danger",onClick:ma},s.a.createElement(o.a,{icon:"times"})," Cancelar")))))})},815:function(e,a,t){"use strict";function l(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return l})},826:function(e,a,t){"use strict";function l(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}t.d(a,"a",function(){return l})},879:function(e,a,t){"use strict";function l(e){let a=null;return e.grupoEmpresaConfig||e.grupoPlanoConta||e.grupoPlanoConta.mascara||e.grupoPlanoConta.digitoAtivo||e.grupoPlanoConta.digitoPassivo||e.grupoPlanoConta.digitoReceita||e.grupoPlanoConta.digitoDespesa||(a=" O Grupo de Plano de Contas selecionado n\xe3o est\xe1 configurado. Para configuar acesse:M\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Grupos > Plano de Contas - \nE configure os seguintes campos: M\xe1scara, D\xedgito: Ativo, Passivo, Receita e Despesa."),a}t.d(a,"a",function(){return l})},989:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return n}),t.d(a,"c",function(){return o});const l=90,n=220,o=[{label:">",value:">"},{label:"<",value:"<"},{label:"\u2265",value:"\u2265"},{label:"\u2264",value:"\u2264"},{label:"=",value:"="},{label:"<>",value:"<>"}]}}]);
//# sourceMappingURL=282.1bcd79c2.chunk.js.map