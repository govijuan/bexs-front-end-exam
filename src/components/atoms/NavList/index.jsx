import React from 'react'

import NavListStyles from './NavList.styles'

const NavList = props => (
    <NavListStyles className={'' + (props.isListOpen ? 'show' : '')}>
        <ul>
            {
                props.listInfo.map((listItem, key) =>(
                <li key={key} ><a href={listItem.link}>{listItem.label}</a></li>
                ))
            }
        </ul>
    </NavListStyles>
)

export default NavList