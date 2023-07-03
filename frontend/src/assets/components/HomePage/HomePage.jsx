import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./HomePageStyle.scss";
import logohome from "../../logos/logohome.svg";
import img1 from "../../image/AD974_40FI72-ChanvertGolo.jpg";
import img2 from "../../image/caille.jpg";
import img3 from "../../image/FRAD974_40FI52.jpg";
import img5 from "../../image/MORTIER.de.TREVISE_Mr.Bourraye.dans.jardin.Casernes_1861.jpg";
import img6 from "../../image/UsineBelAir_40FI78.jpg";

function HomePage() {
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);

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
    <div className="containerhome">
      <div className="afac">
        <div className="imghome">
          <img className="logohome" src={logohome} alt="logo afac" />
        </div>

        <div className="text">
          <p>
            L’Association des Familles Amies de Capeline 974 souhaite mettre à
            disposition des élèves de l’Océan Indien et de leurs familles des
            ressources spécifiques aux espaces ultramarins.
          </p>
          <p>
            Plongez au cœur de la magie artistique lors de notre exposition
            exclusive dédiée aux œuvres de l'artiste renommé Hippolyte Mortier
            de Trévise. Avec une virtuosité exceptionnelle, Mortier de Trévise
            donne vie à ses dessins et aquarelles, révélant un monde empreint de
            beauté et d'émotion. Ses dessins, d'une précision remarquable,
            captent chaque détail avec une habileté remarquable, tandis que ses
            aquarelles transmettent une douceur et une délicatesse qui invitent
            à l'émerveillement.
          </p>
        </div>
      </div>

      <NavLink to="/galerie" className="galerie">
        Voir les œuvres
      </NavLink>

      <div className="sliderhome">
        <div>
          <img className="sliderart1" src={img1} alt="art" />
        </div>
        <div>
          <img className="sliderart2" src={img2} alt="art" />
        </div>
        <div>
          <img className="sliderart1" src={img3} alt="art" />
        </div>
        <div>
          <img className="sliderart2" src={img3} alt="art" />
        </div>
        <div>
          <img className="sliderart1" src={img5} alt="art" />
        </div>
        <div>
          <img className="sliderart2" src={img6} alt="art" />
        </div>
        <div>
          <img className="sliderart1" src={img6} alt="art" />
        </div>
        <div>
          <img className="sliderart2" src={img1} alt="art" />
        </div>
      </div>
    </div>
  );

  const contenuTablette = (
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
            engagée à soutenir les élèves de l'Océan Indien et leurs familles en
            leur offrant des ressources spécifiques aux espaces ultramarins.
            Nous sommes fiers de contribuer à leur épanouissement éducatif,
            culturel et social, et de jouer un rôle significatif dans le
            renforcement des communautés ultramarines. <br /> <br />
            Dans le cadre des prestigieuses Journées Européennes du Patrimoine
            2023, notre association a entrepris un projet d'envergure : la
            création d'une galerie virtuelle novatrice. Cette galerie sera le
            fruit d'un travail minutieux, mettant en valeur une sélection
            rigoureuse d'une vingtaine d'aquarelles et de dessins représentatifs
            de notre patrimoine artistique.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {largeurEcran >= 1181 ? contenuDesktop : <div>{contenuTablette}</div>}
    </div>
  );
}

export default HomePage;
