import React from "react";
import Modal from "react-modal";

import caille from "../../../assets/image/caille.jpg";
import "./Galerie.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Card() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  return (
    <>
      <div className="imageContainer" onClick={openModal}>
        <img src={caille} alt="Card" />
        <h2>Caille</h2>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Image"
      >
        <div className="fullCard">
          <img className="imageFull" src={caille} />
          <div className="details">
            {" "}
            <h1>Caille</h1>
            <h2>Animaux</h2>
            <h2>
              <b>Aquarelle</b>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              incidunt molestiae quas, officia accusantium, debitis vero eos
              assumenda molestias quo, nemo quibusdam dolore rerum libero
              facere. In ipsum ducimus ex.
            </p>
            <a href="#">Link to articles</a>{" "}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Card;
