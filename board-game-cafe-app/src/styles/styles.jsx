import { Card } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: white;
  position: relative;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
  z-index: 1;
  @media only screen and (max-width: 1023.98px) {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    display: none;
  }
`;

export const SmallHeroContainer = styled(HeroContainer)`
  width: 100vw;
  height: 20vh;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const HeroTitle = styled.h1`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  font-size: 2em;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 3;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

export const CarouselContainer = styled(Content)`
  font-family: "Nunito";
  position: relative;
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 450px) and (orientation: portrait) {
    &.md {
      max-height: 5vh;
    }
    &.sm {
      max-height: 2vh;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: portrait) {
    &.md {
      max-height: 5vh;
    }
    &.sm {
      max-height: 3vh;
    }
  }

  @media only screen and (max-width: 450px) and (orientation: landscape) {
    &.md {
      max-height: 5vh;
    }
    &.sm {
      max-height: 5vh;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: landscape) {
    &.md {
      max-height: 10vh;
    }
    &.sm {
      max-height: 6vh;
    }
  }
`;

export const BaseTitle = styled.h1`
  font-size: 2rem;
  margin: 1em;
  @media only screen and (max-width: 767.98px) {
    font-size: 1.2rem;
  }
`;

export const SocialMediaIcon = {
  "font-size": "3em",
  color: "#3b5998",
};

export const Section = styled.section``;

export const ArcContainer = styled.section`
  .arc-slider {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .arc-slider .slick-list {
    overflow: visible;
  }

  .arc-slider .slick-slide {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: bottom center;
  }
`;

export const StyledFeaturesFlipCard = styled(Card)`
  font-weight: 600;
  font-family: "Nunito";
  min-width: 30vw;
  min-height: 30vh;
  margin: 1em;
  border: 4px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  .ant-card-body {
    padding: unset;
    rotate: 90deg;
  }
`;

export const FeatureSliderContainer = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeMain = styled.main``;
