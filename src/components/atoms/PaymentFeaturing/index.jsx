import React from 'react'
import PaymentFeaturingStyles from './PaymentFeaturing.styles'

import Icon from '../../atoms/Icon'
import AddCardIcon from '../../atoms/AddCardIcon'
import GraphCreditCard from '../../atoms/GraphCreditCard'

const PaymentFeaturing = props =>(
    <PaymentFeaturingStyles>
        <a className="change-payment-method">
            <Icon icon="faAngleLeft" color="#ffffff" />
            Alterar forma de pagamento
        </a>
        <div className="adding-new-ccard-txt">
        <AddCardIcon />
        <span>Adicione um novo cartão de crédito</span>
        </div>
        <GraphCreditCard />
    </PaymentFeaturingStyles>
)

export default PaymentFeaturing