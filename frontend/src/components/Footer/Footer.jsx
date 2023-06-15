import { Link } from "react-router-dom";
import Logo1 from "../../assets/ObjetTemoin/Logos - Objet Témoin/PNG/Logo1.png";
import Wild from "../../assets/ObjetTemoin/Logos - Objet Témoin/PNG/Wild.png";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="ImgObj">
        <Link to="https://museo.vandanjon.com/index.php/en/">
          <img className="ImgLog" src={Logo1} alt="Logo1" />
        </Link>

        <p>Remerciement à notre partenaire Objet Témoin.</p>
      </div>

      <div className="ImgWild">
        <Link to="https://www.wildcodeschool.com/fr-FR">
          <img className="ImgLog2" src={Wild} alt="Wild" />
        </Link>

        <p>Projet en collaboration avec la Wild Code School.</p>
      </div>
    </div>
  );
}
