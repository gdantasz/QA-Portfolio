describe('Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Products')
  })

  it('CT-006 — Exibir lista de produtos após login', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Products')
    cy.get('[data-test="inventory-list"]').should('be.visible')
    cy.get('[data-test="inventory-item"]').should('have.length.greaterThan', 0)
  })

  it('CT-007 — Validar informações dos produtos', () => {
    cy.get('[data-test="inventory-item"]')
      .should('have.length.greaterThan', 0)
      .each(($produto) => {
        cy.wrap($produto).within(() => {
          cy.get('[data-test="inventory-item-name"]')
            .should('be.visible')
            .invoke('text')
            .should('match', /\S+/)

          cy.get('[data-test="inventory-item-desc"]')
            .should('be.visible')
            .invoke('text')
            .should('match', /\S+/)

          cy.get('[data-test="inventory-item-price"]')
            .should('be.visible')
            .invoke('text')
            .should('match', /\S+/)
        })
      })
  })

  it('CT-008 — Ordenar produtos por preço crescente', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')

    cy.get('[data-test="inventory-item-price"]').then(($precos) => {
      const precosExibidos = [...$precos].map((preco) =>
        Number(preco.innerText.replace('$', '')),
      )
      const precosEmOrdemCrescente = [...precosExibidos].sort((a, b) => a - b)

      cy.log(`Preços exibidos: ${JSON.stringify(precosExibidos)}`)
      expect(precosExibidos).to.deep.equal(precosEmOrdemCrescente)
    })
  })

  it('CT-009 — Ordenar produtos por preço decrescente', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo')

    cy.get('[data-test="inventory-item-price"]').then(($precos) => {
      const precosExibidos = [...$precos].map((preco) =>
        Number(preco.innerText.replace('$', '')),
      )
      const precosEmOrdemDecrescente = [...precosExibidos].sort((a, b) => b - a)

      cy.log(`Preços exibidos: ${JSON.stringify(precosExibidos)}`)
      expect(precosExibidos).to.deep.equal(precosEmOrdemDecrescente)
    })
  })

  it('CT-010 — Ordenar produtos por nome A → Z', () => {
    cy.get('[data-test="product-sort-container"]').select('az')

    cy.get('[data-test="inventory-item-name"]').then(($nomes) => {
      const nomesExibidos = [...$nomes].map((nome) => nome.innerText.trim())
      const nomesEmOrdemAlfabetica = [...nomesExibidos].sort((a, b) =>
        a.localeCompare(b),
      )

      cy.log(`Nomes exibidos: ${JSON.stringify(nomesExibidos)}`)
      expect(nomesExibidos).to.deep.equal(nomesEmOrdemAlfabetica)
    })
  })

  it('CT-011 — Ordenar produtos por nome Z → A', () => {
    cy.get('[data-test="product-sort-container"]').select('za')

    cy.get('[data-test="inventory-item-name"]').then(($nomes) => {
      const nomesExibidos = [...$nomes].map((nome) => nome.innerText.trim())
      const nomesEmOrdemAlfabeticaDecrescente = [...nomesExibidos].sort((a, b) =>
        b.localeCompare(a),
      )

      cy.log(`Nomes exibidos: ${JSON.stringify(nomesExibidos)}`)
      expect(nomesExibidos).to.deep.equal(nomesEmOrdemAlfabeticaDecrescente)
    })
  })

  it('CT-012 — Acessar detalhes de um produto', () => {
    cy.get('[data-test="inventory-item"]').first().then(($produto) => {
      const nome = $produto.find('[data-test="inventory-item-name"]').text().trim()
      const descricao = $produto
        .find('[data-test="inventory-item-desc"]')
        .text()
        .trim()
      const preco = $produto.find('[data-test="inventory-item-price"]').text().trim()

      cy.wrap($produto).find('[data-test="inventory-item-name"]').click()

      cy.url().should('include', '/inventory-item.html?id=')
      cy.get('[data-test="inventory-item-name"]')
        .should('be.visible')
        .and('have.text', nome)
      cy.get('[data-test="inventory-item-desc"]')
        .should('be.visible')
        .and('have.text', descricao)
      cy.get('[data-test="inventory-item-price"]')
        .should('be.visible')
        .and('have.text', preco)
    })

    cy.get('[data-test="back-to-products"]').should('be.visible').click()
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Products')
    cy.get('[data-test="inventory-list"]').should('be.visible')
  })
})
