import React from 'react'

import NavListStyles from './NavList.styles'

const NavList = props => (
    <NavListStyles>
        <ul>
            {
                props.listInfo.map(listItem =>(
                <li><a href={listItem.link}>{listItem.label}</a></li>
                ))
            }
        </ul>
    </NavListStyles>
)

export default NavList