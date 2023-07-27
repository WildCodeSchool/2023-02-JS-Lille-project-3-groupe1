import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Galerie.scss";
import "./carousel.scss";
import "swiper/swiper-bundle.css";
import ContenuTablette from "./ContenuTablette";
import ContenuDesktop from "./desktop";

function GaleriePG() {
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/artworks")
      .then((response) => {
        setArtworks(response.data);
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

  return (
    <div>
      {artworks.length > 0 && (
        <div>
          {largeurEcran > 1181 ? (
            <ContenuDesktop artworks={artworks} />
          ) : (
            <div className="tablet-container">
              <ContenuTablette artworks={artworks} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GaleriePG;
