# buscar_artigo.feature

Feature: Pesquisa de Artigos

Scenario: Pesquisar por um artigo existente
  Given que estou na página inicial do blog
  When clico na lupa de pesquisa
  And insiro o título "Agibank se prepara para transacionar via Drex" na barra de pesquisa
  And pressiono Enter ou clico no botão de pesquisa
  Then devo ver os resultados da pesquisa
  And clico no link do artigo "Agibank se prepara para transacionar via Drex"
  Then devo ser redirecionado para a página do artigo "Agibank se prepara para transacionar via Drex"

Scenario: Pesquisar por um artigo inexistente
  Given que estou na página inicial do blog
  When clico na lupa de pesquisa
  And insiro o título "Cypress" na barra de pesquisa
  And pressiono Enter ou clico no botão de pesquisa
  Then devo ver a mensagem "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras."
