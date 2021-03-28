import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import HelpPage from '../page-objects/pages/HelpPage'
import Navbar from '../page-objects/components/Navbar'

describe('',() => {
    it('Should log into application',() => {
        App.openLoginPage()
        LoginPage.login('username','password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should load help',() => {
        Navbar.clickSettings()
        Navbar.clickHelp()
        const title = HelpPage.title 
        expect(title).toHaveText('How do I log into my account?')
        HelpPage.transferFundsLink.click()
        expect(title).toHaveText('How do I transfer funds?')
        HelpPage.payBillsLink.click()
        expect(title).toHaveText('How do I pay bills?')
    })
})