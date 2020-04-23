import styled from 'styled-components'

const NavListStyles = styled.div`
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;
    box-sizing: border-box;
    @media (max-width: 991px){
        display: none;
    }
    ul{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-bottom: 0;
        margin-top: 0;
        padding-left: 0;
        padding-top: 1.75rem;
        padding-bottom: 1.75rem;
        list-style: none;
        li{
            margin-right: 1rem;
            box-sizing: border-box;
            &:last-child{
                margin-right: 0;
            }
            a{
                text-decoration: none;
                display: block;
                font-weight: 500;
                padding: .5rem;
                color: #3c3c3c
            }
        }
    }
`
export default NavListStyles