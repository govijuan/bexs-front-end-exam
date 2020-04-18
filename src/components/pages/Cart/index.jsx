import React from 'react'

import CartStyles from './Cart.styles'
import HeaderNav from '../../molecules/HeaderNav'
import CartContent from '../../organisms/CartContent'

const Cart = ()=>(
    <CartStyles>
        <HeaderNav />
        <CartContent />
    </CartStyles> 
)

export default Cart