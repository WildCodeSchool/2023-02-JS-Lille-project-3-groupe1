import React from "react";
import "./HomePageStyle.scss";

function HomePage() {
  return (
    <div>
      <div className="background-image">
        <div className="container-background-opacity">
          <div className="container-description-home-opacity">
            <div className="hexagon-button">
              <p className="hexagon-text">⬢</p>

              <p className="hexagon-voir">Voir</p>
              <p className="hexagon-para">les oeuvres</p>
            </div>
            <p className="description-home">
              L'Association des Familles Amies de Capeline 974 est résolument
              engagée à soutenir les élèves de l'Océan Indien et leurs familles
              en leur offrant des ressources spécifiques aux espaces
              ultramarins. Nous sommes fiers de contribuer à leur épanouissement
              éducatif, culturel et social, et de jouer un rôle significatif
              dans le renforcement des communautés ultramarines. <br /> <br />
              Dans le cadre des prestigieuses Journées Européennes du Patrimoine
              2023, notre association a entrepris un projet d'envergure : la
              création d'une galerie virtuelle novatrice. Cette galerie sera le
              fruit d'un travail minutieux, mettant en valeur une sélection
              rigoureuse d'une vingtaine d'aquarelles et de dessins
              représentatifs de notre patrimoine artistique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
