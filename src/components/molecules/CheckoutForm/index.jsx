import React from 'react'
import CheckoutFormStyles from './CheckoutForm.styles'
import StyledInput from '../../atoms/StyledInput'
import Select from "react-dropdown-select";
import SubmitButton from '../../atoms/SubmitButton'

const CheckoutForm = ({}) => (
    <CheckoutFormStyles>
        <StyledInput type='number' name='card_number' placeholder='Número do cartão' format="#### #### #### ####" value={1} />
        <StyledInput type='text' name='card_owners_name' placeholder='Nome (igual ao cartão)' value='Felipe B A Pio Nt' />
        <div className='validade-ccv'>
            <StyledInput type='number' name='card_validity' placeholder='Validade' format='##/##' value='06/26'/>
            <StyledInput type='number' name='card_ccv' placeholder='CVV' format='###' value='542' />
        </div>
        <Select
            name='instalments'
            searchable={false} 
            onChange={()=>{}}
            placeholder='Selecione parcelamento...'
            valueField='id'
            options={[ 
                        {id: 12, label: '12x de R$1000,00 sem juros'},
                        {id: 11, label: '11x de R$1090,90 sem juros'},
                        {id: 10, label: '10x de R$1200,00 sem juros'},
                        {id: 9, label: '9x de R$1333,33 sem juros'},
                        {id: 8, label: '8x de R$1500,00 sem juros'},
                        {id: 7, label: '7x de R$1714,28 sem juros'},
                        {id: 6, label: '6x de R$2000,00 sem juros'},
                        {id: 5, label: '5x de R$2400,00 sem juros'},
                        {id: 4, label: '4x de R$ 3000,00 sem juros'},
                        {id: 3, label: '3x de R$ 4000,00 sem juros'},
                        {id: 2, label: '2x de R$ 6000,00 sem juros'},
                        {id: 1, label: '1x de R$ 1200,00 sem juros'},
                    ]}
            value={12}
        />
        <SubmitButton />
    </CheckoutFormStyles>
)

export default CheckoutForm