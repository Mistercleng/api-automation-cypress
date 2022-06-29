/// <reference types="Cypress" />
Cypress.config('experimentalSessionSupport', true)



describe("tools", () => {
    

    it("create close titles", () => {
        cy.visit("https://try.discourse.org/")
    })
})