import styled from 'styled-components'

const LayoutContainerStyles = styled.div`
    flex-wrap: nowrap;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    @media(min-width: 524px){
        padding-left: 3rem;
        padding-right: 3rem;
    }
    @media (min-width: 576px){
        max-width: 540px;
    }
    @media (min-width: 768px){
        max-width: 720px;
    }
    @media (min-width: 992px){
        max-width: 960px;
    }
    @media (min-width: 1200px){
        max-width: 1140px;
    }
`

export default LayoutContainerStyles