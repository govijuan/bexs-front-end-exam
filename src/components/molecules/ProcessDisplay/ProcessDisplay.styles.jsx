import styled from 'styled-components'

const ProcessDisplayStyles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    .stage-num{
        height: 22px;
        width: 22px;
        border-radius: 100%;
        border: 1px solid #DE4B4B;
        color: #DE4B4B;
        background: transparent;
    }
    .stage-num{
        margin-right: 10px;
    }
    .process-txt, .fa-chevron-right{
        margin-right: 15px;
        color: #DE4B4B;
    }
    .process-txt{
        font-size: 14px;
    }
    .stage-num{
        font-weight: bold;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`
export default ProcessDisplayStyles