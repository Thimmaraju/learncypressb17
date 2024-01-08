import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../pages/loginpage.po"
import dashboard from "../../pages/dashboardpage.po";
import logindata from '../../fixtures/logincreds.json'

Given('User launch the Application', () => {
    cy.visit("/")
})

// When(`User enter username and Password`, () => {

//     cy.xpath(login.usernameinput()).type(logindata.username)
//     cy.get(login.passwordInput()).type(logindata.password)

// })

When(`User enter username {string} and Password {string}`, (username,password) => {

    cy.xpath(login.usernameinput()).type(username)
    cy.get(login.passwordInput()).type(password)

})



And('User click on login button', () => {
    cy.get(login.loginBtn()).click()
})

Then('User should be navigated to dashboard page', () => {

    cy.contains(dashboard.dashboardMenutItem()).should("be.visible")

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.url().should("include", "web/index.php/dashboard/index")

})


Then('User should get login error message', () => {

    cy.contains(login.loginerrorMessage()).should("be.visible")


})

