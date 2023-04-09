import React from 'react';
// import swiper core and required modules
import { Navigation, Pagination } from 'swiper';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ReactPaginationProgress() {
  return (
    <Swiper
      // install Swiper modules
      pagination={{ type: 'progressbar' }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>Progress 1</SwiperSlide>
      <SwiperSlide>Progress 2</SwiperSlide>
      <SwiperSlide>Progress 3</SwiperSlide>
      <SwiperSlide>Progress 4</SwiperSlide>
      <SwiperSlide>Progress 5</SwiperSlide>
      <SwiperSlide>Progress 6</SwiperSlide>
      <SwiperSlide>Progress 7</SwiperSlide>
      <SwiperSlide>Progress 8</SwiperSlide>
      <SwiperSlide>Progress 9</SwiperSlide>
    </Swiper>
  );
}
