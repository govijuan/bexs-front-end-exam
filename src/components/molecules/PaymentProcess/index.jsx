import React from 'react'
import PaymentProcessStyles from './PaymentProcess.styles'
import ProcessDisplay from '../ProcessDisplay';

const PaymentProcess = props => (
    <PaymentProcessStyles>
        {props.children}
        <ProcessDisplay />
    </PaymentProcessStyles>
)

export default PaymentProcess