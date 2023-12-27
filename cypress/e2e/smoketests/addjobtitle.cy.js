import addjobtitledata from "../../fixtures/Admin/jobtitle.json"
import addjobtitle from "../../pages/addjobtitle.po"
import dashboard from "../../pages/dashboardpage.po"
import login from "../../pages/loginpage.po"

import logindata from '../../fixtures/logincreds.json'

describe(`Verify Add job title functionality`, () => {

    it('Verify Adding job title with valid input details', () => {

        cy.visit(Cypress.env('clienturl'))

      cy.wait(5000)
      
      login.loginwithcreds(logindata.username, Cypress.env('password'))

      cy.contains(dashboard.dashboardMenutItem()).should('be.visible')

      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

      cy.url().should("include", "web/index.php/dashboard/index")

      cy.contains(dashboard.adminmenuitem()).click()

      cy.contains(addjobtitle.jobsubmenu()).click()

      cy.contains(addjobtitle.jobtitleOption()).click()
      cy.get(addjobtitle.addBtn()).click()

      let randomtext = (Math.random() + 1).toString(36).substring(7);
      cy.addjobtitle(addjobtitledata.jobtitle+randomtext, addjobtitledata.jobdescription)
      cy.contains(addjobtitle.successMessage()).should('be.visible')

      
    })
  })