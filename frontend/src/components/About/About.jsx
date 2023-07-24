/* eslint-disable */
import "./About.scss";
import afacCardFront from "../../assets/logos/AfacFlip.png";
import objetTemoinCardFront from "../../assets/ObjetTemoin/Logos - Objet Témoin/PNG/OT-3.png"
export default function AproposFlipCard() {
  return (
    <div className="container">
      <div class="card">
        <div class="card-inner">
          <div className="card-front-img">
            <img src={afacCardFront} className="card-front-img" alt="logo afac" />
          </div>
          <div class="card-back">
            <p className="card-back-text">
              L'Association des Familles Amies de Capeline 974 est une
              organisation engagée dans la promotion et la préservation du
              patrimoine culturel des espaces ultramarins, en particulier dans
              la région de l'Océan Indien. Notre mission consiste à offrir des
              ressources spécifiques aux élèves et à leurs familles, dans le but
              de favoriser la compréhension et l'appréciation des cultures
              ultramarines. <br />
              Dans le cadre des prestigieuses Journées Européennes du Patrimoine
              2023, notre association a entrepris un projet d'envergure : la
              création d'une galerie virtuelle novatrice. Cette galerie sera le
              fruit d'un travail minutieux, mettant en valeur une sélection
              rigoureuse d'une vingtaine d'aquarelles et de dessins
              représentatifs de notre patrimoine artistique. <br /> L'objectif
              principal de cette initiative est d'offrir une expérience
              immersive et captivante aux visiteurs du site. Grâce à une
              numérisation méticuleuse, les reproductions numériques permettront
              aux visiteurs de découvrir les œuvres d'art avec une qualité et un
              réalisme saisissants, comme s'ils se trouvaient physiquement dans
              une exposition réelle.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
        <div className="card-front-img">
            <img src={objetTemoinCardFront} className="card-front-img" alt="logo afac" />
          </div>
          <div className="card-back"> 
          <a href="https://museo.vandanjon.com/index.php/en/">
          <button className="button-card-back">Objet Témoin</button>
          </a>
            <p className="card-back-text">
           
              Notre mission: La notion de patrimoine couvre un large éventail de
              domaines, des niches écologiques, aux archives, œuvres d'art ou
              objets anciens, mais aussi des objets plus conceptuels et des
              "œuvres de l'esprit" qui n'ont pas nécessairement de manifestation
              physique. <br />
              Objet Témoin est un laboratoire d'étude, de production et de
              transmission du patrimoine à l'ère du numérique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
