import React from "react";
import video from "../../assets/hero_video.mp4";
import { HeroContainer, HeroSubtitle, HeroTitle, VideoBackground } from "../../styles/styles";


const HeroSection = () => (
  <HeroContainer>
    <VideoBackground autoPlay loop muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoBackground>

    <HeroTitle>Welcome to Game Rooms</HeroTitle>
    <HeroSubtitle>Let's roll the dice</HeroSubtitle>

  </HeroContainer>
);

export default HeroSection;
