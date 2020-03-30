import styled from 'styled-components'

const HeaderNavStyles = styled.nav`
    border-bottom: 0.5px solid #707070;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    .h-nav-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo-link{
        svg{
            .a{
                fill:#00de91;
            }
            .b{
                fill:#f9f9f9;
            }
        }
    }
`
export default HeaderNavStyles