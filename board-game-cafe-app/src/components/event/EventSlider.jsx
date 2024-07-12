import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Arrow, SliderContainer } from "../../styles/events";
import { BaseTitle } from "../../styles/styles";
import { useSelector } from "react-redux";
import { eventsSelector } from "../../feautures/eventSlice";
import { useEffect, useState } from "react";
import EventFlipCard from "./EventFlipCard";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick}>
      <CaretLeftOutlined></CaretLeftOutlined>
    </Arrow>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick}>
      <CaretRightOutlined />
    </Arrow>
  );
};

const settings = {
  infinite: true,
  slidesToShow: 2,
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function EventSlider({ mode }) {
  const events = useSelector(eventsSelector);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(
      events.map((event) => (
        <EventFlipCard mode={mode} event={event}></EventFlipCard>
      ))
    );
  }, [events]);

  return (
    <>
      <BaseTitle>Our Events</BaseTitle>
      {events.length > 0 ? (
        <SliderContainer class={mode}>
          <div
            className="slider-container"
            style={{ width: "80%", height: "80%" }}
          >
            <Slider {...settings}>{cards}</Slider>
          </div>
        </SliderContainer>
      ) : (
        <h1>No events</h1>
      )}
    </>
  );
}
