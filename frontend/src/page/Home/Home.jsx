import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import logohome from "../../assets/logos/logohome.svg";
import "./Home.scss";

function Home() {
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/artworks")
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

  const contenuDesktop = (
    <div className="containerhome">
      <div className="afac">
        <div className="imghome">
          <img className="logohome" src={logohome} alt="logo afac" />
        </div>

        <div className="text">
          <p>
            L’Association des HomePageFamilles Amies de Capeline 974 souhaite
            mettre à disposition des élèves de l’Océan Indien et de leurs
            familles des ressources spécifiques aux espaces ultramarins.
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
        <div className="slide-track-home">
          {artworks.map((artwork, index) => (
            <div key={artwork.id}>
              <img
                className={index % 2 === 0 ? "sliderart1" : "sliderart2"}
                src={`http://localhost:5000/assets/images/image/${artwork.url}`}
                alt="art"
              />
            </div>
          ))}
          {artworks.map((artwork, index) => (
            <div key={artwork.id}>
              <img
                className={index % 2 === 0 ? "sliderart1" : "sliderart2"}
                src={`http://localhost:5000/assets/images/image/${artwork.url}`}
                alt="art"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const contenuTablette = (
    <div className="background-image">
      <div className="opacity">
        <div className="container-background-opacity">
          <div className="container-description-home-opacity">
            <div className="description-home">
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
            </div>
            <div className="hexagon-button">
              <div className="hexagon-voir">
                <div className="voir">Voir</div>
                <div>les oeuvres</div>
              </div>
            </div>
          </div>
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

export default Home;
