/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
// Import Swiper React components
import "swiper/scss"; // eslint-disable-line
// import "swiper/react";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import "./carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react"; // eslint-disable-line

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"; // eslint-disable-line

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop
        spaceBetween={10}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="nature"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgbot"
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="nature"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
