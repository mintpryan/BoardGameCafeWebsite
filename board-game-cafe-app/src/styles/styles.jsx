import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
  z-index: 1;
  @media only screen and (max-width: 767.98px) {
    display: none;
  }
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
  font-size: 4rem;
  margin: 0;
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
      max-width: 10vw;
    }
    &.sm {
      max-width: 5vw;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: portrait) {
    &.md {
      max-width: 10vw;
    }
    &.sm {
      max-width: 6vw;
    }
  }

  @media only screen and (max-width: 450px) and (orientation: landscape) {
    &.md {
      max-width: 20vh;
    }
    &.sm {
      max-width: 10vh;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: landscape) {
    &.md {
      max-width: 10vh;
    }
    &.sm {
      max-width: 6vh;
    }
  }
`;

export const BaseTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const SocialMediaIcon = {
  "font-size": "3em",
  color: "#3b5998",
};

export const Section= styled.section``