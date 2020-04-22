import styled from 'styled-components'

const PaymentFeaturingStyles = styled.div`
    background: #DE4B4B;
    color: #ffffff;
    padding: 60px 15px 60px 60px;
    @media(min-width: 992px){
        width: 33%;
    }
    @media (max-width: 991px) {
        padding: 30px 30px 0;
    }
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
            @media (max-width: 991px){
                display: none;
            }
        }
        .mobile-process-display{
            text-align: center;
            flex: auto;
            @media(min-width: 992px){
                display: none;
            }
        }
        svg{
            font-size: 25px;
        }
    }
    .adding-new-ccard-txt{
        display: flex;
        flex-direction: row;
        margin: 30px 0 15px;
        @media(max-width: 991px){
            align-items: center;
            justify-content: center;
        }
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