import el from './elements'

before(() => {
  cy.intercept('GET', 'https://blogdoagi.com.br/?s=**').as('waitRequest')
  cy.intercept('GET', 'https://blogdoagi.com.br**').as('waitArticle')
})

describe('Buscar artigo', () => {
  it('Validar busca por artigo', () => {
    // Setup
    const title = 'Agibank se prepara para transacionar via Drex'

    // Exercise
    cy.visit('/')
  
    cy.get(el.iconSearch).click()
    cy.get(el.inputSearch).type(title).type('{enter}')
    cy.wait('@waitRequest')

    cy.get(el.titleArticle).contains(title).click()
    cy.wait('@waitArticle')

    // Verify
    cy.get(el.article).should('have.text', title)
  })

  it('Validar busca por artigo inexistente', () => {
    // Setup
    const title = 'Cypress'
    const message = 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.'

    // Exercise
    cy.visit('/')
  
    cy.get(el.iconSearch).click()
    cy.get(el.inputSearch).type(title).type('{enter}')

    // Verify
    cy.get(el.pageContent).should('have.text', message)
  })
})