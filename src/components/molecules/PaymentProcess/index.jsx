import React from 'react'
import PaymentProcessStyles from './PaymentProcess.styles'


const PaymentProcess = props => (
    <PaymentProcessStyles>
        {props.children}
    </PaymentProcessStyles>
)

export default PaymentProcess