import React from 'react'
import PaymentFeaturingStyles from './PaymentFeaturing.styles'

import Icon from '../../atoms/Icon'
import AddCardIcon from '../../atoms/AddCardIcon'
import GraphCreditCard from '../../atoms/GraphCreditCard'
import GraphicCreditCardBack from '../../atoms/GraphicCreditCardBack'

const PaymentFeaturing = ({cardInfo, focusedOnCCV, readyStage}) =>{
    const currentStage = readyStage + 1
    return(
        <PaymentFeaturingStyles>
            <div className="change-payment-method">
                <Icon icon="faChevronLeft"/>
                <span>Alterar forma de pagamento</span>
                <div class='mobile-process-display'><b>Etapa {currentStage}</b> de 3</div>
            </div>
            <div className="adding-new-ccard-txt">
            <AddCardIcon />
            <span>Adicione um novo cartão de crédito</span>
            </div>
            {focusedOnCCV
                ?<GraphicCreditCardBack valueCCV={cardInfo.cardCCV.value} />
                :<GraphCreditCard 
                    cardNumber={cardInfo.cardNumber.value} 
                    cardOwnerName={cardInfo.cardOwnerName.value} 
                    cardExpireDate={cardInfo.cardValidDate.value} 
                    cCardFlag={cardInfo.cardFlag.value}
                />
            }     
        </PaymentFeaturingStyles>
    )
}

export default PaymentFeaturing