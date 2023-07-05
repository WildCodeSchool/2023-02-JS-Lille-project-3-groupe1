import "./About.scss";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Card from "../Card/Card";

export default function AproposFlipCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="FlipCardComp">
      <CSSTransition in={showFront} timeout={300} classNames="Flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}
