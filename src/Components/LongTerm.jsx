import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import simg1 from '../assets/images/simg1.png'
import simg2 from '../assets/images/simg2.png'
import simg3 from '../assets/images/simg3.png'
import simg4 from '../assets/images/simg4.png'
import simg5 from '../assets/images/simg5.png'
import simg6 from '../assets/images/simg6.png'

const LongTerm = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
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
    <div id='longterm' className='bg-[#F6F6F6]'>
        <div className='container mx-auto pt-16 pb-16 px-3'>
            <div>
                <h4 className='md:text-[48px] sm:text-[36px] text-[23px]  font-light ff_use '>
                Long Term <span className='md:text-[48px] sm:text-[36px] text-[23px]  font-light ff_use  flex block'>WordPress Partner</span>
                </h4>
                <p className='text-base font-light ff_rgilroy pt-3'>Our motto is the long-term partnership – we will not only develop your perfect website, but will <span className='text-base font-light ff_rgilroy flex block'>be behind you through the whole process. They already trusted us:</span></p>

                <div className="pt-8 ">
          <Slider {...settings}>
            <div className='center'>
              <img src={simg1} alt="#id" />
            </div>
            <div className='center'>
              <img src={simg2} alt="#id" />
            </div>
            <div className='center'>
              <img src={simg3} alt="#id" />
            </div>
            <div className='center'>
              <img src={simg4} alt="#id" />
            </div>
            <div className='center'>
              <img src={simg5} alt="#id" />
            </div>
            <div className='center'>
              <img src={simg6} alt="#id" />
            </div>
            <div className='center'>
              <img src={simg3} alt="#id" />
            </div>
            </Slider>
          </div>


            </div>

        </div>
    </div>
    </>
  )
}

export default LongTerm