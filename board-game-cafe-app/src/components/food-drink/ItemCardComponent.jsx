import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "antd";
import Scene from "./Scene";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  heiht:100%;
  // margin: 2em 0;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 767.98px) {
    font-size: 0.8rem;
    // margin: 1em 0;
  }

  .ant-card-head{
   font-size: 1.8em;
  }

`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  width: 100%;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 4em;
  background-color: #f9f9f9;
  font-family: "Nunito";
  font-size:1.5em;
    font-weight:600;
  @media only screen and (max-width: 767.98px) {
    padding: 1em;
    font-size:1em;
    font-weight:800;

  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background-color: #fff;
   @media only screen and (max-width: 767.98px) {
    padding: 1em;
  }
  
`;


const ItemCardComponent = ({
  name,
  description,
  price,
  model_file_name,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledCard title={name} onPointerOver={() => setIsHovered(true)}
    onPointerOut={() => setIsHovered(false)}>
      <Content>
      <ImageContainer>
          <Scene file_name={model_file_name} isHovered={isHovered}></Scene>
        </ImageContainer>
        <TextContainer>
          <p>{description}</p>
          <p>{price}</p>
        </TextContainer>
        
      </Content>
    </StyledCard>
  );
};

export default ItemCardComponent;
