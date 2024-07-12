import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 20px;
  justify-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  grid-template-areas:
    "card1 card2 card3"
    ". card4 card5";

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "card1 card2"
      "card3 card4"
      "card5 card5";
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "card1"
      "card2"
      "card3"
      "card4"
      "card5";
  }
`;

const CardGrid = ({ slides, colors }) => {
  return (
    <Wrapper>
    
        <GridContainer>
          {slides.map((card, index) => (
            <SimpleCard
              number={index+1}
              color={colors[index]}
              backText={card}
            />
          ))}
        </GridContainer>
    
    </Wrapper>
  );
};

export default CardGrid;
