/// <reference types="Cypress" />

describe("login", () => {

    it("successfully", () => {
        cy.login()

        cy.get('.header__title').should('exist')
    })
})