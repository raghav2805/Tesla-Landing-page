import React from 'react'
import styled, { keyframes } from "styled-components";

function Section() {
    return (
        <Container>
            <Item>
                <ItemText>
                    <h1>Model-S</h1>
                    <p>Order Online for Touchless Delivery</p>
                </ItemText>
                <FlexBox>
                    <Buttons>

                        <Leftbutton>
                            custom order
                        </Leftbutton>

                        <Rightbutton>
                            existing inventory
                        </Rightbutton>
                    </Buttons>

                    <Image src="images/down-arrow.svg" alt="Image" />
                    
                </FlexBox>

            </Item>
        </Container>
    )
}

export default Section;


const Container = styled.div`
    height:100vh;
    width:100%;
    background-position:center;
    background-size: cover;
    background-image: url("images/model-s.jpg") ;
    background-repeat: no-repeat;
`

const Item = styled.div`
    margin: auto;
    padding:100px 0 0 0;
    width:400px;
    height:100vh;
    ${'' /* background-color:orange; */}
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    text-align:center;
`

const ItemText = styled.div`
    
`

const Buttons = styled.div`
    text-transform:uppercase;
    display:flex;

`

const Leftbutton = styled.div`
    border:2px solid brown;
    border-radius:10em;
    height: 40px;
    width:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:black;
    opacity:0.8;
    color:#fff;
    font-weight:bolder;
    margin: 30px 10px;
`

const Rightbutton = styled(Leftbutton)`
    background-color:#fff;
    color:#000000;
`

const Image = styled.img`
    ${'' /* background-color:orange; */}
    width:40px;
    height:40px;
    animation:animate infinite 2s;
`

const FlexBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`