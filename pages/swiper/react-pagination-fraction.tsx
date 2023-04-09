import React from 'react';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

export default function ReactPaginationFraction() {
  return (
    <>
      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>fraction 1</SwiperSlide>
        <SwiperSlide>fraction 2</SwiperSlide>
        <SwiperSlide>fraction 3</SwiperSlide>
        <SwiperSlide>fraction 4</SwiperSlide>
        <SwiperSlide>fraction 5</SwiperSlide>
        <SwiperSlide>fraction 6</SwiperSlide>
        <SwiperSlide>fraction 7</SwiperSlide>
        <SwiperSlide>fraction 8</SwiperSlide>
        <SwiperSlide>fraction 9</SwiperSlide>
      </Swiper>
    </>
  );
}
