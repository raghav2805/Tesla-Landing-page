import React from 'react'
import styled from "styled-components"

function Write({display}) {
    return (
        <Component>
            <h3>{display}</h3>
        </Component>
    )
}

export default Write;

const Component = styled.div`
    cursor:pointer;
    padding-left:10px;
`