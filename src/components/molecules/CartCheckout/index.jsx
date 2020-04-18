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
                    errorMsg: ''
                },
                cardOwnerName: {
                    value: '',
                    isValid: false,
                    errorMsg: ''
                },
                cardValidDate: {
                    value: '00/00',
                    isValid: false,
                    errorMsg: ''
                },
                cardCCV: {
                    value: '',
                    isValid: false,
                    errorMsg: ''
                },
                installments: {
                    value: 1,
                    isValid: false,
                    errorMsg: ''
                }
            },
            focusedOnCCV: false,
            readyStage: 1
        }
    }

    onCardNumChange (event) {
        const inputName = event.target.name
        const inputValue = event.target.value
        const cleanInputVal = inputValue.trim()
        if(cleanInputVal.length > 1 && cleanInputVal.length < 3) {
            const cardFlagValue = getCardFlag(inputValue)
            console.log('cardFlag é: ', cardFlagValue)
            this.updateStateByInputName('cardFlag', cardFlagValue)
        }
        this.updateStateByInputName (inputName, inputValue)
        
    }

    handleInputChange (event) {
        let inputName = event.target.name
        let inputValue = event.target.value
        this.updateStateByInputName (inputName, inputValue )
    }

    updateStateByInputName (inputName,inputValue ) {
        let statusCopy = Object.assign({}, this.state)
        statusCopy.checkout.cardInfo[inputName].value = inputValue
        this.setState(statusCopy);
    }

    render () {
        return (
            <CartCheckoutStyles >
                <PaymentFeaturing cardInfo={this.state.checkout.cardInfo} />
                <PaymentProcess cardInfo={this.state.checkout.cardInfo} onCardNumChange={this.onCardNumChange.bind(this)} handleInputChange={this.handleInputChange.bind(this)} />
            </CartCheckoutStyles>

        )
    }
} 

export default CartCheckout