import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import "./flip-transition.scss";

export default function Card({ onClick }) {
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
      <div className="frontCard" />
      <div className="backCard">
        <p>
          L'Association des Familles Amies de Capeline 974 est une organisation
          engagée dans la promotion et la préservation du patrimoine culturel
          des espaces ultramarins, en particulier dans la région de l'Océan
          Indien. Notre mission consiste à offrir des ressources spécifiques aux
          élèves et à leurs familles, dans le but de favoriser la compréhension
          et l'appréciation des cultures ultramarines.Dans le cadre des
          prestigieuses Journées Européennes du Patrimoine 2023, notre
          association a entrepris un projet d'envergure : la création d'une
          galerie virtuelle novatrice. Cette galerie sera le fruit d'un travail
          minutieux, mettant en valeur une sélection rigoureuse d'une vingtaine
          d'aquarelles et de dessins représentatifs de notre patrimoine
          artistique. L'objectif principal de cette initiative est d'offrir une
          expérience immersive et captivante aux visiteurs du site. Grâce à une
          numérisation méticuleuse, les reproductions numériques permettront aux
          visiteurs de découvrir les œuvres d'art avec une qualité et un
          réalisme saisissants, comme s'ils se trouvaient physiquement dans une
          exposition réelle.
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
};
