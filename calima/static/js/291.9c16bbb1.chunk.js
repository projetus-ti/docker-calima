(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1057:function(o,e,a){"use strict";a.d(e,"a",function(){return i});const i="br.com.projetusinformatica.calima.mfp.model.dto.ppp"},1294:function(o,e,a){"use strict";a.r(e);var i=a(0),r=a.n(i),l=a(19),d=a(2),t=a(815),s=a(822),c=a(1057),n=a(831);const u=[{dataField:"vinculo.matricula",order:d.O.ASC}];e.default=(o=>{const e=Object(l.c)(o=>o.globalReducer),a=[{dataField:"vinculo.matricula",editable:!1,sort:!0,text:"Matr\xedcula"},{dataField:"nome",editable:!1,sort:!0,text:"Trabalhador"},Object(d.Fb)({dataField:"vinculo.categoria",text:"Categoria"},n.c),{dataField:"brPdh",editable:!1,sort:!0,text:"BR/PDH"}];return r.a.createElement(d.ib,{title:"Manuten\xe7\xe3o de Perfil Profissiogr\xe1fico Previdenci\xe1rio",useGlobalParameter:!0,globalParameter:e.globalParameter,dependencies:[()=>Object(t.a)(e.globalParameter),()=>Object(s.a)(e.globalParameter)]},r.a.createElement(d.Z,Object.assign({},o,o.searchDataGridProps,{dtoClassName:c.a,columns:a,defaultSorted:u,extraData:Object(d.Tb)(o,"PppEditView",c.a)})))})},815:function(o,e,a){"use strict";function i(o){let e=null;return o.empresa||(e="Pelo menos uma empresa deve estar selecionada."),e}a.d(e,"a",function(){return i})},822:function(o,e,a){"use strict";function i(o){let e=null;return o.empresaMFP||(e="A empresa selecionada n\xe3o est\xe1 configurada para o M\xf3dulo Folha de Pagamento. Para configur\xe1-la acesse Manuten\xe7\xe3o > Configura\xe7\xf5es > Empresa"),e}a.d(e,"a",function(){return i})},831:function(o,e,a){"use strict";a.d(e,"j",function(){return r}),a.d(e,"h",function(){return d}),a.d(e,"l",function(){return t}),a.d(e,"e",function(){return s}),a.d(e,"b",function(){return c}),a.d(e,"o",function(){return A}),a.d(e,"i",function(){return R}),a.d(e,"d",function(){return f}),a.d(e,"k",function(){return L}),a.d(e,"g",function(){return V}),a.d(e,"f",function(){return q}),a.d(e,"c",function(){return j}),a.d(e,"n",function(){return H}),a.d(e,"a",function(){return w}),a.d(e,"p",function(){return J}),a.d(e,"m",function(){return z});const i={extraFields:{codigoEsocial:"202",codigoSefip:"02"},label:"02 / 202 - Trabalhador Avulso",value:"TRABAVULSO"},r={extraFields:{codigoEsocial:"105",codigoSefip:"04"},label:"04 / 105 - Empregado - Prazo determinado (Lei n\xb0 9.601/98)",value:"EMP_CONTR_PRAZO_DETERMINADO"},l={extraFields:{codigoEsocial:"721",codigoSefip:"05"},label:"05 / 721 - C.I. - Diretor n\xe3o empregado com FGTS (Lei n\xba 8.036/90, art. 16)",value:"DIRETOR_NAO_EMP_COM_FGTS"},d={extraFields:{codigoEsocial:"104",codigoSefip:"06"},label:"06 / 104 - Empregado dom\xe9stico",value:"EMPREGADO_DOMESTICO"},t={extraFields:{codigoEsocial:"103",codigoSefip:"07"},label:"07 / 103 - Menor Aprendiz (Lei n\xba 11.180/2005)",value:"MENOR_APRENDIZ"},s={extraFields:{codigoEsocial:"722",codigoSefip:"11"},label:"11 / 722 - C.I. - Diretor n\xe3o empregado e demais empres\xe1rios sem FGTS",value:"DIRETOR_EMPRESARIO_NAO_EMP_SEM_FGTS"},c={extraFields:{codigoEsocial:"701",codigoSefip:"13"},label:"13 / 701 - C.I. \u2013 Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre remunera\xe7\xe3o; trabalhador associado \xe0 cooperativa de produ\xe7\xe3o",value:"AUTONOMO_CONTRIB_REMUNERACAO"},n={extraFields:{codigoEsocial:"701",codigoSefip:"14"},label:"14 / 701 - C.I. - Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre sal\xe1rio base",value:"AUTONOMO_CONTRIB_SAL_BASE"},u={extraFields:{codigoEsocial:"712",codigoSefip:"15"},label:"15 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre remunera\xe7\xe3o",value:"TRANSPORTADOR_CONTRIB_REMUNERACAO"},E={extraFields:{codigoEsocial:"712",codigoSefip:"16"},label:"16 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre sal\xe1rio base",value:"TRANSPORTADOR_CONTRIB_SAL_BASE"},p={extraFields:{codigoEsocial:"731",codigoSefip:"17"},label:"17 / 731 - C.I. - Cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"COOPERADO"},O={extraFields:{codigoEsocial:"734",codigoSefip:"18"},label:"18 / 734 - C.I. - Transportador cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"TRANSPORTADOR_COOPERADO"},b={extraFields:{codigoEsocial:"101",codigoSefip:"23"},label:"23 / 101 - C.I. - Transportador aut\xf4nomo contratado por outro C.I. equiparado \xe0 empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"TRANSP_AUT_CONTRATADO_POR_CI"},g={extraFields:{codigoEsocial:"101",codigoSefip:"25"},label:"25 / 101 - C.I. - Transportador cooperado que presta servi\xe7os a entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dio da cooperativa de trabalho",value:"TRANSP_COOP_PRESTA_SERV_ENTIDADE_BENE"},m={extraFields:{codigoEsocial:"401",codigoSefip:"26"},label:"26 / 401 - Dirigente sindical, em rela\xe7\xe3o ao adicional pago pelo sindicato; magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho; magistrado dos Tribunais Eleitorais, quando, nas tr\xeas situa\xe7\xf5es, for mantida a qualidade de segurado empregado (sem FGTS)",value:"DIRIGENTE_SINDICAL"},A={extraFields:{codigoEsocial:"106"},label:"106 - Trabalhador Tempor\xe1rio - contrato nos termos da Lei 6.019/74",value:"TRABALHADOR_TEMPORARIO"},R={extraFields:{codigoEsocial:"111"},label:"111 - Empregado - contrato de trabalho intermitente",value:"EMPREGADO_TRABALHADOR_INTERMITENTE"},T={extraFields:{codigoEsocial:"201"},label:"201 - Trabalhador Avulso Portu\xe1rio",value:"TRABALHADOR_AVULSO_PORTUARIO"},_={extraFields:{codigoEsocial:"305"},label:"305 - Servidor P\xfablico indicado para conselho ou \xf3rg\xe3o deliberativo, na condi\xe7\xe3o de representante do governo, \xf3rg\xe3o ou entidade da administra\xe7\xe3o p\xfablica",value:"SERVIDOR_PUBLICO_CONSELHO"},S={extraFields:{codigoEsocial:"308"},label:"308 - Conscrito",value:"CONSCRITO"},C={extraFields:{codigoEsocial:"410"},label:"410 - Trabalhador cedido - informa\xe7\xe3o prestada pelo Cession\xe1rio",value:"TRABALHADOR_CEDIDO"},v={extraFields:{codigoEsocial:"711"},label:"711 - Contribuinte individual - Transportador aut\xf4nomo de passageiros",value:"CI_TRANSP_AUT_PASSAGEIROS"},I={extraFields:{codigoEsocial:"712"},label:"712 - Contribuinte individual - Transportador aut\xf4nomo de carga",value:"CI_TRANSP_AUT_CARGA"},f={extraFields:{codigoEsocial:"723"},label:"723 - Contribuinte individual - empres\xe1rios, s\xf3cios e membro de conselho de administra\xe7\xe3o ou fiscal",value:"CI_EMPRESARIO_SOCIO"},P={extraFields:{codigoEsocial:"738"},label:"738 - Contribuinte individual - Cooperado filiado a Cooperativa de Produ\xe7\xe3o",value:"CI_COOPERADO_COOPERATIVA_PRODUCAO"},F={extraFields:{codigoEsocial:"741"},label:"741 - Contribuinte individual - Microempreendedor Individual",value:"CI_MICROEMPREENDEDOR_INDIVIDUAL"},x={extraFields:{codigoEsocial:"751"},label:"751 - Contribuinte individual - magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho ou da Justi\xe7a Eleitoral que seja aposentado de qualquer regime previdenci\xe1rio",value:"CI_MAGISTRADO_CLASSISTA"},D={extraFields:{codigoEsocial:"761"},label:"761 - Contribuinte individual - Associado eleito para dire\xe7\xe3o de Cooperativa, associa\xe7\xe3o ou entidade de classe qualquer natureza ou finalidade, bem como o s\xedndico ou administrador eleito para exercer atividade de dire\xe7\xe3o condominial, desde que recebam remunera\xe7\xe3o",value:"CI_ASSOCIADO_ELEITO_COOPERATIVA"},N={extraFields:{codigoEsocial:"771"},label:"771 - Contribuinte individual - Membro de conselho tutelar, nos termos da Lei n\xba 8.069, de 13 julho 1990",value:"CI_MEMBRO_CONSELHO_TUTELAR"},M={extraFields:{codigoEsocial:"781"},label:"781 - Ministro de confiss\xe3o religiosa ou membro de vida consagrada, de congrega\xe7\xe3o ou de ordem religiosa",value:"MINISTRO_RELIGIOSO"},L={extraFields:{codigoEsocial:"901",codigoSefip:"45"},label:"45 / 901 - Estagi\xe1rio",value:"ESTAGIARIO"},h={extraFields:{codigoEsocial:"902"},label:"902 - M\xe9dico Residente",value:"MEDICO_RESIDENTE"},G={extraFields:{codigoEsocial:"903"},label:"903 - Bolsista, nos termos da lei 8958/1994",value:"BOLSISTA"},B={extraFields:{codigoEsocial:"904"},label:"904 - Participante de curso de forma\xe7\xe3o, como etapa de concurso p\xfablico, sem v\xednculo de emprego/estatut\xe1rio",value:"PARTICIPANTE_CURSO_SEM_VINCULO"},U={extraFields:{codigoEsocial:"905"},label:"905 - Atleta n\xe3o profissional em forma\xe7\xe3o que receba bolsa",value:"ATLETA_NAO_PROFISSIONAL"},V={extraFields:{codigoEsocial:"107"},label:"107 - Empregado - Contrato de trabalho Verde e Amarelo - sem acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_SEM_ANT_FGTS"},q={extraFields:{codigoEsocial:"108"},label:"108 - Empregado - Contrato de trabalho Verde e Amarelo - com acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_COM_ANT_FGTS"},j=[{extraFields:{codigoEsocial:"101",codigoSefip:"01"},label:"01 / 101 - Empregado",value:"EMPREGADO"},i,{extraFields:{codigoEsocial:"101",codigoSefip:"03"},label:"03 / 101 - Trabalhador n\xe3o vinculado ao RGPS, mas com direito ao FGTS",value:"TRAB_CONTR_NAO_VINC_RGPS"},r,l,d,t,s,{extraFields:{codigoEsocial:"309",codigoSefip:"12"},label:"12 / 309 - Demais agentes p\xfablicos",value:"DEMAIS_AGENTES_PUBLICOS"},c,n,u,E,p,O,{extraFields:{codigoEsocial:"303",codigoSefip:"19"},label:"19 / 303 - Agente Pol\xedtico",value:"AGENTE_POLITICO"},{extraFields:{codigoEsocial:"306",codigoSefip:"20"},label:"20 / 306 - Servidor P\xfablico ocupante, exclusivamente, de cargo em comiss\xe3o, Servidor P\xfablico ocupante de cargo tempor\xe1rio",value:"SERV_PUBLICO_TEMPORARIO"},{extraFields:{codigoEsocial:"301",codigoSefip:"21"},label:"21 / 301 - Servidor P\xfablico titular de cargo efetivo, magistrado, membro do Minist\xe9rio P\xfablico e do Tribunal e Conselho de Contas",value:"SERV_PUBLICO_EFETIVO"},{extraFields:{codigoEsocial:"101",codigoSefip:"22"},label:"22 / 101 - C.I. - Contratado por outro C.I. equiparado a empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"CI_CONTRATADO_POR_CI"},b,{extraFields:{codigoEsocial:"101",codigoSefip:"24"},label:"24 / 101 - C.I. - Cooperado que presta servi\xe7os \xe0 entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dioda cooperativa de trabalho",value:"COOPERADO_PRESTA_SERV_ENTIDADE_BENE"},g,m,{extraFields:{codigoEsocial:"102"},label:"102 - Empregado - Trabalhador Rural por Pequeno Prazo da Lei 11.718/2008",value:"EMPREGADO_TRABALHADOR_RURAL"},A,R,T,{extraFields:{codigoEsocial:"302"},label:"302 - Servidor P\xfablico Ocupante de Cargo exclusivo em comiss\xe3o",value:"SERVIDOR_PUBLICO_EXCLUSIVO"},_,{extraFields:{codigoEsocial:"307"},label:"307 - Militar efetivo",value:"MILITAR_EFETIVO"},S,C,v,I,f,P,F,x,D,N,M,L,h,G,B,U,V,q],H=[l,s,f],w=[i,c,g,n,u,O,p,E,b,v,I],J=[u,E,O,b,g],z=[T,i,_,S,m,C,c,n,v,I,l,s,f,p,O,P,F,x,D,N,M,L,h,G,B,U]}}]);
//# sourceMappingURL=291.9c16bbb1.chunk.js.map