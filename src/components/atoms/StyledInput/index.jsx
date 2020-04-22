import React from 'react'
import StyledInputStyles from './StyledInput.styles'
import NumberFormat from 'react-number-format'

const StyledInput = props => (
    <StyledInputStyles>
            <label>{props.value && props.placeholder}</label>
        { props.type === 'number' ?
            <NumberFormat 
                name={props.name}
                className={'' + (props.errorMsg ? 'invalid' :'valid') }
                placeholder={props.placeholder}
                value={props.value}
                format={props.format}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
            />
            :
            <input
                type={props.type}
                className={'' + (props.errorMsg ? 'invalid' :'valid') } 
                name={props.name} placeholder={props.placeholder}
                value={props.value} onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
            />
        }
        <div className='field-err-msg'>{props.errorMsg && props.errorMsg}</div>
    </StyledInputStyles>
)

export default StyledInput