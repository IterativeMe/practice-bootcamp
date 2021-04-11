import Base from '../Base'

class Navbar extends Base {

    get searchBox(){
        return $('#searchTerm')
    }
    get signInButton(){
        return $('#signin_button')
    }

    get insideNavbar(){
        return $('.nav-tabs')
    }

    get settingsButton(){
        return $('.icon-cog')
    }

    get helpButton(){
        return $('#help_link')
    }

    search(text){
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }

    clickSignIn(){
        this.signInButton.click()
    }

    clickSettings(){
        this.settingsButton.click()
    }

    clickHelp(){
        this.helpButton.click()
    }
}

export default new Navbar()