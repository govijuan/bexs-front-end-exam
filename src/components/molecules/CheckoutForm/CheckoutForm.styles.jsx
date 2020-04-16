import styled from 'styled-components'

const CheckoutFormStyles = styled.div`
    padding: 60px 0;
    .validade-ccv{
        display: flex;
        flex-direction: row;
        & > div {
            width: 50%;
            &:first-child{
                padding-right: 10px;
            }
            &:last-child{
                padding-left: 10px;
            }
        }
    }
`

export default CheckoutFormStyles