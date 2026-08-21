describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
  })

  it('CT-021 — Avançar no checkout com dados válidos', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Checkout: Overview')
  })

  it('CT-022 — Validar obrigatoriedade do First Name', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.url().should('include', '/checkout-step-one.html')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.text', 'Error: First Name is required')
  })

  it('CT-023 — Validar obrigatoriedade do Last Name', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.url().should('include', '/checkout-step-one.html')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.text', 'Error: Last Name is required')
  })

  it('CT-024 — Validar obrigatoriedade do Postal Code', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="continue"]').click()

    cy.url().should('include', '/checkout-step-one.html')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.text', 'Error: Postal Code is required')
  })

  it('CT-025 — Validar informações do produto no Checkout Overview', () => {
    let productName
    let productPrice

    cy.contains('[data-test="inventory-item"]', 'Sauce Labs Backpack')
      .within(() => {
        cy.get('[data-test="inventory-item-name"]')
          .invoke('text')
          .then((name) => {
            productName = name.trim()
          })

        cy.get('[data-test="inventory-item-price"]')
          .invoke('text')
          .then((price) => {
            productPrice = price.trim()
          })
      })

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.contains('[data-test="inventory-item"]', 'Sauce Labs Backpack')
      .within(() => {
        cy.get('[data-test="inventory-item-name"]').should(($name) => {
          expect($name.text().trim()).to.equal(productName)
        })

        cy.get('[data-test="inventory-item-price"]').should(($price) => {
          expect($price.text().trim()).to.equal(productPrice)
        })
      })
  })

  it('CT-026 — Validar subtotal da compra', () => {
    const parseCurrency = (text) => Number(text.replace(/[^\d.-]/g, ''))

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="inventory-item-price"]').then(($prices) => {
      const itemPrices = [...$prices].map((price) => {
        return parseCurrency(price.textContent)
      })
      const calculatedSubtotal = Number(
        itemPrices.reduce((sum, price) => sum + price, 0).toFixed(2),
      )

      cy.get('[data-test="subtotal-label"]')
        .invoke('text')
        .then((subtotalText) => {
          const displayedSubtotal = parseCurrency(subtotalText)

          cy.log(`Preços capturados: ${itemPrices.join(', ')}`)
          cy.log(`Soma calculada: ${calculatedSubtotal}`)
          cy.log(`Item total: ${displayedSubtotal}`)

          expect(displayedSubtotal).to.equal(calculatedSubtotal)
      })
    })
  })

  it('CT-027 — Validar cálculo do total da compra', () => {
    const parseCurrencyToCents = (text) => {
      return Math.round(Number(text.replace(/[^\d.-]/g, '')) * 100)
    }
    const formatCents = (value) => (value / 100).toFixed(2)

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="subtotal-label"]')
      .invoke('text')
      .then((subtotalText) => {
        const itemTotalInCents = parseCurrencyToCents(subtotalText)

        cy.get('[data-test="tax-label"]')
          .invoke('text')
          .then((taxText) => {
            const taxInCents = parseCurrencyToCents(taxText)

            cy.get('[data-test="total-label"]')
              .invoke('text')
              .then((totalText) => {
                const displayedTotalInCents = parseCurrencyToCents(totalText)
                const calculatedTotalInCents = itemTotalInCents + taxInCents

                cy.log(`Item total: ${formatCents(itemTotalInCents)}`)
                cy.log(`Tax: ${formatCents(taxInCents)}`)
                cy.log(`Total apresentado: ${formatCents(displayedTotalInCents)}`)
                cy.log(`Total calculado: ${formatCents(calculatedTotalInCents)}`)

                expect(displayedTotalInCents).to.equal(calculatedTotalInCents)
              })
          })
      })
  })

  it('CT-028 — Cancelar o Checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test="cancel"]')
      .should('be.visible')
      .click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products')
    cy.get('[data-test="inventory-list"]').should('be.visible')
    cy.get('[data-test="inventory-item"]').should('have.length.greaterThan', 0)
  })

  it('CT-029 — Finalizar compra com sucesso', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.get('[data-test="lastName"]').type('Dantas')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.contains(
      '[data-test="inventory-item-name"]',
      'Sauce Labs Backpack',
    ).should('be.visible')
    cy.get('[data-test="finish"]').click()

    cy.url().should('include', '/checkout-complete.html')
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Checkout: Complete!')
    cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  })
})
