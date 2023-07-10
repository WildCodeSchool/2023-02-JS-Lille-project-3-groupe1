import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import "./flip-transition.scss";
import LogoImg from "../../assets/ObjetTemoin/Logos - Objet Témoin/PNG/OT-3.png";

export default function Card2({ onClick }) {
  const handleClick = (event) => {
    if (event.key === "" || event.key === " ") {
      onClick();
    }
  };

  return (
    <div
      className="CardFlip"
      onClick={onClick}
      onKeyDown={handleClick}
      tabIndex={0}
      role="button"
    >
      <div className="frontCard">
        <img className="ImgFlip2" src={LogoImg} alt="Logo" />
      </div>
      <div className="backCard">
        Notre mission: La notion de patrimoine couvre un large éventail de
        domaines, des niches écologiques, aux archives, œuvres d'art ou objets
        anciens, mais aussi des objets plus conceptuels et des "œuvres de
        l'esprit" qui n'ont pas nécessairement de manifestation physique. Objet
        Témoin est un laboratoire d'étude, de production et de transmission du
        patrimoine à l'ère du numérique.
      </div>
    </div>
  );
}

Card2.propTypes = {
  onClick: PropTypes.func.isRequired,
};
