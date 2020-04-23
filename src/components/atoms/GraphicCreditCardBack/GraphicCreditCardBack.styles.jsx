import styled from 'styled-components'

const GraphicCreditCardBackStyles = styled.div`
    position: relative;
    @media (min-width: 992px){
        margin-right: -80px;
        margin-bottom: 90px;
    }
    @media (max-width: 991px){
        width: 366.917px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: -110px;
        height: 247.567px;
    }
    @media(max-width: 430px){
        width: 100%;
        height: auto;
    }
    .-card-bg{
        img{
            display: block;
            @media(max-width: 430px){
                width: 100%;
            }
        }
    }
`
export default GraphicCreditCardBackStyles