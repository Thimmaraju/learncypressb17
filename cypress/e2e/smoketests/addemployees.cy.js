
import login from '../../pages/loginpage.po'
import data from '../../fixtures/ExceltoJson/addemployees.json'


describe('Validate Orange HRM Login functionality', function () {


    data.forEach((data) => {


        it('Validate Add employee ', function () {
            cy.visit("/web/index.php/auth/login")
            cy.xpath(login.usernameinput()).type('Admin')
            cy.get(login.passwordInput()).type('admin123')

            cy.get(login.loginBtn()).click()

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')

            cy.addemployee(data.firstname, data.lastname)

        })



    })

})










