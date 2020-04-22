import React, {Component} from 'react'

import CartCheckoutStyles from './CartCheckout.styles'
import PaymentFeaturing from '../../atoms/PaymentFeaturing'
import PaymentProcess from '../PaymentProcess'
import getCardFlag from '../../../utils/getCardFlag'

class CartCheckout extends Component {
    state = {
        cart: {
            totalBillAmmount : 12000   
        },
        checkout: {
            cardInfo: {
                cardNumber: {
                    value: null,
                    isValid: false,
                    errorMsg: ''
                },
                cardFlag: {
                    value: null,
                    isValid: false,
                },
                cardOwnerName: {
                    value: '',
                    isValid: false,
                    errorMsg: ''
                },
                cardValidDate: {
                    value: '',
                    isValid: false,
                    errorMsg: ''
                },
                cardCCV: {
                    value: '',
                    isValid: false,
                    errorMsg: ''
                },
                installments: {
                    value: '1x de R$ 1200,00 sem juros',
                    isValid: false,
                    errorMsg: ''
                }
            },
            readyStage: 1
        },
        isSettingCCV: false,
    }

    onCardNumChange (event) {
        const inputName = event.target.name
        const inputValue = event.target.value
        const cleanInputVal = inputValue.trim()
        if(cleanInputVal.length > 1) {
            const cardFlagValue = getCardFlag(inputValue)
            this.updateStateByInputName('cardFlag', cardFlagValue, 'value')
        }else{
            this.updateStateByInputName('cardFlag', '', 'value')
        }
        this.updateStateByInputName (inputName, inputValue, 'value')
        
    }

    handleBlur(event) {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.validateField(inputName, inputValue)
        if(inputName === 'cardCCV'){
            this.setState({isSettingCCV: false})
        }
    }

    handleCCVFocus (event) {
        event.preventDefault()
        console.log('CCV focus triggered')
        this.setState({isSettingCCV: true})
        console.log('isSettingCCV value; ', this.state.isSettingCCV)
    }

    validateField (fieldId, fieldValue) {
        // Field value can't be empty or null
        if(!fieldValue){
            this.setFieldAsInvalid (fieldId, 'O campo deve estar preenchido')
        }else if (fieldId === 'cardNumber' && fieldValue.trim().length < 19){
            this.setFieldAsInvalid(fieldId, 'Faltam dígitos no número do cartão')
        } else if (fieldId === 'cardValidDate' && fieldValue < 5) {
            this.setFieldAsInvalid(fieldId, 'Por favor digite a data com mês e ano')
        } else if(fieldId === 'cardCCV' && fieldValue.trim() < 3){
                this.setFieldAsInvalid(fieldId, 'O numero CCV deve ter 3 dígitos')
        } else {
            this.setFieldAsValid (fieldId)
        }
    }

    setFieldAsInvalid (fieldId, errorMsg) {
        this.updateStateByInputName (fieldId, errorMsg, 'errorMsg')
        this.updateStateByInputName (fieldId, false, 'isValid')
    }

    setFieldAsValid (fieldId){
        this.updateStateByInputName (fieldId, '', 'errorMsg')
        this.updateStateByInputName (fieldId, true, 'isValid')
    }

    handleInputChange (event) {
        let inputName = event.target.name
        let inputValue = event.target.value
        this.updateStateByInputName (inputName, inputValue , 'value' )
    }

    updateStateByInputName (inputName,updateValue, propToBeUpdated ) {
        let statusCopy = Object.assign({}, this.state)
        statusCopy.checkout.cardInfo[inputName][propToBeUpdated] = updateValue
        this.setState(statusCopy)
    }

    render () {
        return (
            <CartCheckoutStyles >
                <PaymentFeaturing 
                    cardInfo={this.state.checkout.cardInfo}
                    focusedOnCCV={this.state.isSettingCCV}
                    readyStage={this.state.checkout.readyStage}
                />
                <PaymentProcess
                    cardInfo={this.state.checkout.cardInfo}
                    onCardNumChange={this.onCardNumChange.bind(this)}
                    handleInputChange={this.handleInputChange.bind(this)}
                    handleBlur={this.handleBlur.bind(this)}
                    handleCCVFocus={this.handleCCVFocus.bind(this)} />
            </CartCheckoutStyles>

        )
    }
} 

export default CartCheckout