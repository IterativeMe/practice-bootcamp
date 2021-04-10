import { defaultInstance } from 'chromedriver'
import Base from '../Base'

class PayPage extends Base {

    get selectPayee(){
        return $('#sp_payee')
    }

    get selectAccount(){
        return $('#sp_account')
    }

    get inputAmount(){
        return $('#sp_amount')
    }

    get inputDate(){
        return $('#sp_date')
    }

    get inputDescription(){
        return $('#sp_description')
    }

    get buttonPay(){
        return $('#pay_saved_payees')
    }

    get alertContent(){
        return $('#alert_content')
    }

    fillPaymentForm(payee,accountType,amount,date,description){
        const selectPayee = this.selectPayee
        selectPayee.waitForExist()
        selectPayee.selectByAttribute('value',payee)
        const selectAccount = this.selectAccount
        selectAccount.waitForExist()
        selectAccount.selectByVisibleText(accountType)
        const inputAmount = this.inputAmount
        inputAmount.setValue(amount)
        const inputDate = this.inputDate
        inputDate.setValue(date)
        browser.keys('Enter')
        const inputDescription = this.inputDescription
        inputDescription.setValue(description)
        const buttonPay = this.buttonPay
        buttonPay.click()
    }

    getSuccessMessage(successMessage){
        const message = this.alertContent
        expect(message).toHaveText(successMessage)
    }

}

export default new PayPage