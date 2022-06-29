/// <reference types="Cypress" />
Cypress.config('experimentalSessionSupport', true)
import { faker } from '@faker-js/faker';


describe("customer", () => {
    
    beforeEach(() => {                   
        cy.session('mySession', () => {     
            onBeforeLoad: (window) => {
              cy.login()  // sets a cookie
            }
          })
      })


    it("create customer successfuly", () => {
        cy.createUser()
    })
})