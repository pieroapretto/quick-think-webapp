import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Heading>Quick think</Heading>
    )
}

const Heading = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 2.8rem;

    @media(min-width: 400px) {
        font-size: 3.8rem;
    }
`

export default Header
