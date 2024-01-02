// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')
import 'cypress-file-upload';
import addjobtitle from "../pages/addjobtitle.po"
Cypress.Commands.add('addemployee', (firstname, lastname) => {

    cy.get('input[name="firstName"]').type(firstname)
    cy.get('[name="lastName"]').type(lastname)
    cy.get('button[type="submit"]').click()

})


Cypress.Commands.add('addjobtitle', (value1, value2) => {

    cy.get(addjobtitle.jobtitleInput()).type(value1)

    cy.get(addjobtitle.jobdescriptionInput()).type(value2)

    cy.get(addjobtitle.saveBtn()).click()

})

Cypress.Commands.add("enterText", (element, value) => {
    if (element.includes("//")) {
      cy.xpath(element).type(value);
    }
    else {
      cy.get(element).type(value);
    }
  })


  Cypress.Commands.add("selectdropdownvalue", (element, value) => {
    if (element.includes("//")) {
      cy.xpath(element).select(value);
    }
    else {
      cy.get(element).select(value);
    }
  })




