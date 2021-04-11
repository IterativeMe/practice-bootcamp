import Base from '../Base';

class LoginPage extends Base {

    get loginForm(){
        return $('#login_form')
    }

    get usernameInput(){
        return $('#user_login')
    }

    get passwordInput(){
        return $('#user_password')
    }

    get submitButton(){
        return $('input[type="submit"]')
    }

    get error(){
        return $('.alert-error')
    }

    fillForm(username,password){
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm(){
        this.submitButton.click()
    }

    login(username,password){
        this.fillForm(username,password)
        this.submitButton.click()
    }

}

export default new LoginPage()