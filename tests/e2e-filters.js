import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import FiltersPage from '../page-objects/pages/FiltersPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'

describe('E2E Tests - Transaction Filter',() => {
    it('Should log into application',() => {
        App.openLoginPage()
        LoginPage.login('username','password')
        Navbar.insideNavbarIsVisible()
    })

    it('Transaction filter should work',() => {
        InsideNavbar.clickAccountActivityTab()
        InsideNavbar.clickFiltersLink()
        FiltersPage.resultsTableIsVisible()
        FiltersPage.fillDescription('Test')
        FiltersPage.submitFilter()
        const message = FiltersPage.message
        expect(message).toHaveText('No results.')
        browser.pause(5000)
    })
})