import "./Card.scss";
import "./flip-transition.scss";
/* import "./src/assets/logos/AfacFlip.png";
 */
export default function Card({ onClick }) {
  return (
    <div className="CardFlip" onClick={onClick}>
      <div className="frontCard">Front</div>
      <div className="backCard">
        Back
        {/*         <img className="Logo" src={AfacFlip.png} alt="" />
         */}{" "}
      </div>
    </div>
  );
}
