import Base from '../Base'

class ExchangePage extends Base {

    get currencySelect(){
        return $('#pc_currency')
    }

    get inputAmount(){
        return $('#pc_amount')
    }

    get radioInDollars(){
        return $('#pc_inDollars_true')
    }

    get buttonPurchaseCash(){
        return $('#purchase_cash')
    }

    get alertContent(){
        return $('#alert_content')
    }

    fillForm(currency,amount){
        const currencySelect = this.currencySelect
        currencySelect.selectByAttribute('value',currency)
        const inputAmount = this.inputAmount
        inputAmount.setValue(amount)
        const radioInDollars = this.radioInDollars
        radioInDollars.click()
        const buttonPurchaseCash = this.buttonPurchaseCash
        buttonPurchaseCash.click()
    }

    getSuccessMessage(successMessage){
        const message = this.alertContent
        expect(message).toHaveText(successMessage)
    }
        


}

export default new ExchangePage 

