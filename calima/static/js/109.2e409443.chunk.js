(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1041:function(e,a,t){"use strict";var o=t(6),l=t(0),i=t.n(l),r=t(2),d=t(908);a.a=(e=>i.a.createElement(r.K,Object.assign({},e,{type:r.L.INPUT_SEARCH,inputSearchProps:Object(o.a)(Object(o.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"descricao",text:"Descri\xe7\xe3o"}],dtoClassName:d.a,searchViewId:"AtividadeEconomicaSearchView"})})))},1048:function(e,a,t){"use strict";t.d(a,"a",function(){return o});const o="br.com.projetusinformatica.calima.mfp.model.dto.ppp"},1460:function(e,a,t){"use strict";t.r(a);var o=t(6),l=t(13),i=t(8),r=t.n(i),d=t(0),n=t.n(d),c=t(98),s=t(20),m=t(198),u=t(148),b=t(782),p=t(779),E=t(780),O=t(783),f=t(781),I=t(786),g=t(2),P=t(1048);const v=[{label:"Referencial",value:"REFERENCIAL"},{label:"Sequencial",value:"SEQUENCIAL"}],h=[{label:"Alterado",value:"ALTERADO"},{label:"Est\xe1vel",value:"ESTAVEL"},{label:"Agravamento",value:"AGRAVAMENTO"},{label:"Ocupacional",value:"OCUPACIONAL"},{label:"N\xe3o ocupacional",value:"NAO_OCUPACIONAL"}],C=[{label:"F\xedsico",value:"FISICO"},{label:"Qu\xedmico",value:"QUIMICO"},{label:"Biol\xf3gico",value:"BIOLOGICO"},{label:"Ergon\xf4mico/Psicossocial",value:"ERGONOMICO_PSICOSSOCIAL"},{label:"Mec\xe2nico/de Acidente",value:"MECANICO_ACIDENTE"}];var A=t(897),R=t(832);var F=e=>{const a=Object(c.b)({defaultValues:Object(o.a)({},e.selectedItem),mode:"onBlur"});return n.a.createElement(g.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:a},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataDoRegistro",label:"Data do Registor",labelWidth:150,placeholder:"Informe a Data do Registro",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:Object(o.a)(Object(o.a)({},Object(g.fc)(0,13)),{},{required:!0})}),id:"numeroCat",labelWidth:150,isPrependLabel:!0,label:"N\xfamero Cat",placeholder:"Informe O n\xfamero CAT"}))))};var S=e=>{const a=Object(c.b)({defaultValues:Object(o.a)({},e.selectedItem),mode:"onBlur"});return n.a.createElement(g.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:a},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataDoRegistro",label:"Data de In\xedcio",labelWidth:250,placeholder:"Informe a Data de In\xedcio",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{id:"tipoExame",label:"Fator de Risco",isPrependLabel:!0,labelWidth:250,placeholder:"informe o Fator de Risco",formProps:a,inputDropDownProps:{optionsProvider:A.c,selectProps:{isClearable:!1}},type:g.L.DROP_DOWN}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{id:"exameReferencialSequencial",label:"Exame (Referencial/Sequencial)",isPrependLabel:!0,labelWidth:250,placeholder:"Informe o Exame (Referencial/Sequencial)",formProps:a,inputDropDownProps:{optionsProvider:v,selectProps:{isClearable:!1}},type:g.L.DROP_DOWN}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{id:"indicacaoResultado",label:"Indica\xe7\xe3o de Resultado",isPrependLabel:!0,labelWidth:250,placeholder:"Informe a Indica\xe7\xe3o de Resultado",formProps:a,inputDropDownProps:{optionsProvider:h,selectProps:{isClearable:!1}},type:g.L.DROP_DOWN}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:50}}),id:"natureza",isPrependLabel:!0,labelWidth:250,label:"Descri\xe7\xe3o Fator de Risco",placeholder:"Informe a descri\xe7\xe3o do fator de risco"}))))};var D=e=>{const a=Object(c.b)({defaultValues:Object(o.a)({},e.selectedItem),mode:"onBlur"});return n.a.createElement(g.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:a,validateExtras:()=>{const e=[];return a.getValues().dataInicio>a.getValues().dataFim&&e.push("A data de inicio n\xe3o pode ser maior que a data do fim"),e}},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataInicio",label:"Data de In\xedcio",labelWidth:230,placeholder:"Informe a Data de In\xedcio",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataFim",label:"Data do Fim",labelWidth:230,placeholder:"Informe a Data do Fim",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{id:"tipoFatorRisco",label:"Fator de Risco",isPrependLabel:!0,labelWidth:230,placeholder:"informe o Fator de Risco",formProps:a,inputDropDownProps:{optionsProvider:C,selectProps:{isClearable:!1}},type:g.L.DROP_DOWN}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:40}}),id:"fatorRisco",isPrependLabel:!0,label:"Descri\xe7\xe3o Fator de Risco",labelWidth:230,placeholder:"Informe a descri\xe7\xe3o do fator de risco"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:15}}),id:"tecnicaUtilizada",isPrependLabel:!0,labelWidth:230,label:"T\xe9cnica Utilizada",placeholder:"Informe a t\xe9cnica utilizada"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:15}}),id:"intensidadeConcentracao",isPrependLabel:!0,labelWidth:230,label:"Intensidade/Concentra\xe7\xe3o",placeholder:"Informe a t\xe9cnica utilizada"}))),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(u.a,null,n.a.createElement(I.a,{type:"switch",id:"epcEficaz",name:"epcEficaz",label:"EPC Eficaz",innerRef:a.register})),n.a.createElement(u.a,null,n.a.createElement(I.a,{type:"switch",id:"epiEficaz",name:"epiEficaz",label:"EPI Eficaz",innerRef:a.register}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:Object(g.fc)(0,2)}),id:"certificadoAprovacaoEpi",isPrependLabel:!0,labelWidth:230,label:"Certificado de Aprova\xe7\xe3o EPI",placeholder:"Informe o Certificado de aprova\xe7\xe3o EPI"}))))},T=t(1041),x=t(957);var L=e=>{const a=Object(c.b)({defaultValues:Object(o.a)({},e.selectedItem),mode:"onBlur"});return n.a.createElement(g.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:a,validateExtras:()=>{const e=[];return a.getValues().dataInicio>a.getValues().dataFim&&e.push("A data de inicio n\xe3o pode ser maior que a data do fim"),e}},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(x.a,{id:"cbo",isPrependLabel:!0,labelWidth:150,label:"CBO",placeholder:"Informe o CBO.",formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}})}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(T.a,{id:"cargo",isPrependLabel:!0,labelWidth:150,label:"Cargo",placeholder:"Informe o Cargo.",formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}})}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataInicio",label:"Data de In\xedcio",placeholder:"Informe a Data de In\xedcio",isPrependLabel:!0,labelWidth:150,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataFim",label:"Data do Fim",placeholder:"Informe a Data do Fim",labelWidth:150,isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:14}}),id:"cnpjCei",label:"CNPJ/CEI",isPrependLabel:!0,labelWidth:150,placeholder:"informe o CNPJ/CEI"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:15}}),id:"setor",isPrependLabel:!0,labelWidth:150,label:"Setor",placeholder:"Informe o Setor"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:30}}),id:"funcao",isPrependLabel:!0,labelWidth:150,label:"Fun\xe7\xe3o",placeholder:"Informe a Fun\xe7\xe0o"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:Object(o.a)({},Object(g.fc)(0,2))}),id:"codigoGfip",isPrependLabel:!0,labelWidth:150,label:"C\xf3digo GFIP",placeholder:"Informe o C\xf3digo GFIP"}))))};var _=e=>{const a=Object(c.b)({defaultValues:Object(o.a)({},e.selectedItem),mode:"onBlur"});return n.a.createElement(g.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:a,validateExtras:()=>{const e=[];return a.getValues().dataInicio>a.getValues().dataFim&&e.push("A data de inicio n\xe3o pode ser maior que a data do fim"),e}},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataInicio",label:"Data de In\xedcio",labelWidth:270,placeholder:"Informe a Data de In\xedcio",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataFim",label:"Data do Fim",labelWidth:270,placeholder:"Informe a Data do Fim",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:11}}),id:"numeroIdentificacaoTrabalhador",isPrependLabel:!0,labelWidth:270,label:"N\xfamero Identifica\xe7\xe3o Trabalhador",placeholder:"Informe o n\xfamero de identifica\xe7\xe3o do trabalhador"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:30}}),id:"profissionalLegalmenteHabilitado",isPrependLabel:!0,labelWidth:270,label:"Profissional Legalmente Habilitado",placeholder:"Informe o profissional legalmente habilitado"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:9}}),id:"conselhoClasse",isPrependLabel:!0,labelWidth:270,label:"N\xfamero Conselho de Classe",placeholder:"Informe o n\xfamero do conselho de classe"}))))};var j=e=>{const a=Object(c.b)({defaultValues:Object(o.a)({},e.selectedItem),mode:"onBlur"});return n.a.createElement(g.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:a,validateExtras:()=>{const e=[];return a.getValues().dataInicio>a.getValues().dataFim&&e.push("A data de inicio n\xe3o pode ser maior que a data do fim"),e}},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataInicio",label:"Data de In\xedcio",placeholder:"Informe a Data de In\xedcio",labelWidth:150,isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataFim",label:"Data do Fim",labelWidth:150,placeholder:"Informe a Data do Fim",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0,maxLength:400}}),id:"descricaoAtividade",isPrependLabel:!0,label:"Descri\xe7\xe3o das Atividades",placeholder:"Informe a Descri\xe7\xe3o das Atividades",type:g.L.TEXT_AREA}))))};var N=e=>{const a=Object(c.b)({defaultValues:Object(o.a)({},e.selectedItem),mode:"onBlur"});return n.a.createElement(g.v,{handleSubmit:e.handleSubmit,handleCancel:e.handleCancel,formProps:a,validateExtras:()=>{const e=[];return a.getValues().dataInicio>a.getValues().dataFim&&e.push("A data de inicio n\xe3o pode ser maior que a data do fim"),e}},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataInicio",label:"Data de In\xedcio",labelWidth:270,placeholder:"Informe a Data de In\xedcio",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{required:!0}}),id:"dataFim",label:"Data do Fim",labelWidth:270,placeholder:"Informe a Data do Fim",isPrependLabel:!0,type:g.L.DATE}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:11}}),id:"numeroIdentificacaoTrabalhador",labelWidth:270,isPrependLabel:!0,label:"N\xfamero Identifica\xe7\xe3o Trabalhador",placeholder:"Informe o n\xfamero de identifica\xe7\xe3o do trabalhador"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:30}}),id:"profissionalLegalmenteHabilitado",labelWidth:270,isPrependLabel:!0,label:"Profissional Legalmente Habilitado",placeholder:"Informe o profissional legalmente habilitado"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},a),{},{validation:{maxLength:9}}),id:"conselhoClasse",labelWidth:270,isPrependLabel:!0,label:"N\xfamero Conselho de Classe",placeholder:"Informe o n\xfamero do conselho de classe"}))))};a.default=(e=>{const a=Object(g.Tb)(e),t=Object(c.b)({defaultValues:a,mode:"onBlur"}),i=Object(d.useState)(1),T=Object(l.a)(i,2),x=T[0],M=T[1],V=Object(s.c)(e=>e.globalReducer),w=({target:e})=>{const a=e.tabIndex;x!==a&&M(a)};Object(d.useEffect)(()=>{if(null!==V.globalParameter.empresaMFP&&null!==V.globalParameter.empresa){const e=V.globalParameter.empresaMFP.id;setTimeout(()=>{t.setValue("empresaMFP.id",e)},500)}},[]);const q=[Object(g.Eb)({dataField:"tipoFatorRisco",text:"Tipo do Fator de Risco"},C),{dataField:"fatorRisco",text:"Fator de Risco"},{dataField:"intensidadeConcentracao",text:"Intensidade Concentra\xe7\xe3o"},{dataField:"tecnicaUtilizada",text:"T\xe9cnica Utilizada"},{dataField:"dataInicio",text:"Data de In\xedcio"},{dataField:"dataFim",text:"Data do Fim"}],B=[Object(g.Eb)({dataField:"tipoExame",text:"Tipo de Exame"},A.c),{dataField:"natureza",text:"Natureza"},Object(g.Eb)({dataField:"exameReferencialSequencial",text:"Exame (R/S)"},v),Object(g.Eb)({dataField:"indicacaoResultado",text:"Indica\xe7\xe3o de Resultado"},h),{dataField:"dataDoRegistro",text:"Data de inicio"}],G={columns:[{dataField:"numeroIdentificacaoTrabalhador",text:"Identifica\xe7\xe3o do Trabalhador"},{dataField:"conselhoClasse",text:"Conselho de Classe"},{dataField:"profissionalLegalmenteHabilitado",text:"Profissional Legalmente Habilitado"},{dataField:"dataInicio",text:"Data de In\xedcio"},{dataField:"dataFim",text:"Data do Fim"}],detailView:_,formProps:t,propName:"monitoracoesBiologicas",title:"Respons\xe1vel pela monitora\xe7\xe3o bi\xf3logica"},K={columns:B,detailView:S,formProps:t,propName:"examesMedicoClinicoComplementar",title:"Exames M\xe9dicos Cl\xednicos e Complementares"},W={columns:[{dataField:"numeroIdentificacaoTrabalhador",text:"Identifica\xe7\xe3o do Trabalhador"},{dataField:"conselhoClasse",text:"Conselho de Classe"},{dataField:"profissionalLegalmenteHabilitado",text:"Profissional Legalmente Habilitado"},{dataField:"dataInicio",text:"Data de In\xedcio"},{dataField:"dataFim",text:"Data do Fim"}],detailView:N,formProps:t,propName:"registrosAmbientais",title:"Respons\xe1vel pelos registros ambientais"},U={columns:q,detailView:D,formProps:t,propName:"fatoresRiscos",title:"Fatores de Risco"},y={columns:[{dataField:"dataInicio",text:"Data de In\xedcio"},{dataField:"dataFim",text:"Data do Fim"},{dataField:"descricaoAtividade",text:"Descri\xe7\xe3o das Atividades"}],detailView:j,formProps:t,propName:"profissiografias",title:"Profissiografia"},z={columns:[{dataField:"dataInicio",text:"Data de In\xedcio"},{dataField:"dataFim",text:"Data do Fim"},{dataField:"cnpjCei",text:"CNPJ/CEI"},{dataField:"setor",text:"Setor"},{dataField:"funcao",text:"Fun\xe7\xe3o"},{dataField:"codigoGfip",text:"GFIP"}],detailView:L,formProps:t,propName:"lotacoesAtribuicoes",title:"Lota\xe7\xe3o e atribui\xe7\xf5es"},H={columns:[{dataField:"dataDoRegistro",text:"Data do Registro"},{dataField:"numeroCat",text:"N\xfamero CAT"}],detailView:F,formProps:t,propName:"catsRegistradas",title:"CAT Registrada"};return n.a.createElement(g.hb,{title:"Manuten\xe7\xe3o de Perfil Profissiogr\xe1fico Previdenci\xe1rio"},n.a.createElement(g.B,{formProps:t,editViewProps:e,dtoClassName:P.a},n.a.createElement(g.K,{formProps:t,id:"empresaMFP.id",hidden:!0}),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(R.a,{formProps:Object(o.a)(Object(o.a)({},t),{},{validation:{required:!0}}),id:"vinculo",inputSearchProps:{selectProps:{isMulti:!1}},label:"V\xednculo",labelWidth:100,placeholder:"Selecione o V\xednculo"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(b.a,{tabs:!0},n.a.createElement(p.a,null,n.a.createElement(E.a,{className:r()({active:1===x}),tabIndex:1,onClick:w},"I - Se\xe7\xe3o de Dados Administrativos")),n.a.createElement(p.a,null,n.a.createElement(E.a,{className:r()({active:2===x}),tabIndex:2,onClick:w},"II - Se\xe7\xe3o de Registros Ambientais")),n.a.createElement(p.a,null,n.a.createElement(E.a,{className:r()({active:3===x}),tabIndex:3,onClick:w},"III - Se\xe7\xe3o do Resultados de Monitora\xe7\xe3o Biol\xf3gica"))),n.a.createElement(O.a,{className:"mb-1",activeTab:x},n.a.createElement(f.a,{tabId:1,className:"mb-0 p-3"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},t),{},{validation:{maxLength:30}}),id:"brPdh",isPrependLabel:!0,label:"Benefici\xe1rio Reabilitado/Portador de Defici\xeancia Habilitado",placeholder:"Informe o Benefici\xe1rio Reabilitado/Portador de Defici\xeancia Habilitado"}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(g.K,{formProps:Object(o.a)(Object(o.a)({},t),{},{validation:{maxLength:15}}),id:"regimeRevezamento",isPrependLabel:!0,label:"Regime de Revezamento",placeholder:"Informe o Regime de Revezamento"}))),n.a.createElement(g.c,null,n.a.createElement(g.d,{title:"CAT Registrada"},n.a.createElement(g.w,Object.assign({},e,{defaultSortDirection:g.O.DESC},H,{keyField:"rowIndex"}))),n.a.createElement(g.d,{title:"Lota\xe7\xe3o e atribui\xe7\xe3o"},n.a.createElement(g.w,Object.assign({},e,{defaultSortDirection:g.O.DESC},z,{keyField:"rowIndex"}))),n.a.createElement(g.d,{title:"Profissiografia"},n.a.createElement(g.w,Object.assign({},e,{defaultSortDirection:g.O.DESC},y,{keyField:"rowIndex"}))))),n.a.createElement(f.a,{tabId:2,className:"mb-0 p-3"},n.a.createElement(g.c,null,n.a.createElement(g.d,{title:"CAT Registrada"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(I.a,{type:"switch",id:"medidaProtecao",name:"medidaProtecao",label:"Foi tentada a implementa\xe7\xe3o de medidas de prote\xe7\xe3o coletiva",innerRef:t.register}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(I.a,{type:"switch",id:"condicoesFuncionamento",name:"condicoesFuncionamento",label:"Foram observadas as condi\xe7\xf5es de funcionamento e do uso ininterrupto do EPI ao longo do tempo",innerRef:t.register}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(I.a,{type:"switch",id:"prazoValidade",name:"prazoValidade",label:"Foi observado o prazo de validade, conforme Certificado de Aprova\xe7\xe3o-CA do MTE",innerRef:t.register}))),n.a.createElement(m.a,null,n.a.createElement(u.a,null,n.a.createElement(I.a,{type:"switch",id:"periodicidadeTroca",name:"periodicidadeTroca",label:"Foi observada a periodicidade de troca definida pelos programas ambientais",innerRef:t.register}))),n.a.createElement(m.a,{className:"mb-3"},n.a.createElement(u.a,null,n.a.createElement(I.a,{type:"switch",id:"higienizacao",name:"higienizacao",label:"Foi observada a higieniza\xe7\xe3o",innerRef:t.register}))),n.a.createElement(g.w,Object.assign({},e,{defaultSortDirection:g.O.DESC},U,{keyField:"rowIndex"}))),n.a.createElement(g.d,{title:"Respons\xe1vel pelos registros ambientais"},n.a.createElement(g.w,Object.assign({},e,{defaultSortDirection:g.O.DESC},W,{keyField:"rowIndex"}))))),n.a.createElement(f.a,{tabId:3,className:"mb-0 p-3"},n.a.createElement(g.c,null,n.a.createElement(g.d,{title:"Exames M\xe9dicos Cl\xednicos e Complementares"},n.a.createElement(g.w,Object.assign({},e,{defaultSortDirection:g.O.DESC},K,{keyField:"rowIndex"}))),n.a.createElement(g.d,{title:"Respons\xe1vel pela monitora\xe7\xe3o bi\xf3logica"},n.a.createElement(g.w,Object.assign({},e,{defaultSortDirection:g.O.DESC},G,{keyField:"rowIndex"}))))))))))})},831:function(e,a,t){"use strict";t.d(a,"j",function(){return l}),t.d(a,"h",function(){return r}),t.d(a,"l",function(){return d}),t.d(a,"e",function(){return n}),t.d(a,"b",function(){return c}),t.d(a,"o",function(){return I}),t.d(a,"i",function(){return g}),t.d(a,"d",function(){return F}),t.d(a,"k",function(){return j}),t.d(a,"g",function(){return q}),t.d(a,"f",function(){return B}),t.d(a,"c",function(){return G}),t.d(a,"n",function(){return K}),t.d(a,"a",function(){return W}),t.d(a,"p",function(){return U}),t.d(a,"m",function(){return y});const o={extraFields:{codigoEsocial:"202",codigoSefip:"02"},label:"02 / 202 - Trabalhador Avulso",value:"TRABAVULSO"},l={extraFields:{codigoEsocial:"105",codigoSefip:"04"},label:"04 / 105 - Empregado - Prazo determinado (Lei n\xb0 9.601/98)",value:"EMP_CONTR_PRAZO_DETERMINADO"},i={extraFields:{codigoEsocial:"721",codigoSefip:"05"},label:"05 / 721 - C.I. - Diretor n\xe3o empregado com FGTS (Lei n\xba 8.036/90, art. 16)",value:"DIRETOR_NAO_EMP_COM_FGTS"},r={extraFields:{codigoEsocial:"104",codigoSefip:"06"},label:"06 / 104 - Empregado dom\xe9stico",value:"EMPREGADO_DOMESTICO"},d={extraFields:{codigoEsocial:"103",codigoSefip:"07"},label:"07 / 103 - Menor Aprendiz (Lei n\xba 11.180/2005)",value:"MENOR_APRENDIZ"},n={extraFields:{codigoEsocial:"722",codigoSefip:"11"},label:"11 / 722 - C.I. - Diretor n\xe3o empregado e demais empres\xe1rios sem FGTS",value:"DIRETOR_EMPRESARIO_NAO_EMP_SEM_FGTS"},c={extraFields:{codigoEsocial:"701",codigoSefip:"13"},label:"13 / 701 - C.I. \u2013 Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre remunera\xe7\xe3o; trabalhador associado \xe0 cooperativa de produ\xe7\xe3o",value:"AUTONOMO_CONTRIB_REMUNERACAO"},s={extraFields:{codigoEsocial:"701",codigoSefip:"14"},label:"14 / 701 - C.I. - Trabalhador aut\xf4nomo com contribui\xe7\xe3o sobre sal\xe1rio base",value:"AUTONOMO_CONTRIB_SAL_BASE"},m={extraFields:{codigoEsocial:"712",codigoSefip:"15"},label:"15 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre remunera\xe7\xe3o",value:"TRANSPORTADOR_CONTRIB_REMUNERACAO"},u={extraFields:{codigoEsocial:"712",codigoSefip:"16"},label:"16 / 712 - C.I. - Transportador aut\xf4nomo, com contribui\xe7\xe3o sobre sal\xe1rio base",value:"TRANSPORTADOR_CONTRIB_SAL_BASE"},b={extraFields:{codigoEsocial:"731",codigoSefip:"17"},label:"17 / 731 - C.I. - Cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"COOPERADO"},p={extraFields:{codigoEsocial:"734",codigoSefip:"18"},label:"18 / 734 - C.I. - Transportador cooperado que presta servi\xe7os a empresas contratantes da cooperativa de trabalho",value:"TRANSPORTADOR_COOPERADO"},E={extraFields:{codigoEsocial:"101",codigoSefip:"23"},label:"23 / 101 - C.I. - Transportador aut\xf4nomo contratado por outro C.I. equiparado \xe0 empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"TRANSP_AUT_CONTRATADO_POR_CI"},O={extraFields:{codigoEsocial:"101",codigoSefip:"25"},label:"25 / 101 - C.I. - Transportador cooperado que presta servi\xe7os a entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dio da cooperativa de trabalho",value:"TRANSP_COOP_PRESTA_SERV_ENTIDADE_BENE"},f={extraFields:{codigoEsocial:"401",codigoSefip:"26"},label:"26 / 401 - Dirigente sindical, em rela\xe7\xe3o ao adicional pago pelo sindicato; magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho; magistrado dos Tribunais Eleitorais, quando, nas tr\xeas situa\xe7\xf5es, for mantida a qualidade de segurado empregado (sem FGTS)",value:"DIRIGENTE_SINDICAL"},I={extraFields:{codigoEsocial:"106"},label:"106 - Trabalhador Tempor\xe1rio - contrato nos termos da Lei 6.019/74",value:"TRABALHADOR_TEMPORARIO"},g={extraFields:{codigoEsocial:"111"},label:"111 - Empregado - contrato de trabalho intermitente",value:"EMPREGADO_TRABALHADOR_INTERMITENTE"},P={extraFields:{codigoEsocial:"201"},label:"201 - Trabalhador Avulso Portu\xe1rio",value:"TRABALHADOR_AVULSO_PORTUARIO"},v={extraFields:{codigoEsocial:"305"},label:"305 - Servidor P\xfablico indicado para conselho ou \xf3rg\xe3o deliberativo, na condi\xe7\xe3o de representante do governo, \xf3rg\xe3o ou entidade da administra\xe7\xe3o p\xfablica",value:"SERVIDOR_PUBLICO_CONSELHO"},h={extraFields:{codigoEsocial:"308"},label:"308 - Conscrito",value:"CONSCRITO"},C={extraFields:{codigoEsocial:"410"},label:"410 - Trabalhador cedido - informa\xe7\xe3o prestada pelo Cession\xe1rio",value:"TRABALHADOR_CEDIDO"},A={extraFields:{codigoEsocial:"711"},label:"711 - Contribuinte individual - Transportador aut\xf4nomo de passageiros",value:"CI_TRANSP_AUT_PASSAGEIROS"},R={extraFields:{codigoEsocial:"712"},label:"712 - Contribuinte individual - Transportador aut\xf4nomo de carga",value:"CI_TRANSP_AUT_CARGA"},F={extraFields:{codigoEsocial:"723"},label:"723 - Contribuinte individual - empres\xe1rios, s\xf3cios e membro de conselho de administra\xe7\xe3o ou fiscal",value:"CI_EMPRESARIO_SOCIO"},S={extraFields:{codigoEsocial:"738"},label:"738 - Contribuinte individual - Cooperado filiado a Cooperativa de Produ\xe7\xe3o",value:"CI_COOPERADO_COOPERATIVA_PRODUCAO"},D={extraFields:{codigoEsocial:"741"},label:"741 - Contribuinte individual - Microempreendedor Individual",value:"CI_MICROEMPREENDEDOR_INDIVIDUAL"},T={extraFields:{codigoEsocial:"751"},label:"751 - Contribuinte individual - magistrado classista tempor\xe1rio da Justi\xe7a do Trabalho ou da Justi\xe7a Eleitoral que seja aposentado de qualquer regime previdenci\xe1rio",value:"CI_MAGISTRADO_CLASSISTA"},x={extraFields:{codigoEsocial:"761"},label:"761 - Contribuinte individual - Associado eleito para dire\xe7\xe3o de Cooperativa, associa\xe7\xe3o ou entidade de classe qualquer natureza ou finalidade, bem como o s\xedndico ou administrador eleito para exercer atividade de dire\xe7\xe3o condominial, desde que recebam remunera\xe7\xe3o",value:"CI_ASSOCIADO_ELEITO_COOPERATIVA"},L={extraFields:{codigoEsocial:"771"},label:"771 - Contribuinte individual - Membro de conselho tutelar, nos termos da Lei n\xba 8.069, de 13 julho 1990",value:"CI_MEMBRO_CONSELHO_TUTELAR"},_={extraFields:{codigoEsocial:"781"},label:"781 - Ministro de confiss\xe3o religiosa ou membro de vida consagrada, de congrega\xe7\xe3o ou de ordem religiosa",value:"MINISTRO_RELIGIOSO"},j={extraFields:{codigoEsocial:"901",codigoSefip:"45"},label:"45 / 901 - Estagi\xe1rio",value:"ESTAGIARIO"},N={extraFields:{codigoEsocial:"902"},label:"902 - M\xe9dico Residente",value:"MEDICO_RESIDENTE"},M={extraFields:{codigoEsocial:"903"},label:"903 - Bolsista, nos termos da lei 8958/1994",value:"BOLSISTA"},V={extraFields:{codigoEsocial:"904"},label:"904 - Participante de curso de forma\xe7\xe3o, como etapa de concurso p\xfablico, sem v\xednculo de emprego/estatut\xe1rio",value:"PARTICIPANTE_CURSO_SEM_VINCULO"},w={extraFields:{codigoEsocial:"905"},label:"905 - Atleta n\xe3o profissional em forma\xe7\xe3o que receba bolsa",value:"ATLETA_NAO_PROFISSIONAL"},q={extraFields:{codigoEsocial:"107"},label:"107 - Empregado - Contrato de trabalho Verde e Amarelo - sem acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_SEM_ANT_FGTS"},B={extraFields:{codigoEsocial:"108"},label:"108 - Empregado - Contrato de trabalho Verde e Amarelo - com acordo para antecipa\xe7\xe3o mensal da multa rescis\xf3ria do FGTS",value:"EMPREGADO_CONTRATO_VERDE_AMARELO_COM_ANT_FGTS"},G=[{extraFields:{codigoEsocial:"101",codigoSefip:"01"},label:"01 / 101 - Empregado",value:"EMPREGADO"},o,{extraFields:{codigoEsocial:"101",codigoSefip:"03"},label:"03 / 101 - Trabalhador n\xe3o vinculado ao RGPS, mas com direito ao FGTS",value:"TRAB_CONTR_NAO_VINC_RGPS"},l,i,r,d,n,{extraFields:{codigoEsocial:"309",codigoSefip:"12"},label:"12 / 309 - Demais agentes p\xfablicos",value:"DEMAIS_AGENTES_PUBLICOS"},c,s,m,u,b,p,{extraFields:{codigoEsocial:"303",codigoSefip:"19"},label:"19 / 303 - Agente Pol\xedtico",value:"AGENTE_POLITICO"},{extraFields:{codigoEsocial:"306",codigoSefip:"20"},label:"20 / 306 - Servidor P\xfablico ocupante, exclusivamente, de cargo em comiss\xe3o, Servidor P\xfablico ocupante de cargo tempor\xe1rio",value:"SERV_PUBLICO_TEMPORARIO"},{extraFields:{codigoEsocial:"301",codigoSefip:"21"},label:"21 / 301 - Servidor P\xfablico titular de cargo efetivo, magistrado, membro do Minist\xe9rio P\xfablico e do Tribunal e Conselho de Contas",value:"SERV_PUBLICO_EFETIVO"},{extraFields:{codigoEsocial:"101",codigoSefip:"22"},label:"22 / 101 - C.I. - Contratado por outro C.I. equiparado a empresa ou por produtor rural pessoa f\xedsica ou por miss\xe3o diplom\xe1tica e reparti\xe7\xe3o consular de carreira estrangeiras",value:"CI_CONTRATADO_POR_CI"},E,{extraFields:{codigoEsocial:"101",codigoSefip:"24"},label:"24 / 101 - C.I. - Cooperado que presta servi\xe7os \xe0 entidade beneficente de assist\xeancia social isenta da cota patronal ou a pessoa f\xedsica, por interm\xe9dioda cooperativa de trabalho",value:"COOPERADO_PRESTA_SERV_ENTIDADE_BENE"},O,f,{extraFields:{codigoEsocial:"102"},label:"102 - Empregado - Trabalhador Rural por Pequeno Prazo da Lei 11.718/2008",value:"EMPREGADO_TRABALHADOR_RURAL"},I,g,P,{extraFields:{codigoEsocial:"302"},label:"302 - Servidor P\xfablico Ocupante de Cargo exclusivo em comiss\xe3o",value:"SERVIDOR_PUBLICO_EXCLUSIVO"},v,{extraFields:{codigoEsocial:"307"},label:"307 - Militar efetivo",value:"MILITAR_EFETIVO"},h,C,A,R,F,S,D,T,x,L,_,j,N,M,V,w,q,B],K=[i,n,F],W=[o,c,O,s,m,p,b,u,E,A,R],U=[m,u,p,E,O],y=[P,o,v,h,f,C,c,s,A,R,i,n,F,b,p,S,D,T,x,L,_,j,N,M,V,w]},832:function(e,a,t){"use strict";var o=t(6),l=t(0),i=t.n(l),r=t(2),d=t(833),n=t(831);a.a=(e=>{const a=Object(o.a)(Object(o.a)({},e.inputSearchProps),{},{columns:[{dataField:"matricula",text:"Matr\xedcula"},{dataField:"nome",text:"Trabalhador"},{dataField:"categoria",text:"Categoria"},{dataField:"dataAdmissao",text:"Dt. Admiss\xe3o"},{dataField:"dataAfastamentoMovimentacao",text:"Dt. \xdaltimo Afastamento"},{dataField:"dataAfastamentoRecisao",text:"Dt. Rescis\xe3o"},{dataField:"cpf",text:"CPF"}],dtoClassName:d.a,searchExpressions:function(){let a=[];return e.apenasAutonomos&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.a}]),e.apenasAprendizes&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.l.value}]),e.apenasDomesticos&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.h.value}]),e.apenasEstagiarios&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.k.value}]),e.apenasSocios&&(a=[{alias:"c",conditionalGroup:"c_",fieldName:"categoria",value:n.n}]),a},searchViewId:"VinculoSearchView"});return i.a.createElement(r.K,Object.assign({},e,{isPrependLabel:!0,type:r.L.INPUT_SEARCH,inputSearchProps:a,searchViewProps:{apenasInativos:e.apenasInativos}}))})},833:function(e,a,t){"use strict";t.d(a,"a",function(){return o});const o="br.com.projetusinformatica.calima.mfp.model.dto.vinculoexample"},891:function(e,a,t){"use strict";t.d(a,"a",function(){return o});const o="br.com.projetusinformatica.calima.mfp.model.dto.cbo"},897:function(e,a,t){"use strict";t.d(a,"a",function(){return o}),t.d(a,"b",function(){return l}),t.d(a,"c",function(){return i});const o={label:"Admissional",value:"ADMISSIONAL"},l={label:"Demissional",value:"DEMISSIONAL"},i=[o,{label:"Peri\xf3dico",value:"PERIODICO"},{label:"Retorno ao trabalho",value:"RETORNO_TRABALHO"},{label:"Mudan\xe7a de fun\xe7\xe3o",value:"MUDANCA_FUNCAO"},l]},908:function(e,a,t){"use strict";t.d(a,"a",function(){return o});const o="br.com.projetusinformatica.calima.mfp.model.dto.cargo"},957:function(e,a,t){"use strict";var o=t(6),l=t(0),i=t.n(l),r=t(2),d=t(891);a.a=(e=>i.a.createElement(r.K,Object.assign({},e,{type:r.L.INPUT_SEARCH,inputSearchProps:Object(o.a)(Object(o.a)({},e.inputSearchProps),{},{columns:[{dataField:"codigo",text:"C\xf3digo"},{dataField:"descricao",text:"Descri\xe7\xe3o"},{dataField:"professor",text:"Sal\xe1rio aula"}],dtoClassName:d.a,searchViewId:"CboSearchView"})})))}}]);
//# sourceMappingURL=109.2e409443.chunk.js.map