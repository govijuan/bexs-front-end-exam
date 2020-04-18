import React from 'react'

import LayoutContainerStyles from './LayoutContainer.styles'

const LayoutContainer = (props) =>
    <LayoutContainerStyles {...props}>
        {props.children}
    </LayoutContainerStyles>

export default LayoutContainer