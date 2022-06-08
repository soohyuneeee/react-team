import React from 'react';
import styled from 'styled-components'

function Section (
    {
        title,
        description,
        leftBtnText,
        rightBtnText,
        backgroundImg,
    }
){
    return( 
    <Wrap bgImange={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText&&<RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.png"/>
        </Buttons>

    </Wrap>
    );
    
}
export default Section;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;`;

const RightButton = styled.div`
background-color: rgba(244, 244, 244, 0.65);
backdrop-filter: blur(8px);
inline-size: auto;
  height: 40px;
  width: 256px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;`;

const Buttons = styled.div`
`;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image:${(props) => `url("/images/${props.bgImange}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical
  align-items: center; // horizontal
`;
const DownArrow = styled.img `
display: block;
margin: 0px auto;
margin: auto;
height: 40px; 
overflow-x: hidden; 
animation: animateDown infinite 1.5s;
`;