import React from 'react';

// import swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.min.css';

const index = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>index 1</SwiperSlide>
      <SwiperSlide>index 2</SwiperSlide>
      <SwiperSlide>index 3</SwiperSlide>
      <SwiperSlide>index 4</SwiperSlide>
      <SwiperSlide>index 5</SwiperSlide>
      <SwiperSlide>index 6</SwiperSlide>
      <SwiperSlide>index 7</SwiperSlide>
      <SwiperSlide>index 8</SwiperSlide>
      <SwiperSlide>index 9</SwiperSlide>
    </Swiper>
  );
};

export default index;
