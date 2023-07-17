/* eslint-disable */
import { CSSTransition } from "react-transition-group";
import "./About.scss";
import { useState } from "react";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";

export default function AproposFlipCard() {
  const [showFront, setShowFront] = useState(true);
  const [showFront2, setShowFront2] = useState(true);

  const flipCard1 = () => {
    setShowFront((flip) => !flip);
  };

  const flipCard2 = () => {
    setShowFront2((flip) => !flip);
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
