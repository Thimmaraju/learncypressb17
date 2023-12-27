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
}

const addemployee = new addEmployeePage()

export default addemployee