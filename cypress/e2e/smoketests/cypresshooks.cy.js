
describe('template suite', () => {



    before("before block ", ()=>{
     
        cy.log("Before all  test case")

    })

    after("after block ", ()=>{
     
        cy.log("After all  test case")

    })

    beforeEach("before each block ", ()=>{
     
        cy.log("Before each test case")

    })

    afterEach("after each block ", ()=>{
     
        cy.log("After each test case")

    })
    it('test case1 ', () => {
    
        cy.log("This first test case body")
  
    })

    it('test case2 ', () => {
    
        cy.log("This second test case body")
    })


    it('test case3 ', () => {
    
        cy.log("This 3rd test case body")
    })

    it('test case4 ', () => {
    
        cy.log("This fourth test case body")
    })
  })