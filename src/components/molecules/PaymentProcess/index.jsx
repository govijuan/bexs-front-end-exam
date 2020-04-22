import React from 'react'
import PaymentProcessStyles from './PaymentProcess.styles'
import ProcessDisplay from '../ProcessDisplay'
import CheckoutForm from '../CheckoutForm'

const PaymentProcess = ({cardInfo, onCardNumChange, handleInputChange, handleBlur}) => (
    <PaymentProcessStyles>
        <ProcessDisplay />
        <CheckoutForm cardInfo={cardInfo} onCardNumChange={onCardNumChange} handleInputChange={handleInputChange} handleBlur={handleBlur} />
    </PaymentProcessStyles>
)

export default PaymentProcess