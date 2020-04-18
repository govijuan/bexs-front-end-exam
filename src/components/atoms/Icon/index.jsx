import React from 'react'
import IconStyles from './Icon.styles'
import * as icons from '@fortawesome/free-solid-svg-icons'

const Icon = ({icon='faQuestion'}) => (
    <IconStyles icon={icons[icon]} />
)

export default Icon