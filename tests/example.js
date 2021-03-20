describe('First steps with WebdriverIO', () => {
    it('Load Example Website', () => {
        browser.url('http://example.com')
        browser.pause(3000)
        expect(browser).toHaveUrl('http://example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 should be visible', () => {
        // Get selector and save it
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible() 
    })

    it('P should be visible',() => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible() 
    })

    it('Check Link Value',() => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute',() => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type','submit')
    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })
})