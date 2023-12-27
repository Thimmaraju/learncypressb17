import login from "../../pages/loginpage.po"

describe('Verify Login functionality', () => {

  beforeEach("launch url", ()=>{
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })

  const creds = {

    username: "Admin",
    password: "admin123",
    wrongusername: "gbuyrhgfyu",
    wrongpassword: "brfubhrybg"
  }

  const menuitems = {

    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave",
    menu4: "Time",
    menu5: "Recruitment",
    menu6: "My Info",
    menu7: "Dashboard",


  }

  //menitemarray = ["Admin", "PIM",]

  specify('Verify login with valid creds', function ()  {



    cy.wait(5000)
    cy.log("Entering username")
    console.log("Entering username")
    login.loginwithcreds("Admin", "admin123")

    for (let item in menuitems) {

      cy.contains(menuitems[item]).should("be.visible")
    }

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.url().should("include", "web/index.php/dashboard/index")
  })


  it('Verify login with valid username and invalid password', function () {


   
    login.loginwithcreds(creds.username, creds.wrongpassword)

    cy.contains(login.loginerrorMessage()).should('be.visible')
  })


  it('Verify login with invalid username and valid password', () => {
    //cy.viewport(375, 667)

    cy.xpath(login.usernameinput()).type(creds.wrongusername)

    cy.get(login.passwordInput()).type(creds.password)

    cy.get(login.loginBtn()).click()

    cy.contains(login.loginerrorMessage()).should('be.visible')
  })

  it('Verify login with invalid username and invalid password', () => {

    // cy.viewport(375, 667)

    // cy.viewport('macbook-11')

  
    cy.xpath(login.usernameinput()).type(creds.wrongusername)

    cy.get(login.passwordInput()).type(creds.wrongpassword)

    cy.get(login.loginBtn()).click()

    cy.contains(login.loginerrorMessage()).should('be.visible')
  })


})