import eact from 'react'

import LayoutContainerStyles from './LayoutContainer.styles'

const LayoutContainer = ({...props}) =>
    <LayoutContainerStyles>
        {props.children}
    </LayoutContainerStyles>