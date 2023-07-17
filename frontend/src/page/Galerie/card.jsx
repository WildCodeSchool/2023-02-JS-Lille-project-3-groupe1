/* eslint-disable */
import React, { useState } from "react";
import Modal from "react-modal";
import "./carousel.scss";
import "./Galerie.scss";
import Heart from "react-animated-heart";
import axios from "axios";

function Card({ artwork }) {
  const [isClick, setClick] = useState(false);

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

  let user_id = 1;

  // localStorage.getItem("userId");
  function addToFavorites() {
    axios
      .post("http://localhost:5000/favori", {
        user_id,
        artworks_id: artwork.id,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function removeFromFavorites() {
    axios
      .delete(`http://localhost:5000/favori/:id`, {
        data: {
          user_id,
          artworks_id: artwork.id,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="imageContainerGal">
        <img
          src={`http://localhost:5000/assets/images/image/${artwork.url}`}
          alt={artwork.full_title}
          onClick={openModal}
        />{" "}
        <Heart
          className="heart"
          isClick={isClick}
          onClick={() => {
            setClick(!isClick);
            if (isClick) {
              removeFromFavorites();
            } else {
              addToFavorites();
            }
          }}
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
