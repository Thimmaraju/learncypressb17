class loginPage{


    usernameinput(){

        return  '//input[@name="username"]'
    }

    passwordInput(){

        return 'input[type="password"]'
    }

    loginBtn(){

        return 'button[type="submit"]'
    }

    loginerrorMessage(){

        return 'Invalid credentials'
    }

    loginwithcreds(username, password){

      cy.xpath(this.usernameinput()).type(username)

      cy.get(this.passwordInput()).type(password)

      cy.get(this.loginBtn()).click()
    }

}

const login = new loginPage()

export default login
