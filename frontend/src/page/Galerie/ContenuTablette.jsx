import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import PropTypes from "prop-types";
import Heart from "react-animated-heart";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { AuthContext } from "../../Context/authContext";

function ContenuTablette({ artworks }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchUserFavorites = () => {
    if (user && user.id) {
      axios
        .get(`http://localhost:5001/favori/${user.id}`)
        .then((response) => {
          setUserFavorites(response.data.map((fav) => fav.artworks_id));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    fetchUserFavorites();
  }, [user]);

  function toggleFavorite(artworkId) {
    if (user && user.id) {
      if (userFavorites.includes(artworkId)) {
        // Remove the artwork from user's favorites
        axios
          .delete(`http://localhost:5001/favori/${user.id}`, {
            data: {
              user_id: user.id,
              artworks_id: artworkId,
            },
          })
          .then(() => {
            fetchUserFavorites();
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        // Add the artwork to user's favorites
        axios
          .post("http://localhost:5001/favori", {
            user_id: user.id,
            artworks_id: artworkId,
          })
          .then(() => {
            fetchUserFavorites();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }

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
        {artworks.map((artwork) => (
          <SwiperSlide key={artwork.id}>
            <div style={{ position: "absolute", right: "0" }}>
              <Heart
                className="heart"
                isClick={userFavorites.includes(artwork.id)}
                onClick={() => {
                  toggleFavorite(artwork.id);
                }}
              />
            </div>
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
