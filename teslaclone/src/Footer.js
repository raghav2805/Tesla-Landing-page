import React from 'react'
import styled from "styled-components"

function Footer() {
    return (
        <Component>
            <Item>
                <a href="#" >Tesla © 2021 </a>
            </Item>
            <Item>
                <a href="#" >Privacy & Legal </a>
            </Item>
            <Item>
                <a href="#" >Contact </a>
            </Item>
            <Item>
                <a href="#" >Careers </a>
            </Item>
            <Item>
                <a href="#" >Get Newspaper </a>
            </Item>
            <Item>
                <a href="#" >News </a>
            </Item>
            <Item>
                <a href="#" >Engage </a>
            </Item>
            <Item>
                <a href="#" >Locations </a>
            </Item>
        </Component>
    )
}

export default Footer;

const Component = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:40px;
a{
    color:rgba(0.9,0.9,0.9,0.7);
    margin-right:10px;
}

`
const Item = styled.div`
`