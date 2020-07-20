(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1548:function(e,a,t){"use strict";t.r(a);var l=t(6),n=t(13),o=t(0),r=t.n(o),i=t(98),c=t(20),s=t(198),d=t(148),m=t(126),u=t(197),b=t(849),p=t(394),f=t(786),P=t(2),E=t(815),g=t(826),O=t(869);const j={label:"De-Para",value:"D"},h=[{label:"O Pr\xf3prio",value:"P"},j];var v=t(904);a.default=(e=>{const a=Object(c.c)(e=>e.globalReducer),t=Object(P.Tb)(e),C=Object(i.b)({defaultValues:t,mode:"onBlur"}),I=Object(o.useState)(!1),L=Object(n.a)(I,2),R=L[0],w=L[1],A=Object(o.useState)(!1),D=Object(n.a)(A,2),q=D[0],M=D[1];Object(o.useEffect)(()=>{Object(P.Xb)(C.getValues().id)&&C.reset({digitoAtivo:"1",digitoDespesa:"4",digitoPassivo:"2",digitoReceita:"3",mascara:"########",tipoPlanoContaReferencial:j.value})},[]);return r.a.createElement(P.hb,{title:"Manuten\xe7\xe3o de Grupo de Plano de Conta",useGlobalParameter:!0,dependencies:[()=>Object(E.a)(a.globalParameter),()=>Object(g.a)(a.globalParameter)],globalParameter:a.globalParameter,wikiId:1346},r.a.createElement(P.B,{formProps:C,editViewProps:e,dtoClassName:O.a,validateExtras:()=>{const e=[];return function(){let e=0;for(let a=0;a<C.getValues().mascara.length;a++)"#"===C.getValues().mascara.charAt(a)&&e++;return e}()>25&&e.push("M\xe1scara n\xe3o deve exceder 25 caracteres."),e}},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{style:{marginBottom:"16px",borderWidth:"thin"}},r.a.createElement(u.a,null,r.a.createElement(b.a,null,"B\xe1sico"),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{formProps:Object(l.a)(Object(l.a)({},C),{},{validation:{maxLength:8}}),id:"codigo",isPrependLabel:!0,label:"C\xf3digo",labelWidth:105,tooltipProps:{message:"Preenchimento Opcional - Codifica\xe7\xe3o  Autom\xe1tica"},type:P.L.NUMBER,placeholder:"Informe o c\xf3digo"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{formProps:Object(l.a)(Object(l.a)({},C),{},{validation:{required:!0,maxLength:120}}),id:"descricao",isPrependLabel:!0,label:"Descri\xe7\xe3o",labelWidth:105,placeholder:"Informe a Descri\xe7\xe3o"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{formProps:Object(l.a)(Object(l.a)({},C),{},{validation:{required:!0}}),id:"mascara",isPrependLabel:!0,label:"M\xe1scara",labelWidth:105,onChange:function(e){C.setValue("mascara",null);let a="",t="";for(let l=0;l<e.length;l++)"-"!==e.charAt(l)&&"."!==e.charAt(l)?t+="#":t+=e.charAt(l);a+=t,C.setValue("mascara",a)},placeholder:"Informe a m\xe1scara do Plano de Contas"}))),r.a.createElement(p.a,{tag:s.a},r.a.createElement(d.a,null,r.a.createElement(f.a,{id:"idutilizarContaSinteticaCompleta",label:"Utilizar conta sint\xe9tica completa",name:"utilizarContaSinteticaCompleta",innerRef:C.register,type:"switch"})),Object(P.wc)((e=>({message:e,placement:"top-start"}))("Utilizar conta sint\xe9tica completa. Ex: Conta Ativo - 1.0.0.0000. Uma vez configurada essa op\xe7\xe3o o sistema n\xe3o ir\xe1 respeitar a hierarquia sequencial de Contas Cont\xe1beis."),"utilizarContaSinteticaCompleta")))))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{style:{marginBottom:"16px",borderWidth:"thin"}},r.a.createElement(u.a,null,r.a.createElement(b.a,null,"SPED"),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(v.a,{formProps:C,id:"planoContaReferencialInstituicao",label:"Institui\xe7\xe3o",placeholder:"Informe a Institui\xe7\xe3o"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{formProps:C,id:"tipoPlanoContaReferencial",inputDropDownProps:{optionsProvider:h},isPrependLabel:!0,label:"Plano de Contas Referencial",onChange:function(e){"P"===e?(C.setValue("digitoAtivo","1"),C.setValue("digitoPassivo","2"),w(!0),M(!0)):(w(!1),M(!1))},placeholder:"Informe o Plano de Contas Referencial",type:P.L.DROP_DOWN}))))))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{style:{marginBottom:"16px",borderWidth:"thin"}},r.a.createElement(u.a,null,r.a.createElement(b.a,null,"Conta"),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{disabled:R,formProps:Object(l.a)(Object(l.a)({},C),{},{validation:Object(l.a)({required:!0},Object(P.fc)(0,1))}),id:"digitoAtivo",isPrependLabel:!0,label:"Ativo",labelWidth:105,placeholder:"Informe o d\xedgito do Ativo"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{disabled:q,formProps:Object(l.a)(Object(l.a)({},C),{},{validation:Object(l.a)({required:!0},Object(P.fc)(0,1))}),id:"digitoPassivo",isPrependLabel:!0,label:"Passivo",labelWidth:105,placeholder:"Informe o d\xedgito do Passivo"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{formProps:Object(l.a)(Object(l.a)({},C),{},{validation:Object(l.a)({},Object(P.fc)(0,3))}),id:"digitoPatrimonioLiquido",isPrependLabel:!0,label:"Grupo Patrim\xf4nio L\xedquido",placeholder:"Informe o d\xedgito do Grupo Patrim\xf4nio L\xedquido"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{formProps:Object(l.a)(Object(l.a)({},C),{},{validation:Object(l.a)({required:!0},Object(P.fc)(0,1))}),id:"digitoReceita",isPrependLabel:!0,label:"Receita",labelWidth:105,placeholder:"Informe o d\xedgito da Receita"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(P.K,{formProps:Object(l.a)(Object(l.a)({},C),{},{validation:Object(l.a)({required:!0},Object(P.fc)(0,1))}),id:"digitoDespesa",isPrependLabel:!0,label:"Despesa",labelWidth:105,placeholder:"Informe o d\xedgito da Despesa"})))))))))})},815:function(e,a,t){"use strict";function l(e){let a=null;return e.empresa||(a="Pelo menos uma empresa deve estar selecionada."),a}t.d(a,"a",function(){return l})},826:function(e,a,t){"use strict";function l(e){let a=null;return e.empresaMCG||(a="A empresa selecionada n\xe3o est\xe1 configurada para o m\xf3dulo Cont\xe1bil. Para configur\xe1-la acesse:\nM\xf3dulo Cont\xe1bil > Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa."),a}t.d(a,"a",function(){return l})},849:function(e,a,t){"use strict";var l=t(3),n=t(9),o=t(0),r=t.n(o),i=t(1),c=t.n(i),s=t(8),d=t.n(s),m=t(5),u={tag:m.q,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),c=Object(m.m)(d()(a,"card-title"),t);return r.a.createElement(o,Object(l.a)({},i,{className:c}))};b.propTypes=u,b.defaultProps={tag:"div"},a.a=b},869:function(e,a,t){"use strict";t.d(a,"a",function(){return l});const l="br.com.projetusinformatica.calima.ger.model.dto.grupoplanoconta"},879:function(e,a,t){"use strict";t.d(a,"a",function(){return l});const l="br.com.projetusinformatica.calima.mcg.model.dto.planocontareferencialinstituicao"},904:function(e,a,t){"use strict";var l=t(6),n=t(0),o=t.n(n),r=t(2),i=t(879);a.a=(e=>o.a.createElement(r.K,Object.assign({},e,{isPrependLabel:!0,inputSearchProps:Object(l.a)(Object(l.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"instituicao",text:"Institui\xe7\xe3o"}],dtoClassName:i.a,searchViewId:"PlanoContaMCGReferencialInstituicaoSearchView"}),label:e.label?e.label:"Plano de Contas Referencial",placeholder:e.placeholder?e.placeholder:"Informe o Plano de Contas Referencial",type:r.L.INPUT_SEARCH})))}}]);
//# sourceMappingURL=211.e4295633.chunk.js.map