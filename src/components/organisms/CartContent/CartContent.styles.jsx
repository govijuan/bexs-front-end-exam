import styled from 'styled-components'

const CartContentStyles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-top: 137px;
    background: #f7f7f7;
    @media (max-width: 991px){
        padding-top: 65px;
    }
    @media (max-width: 523px){
        padding-top: 46px;
    }
    @media (max-width: 430px){
        padding-top: 36px;
    }
    /*min-height: calc(100vh - 107px);*/
`

export default CartContentStyles