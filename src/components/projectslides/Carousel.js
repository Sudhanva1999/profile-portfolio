import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import './Carousel.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const Carousel = ({ slides }) => {

  return (
  //   <Swiper
  //   // install Swiper modules
  //   modules={[Navigation, Pagination, Scrollbar, A11y]}
  //   spaceBetween={50}
  //   slidesPerView={3}
  //   navigation
  //   pagination={{ clickable: true }}
  //   scrollbar={{ draggable: true }}
  //   onSwiper={(swiper) => console.log(swiper)}
  //   onSlideChange={() => console.log('slide change')}
  // >
  //   {slides.map((slide, index) => (
  //         <SwiperSlide> {slide}</SwiperSlide>
  //       ))}
  // </Swiper>

<Swiper
effect={'cards'}
grabCursor={true}
modules={[EffectCards]}
className="mySwiper"
>
{slides.map((slide) => (
          <SwiperSlide> {slide}</SwiperSlide>
        ))}
</Swiper>
  );
};

export default Carousel;
