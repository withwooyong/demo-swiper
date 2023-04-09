import React, { useRef, useState } from 'react';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

export default function ReactNavigation() {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      <SwiperSlide>navigation 1</SwiperSlide>
      <SwiperSlide>navigation 2</SwiperSlide>
      <SwiperSlide>navigation 3</SwiperSlide>
      <SwiperSlide>navigation 4</SwiperSlide>
      <SwiperSlide>navigation 5</SwiperSlide>
      <SwiperSlide>navigation 6</SwiperSlide>
      <SwiperSlide>navigation 7</SwiperSlide>
      <SwiperSlide>navigation 8</SwiperSlide>
      <SwiperSlide>navigation 9</SwiperSlide>
    </Swiper>
  );
}
