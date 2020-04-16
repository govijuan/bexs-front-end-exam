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
    .react-dropdown-select{
        border: none;
        border-bottom: 1px solid #C9C9C9;
        font-size: 20px;
        padding-left: 0;
        margin-bottom: 40px;
        color: #3C3C3C;
        &:hover, &:active, &:visited{
            border-color: #C9C9C9;
        }
        &:focus, &:focus-within{
            outline: none!important;
            box-shadow: none!important;
            border-color: #C9C9C9;
        }
    }
    .react-dropdown-select-input{
        font-size: 20px;
        margin-left: 0;
    }
    .react-dropdown-select-dropdown-handle{
        color: #DE4B4B;
        svg{
            height: 24px;
            width: 24px;
        }
    }
`

export default CheckoutFormStyles