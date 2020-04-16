import React from 'react'
import CheckoutFormStyles from './CheckoutForm.styles'
import StyledInput from '../../atoms/StyledInput'

const CheckoutForm = ({}) => (
    <CheckoutFormStyles>
        <StyledInput type='number' name='card_number' placeholder='Número do cartão' format="#### #### #### ####" value={1} />
        <StyledInput type='text' name='card_owners_name' placeholder='Nome (igual ao cartão)' value='Felipe B A Pio Nt' />
        <div className='validade-ccv'>
            <StyledInput type='number' name='card_validity' placeholder='Validade' format='##/##' value='06/26'/>
            <StyledInput type='number' name='card_ccv' placeholder='CVV' format='###' value='542' />
        </div>
    </CheckoutFormStyles>
)

export default CheckoutForm