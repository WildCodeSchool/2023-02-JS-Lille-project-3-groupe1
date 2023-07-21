import React, { useState, useEffect } from "react";
import Card from "../../../page/Galerie/card";
import { useContext } from "react";
import { AuthContext } from "../../../Context/authContext";
import axios from "axios";

function Favoris({ artworks }) {
  const [userFavorites, setUserFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch the user's favorites when the component mounts or when the user changes
    fetchUserFavorites();
  }, [user]);

  const fetchUserFavorites = () => {
    if (user && user.id) {
      axios
        .get(`http://localhost:5000/favori/${user.id}`)
        .then((response) => {
          setUserFavorites(response.data.map((fav) => fav.artworks_id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {artworks.map((artwork) => (
        <Card
          key={artwork.id}
          artwork={artwork}
          isFavorite={userFavorites.includes(artwork.id)}
        />
      ))}
    </div>
  );
}

export default Favoris;
