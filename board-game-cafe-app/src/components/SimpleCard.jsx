import React, { useState } from "react";

import { HashLink as Link } from 'react-router-hash-link';
import styled from "styled-components";


const CardContainer = styled.div`



  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    width: 20vw;
    height: 20vh;
  }

  @media only screen and (min-width: 1024px) and (orientation: portrait) {
    width: 45vw;
    height: 20vh;
  }

  @media only screen and (max-width: 1023.98px)  {
    display:none;
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  border: 2px solid black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #f9f9f9;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2px solid black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg);
`;

const Corner = styled.div`
  position: absolute;
  font-size: 2em;
  color: white;
  font-weight: bold;
`;

const TopLeftCorner = styled(Corner)`
  top: 0.8em;
  left: 0.8em;
`;

const BottomRightCorner = styled(Corner)`
  bottom: 0.8em;
  right: 0.8em;
  transform: rotate(180deg);
`;

const Number = styled.div`
  font-size: 4em;
  color: white;
  font-weight: bold;
`;

const SimpleCard = ({ number, color,backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    console.log(number)
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardInner isFlipped={isFlipped}>
        <CardFront color={color}>
          <TopLeftCorner>{number}</TopLeftCorner>
          <Number>?</Number>
          <BottomRightCorner>{number}</BottomRightCorner>
        </CardFront>
        <CardBack>
        <Link to={`/#sect_${number}`}>{backText}</Link>
        
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default SimpleCard;
