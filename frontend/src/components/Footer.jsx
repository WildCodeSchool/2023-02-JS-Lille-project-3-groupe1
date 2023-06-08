import Logo1 from "../assets/ObjetTemoin/Logos - Objet Témoin/PNG/Logo1.png";
import Wild from "../assets/ObjetTemoin/Logos - Objet Témoin/PNG/Wild.png";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="ImgObj">
        {" "}
        {<img className="ImgLog" src={Logo1} alt="Logo1"></img>}
        <p>Remerciement à notre partenaire Objet Témoin.</p>
      </div>
      <div className="ImgWild">
        {<img className="ImgLog2" src={Wild} alt="Wild"></img>}
        <p>Projet en collaboration avec la Wild Code School.</p>
      </div>
    </div>
  );
}
