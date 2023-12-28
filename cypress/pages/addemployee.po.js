class addEmployeePage{
 
     addemployeesubmenu(){

        return 'Add Employee'
     }

     firstnameInput(){

        return 'input[name="firstName"]'
     }

     lastnameInput(){

        return 'input[name="lastName"]'
     }

     saveBtn(){

        return 'button[type="submit"]'
     }

     successMessage = 'Successfully Saved'


     selectmonth(element, option){

       return cy.xpath(element).select(option)
     }
}

const addemployee = new addEmployeePage()

export default addemployee