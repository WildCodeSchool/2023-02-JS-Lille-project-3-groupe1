import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../../../page/Galerie/card";
import { AuthContext } from "../../../Context/authContext";
import "./Favoris.scss";

function Favoris() {
  const [userFavorites, setUserFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  const [artworks, setArtworks] = useState([]);

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
  }, [userFavorites, user]);

  useEffect(() => {
    // Define setClick state variable here if required

    axios
      .get("http://localhost:5001/artworks")
      .then((response) => {
        setArtworks(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="containerfav">
      {userFavorites.map((artworkId) => (
        <div className="imageContainerfavoris" key={artworkId}>
          <Card
            artwork={artworks.find((artwork) => artwork.id === artworkId)}
            isFavorite={userFavorites.includes(artworkId)}
          />
        </div>
      ))}
    </div>
  );
}

export default Favoris;
