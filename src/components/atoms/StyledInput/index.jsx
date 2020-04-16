import React from 'react'
import StyledInputStyles from './StyledInput.styles'
import NumberFormat from 'react-number-format'

const StyledInput = props => (
    <StyledInputStyles>
        {props.value &&
            <label>{props.placeholder}</label>
        }
        { props.type === 'number' ?
            <NumberFormat name={props.name} placeholder={props.placeholder} value={props.value} format={props.format} />
            :
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} />
        }
    </StyledInputStyles>
)

export default StyledInput