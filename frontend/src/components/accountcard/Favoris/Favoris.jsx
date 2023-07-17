import React from "react";
import caille from "../../../../../backend/public/assets/images/image/caille.jpg";
import "./Favoris.scss";

function Favoris() {
  return (
    <div>
      <div className="containerfav">
        <div className="imageContainer">
          <img className="caillee" src={caille} alt="Card" />
          <h2>Caille</h2>
        </div>
        <div className="imageContainer">
          <img className="caillee" src={caille} alt="Card" />
          <h2>Caille</h2>
        </div>
        <div className="imageContainer">
          <img className="caillee" src={caille} alt="Card" />
          <h2>Caille</h2>
        </div>
      </div>
    </div>
  );
}

export default Favoris;
