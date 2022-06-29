/// <reference types="Cypress" />
Cypress.config('experimentalSessionSupport', true)



describe("employee", () => {
    
    beforeEach(() => {                   
        cy.session('mySession', () => {     
            onBeforeLoad: (window) => {
              cy.login()  // sets a cookie
            }
          })
      })


    it("create employee successfuly", () => {
        cy.createEmployee()
    })
})