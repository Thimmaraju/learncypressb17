import login from '../../pages/loginpage.po'
import dashboard from '../../pages/dashboardpage.po'
import addemployee from '../../pages/addemployee.po'

const availablefixtures = [
  {
    "name": "rajudata",
    "context": "1"
  },
  {
    "name": "shashidata",
    "context": "2"
  },
  {
    "name": "sunitadata",
    "context": "3"
  }
]



describe("verify addemployee functionality", function () {

  availablefixtures.forEach((afixture) => {
    describe(afixture.context, () => {
      //Mostly used for Setup Part
      before(function () {
        cy.fixture(afixture.name).then(function (data) {
          this.data = data;
        })
      })

      it('Cypress Test Case - add employee', function () {

        cy.visit(Cypress.env('clienturl'))

        login.loginwithcreds("Admin", "admin123")

        cy.contains(dashboard.dashboardMenutItem()).should('be.visible')

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.url().should("include", "web/index.php/dashboard/index")


        cy.contains(dashboard.pimMenutItem()).click()

        cy.contains(addemployee.addemployeesubmenu()).click()

        cy.get(addemployee.firstnameInput()).type(this.data.firstname)

        cy.get(addemployee.lastnameInput()).type(this.data.lastname)

        cy.get(addemployee.saveBtn()).click()

        cy.contains(addemployee.successMessage).should('be.visible')


      })

    })
  })
})