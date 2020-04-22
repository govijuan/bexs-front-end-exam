import styled from 'styled-components'

const StyledInputStyles = styled.div`
    display: flex;
    flex-direction: column; 
    margin-bottom: 18px;
    input{
        border: none;
        border-bottom: 1px solid #C9C9C9;
        color: #3C3C3C;
        font-size: 20px;
        width: 100%;
    }
    label{
        font-size: 13px;
        color: #C9C9C9;
        text-align: left;
        margin: 0 0 5px;
        height: 17px;
    }
`

export default StyledInputStyles