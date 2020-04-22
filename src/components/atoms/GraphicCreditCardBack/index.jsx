import React from 'react'
import GraphicCreditCardBackStyles from './GraphicCreditCardBack.styles'
import backCardBG from '../../../assets/images/back-ccard-bg.svg'
import activeCardBG from '../../../assets/images/back-active-ccard-bg.svg'

const GraphicCreditCardBack = ({valueCCV}) =>
        <GraphicCreditCardBackStyles>
            <div className='c-card-bg'>
                <img src={ valueCCV !== '' ? activeCardBG : backCardBG } alt='Imagem parte traseira do cartão de crédito' />
            </div>
        </GraphicCreditCardBackStyles>

export default GraphicCreditCardBack