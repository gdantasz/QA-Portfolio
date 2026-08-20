describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products')
    cy.get('[data-test="inventory-list"]').should('be.visible')
  })

  it('CT-013 — Adicionar um produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')
    cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Your Cart')
    cy.get('[data-test="cart-list"]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-test="inventory-item-name"]')
          .should('be.visible')
          .and('have.text', 'Sauce Labs Backpack')
      })
  })

  it('CT-014 — Validar badge do carrinho após adicionar produto', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '1')
  })

  it('CT-015 — Adicionar múltiplos produtos diferentes ao carrinho', () => {
    const produtos = [
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
    ]

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '3')
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')
    cy.get('[data-test="cart-list"]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-test="inventory-item"]').should('have.length', 3)
        cy.get('[data-test="inventory-item-name"]')
          .should('have.length', 3)
          .each(($produto, indice) => {
            cy.wrap($produto).should('have.text', produtos[indice])
          })
      })
  })

  it('CT-016 — Validar produtos adicionados dentro do carrinho', () => {
    const produtosSelecionados = []
    const botoesAdicionar = [
      '[data-test="add-to-cart-sauce-labs-backpack"]',
      '[data-test="add-to-cart-sauce-labs-bike-light"]',
    ]

    botoesAdicionar.forEach((botaoAdicionar) => {
      cy.get(botaoAdicionar)
        .closest('[data-test="inventory-item"]')
        .then(($produto) => {
          produtosSelecionados.push({
            nome: $produto
              .find('[data-test="inventory-item-name"]')
              .text()
              .trim(),
            preco: $produto
              .find('[data-test="inventory-item-price"]')
              .text()
              .trim(),
          })

          cy.wrap($produto).find(botaoAdicionar).click()
        })
    })

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')
    cy.get('[data-test="cart-list"]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-test="inventory-item"]')
          .should('have.length', 2)
          .then(($produtos) => {
            const produtosNoCarrinho = [...$produtos].map((produto) => ({
              nome: Cypress.$(produto)
                .find('[data-test="inventory-item-name"]')
                .text()
                .trim(),
              preco: Cypress.$(produto)
                .find('[data-test="inventory-item-price"]')
                .text()
                .trim(),
            }))

            expect(produtosNoCarrinho).to.deep.equal(produtosSelecionados)
          })
      })
  })

  it('CT-017 — Remover produto pelo carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')
    cy.get('[data-test="inventory-item-name"]')
      .should('be.visible')
      .and('have.text', 'Sauce Labs Backpack')

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('[data-test="inventory-item-name"]').should('not.exist')
    cy.get('[data-test="inventory-item"]').should('have.length', 0)
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
  })

  it('CT-018 — Remover produto pela página de Produtos', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', 'Add to cart')
      .click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('not.exist')
    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', 'Remove')
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '1')

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', 'Add to cart')
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
  })

  it('CT-019 — Continuar comprando a partir do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')
    cy.get('[data-test="continue-shopping"]')
      .should('be.visible')
      .and('have.text', 'Continue Shopping')
      .click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products')
    cy.get('[data-test="inventory-list"]').should('be.visible')
  })

  it('CT-020 — Acessar o Checkout a partir do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')
    cy.get('[data-test="inventory-item-name"]')
      .should('be.visible')
      .and('have.text', 'Sauce Labs Backpack')
    cy.get('[data-test="checkout"]').should('be.visible').click()

    cy.url().should('include', '/checkout-step-one.html')
    cy.get('[data-test="firstName"]').should('be.visible')
    cy.get('[data-test="lastName"]').should('be.visible')
    cy.get('[data-test="postalCode"]').should('be.visible')
  })
})
