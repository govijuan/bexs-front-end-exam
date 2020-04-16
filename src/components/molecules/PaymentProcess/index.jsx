import React from 'react'
import PaymentProcessStyles from './PaymentProcess.styles'
import ProcessDisplay from '../ProcessDisplay'
import CheckoutForm from '../CheckoutForm'

const PaymentProcess = props => (
    <PaymentProcessStyles>
        {props.children}
        <ProcessDisplay />
        <CheckoutForm />
    </PaymentProcessStyles>
)

export default PaymentProcess