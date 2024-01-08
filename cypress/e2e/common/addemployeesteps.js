import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import dashboard from "../../pages/dashboardpage.po";
import addemployee from "../../pages/addemployee.po";

When('User clicks on PIM module', () => {
    cy.contains(dashboard.pimMenutItem()).click()
})

And('User clicks on add employee submenu', () => {
    cy.contains(addemployee.addemployeesubmenu()).click()
})

And(`User enter the firstname {string} and lastname {string}`, (firstname, lastname) => {

     //cy.get(addemployee.firstnameInput()).type(firstname)

     cy.enterText(addemployee.firstnameInput(), firstname)
    // cy.get(addemployee.lastnameInput()).type(lastname)
    cy.enterText(addemployee.lastnameInput(), lastname)

})

And('User clicks on save button', () => {

    cy.get(addemployee.saveBtn()).click()
    
})


And('User should get successfully saved message', () => {

    cy.contains(addemployee.successMessage).should('be.visible')
    
})
