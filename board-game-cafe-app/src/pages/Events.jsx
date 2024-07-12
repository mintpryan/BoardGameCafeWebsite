import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BaseCalendar from "../components/event/BaseCalendar";
import { Main, ResponsiveDesktop, ResponsiveMobile } from "../styles/main";
import EventSlider from "../components/event/EventSlider";
import { BaseTitle } from "../styles/styles";
import { Helmet } from "react-helmet";

export default function Events() {
  return (
    <Main>
      <Helmet>
        <title>Events | Sip&Play</title>
        <meta
          name="description"
          content="Join us for regular events, including game nights, tournaments,and special-themed nights"
        />
      </Helmet>
      <ResponsiveMobile>
      <BaseTitle>Our Events</BaseTitle>
        <BaseCalendar isMobile={true}></BaseCalendar>
      </ResponsiveMobile>
      <ResponsiveDesktop>
        <EventSlider mode={"desktop"}></EventSlider>
        <BaseCalendar isMobile={false}></BaseCalendar>
      </ResponsiveDesktop>
    </Main>
  );
}
