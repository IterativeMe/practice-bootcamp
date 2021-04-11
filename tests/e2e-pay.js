import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import PayPage from '../page-objects/pages/PayPage'
import InsideNavbar from '../page-objects/components/InsideNavbar'

describe('E2E Tests - Pay',() => {
    it('Should log into application',() => {
        App.openLoginPage()
        LoginPage.login('username','password')
    })

    it('Should make payment',() => {
        InsideNavbar.clickPayBillsTab()
        PayPage.fillPaymentForm('apple','Loan',500,'2020-03-31','Testing Practice')
        PayPage.getSuccessMessage('The payment was successfully submitted.')
    })
})