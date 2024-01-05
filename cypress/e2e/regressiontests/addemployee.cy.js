import data from '../../fixtures/addemployee.json'
//import login from '../../pages/loginpage.po'
import dashboard from '../../pages/dashboardpage.po'
import addemployee from '../../pages/addemployee.po'
import login from '../../pages/loginpage.po'
describe("verify addemployee functionality", ()=>{


    it("verify addemployee valid details ", ()=>{

      
      cy.visit(Cypress.env('clienturl'))

      login.loginwithcreds("Admin", "admin123")

      cy.contains(dashboard.dashboardMenutItem()).should('be.visible')

      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

      cy.url().should("include", "web/index.php/dashboard/index")


        cy.contains(dashboard.pimMenutItem()).click()

      cy.contains(addemployee.addemployeesubmenu()).click()

      cy.addemployee("gvejnfb", 'hfsgbhr')

      cy.contains(addemployee.successMessage).should('be.visible')

      


    })


})