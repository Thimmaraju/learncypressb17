describe('Test Suite name', () => {

  
    it.only('Test case Title', () => {
      
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        //cy.xpath("//h4[text()='Beans - 1 Kg']/../div[3]/button").click()
  
        cy.xpath("//button[text()='ADD TO CART']").click({multiple:true})

        
    })

})