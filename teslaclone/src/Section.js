import React from 'react'
import styled from "styled-components";

function Section(props) {
    return (
        <Container bgImage = {props.image}>
            <Item>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description} <Span>{props.description_span}</Span></p>
                </ItemText>
                <FlexBox>
                    <Buttons>

                        <Leftbutton>
                            {props.leftbtn}
                        </Leftbutton>

                        {props.rightbtn && <Rightbutton>
                            {props.rightbtn}
                        </Rightbutton>}
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
    background-image: ${props => `url("images/${props.bgImage}")`} ;
    background-repeat: no-repeat;
`

const Item = styled.div`
    margin: auto;
    padding:100px 0 0 0;
    width:400px;
    height:100vh;
    text-transform:upperCase;
    ${'' /* background-color:orange; */}
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    text-align:center;
`

const ItemText = styled.div`
    line-height:40px;
`
const Span = styled.span`
    ${'' /* dispay:block-inline; */}
    text-decoration:underline;
    cursor:pointer;
    color:rgba(123,30,90);
`

const Buttons = styled.div`
    text-transform:uppercase;
    display:flex;
    flex-direction:row;
    @media only screen and (max-width: 768px){
        flex-direction:column;
    }
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

    @media screen and (max-width: 768px){
        margin: 10px 0;
    }
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