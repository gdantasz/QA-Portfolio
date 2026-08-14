describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('CT-001 — autentica com credenciais válidas e exibe a página de produtos', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Products')
    cy.get('[data-test="inventory-list"]').should('be.visible')
  })

  it('CT-002 — mantém o usuário na página de login ao informar uma senha inválida', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_invalida')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and(
        'contain.text',
        'Username and password do not match any user in this service',
      )
  })

  it('CT-003 — informa que o Username é obrigatório', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required')
  })

  it('CT-004 — informa que o Password é obrigatório', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Password is required')
  })

  it('CT-005 — impede o acesso de um usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out')
  })
})
