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

  const shortTitle = artwork ? artwork.short_title : null;
  const category = artwork?.category;
  const technique = artwork?.technique;
  const imgRef = artwork?.img_ref;
  const description = artwork?.description;
  const relatedArticle = artwork?.related_article;

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
            alt={artwork?.full_title}
          />
          <div className="details">
            <h1>{artwork?.full_title}</h1>
            {shortTitle && <h2>{shortTitle}</h2>}
            {category && <h2>Categorie: {category}</h2>}
            {technique && (
              <h2>
                <b>Technique: {technique}</b>
              </h2>
            )}
            {imgRef && <p>Référence image: {imgRef}</p>}
            {description && <p>{description}</p>}
            {relatedArticle && <a href={relatedArticle}>En savoir plus...</a>}
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
