/* eslint-disable */

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop type validations
import Modal from "react-modal";
import "./carousel.scss";
import "./Galerie.scss";
import Heart from "react-animated-heart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/authContext";

function Card({ artwork }) {
  const { user, isconnected } = useContext(AuthContext);
  const [isClick, setClick] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userFavorites, setUserFavorites] = useState([]);
  const added = () => toast.success("Ajouté aux favoris!");
  const removed = () => toast.success("Supprimé des favoris!");
  const notLoggedin = () =>
    toast.info("Veuillez vous connecter ou créer un compte pour cela !");

  const fetchUserFavorites = () => {
    if (user && user.id) {
      axios
        .get(`http://localhost:5000/favori/${user.id}`)
        .then((response) => {
          setUserFavorites(response.data.map((fav) => fav.artworks_id));
          // Check if the artwork is in the user's favorites and update the heart state accordingly
          setClick(response.data.some((fav) => fav.artworks_id === artwork.id));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    // Fetch the user's favorites when the component mounts or when the user changes
    fetchUserFavorites();
  }, [userFavorites]);

  function toggleFavorite() {
    if (user && user.id) {
      if (userFavorites.includes(artwork.id)) {
        // Remove the artwork from user's favorites
        axios
          .delete(`http://localhost:5000/favori/${user.id}`, {
            data: {
              user_id: user.id,
              artworks_id: artwork.id,
            },
          })
          .then(() => {
            setClick(false);
            fetchUserFavorites();
            removed();
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        // Add the artwork to user's favorites
        axios
          .post("http://localhost:5000/favori", {
            user_id: user.id,
            artworks_id: artwork.id,
          })
          .then(() => {
            setClick(true);
            fetchUserFavorites();
            added();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }

  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function handleHeartClick() {
    if (!isconnected) {
      notLoggedin();
    } else {
      toggleFavorite();
    }
  }

  function handleImageClick() {
    openModal();
  }

  return (
    <>
      <div className="imageContainerGal">
        <img
          src={`http://localhost:5000/assets/images/image/${artwork?.url}`}
          alt={artwork?.full_title}
          onClick={handleImageClick}
        />

        <Heart className="heart" onClick={handleHeartClick} isClick={isClick} />

        <h3>{artwork?.full_title}</h3>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Image"
        style={{
          overlay: { background: "rgba(0, 0, 0, 0.8)" },
          content: { background: "rgb(202, 201, 199)" },
        }}
      >
        <div className="fullCard">
          <img
            className="imageFull"
            src={`http://localhost:5000/assets/images/image/${artwork?.url}`}
            alt={artwork?.full_title} // Add alt prop to img element
          />
          <div className="details">
            <h1>{artwork?.full_title}</h1>
            {artwork ? <h2>{artwork.short_title}</h2> : ""}
            <h2>Categorie: {artwork?.category}</h2>
            <h2>
              <b>Technique: {artwork?.technique}</b>{" "}
            </h2>
            <p>Référence image: {artwork?.img_ref}</p>
            <p>{artwork?.description}</p>
            {artwork ? (
              <a href={artwork?.related_article}>En savoir plus...</a>
            ) : (
              ""
            )}
            <br />
            <a href="/authors">Page auteur</a>
          </div>
        </div>
      </Modal>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </>
  );
}

Card.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    full_title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    technique: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    related_article: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
