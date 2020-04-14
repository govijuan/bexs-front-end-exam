import styled from 'styled-components'
import visaFlafImg from '../../../assets/images/visa-flag.png'

const GraphCreditCardStyles = styled.div`
    position: relative;
    margin-right: -80px;
    margin-bottom: 90px;
    .c-card-bg{
        svg{
            .a,.e{fill:none;}
            .b{fill:url(#a);}
            .c{clip-path:url(#b);}
            .d{opacity:0.2;}
            .e{stroke:#53aee0;stroke-linecap:round;stroke-width:0.6px;}
        }
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
        width: 70px;
        display: block;
        margin: 0 0 30px;
    }
    .c-card-flag.visa{
        background: url(${visaFlafImg});
    }
    .c-card-number{
        font-size: 26px;
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