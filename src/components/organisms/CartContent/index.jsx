import React from 'react'

import CartContentStyles from './CartContent.styles'
import LayoutContainer from '../../atoms/LayoutContainer'
import CartCheckout from '../../molecules/CartCheckout'

const CartContent = () => (
    <CartContentStyles className='testing-class'>
        <LayoutContainer>
            <CartCheckout />
        </LayoutContainer>
    </CartContentStyles>
)

export default CartContent