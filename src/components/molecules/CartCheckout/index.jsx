import React from 'react'

import CartCheckoutStyles from './CartCheckout.styles'
import PaymentFeaturing from '../../atoms/PaymentFeaturing'
import PaymentProcess from '../PaymentProcess'

const CartCheckout = () => (
    <CartCheckoutStyles>
        <PaymentFeaturing />
        <PaymentProcess />
    </CartCheckoutStyles>

)

export default CartCheckout