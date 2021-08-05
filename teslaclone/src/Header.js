import React, {useState} from 'react'
import styled from "styled-components";
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import Write from "./display"; 
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burger,setBurger] = useState(false);

    const [normal,setNormal] = useState(["Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Test Drive",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
    "Investor Relations"]);

    return (
        <Component>
            <Logo>
                <a href="#">
                    <img src="images/logo.svg" alt="Logo" />
                </a>
            </Logo>
            <Menu>
                <ul>
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Solar Roof</li>
                    <li>Solar Panel</li>
                </ul>
            </Menu>
            <Shop>
                <Span>Shop</Span>
                <Span>Account</Span>
                <CustomMenu onClick= {() => setBurger(true)}/>

                {burger && <Wrap>
                    <CustomClose onClick = {()=> setBurger(false)} />
                    {normal.map( (display,index) =>(
                        <Write key = {index} display = {display}/> 
                    ) )}
                </Wrap>}

            </Shop>
        </Component>
    )
}

export default Header;

const Component = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index: 1;
`

const Logo = styled.div`
    width:100px;
    height:40px;
    padding:0 10px ;
    display:flex;
    align-items:center;
    cursor:pointer;
`

const Menu = styled.div`
    min-width:500px;

    @media(max-width: 988px){
        display:none;
    }
`
const Shop = styled.div`
display:flex;
justify-content:space-around;
max-width:100px;
min-width:200px;

align-items:center;
`

const Span = styled.div`
    cursor:pointer;
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`

const Wrap = styled.div`
    background-color:#fff;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    display:flex;
    width:200px;
    flex-direction:column;
    justify-content:space-around;
    padding:40px 0;
    z-index:10;
`

const CustomClose = styled(CloseIcon)`
    position:fixed;
    top:10px;
    right:10px;
`