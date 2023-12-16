import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import yahoo1 from "../assets/images/yahoo1.png";
import yahoo2 from "../assets/images/yahoo2.png";
import yahoo3 from "../assets/images/yahoo3.png";
import yahoo4 from "../assets/images/yahoo4.png";
import yahoo5 from "../assets/images/yahoo5.png";
import yahoo6 from "../assets/images/yahoo6.png";

const Featured = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <>
      <div id="feactured" className="bg-[#F6F6F6] ">
        <div className="container px-3 mx-auto py-14 sm:py-24">
          <p className="sm:text-[48px] text-[36px] text-center md:text-start font-light ff_use ">Featured on</p>

          <div className="pt-16  flex-col">
            <Slider {...settings}>
              <div className="center">
                <img src={yahoo6} alt="#id" />
              </div>
              <div className="center">
                <img src={yahoo5} alt="#id" />
              </div>
              <div className="center">
                <img src={yahoo4} alt="#id" />
              </div>
              <div className="center">
                <img src={yahoo3} alt="#id" />
              </div>
              <div className="center">
                <img src={yahoo2} alt="#id" />
              </div>
              <div className="center">
                <img src={yahoo1} alt="#id" />
              </div>
              <div className="center">
                <img src={yahoo4} alt="#id" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
