import React from 'react'
import PaymentProcessStyles from './PaymentProcess.styles'
import ProcessDisplay from '../ProcessDisplay'
import CheckoutForm from '../CheckoutForm'

const PaymentProcess = ({cardInfo, onCardNumChange, handleInputChange}) => (
    <PaymentProcessStyles>
        <ProcessDisplay />
        <CheckoutForm cardInfo={cardInfo} onCardNumChange={onCardNumChange} handleInputChange={handleInputChange}/>
    </PaymentProcessStyles>
)

export default PaymentProcess