import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Homepage/center/CarouselCard.css";

const CarouselCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="carousel-slide">
        <p className="slide1">
          Enhance fortune 50 company’s insights teams research capabilities
        </p>
      </div>

      <div className="carousel-slide">
        <p className="slide1">
          Enhance fortune 50 company’s insights teams research capabilities
        </p>
      </div>

      <div className="carousel-slide">
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default CarouselCard;
