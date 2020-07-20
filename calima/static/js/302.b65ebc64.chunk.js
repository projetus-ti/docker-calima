(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1368:function(e,a,l){"use strict";l.r(a);var t=l(6),o=l(0),n=l.n(o),r=l(98),i=l(198),c=l(148),m=l(126),d=l(197),s=l(849),u=l(786),b=l(2),p=l(972),v=l(861),f=l(911);a.default=(e=>{const a=Object(b.Tb)(e),l=Object(r.b)({defaultValues:a,mode:"onBlur"});return n.a.createElement(b.hb,{title:"Configura\xe7\xf5es de PIS"},n.a.createElement(b.B,{formProps:l,editViewProps:e,dtoClassName:p.a,validateExtras:e=>{const a=[];return!0!==e.notificarVencimento||e.notificarVencimentoDias||a.push("Dias de Anteced\xeancia do vencimento - Campo n\xe3o pode estar em branco."),a},hideSubmitButton:"true"===(l.getValues().padrao||!1).toString()},n.a.createElement(b.K,{formProps:l,id:"padrao",hidden:!0}),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"descricao",label:"Descri\xe7\xe3o",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0,maxLength:50}}),isPrependLabel:!0,placeholder:"Informe a descri\xe7\xe3o da Configura\xe7\xe3o de PIS"}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"codigoReceita",label:"C\xf3digo da Receita",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0,maxLength:5}}),isPrependLabel:!0,placeholder:"Informe o c\xf3digo da receita"}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"variacaoCodigoReceita",label:"Varia\xe7\xe3o",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:Object(b.fc)(0,2)}),tooltipProps:{message:"Varia\xe7\xe3o do c\xf3digo da receita. Esse campo \xe9 obrigat\xf3rio caso a empresa gere o DCTF."},isPrependLabel:!0,placeholder:"Informe a varia\xe7\xe3o da Receita"}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"diaVencimento",label:"Dia de Vencimento",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0}}),isPrependLabel:!0,placeholder:"Informe o dia de vencimento",inputDropDownProps:{optionsProvider:v.a},type:b.L.DROP_DOWN}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(m.a,{style:{marginBottom:"16px"}},n.a.createElement(d.a,null,n.a.createElement(s.a,null,"Configura\xe7\xe3o de Notifica\xe7\xe3o"),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(u.a,{type:"switch",label:"Notificar Vencimento de Imposto",name:"notificarVencimento",id:"checkNotificarVencimento",innerRef:l.register,style:{marginBottom:"16px"}}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"notificarVencimentoDias",label:"Dias de Anteced\xeancia do vencimento",formProps:l,isPrependLabel:!0,placeholder:"Informe com quantos de dias de anteced\xeancia gostaria de ser notificado",disabled:!l.getValues().notificarVencimento,inputDropDownProps:{optionsProvider:v.a,enabled:!1},type:b.L.DROP_DOWN}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(u.a,{type:"switch",disabled:!l.getValues().notificarVencimento,label:"Notificar o cliente/respons\xe1vel por Connect/email, sobre o vencimento do Imposto",name:"notificarVencimentoPorEmail",id:"checkNotificarVencimentoPorEmail",innerRef:l.register}))))))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"aliquota",label:"Al\xedquota",formProps:l,isPrependLabel:!0,placeholder:"Informe o valor do al\xedquota",type:b.L.NUMBER}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"recolhimentoMinimo",label:"Recolhimento M\xednimo",formProps:Object(t.a)(Object(t.a)({},l),{},{validation:{required:!0}}),isPrependLabel:!0,placeholder:"Informe o valor do recolhimento m\xednimo",type:b.L.NUMBER}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(u.a,{type:"switch",label:"Calcular o imposto sobre o valor de cada nota/parcela baixada do contas a receber",name:"calculoValorNotas",id:"checkCalculoValorNotas",title:"Caso a op\xe7\xe3o acima seja marcada, o sistema ir\xe1 efetuar o c\xe1lculo levando em considera\xe7\xe3o o valores de PIS lan\xe7ado em cada Nota de Sa\xedda/Entrada/Conhecimento de Transporte/Servi\xe7os ou caso seja marcado nas configura\xe7\xf5es Regime de Caixa pelo valor de PIS do Contas a Receber.",innerRef:l.register,style:{marginBottom:"16px"}}))),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(m.a,{style:{marginBottom:"16px"}},n.a.createElement(d.a,null,n.a.createElement(s.a,null,"Configura\xe7\xe3o para o DCTF"),n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(b.K,{id:"debitoSCPINC",label:"D\xe9bito SCP/INC",formProps:l,isPrependLabel:!0,placeholder:"Informe o D\xe9bito SCP/INC",inputDropDownProps:{optionsProvider:f.a,enabled:!1},type:b.L.DROP_DOWN})))))))))})},849:function(e,a,l){"use strict";var t=l(3),o=l(9),n=l(0),r=l.n(n),i=l(1),c=l.n(i),m=l(8),d=l.n(m),s=l(5),u={tag:s.q,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,l=e.cssModule,n=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(s.m)(d()(a,"card-title"),l);return r.a.createElement(n,Object(t.a)({},i,{className:c}))};b.propTypes=u,b.defaultProps={tag:"div"},a.a=b},861:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t=[{label:"01",value:1},{label:"02",value:2},{label:"03",value:3},{label:"04",value:4},{label:"05",value:5},{label:"06",value:6},{label:"07",value:7},{label:"08",value:8},{label:"09",value:9},{label:"10",value:10},{label:"11",value:11},{label:"12",value:12},{label:"13",value:13},{label:"14",value:14},{label:"15",value:15},{label:"16",value:16},{label:"17",value:17},{label:"18",value:18},{label:"19",value:19},{label:"20",value:20},{label:"21",value:21},{label:"22",value:22},{label:"23",value:23},{label:"24",value:24},{label:"25",value:25},{label:"26",value:26},{label:"27",value:27},{label:"28",value:28},{label:"29",value:29},{label:"30",value:30},{label:"31",value:31}]},911:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t=[{label:"Demais",value:"DEMAIS"},{label:"SCP",value:"SCP"},{label:"INC",value:"INC"}]},972:function(e,a,l){"use strict";l.d(a,"a",function(){return t});const t="br.com.projetusinformatica.calima.mlf.model.dto.configpis"}}]);
//# sourceMappingURL=302.b65ebc64.chunk.js.map