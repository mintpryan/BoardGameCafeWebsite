import { Card } from "antd";
import styled from "styled-components";
import { tokens } from "./main";

export const StyledFlipCard = styled(Card)`
  min-width: 35vw;

  &.mobile {
    min-height: 50vh;
  }
  &.desktop {
    min-height: 30vh;
  }
  margin: 1em;
  border: 4px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const SliderContainer = styled.div`
  width: 100%;
  &.mobile {
    height: 100%;
  }
  &.desktop {
    height: 45%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  z-index: 1;
  display: block;
  background: ${tokens.colorPrimary}; /* Цвет фона стрелок */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${tokens.colorPrimary};
  }
`;
