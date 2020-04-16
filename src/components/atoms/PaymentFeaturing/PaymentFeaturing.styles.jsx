import styled from 'styled-components'

const PaymentFeaturingStyles = styled.div`
    background: #DE4B4B;
    width: 33%;
    color: #ffffff;
    padding: 30px 15px 30px 60px;
    .change-payment-method{
        font-size: 13px;
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 18px;
    }
    .svg-inline--fa{
        height: 17px;
        width: auto;
        margin: 0 5px 0 0;
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