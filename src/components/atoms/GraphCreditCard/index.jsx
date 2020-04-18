import React from 'react'
import GraphCreditCardStyles from './GraphCreditCard.styles'
import activeCardBg from '../../../assets/images/credit-card-bg.svg'
import unactiveCardBg from '../../../assets/images/unactive-card-bg.svg'

const GraphCreditCard = ({cardNumber, cardOwnerName, cardExpireDate='00/00', cCardFlag}) =>
    <GraphCreditCardStyles>
        <div className={'c-card-bg' + (!cardNumber || cardNumber.length < 4 ? ' flag-not-defined-bg' : '')}>
            <img src={!cardNumber || cardNumber.length < 4 ? unactiveCardBg : activeCardBg} alt='Credit Card Background'/>
            
        </div>
        <div className='c-card-info'>
            <div className={'c-card-flag ' + cCardFlag}></div>
            <div className='c-card-number' >{cardNumber}</div>
            <div className='name-and-expire'>
                <div className='card-owner-name'>{cardOwnerName}</div>
                <div className='card-expiring-date'>{cardExpireDate}</div>
            </div>
        </div>
    </GraphCreditCardStyles>

    export default GraphCreditCard