// import swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SwiperReact() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>default 1</SwiperSlide>
      <SwiperSlide>default 2</SwiperSlide>
      <SwiperSlide>default 3</SwiperSlide>
      <SwiperSlide>default 4</SwiperSlide>
      <SwiperSlide>default 5</SwiperSlide>
      <SwiperSlide>default 6</SwiperSlide>
      <SwiperSlide>default 7</SwiperSlide>
      <SwiperSlide>default 8</SwiperSlide>
      <SwiperSlide>default 9</SwiperSlide>
    </Swiper>
  );
}
