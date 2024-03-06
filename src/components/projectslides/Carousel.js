import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import './Carousel.css'

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ slides }) => {

  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation]}
      className="mySwiper"
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled"
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide> {slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
