import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from "axios";

import Card from "./card";

import "./Galerie.scss";
import "./carousel.scss";

import "swiper/swiper-bundle.css";

function GaleriePG() {
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/artworks")
      .then((response) => {
        setArtworks(response.data); // Utiliser response.data pour obtenir le tableau d'auteurs
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setLargeurEcran(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contenuDesktop = (
    <div className="galleryContainer">
      {artworks.map((artwork) => (
        <Card key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const contenuTablette = (
    <div className="swiper-container">
      {/* <Swiper
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
      </Swiper> */}
    </div>
  );

  return (
    <div>
      {largeurEcran > 1181 ? (
        contenuDesktop
      ) : (
        <div className="tablet-container">{contenuTablette}</div>
      )}
    </div>
  );
}

export default GaleriePG;
