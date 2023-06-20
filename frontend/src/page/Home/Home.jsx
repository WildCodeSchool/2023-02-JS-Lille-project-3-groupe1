import { NavLink } from "react-router-dom";
import logohome from "../../assets/logos/logohome.svg";
import "./Home.scss";
import img1 from "../../assets/image/AD974_40FI72-ChanvertGolo.jpg";
import img2 from "../../assets/image/caille.jpg";
import img3 from "../../assets/image/FRAD974_40FI52.jpg";
import img4 from "../../assets/image/FRAD974_40FI80.jpg";
import img5 from "../../assets/image/MORTIER.de.TREVISE_Mr.Bourraye.dans.jardin.Casernes_1861.jpg";
import img6 from "../../assets/image/UsineBelAir_40FI78.jpg";

export default function Home() {
  return (
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
      {/* bas de la home */}
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
          <img className="sliderart2" src={img4} alt="art" />
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
          <img className="sliderart2" src={img4} alt="art" />
        </div>
      </div>
    </div>
  );
}
