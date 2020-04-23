import styled from 'styled-components'

const HeaderNavStyles = styled.nav`
    border-bottom: 0.5px solid #707070;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background: #ffffff;
    .h-nav-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (min-width: 768px) and (max-width: 991px){
            max-width: 540px;
        }
    }
    .logo-link{
        @media(max-width: 524px){
            padding-left: 15px;
        }
        svg{
            @media(max-width: 430px){
                height: 30px;
                width: auto;
            }
            .a{
                fill:#00de91;
            }
            .b{
                fill:#f9f9f9;
            }
        }
    }
    .navbar-toggler{
        background: transparent;
        border: none;
        @media(min-width: 992px){
            display: none;
        }
        &:hover, &:active, &:focus{
            fill: #00de91;
        }
    }
`
export default HeaderNavStyles