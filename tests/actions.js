import { short } from "../lib/timeout"

describe('Browser Actions',() => {
    it('Inputs',() => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Maria')
        browser.pause(short)
        input.clearValue()
        browser.pause(short)
        input.addValue('Aguilera')
        browser.pause(short)
    })

    it('Click',() => {
        const buttonPopulate = $("#populate")
        browser.waitForExist()
        buttonPopulate.click()
    })
})