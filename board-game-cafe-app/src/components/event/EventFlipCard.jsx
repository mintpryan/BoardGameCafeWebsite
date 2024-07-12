import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "antd";
import {
  CenteredText,
  EventFlipCardImg,
  StyledFlipCardBack,
  StyledFlipCardFront,
} from "../../styles/events";

export default function EventFlipCard({ mode, event }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [respDescription, setRespDescription] = useState("");

  useEffect(() => {
    
    if (event.description.length > 200) {
      setRespDescription(event.description.substring(0, 200) + "...");
      setShowMore(true);
    }else{
      setRespDescription(event.description);
      setShowMore(false);
    }
  }, [event]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <StyledFlipCardFront key="front" className={mode} onClick={handleClick}>
        <EventFlipCardImg
          alt=""
          src={`${process.env.REACT_APP_API_BASE_URL}/file/download/${event.file_name}`}
        ></EventFlipCardImg>
        <CenteredText>{event.title}</CenteredText>
      </StyledFlipCardFront>

      <StyledFlipCardBack key="back" className={mode} onClick={handleClick}>
        <div>
          {respDescription}
          {showMore?<Button onClick={handleShowMore}>
            More
          </Button>:""}
        </div>
      </StyledFlipCardBack>
    </ReactCardFlip>
  );
}
