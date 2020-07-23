(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1016:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r="br.com.projetusinformatica.calima.mcg.model.dto.lalurparteb"},1558:function(e,a,t){"use strict";t.r(a);var r=t(100),o=t(6),l=t(0),s=t.n(l),n=t(201),d=t.n(n),c=t(98),i=t(19),u=t(198),m=t(148),b=t(126),p=t(197),f=t(849),P=t(2),E=t(1016);const j={label:"Preju\xedzo",value:"PREJUIZO",extraFields:{intValue:2}};var g=t(947);a.default=(e=>{const a=Object(P.Ub)(e),t=Object(i.c)(e=>e.globalReducer),n=Object(c.b)({defaultValues:Object(o.a)({tipoDebitoCredito:g.a.value},a),mode:"onBlur"});Object(l.useEffect)(()=>{const e=t.globalParameter.empresaMCG.id;setTimeout(()=>{n.setValue("empresaMCG.id",e),null===a.codigo||void 0===a.codigo||"1001"!==a.codigo.substr(0,4)&&"9001"!==a.codigo.substr(0,4)||P.pb.emit(P.a.SHOW,{message:"Altera\xe7\xf5es nos registros de C\xf3digo ".concat(a.codigo," que s\xe3o gerenciados pelo Calima podem acarretar erros futuros na exporta\xe7\xe3o dos dados para o SPED ECF.")})},500)},[]);return s.a.createElement(P.ib,{title:"Manuten\xe7\xe3o de Contas Parte B Lalur"},s.a.createElement(P.B,{formProps:n,editViewProps:e,dtoClassName:E.a,validateExtras:()=>{const e=[];let t;if(a.lalurParteBReflexos&&a.lalurParteBReflexos.length>0){let c=!1;const i=Object(P.hc)(a.data);if(a.lalurParteBReflexos[0].tipoParteB===j.value){var o,l=Object(r.a)(a.lalurParteBReflexos);try{for(l.s();!(o=l.n()).done;)t=o.value,!c&&t.lalurLacsImpostoReferencia.referencia>i&&(c=!0)}catch(d){l.e(d)}finally{l.f()}a.saldo>0&&e.push("O valor do saldo deve ser zero pois existem lan\xe7amentos do tipo Preju\xedzo vinculados a conta"),c&&e.push("A data da Conta Parte B n\xe3o pode ser menor do que a referncia dos lan\xe7amentos j\xe1 cadastrados")}else{let o=0;var s,n=Object(r.a)(a.lalurParteBReflexos);try{for(n.s();!(s=n.n()).done;)o+=(t=s.value).saldo,!c&&t.lalurLacsImpostoReferencia.referencia.substr(0,4)<=i.substr(0,4)&&(c=!0)}catch(d){n.e(d)}finally{n.f()}a.saldo<o&&e.push("O valor do saldo deve ser igual ou superior ao somat\xf3rio dos lan\xe7amentos cadastrado que \xe9 ".concat(a.saldo.toLocaleString("pt-br",{currency:"BRL",style:"currency"}))),c&&e.push("A data da Conta Parte B n\xe3o pode ser maior do que a referncia dos lan\xe7amentos j\xe1 cadastrados")}}return e}},s.a.createElement(P.K,{formProps:n,id:"empresaMCG.id",hidden:!0}),s.a.createElement(P.K,{formProps:n,id:"tipoDebitoCredito",hidden:!0}),s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(P.K,{formProps:Object(o.a)(Object(o.a)({},n),{},{validation:Object(o.a)({required:!0},Object(P.gc)(0,5))}),id:"codigo",isPrependLabel:!0,label:"C\xf3digo",placeholder:"Informe o C\xf3digo"}))),s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(P.K,{formProps:Object(o.a)(Object(o.a)({},n),{},{validation:{required:!0}}),id:"data",isPrependLabel:!0,label:"Data",placeholder:"Informe a data",type:P.L.DATE})),s.a.createElement(m.a,null,s.a.createElement(P.K,{formProps:Object(o.a)(Object(o.a)({},n),{},{validation:{required:!0,maxLength:15}}),id:"saldo",isPrependLabel:!0,label:"Saldo Inicial",placeholder:"Informe a Saldo Inicial",type:P.L.NUMBER}))),s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(P.K,{formProps:Object(o.a)(Object(o.a)({},n),{},{validation:{required:!0,maxLength:200}}),id:"descricao",isPrependLabel:!0,label:"Descri\xe7\xe3o",placeholder:"Informe a descri\xe7\xe3o",type:P.L.TEXT_AREA}))),s.a.createElement(b.a,{className:"mb-3"},s.a.createElement(p.a,null,s.a.createElement(f.a,null,"Lista de Lan\xe7amentos na Parte B do LALUR"),s.a.createElement(d.a,{keyField:"id",data:a.lalurParteBReflexos||[],columns:[{dataField:"rowNumber",hidden:!0,text:"Row Number"},{dataField:"historico",editable:!1,sort:!0,text:"Hist\xf3rico"},{dataField:"saldo",editable:!1,sort:!0,text:"Saldo"},{dataField:"tipoParteB",editable:!1,sort:!0,text:"Tipo"},{dataField:"lalurLacsImpostoReferencia.referencia",editable:!1,sort:!0,text:"Refer\xeancia"}],responsive:!0,striped:!0})))))})},849:function(e,a,t){"use strict";var r=t(3),o=t(9),l=t(0),s=t.n(l),n=t(1),d=t.n(n),c=t(8),i=t.n(c),u=t(5),m={tag:u.q,className:d.a.string,cssModule:d.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,n=Object(o.a)(e,["className","cssModule","tag"]),d=Object(u.m)(i()(a,"card-title"),t);return s.a.createElement(l,Object(r.a)({},n,{className:d}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},947:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return o});const r={value:"debito",label:"D\xe9bito"},o=[r,{value:"credito",label:"Cr\xe9dito"}]}}]);
//# sourceMappingURL=369.08437d34.chunk.js.map