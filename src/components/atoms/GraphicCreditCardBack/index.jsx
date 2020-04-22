import React from 'react'
import GraphicCreditCardBackStyles from './GraphicCreditCardBack.styles'
import backCardBG from '../../../assets/images/back-ccard-bg.svg'

const GraphicCreditCardBack = () =>
    <GraphicCreditCardBackStyles>
        <div className='c-card-bg'>
            <img src={backCardBG} alt='Imagem parte traseira do cartão de crédito' />
        </div>
    </GraphicCreditCardBackStyles>

export default GraphicCreditCardBack