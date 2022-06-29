/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

Cypress.Commands.add('login', () => {
    cy.visit('auth/signin')

    cy.get('#email').type(Cypress.env('user_name'))
    cy.get('#password').type(Cypress.env('user_password'))


    cy.get('button[type=submit]').click()
})

Cypress.Commands.add('logout', () => {

    cy.get('.sidenav__logout__button').click()

})

Cypress.Commands.add('createUser', () => {
    cy.login()
    cy.get(':nth-child(4) > .sidenav__item__link').click()
    cy.contains('Novo Cliente').click()
    cy.get('#name').type(faker.fake('{{name.firstName}}') )
    cy.get('#email').type(faker.fake('{{internet.email}}'))
    cy.get('#birthDate').type('01-01-2000')
    cy.get('#phone').type(faker.phone.number('92 #####-####'))
    cy.get('#cpf').type('01234567890')
    cy.get('button[type=submit]').click()
    cy.get('.mat-focus-indicator').click()
})


Cypress.Commands.add('createEmployee', () => {
    cy.login()
    cy.get(':nth-child(5) > .sidenav__item__link').click()
    cy.contains('Novo Funcionário').click()
    cy.get('#name').type(faker.fake('{{name.firstName}}') )
    cy.get('#email').type(faker.fake('{{internet.email}}'))
    cy.get('#birthDate').type('01-01-2000')
    cy.get('#phone').type(faker.phone.number('92 #####-####'))
    cy.get('#cpf').type('01234567890')
    cy.get('button[type=submit]').click()
    cy.get('.mat-focus-indicator').click()
})
