import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BaseSlider from "../components/base/BaseSlider";
import BaseCalendar from "../components/event/BaseCalendar";
import { Main, ResponsiveDesktop, ResponsiveMobile } from "../styles/main";

export default function Events() {
  return (
    <Main>
      <ResponsiveMobile>
        <BaseSlider mode={"mobile"}></BaseSlider>
        <BaseCalendar isMobile={false}></BaseCalendar>
        
      </ResponsiveMobile>
      <ResponsiveDesktop>
        <BaseSlider mode={"desktop"}></BaseSlider>
        <BaseCalendar isMobile={false}></BaseCalendar>
      </ResponsiveDesktop>
    </Main>
  );
}
