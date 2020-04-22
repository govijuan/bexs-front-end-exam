import styled from 'styled-components'

const CartCheckoutStyles = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    @media(min-width: 992px){
        min-height: 40vh;
    }
    @media (max-width: 991px){
        flex-direction: column;
        width: 100%;
    }
`
export default CartCheckoutStyles