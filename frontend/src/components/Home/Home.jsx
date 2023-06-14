import { NavLink } from "react-router-dom";
import logohome from "../../assets/logos/logohome.svg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="containerhome">
      <div className="afca">
        <div className="imghome">
          <img className="logohome" src={logohome} alt="logo afca" />
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
          <span className="sliderart1">dsd</span>
        </div>
      </div>
    </div>
  );
}
