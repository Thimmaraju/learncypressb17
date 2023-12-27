
describe('Understanding Fixtures',function ()  {

    before(function () {
        cy.fixture('register').then(function (data) {
          this.data = data;
        })
      })

    it('Validate register flow ', function ()  {
      cy.visit('https://shop.demoqa.com/my-account/');
      
      cy.enterText('#reg_username', this.data.username)


      cy.enterText('#reg_email', this.data.emailaddress)
       //cy.get("#reg_email").type(this.data.emailaddress)


      cy.get("#reg_password").type(this.data.weakpassword)
      
       cy.get('button[name="register"]').should("be.disabled");

    //or
    //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
       cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');

    //  cy.get("#reg_password").clear()

    // cy.wait(10000)

       cy.get("#reg_password", {timeout:40000}).clear().type(this.data.strongpassword)

    cy.wait(5000)

      cy.get('button[name="register"]').click()

    //   // //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
    cy.get("#username").should('have.attr', 'value', this.data.username)

    //   // //or

      cy.get("#username").should("have.value", this.data.username)
      
    cy.contains(" An account is already registered with your email address. ").should("be.visible")
    })
  
  })