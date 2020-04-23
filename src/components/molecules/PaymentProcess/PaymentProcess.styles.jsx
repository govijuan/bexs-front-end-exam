import styled from 'styled-components'

const PaymentProcessStyles = styled.div`
    background: #ffffff;
    padding: 60px 60px 60px 120px;
    @media (min-width: 992px){
        width: 66%;
    }
    @media (max-width: 992px){
        padding: 120px 30px 30px;
    }
    @media (max-width: 430px){
        padding: 120px 15px 15px;
    }
`

export default PaymentProcessStyles