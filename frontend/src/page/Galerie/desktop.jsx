import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import PropTypes from "prop-types";

import Card from "./card";
import "./Galerie.scss";
import "./carousel.scss";
import "swiper/swiper-bundle.css";

function ContenuDesktop({ artworks }) {
  const [slideshow, setSlideshow] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  function startSlideShow() {
    setSlideshow(!slideshow);
  }

  return (
    <div className="containerpagedestop">
      <button
        className="slideshow-button"
        type="button"
        onClick={startSlideShow}
      >
        {slideshow ? "Galerie" : "Carrousel"}
      </button>
      {slideshow ? (
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
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {artworks.map((artwork) => (
              <SwiperSlide key={artwork.id}>
                <img
                  src={`http://localhost:5000/assets/images/image/${artwork.url}`}
                  alt="k"
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
                  src={`http://localhost:5000/assets/images/image/${artwork.url}`}
                  alt="nature"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="galleryContainer">
          {artworks.map((artwork) => (
            <Card key={artwork.id} artwork={artwork} className="child" />
          ))}
        </div>
      )}
    </div>
  );
}

ContenuDesktop.propTypes = {
  artworks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      // Add other necessary PropTypes for artwork object properties
    })
  ).isRequired,
};

export default ContenuDesktop;
