import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "antd";
import { StyledFlipCard } from "../../styles/events";

export default function FlipCard({mode}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <StyledFlipCard key="front" className={mode}>
          <p>Это передняя сторона карточки.</p>
          <Button type="primary" onClick={handleClick}>
            Перевернуть
          </Button>
        </StyledFlipCard>

        <StyledFlipCard key="back" className={mode}>
          <p>Это задняя сторона карточки.</p>
          <Button type="primary" onClick={handleClick}>
            Перевернуть обратно
          </Button>
        </StyledFlipCard>
      </ReactCardFlip>

  );
};
