// import axios from "axios";
// import { useEffect, useState } from "react";
// import Galerie from "./Galerie";
import Card from "./card";
import "./Galerie.scss";

function GaleriePG() {
  //   const [image, setImages] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/artworks")
  //       .then((response) => {
  //         setImages(response.data); // Utiliser response.data pour obtenir le tableau d'oeuvres
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }, []);

  //   return (
  //     <div>
  //       {image.map((artwork) => (
  //         <Galerie key={artwork.id} imageUrl={image[0]} />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className="galleryContainer">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default GaleriePG;
