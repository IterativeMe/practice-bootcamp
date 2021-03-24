import App from '../page-objects/App'

describe('E2E - Feedback',() => {
    it('Should load feedback form', () => {
        App.openHomePage()
        $('#feedback').waitForExist()
        $('#feedback').click()
        $('form').waitForExist()
    })

    it('Should submit feedback form', () => {
        $('#name').setValue('TestUser')
        $('#email').setValue('test@test.com')
        $('#subject').setValue('This is a test')
        $('#comment').setValue('This is a Message test')
        $('input[type="submit"]').click()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })


})


