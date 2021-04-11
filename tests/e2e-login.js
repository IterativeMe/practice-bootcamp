import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Login / Logout Flow',() => {
    it('Should not login with invalid credentials', () => {
        App.openLoginPage()
        LoginPage.login('invalid username','invalid password')
        const message = LoginPage.error
        expect(message).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        App.openLoginPage()
        LoginPage.login('username','password')
    })

    it('Should logout from app', () => {
        App.logout()
    })
})