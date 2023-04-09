import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ReactPaginationDynamic() {
  return (
    <Swiper
      // install Swiper modules
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>Dynamic 1</SwiperSlide>
      <SwiperSlide>Dynamic 2</SwiperSlide>
      <SwiperSlide>Dynamic 3</SwiperSlide>
      <SwiperSlide>Dynamic 4</SwiperSlide>
      <SwiperSlide>Dynamic 5</SwiperSlide>
      <SwiperSlide>Dynamic 6</SwiperSlide>
      <SwiperSlide>Dynamic 7</SwiperSlide>
      <SwiperSlide>Dynamic 8</SwiperSlide>
      <SwiperSlide>Dynamic 9</SwiperSlide>
    </Swiper>
  );
}
