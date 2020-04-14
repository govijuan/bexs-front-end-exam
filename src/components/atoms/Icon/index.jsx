import React from 'react'
import IconStyles from './Icon.styles'
import * as icons from '@fortawesome/free-solid-svg-icons'

const Icon = ({icon='faQuestion', color=''}) => (
    <IconStyles icon={icons[icon]} color={color} />
)

export default Icon