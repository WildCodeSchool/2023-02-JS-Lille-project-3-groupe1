/* eslint-disable */
import React from "react";
import Modal from "react-modal";
import "./Galerie.scss";

function Card({ artwork }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  console.log(artwork);
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
        <img
          src={`http://localhost:5000/assets/images/image/${artwork.url}`}
          alt="Card"
        />
        <h3>{artwork.full_title}</h3>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Image"
      >
        <div className="fullCard">
          <img
            className="imageFull"
            src={`http://localhost:5000/assets/images/image/${artwork.url}`}
          />
          <div className="details">
            <h1>{artwork.full_title}</h1>
            <h2>{artwork.category}</h2>
            <h2>
              <b>{artwork.technique}</b>
            </h2>
            <p>{artwork.description}</p>
            <a href={artwork.related_article}>link</a>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Card;
