// import react
import React from 'react';

// import swiper
import { Pagination } from 'swiper';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.css';

export default function ReactPaginationCustom() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>custom 1</SwiperSlide>
      <SwiperSlide>custom 2</SwiperSlide>
      <SwiperSlide>custom 3</SwiperSlide>
      <SwiperSlide>custom 4</SwiperSlide>
      <SwiperSlide>custom 5</SwiperSlide>
      <SwiperSlide>custom 6</SwiperSlide>
      <SwiperSlide>custom 7</SwiperSlide>
      <SwiperSlide>custom 8</SwiperSlide>
      <SwiperSlide>custom 9</SwiperSlide>
    </Swiper>
  );
}
