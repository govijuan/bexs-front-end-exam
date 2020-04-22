import styled from 'styled-components'
import visaFlafImg from '../../../assets/images/visa-flag.png'
import mastercardImg from '../../../assets/images/mastercard-flag.png'
import amexFlagImg from '../../../assets/images/amex-flag.png'

const GraphCreditCardStyles = styled.div`
    position: relative;
    margin-right: -80px;
    margin-bottom: 90px;
    .c-card-bg{
    }
    .c-card-info{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        padding: 30px;
    }
    .c-card-flag{
        height: 23px;
        width: 130px;
        display: block;
        margin: 0 0 30px;
    }
    .c-card-flag{
        
        &.visa{
            background: url(${visaFlafImg});
            background-repeat: no-repeat;
        }
        &.mastercard{
            background: url(${mastercardImg});
            background-size: 100% 100%;
        }
        &.amex{
            background: url(${amexFlagImg});
            background-repeat: no-repeat;
        }
        
    }
    .c-card-number{
        font-size: 25px;
        margin-bottom: 30px;
    }
    .name-and-expire{
        display: flex;
        flex-direction: row;
        font-size: 17px;
    }
    .card-owner-name{
        align-self: flex-start;
        flex: 2;
        text-transform: uppercase;
        text-align: left;
    }
    .card-expiring-date{
        align-self: flex-end;
        flex: 1;
        text-align: right;
    }
`
export default GraphCreditCardStyles