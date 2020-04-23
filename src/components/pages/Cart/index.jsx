import React, {Component} from 'react'

import CartStyles from './Cart.styles'
import HeaderNav from '../../molecules/HeaderNav'
import CartContent from '../../organisms/CartContent'

class Cart extends Component {
    state = {
        mobileMenuListOpen: false
    }

    toggleMobileMenu(e) {
        e.preventDefault()
        let changedListState = this.state.mobileMenuListOpen === false ? true : false
        this.setState({mobileMenuListOpen: changedListState })
    }

    render(){
        return(
            <CartStyles>
                <HeaderNav isListOpen={this.state.mobileMenuListOpen} handleToggleNavClick={this.toggleMobileMenu.bind(this)} />
                <CartContent />
            </CartStyles>
        )
    }
}

export default Cart