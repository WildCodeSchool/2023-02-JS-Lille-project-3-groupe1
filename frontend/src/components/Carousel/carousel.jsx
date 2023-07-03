import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import useineBelAir from "../../assets/image/UsineBelAir_40FI78.jpg";
import treviseCannes from "../../assets/image/trevise-cannes_1861.jpg";
import "./carousel.scss";
import lapli from "../../assets/image/lapli Tampon.jpg";
import girl from "../../assets/image/MORTIERTREVISE_Elise_1861.jpg";

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiper-container">
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
          <img src={treviseCannes} alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lapli} alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={useineBelAir} alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={girl} alt="nature" />
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
          <img src={treviseCannes} alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lapli} alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={useineBelAir} alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={girl} alt="nature" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
