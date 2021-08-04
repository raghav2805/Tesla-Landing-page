import React from 'react'
import styled from "styled-components";
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles({
//     root:{
//         backgroundColor:red
//     }
// });

function Header() {
    // const classes = useStyles();
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
                {/* <MenuIcon classNme = {mergeClasses.root} /> */}
                <CustomMenu />
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
    background-color:orange;
    
    @media(max-width: 768px){
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
    
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`