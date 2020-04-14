import React from 'react'

import CartContentStyles from './CartContent.styles'
import LayoutContainer from '../../atoms/LayoutContainer'
import CartCheckout from '../../molecules/CartCheckout'

const CartContent = () => (
    <CartContentStyles>
        <LayoutContainer>
            <CartCheckout />
        </LayoutContainer>
    </CartContentStyles>
)

export default CartContent