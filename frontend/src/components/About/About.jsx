import "./About.scss";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";

export default function AproposFlipCard() {
  const [showFront, setShowFront] = useState(true);
  const [showFront2, setShowFront2] = useState(true);

  const flipCard1 = () => {
    setShowFront((v) => !v);
  };

  const flipCard2 = () => {
    setShowFront2((v) => !v);
  };

  return (
    <div className="container">
      <div className="FlipCardComp">
        <CSSTransition in={showFront} timeout={300} classNames="Flip">
          <Card onClick={flipCard1} />
        </CSSTransition>
      </div>

      <div className="FlipCardComp">
        <CSSTransition in={showFront2} timeout={300} classNames="Flip">
          <Card2 onClick={flipCard2} />
        </CSSTransition>
      </div>
    </div>
  );
}
