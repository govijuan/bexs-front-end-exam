import React from 'react'
import ProcessDisplayStyles from './ProcessDisplay.styles'
import RoundCheckMark from '../../atoms/RoundCheckMark'
import Icon from '../../atoms/Icon'

const ProcessDisplay = ({readyStage=1,}) => (
    <ProcessDisplayStyles>
        <RoundCheckMark />
        <span className='process-txt'>Carrinho</span>
        <Icon icon='faChevronRight' />
        {readyStage < 2 
            ? <span className='stage-num'>2</span>
            : <RoundCheckMark />
        }
        <span className='process-txt'>Pagamento</span>
        <Icon icon='faChevronRight' />
        {readyStage < 3
            ? <span className='stage-num'>3</span>
            : <RoundCheckMark />
        }
        <span className='process-txt'>Confirmação</span>
    </ProcessDisplayStyles>
)

export default ProcessDisplay