import React from 'react'
import PaymentFeaturingStyles from './PaymentFeaturing.styles'

import Icon from '../../atoms/Icon'
import AddCardIcon from '../../atoms/AddCardIcon'
import GraphCreditCard from '../../atoms/GraphCreditCard'

const PaymentFeaturing = ({cardInfo}) =>(
    <PaymentFeaturingStyles>
        <div className="change-payment-method">
            <Icon icon="faChevronLeft"/>
            <span>Alterar forma de pagamento</span>
        </div>
        <div className="adding-new-ccard-txt">
        <AddCardIcon />
        <span>Adicione um novo cartão de crédito</span>
        </div>
        <GraphCreditCard 
            cardNumber={cardInfo.cardNumber.value} 
            cardOwnerName={cardInfo.cardOwnerName.value} 
            cardExpireDate={cardInfo.cardValidDate.value} 
            cCardFlag={cardInfo.cardFlag.value}
        />
    </PaymentFeaturingStyles>
)

export default PaymentFeaturing