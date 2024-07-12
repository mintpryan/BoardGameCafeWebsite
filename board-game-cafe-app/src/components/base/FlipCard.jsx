import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { StyledFeaturesFlipCard } from "../../styles/styles";
import SimpleCard from "../SimpleCard";
import { Button } from "antd";

export default function FlipCard({ mode,color,number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <StyledFeaturesFlipCard key="front" onClick={handleClick}>
      
          <SimpleCard color={color} number={number}></SimpleCard>
  
      </StyledFeaturesFlipCard>

      <StyledFeaturesFlipCard key="back" className={mode}>
        <p>Это задняя сторона карточки.</p>
        <Button type="primary" onClick={handleClick}>
          Перевернуть обратно
        </Button>
      </StyledFeaturesFlipCard>
    </ReactCardFlip>
  );
}
