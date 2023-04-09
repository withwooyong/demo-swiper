import React from 'react';

// import swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const index = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>index2 1</SwiperSlide>
      <SwiperSlide>index2 2</SwiperSlide>
      <SwiperSlide>index2 3</SwiperSlide>
      <SwiperSlide>index2 4</SwiperSlide>
      <SwiperSlide>index2 5</SwiperSlide>
      <SwiperSlide>index2 6</SwiperSlide>
      <SwiperSlide>index2 7</SwiperSlide>
      <SwiperSlide>index2 8</SwiperSlide>
      <SwiperSlide>index2 9</SwiperSlide>
    </Swiper>
  );
};

export default index;
