import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import ExchangePage from '../page-objects/pages/ExchangePage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'


describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application',() => {
        App.openLoginPage()
        LoginPage.login('username','password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should make currency exchange',()=> {
        InsideNavbar.clickPayBillsTab()
        InsideNavbar.clickPurchaseForeignKeyTab()
        ExchangePage.fillForm('GBP',500)
        ExchangePage.getSuccessMessage('Foreign currency cash was successfully purchased.')
    })
})