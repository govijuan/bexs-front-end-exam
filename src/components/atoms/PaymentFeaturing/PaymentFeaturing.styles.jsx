import styled from 'styled-components'

const PaymentFeaturingStyles = styled.div`
    background: #DE4B4B;
    width: 33%;
    color: #ffffff;
    padding: 60px 15px 60px 60px;
    .change-payment-method{
        font-size: 13px;
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 18px;
        color: white;
        text-decoration: none;
        & > span {
            margin: 0 0 0 5px;
        }
    }
    .adding-new-ccard-txt{
        display: flex;
        flex-direction: row;
        margin: 30px 0 15px;
        span{
            display: inline-block;
            &:last-child{
                margin: 0 0 0 8px;
                font-size: 20px;
                text-align: left;
                font-weight: 700;
            }
        }
    }
`

export default PaymentFeaturingStyles