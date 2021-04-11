import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Search', () => {
    it('Should load homepage',() => {
        App.openHomePage()
    })

    it('Should submit searchbox', () => {
        Navbar.search('bank')
        const resultsTitle = $('h2')
        expect(resultsTitle).toHaveText('Search Results:')
    })
})