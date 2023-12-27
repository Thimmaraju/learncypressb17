describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username', {timeout:40000}).type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('#login > button').click()
  

    cy.contains('You logged into a secure area!').should("be.visible")

  })
})