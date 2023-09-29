(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{315:function(e,a,o){"use strict";o.r(a);var d=o(13),s=Object(d.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"teste-de-sanidade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teste-de-sanidade"}},[e._v("#")]),e._v(" Teste de Sanidade")]),e._v(" "),a("p",[e._v("É uma modalidade executada após o recebimento de uma build de software, com mudanças pequenas no codigo ou funcionalidade, "),a("strong",[e._v("para verificar que os bugs tenham sido corrigidos e que não foram introduzidos novos problemas.")])]),e._v(" "),a("p",[e._v("O objetivo é assegurar que a funcionalidade proposta trabalha rudimentarmente como o esperado.")]),e._v(" "),a("p",[e._v("Caso falhe, a build é recusada para evitar o dispêndio de tempo e recursos que seriam envolvidos em uma testagem mais rigorosa.")]),e._v(" "),a("p",[e._v("O teste de sanidade é um subtipo do teste de regressão, e é aplicada para garantir que mudanças no código funcionam apropriadamente. É uma etapa para checar se a testagem da build pode prosseguir ou não.")]),e._v(" "),a("p",[e._v("O foco do  time durante testes de sanidade é validar a funcionalidade da aplicação e não testagem detalhada.")]),e._v(" "),a("p",[e._v("É geralmente aplicado em uma build onde o implemento de produção é necessário imediatamente como uma correção de bug crítico.")]),e._v(" "),a("h2",{attrs:{id:"funcionalidade-do-teste-de-sanidade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funcionalidade-do-teste-de-sanidade"}},[e._v("#")]),e._v(" Funcionalidade do Teste de Sanidade")]),e._v(" "),a("p",[e._v("O principal objetivo é determinar que as mudanças, ou funcionalidade proposta funcionam como esperado.")]),e._v(" "),a("p",[e._v("Se o teste de qualidade falha, o produto é rejeitado pela equipe de testes para poupar tempo e dinheiro.")]),e._v(" "),a("p",[e._v("Apenas é aplicado após o produto ter passado no Teste de Fumaça e o time de QA tenha aceito para demais testes.")]),e._v(" "),a("h2",{attrs:{id:"exemplos-de-teste-de-sanidade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exemplos-de-teste-de-sanidade"}},[e._v("#")]),e._v(" Exemplos de Teste de Sanidade")]),e._v(" "),a("p",[e._v("Em um projeto de e-commerce, os módulos principais são página de login, página inicial e página de perfil do usuário.")]),e._v(" "),a("p",[e._v("Existe um defeito na página de login em que o campo de senha aceita menos do que 4 caracteres alfanuméricos e as regras de negócio mencionam que este campo não deveriam ser inferior a oito caracteres. Portanto, o defeito é reportado pelo QA para que o dev resolva.")]),e._v(" "),a("p",[e._v("O dev então corrige o problema e envia novamente para o time de testes para aprovação.")]),e._v(" "),a("p",[e._v("O QA checa se as mudanças feitas estão funcionando ou não.")]),e._v(" "),a("p",[e._v("Também é determinado se isso possui impacto em outras funcionalidades relacionadas. Supondo que agora exista uma funcionalidade para atualizar a senha na tela de perfil do usuário, como parte do teste de sanidade, a página de login é também validada, bem como a página de perfil para garantir que ambas funcionem bem com a adição da nova função.")]),e._v(" "),a("h3",{attrs:{id:"aspectos-do-teste-de-sanidade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aspectos-do-teste-de-sanidade"}},[e._v("#")]),e._v(" Aspectos do Teste de Sanidade")]),e._v(" "),a("p",[e._v("Abaixo estão alguns aspectos que devem ser considerados ao executar o teste de sanidade:")]),e._v(" "),a("ol",[a("li",[e._v("Subtipo do Teste de Regressão: foca nas seções menores da aplicação.")]),e._v(" "),a("li",[e._v("Não possui "),a("em",[e._v("script")]),e._v(" (ocasionalmente);")]),e._v(" "),a("li",[e._v("Não documentada (ocasionalmente);")]),e._v(" "),a("li",[e._v("Específica e Aprofundada: funcionalidades limitadas são checadas de forma aprofundada.")]),e._v(" "),a("li",[e._v("Desenvolvida por "),a("em",[e._v("testers")]),e._v(";")])]),e._v(" "),a("h3",{attrs:{id:"vantagens-do-teste-de-sanidade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vantagens-do-teste-de-sanidade"}},[e._v("#")]),e._v(" Vantagens do Teste de Sanidade")]),e._v(" "),a("ul",[a("li",[e._v("Ajuda a rapidamente identificar defeitos no núcleo da funcionalidade.")]),e._v(" "),a("li",[e._v("Se defeitos forem localizados durante o teste de sanidade, o projeto é rejeitado, o que ajuda a poupar tempo na execução de testes de regressão.")]),e._v(" "),a("li",[e._v("A técnica de testagem não é tão cara se comparada a outras modalidades.")]),e._v(" "),a("li",[e._v("Ajuda a identificar os "),a("em",[e._v('"objects"')]),e._v(" necessários que faltem.")]),e._v(" "),a("li",[e._v("É usado para validar uma funcionalidade pequena da aplicação, esteja ela funcionando ou não após uma pequena mudança.")]),e._v(" "),a("li",[e._v("Auxilia no cenário em que o tempo para testar o produto, ou executar o teste, é limitado.")])]),e._v(" "),a("h3",{attrs:{id:"desvantagens-do-teste-de-sanidade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desvantagens-do-teste-de-sanidade"}},[e._v("#")]),e._v(" Desvantagens do Teste de Sanidade")]),e._v(" "),a("ul",[a("li",[e._v("Foca apenas nas funções e comandos da aplicação.")]),e._v(" "),a("li",[e._v("Não é possível cobrir todos os casos e cenários de teste.")]),e._v(" "),a("li",[e._v("Cobre apenas poucas funcionalidades da aplicação. Problemas nas funcionalidades não verificadas não podem ser descobertos.")]),e._v(" "),a("li",[e._v("O teste de sanidade não possui, geralmente, um script. Portanto, referências futuras não ficam disponíveis.")]),e._v(" "),a("li",[e._v("Não cobrem o nível de estrutura do design, e, portanto, será dificil para o time de desenvolvimento identificar e corrigir os problemas.")])])])}),[],!1,null,null,null);a.default=s.exports}}]);