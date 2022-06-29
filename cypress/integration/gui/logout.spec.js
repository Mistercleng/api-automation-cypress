/// <reference types="Cypress" />

describe("logout", () => {

    beforeEach(() => {
        cy.login()
    } )

    it.only("successfully", () => {
        cy.logout()
        cy.url().should('be.equal',`${Cypress.config('baseUrl')}auth/signin`)

    })
})