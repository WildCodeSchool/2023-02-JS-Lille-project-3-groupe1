import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import PropTypes from "prop-types";

import "swiper/swiper-bundle.css";

function ContenuTablette({ artworks }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      key={artworks.map((artwork) => artwork.id)}
      className="swiper-container"
    >
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
        {artworks.map((artwork) => (
          <SwiperSlide key={artwork.id}>
            <img
              src={`http://localhost:5001/assets/images/image/${artwork.url}`}
              alt="nature"
            />
          </SwiperSlide>
        ))}
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
        {artworks.map((artwork) => (
          <SwiperSlide key={artwork.id} className="swiperThumb">
            <img
              src={`http://localhost:5001/assets/images/image/${artwork.url}`}
              alt="nature"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

ContenuTablette.propTypes = {
  artworks: PropTypes.arrayOf().isRequired,
};
export default ContenuTablette;
