/* eslint-disable */
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./carousel.scss";
import "./Galerie.scss";
import Heart from "react-animated-heart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/authContext";
import { useContext } from "react";

function Card({ artwork }) {
  const { user } = useContext(AuthContext);
  const [isClick, setClick] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    // Fetch the user's favorites when the component mounts or when the user changes
    fetchUserFavorites();
  }, [user]);

  const fetchUserFavorites = () => {
    if (user && user.id) {
      axios
        .get(`http://localhost:5000/favori/${user.id}`)
        .then((response) => {
          setUserFavorites(response.data.map((fav) => fav.artworks_id));
          // Check if the artwork is in the user's favorites and update the heart state accordingly
          setClick(response.data.some((fav) => fav.artworks_id === artwork.id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
          .then((response) => {
            setClick(false);
            fetchUserFavorites();
            removed();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Add the artwork to user's favorites
        axios
          .post("http://localhost:5000/favori", {
            user_id: user.id,
            artworks_id: artwork.id,
          })
          .then((response) => {
            setClick(true);
            fetchUserFavorites();
            added();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  let subtitle;

  const added = () => toast.success("Ajouté aux favoris!");
  const removed = () => toast.success("Supprimé des favoris!");

  return (
    <>
      <div className="imageContainerGal">
        <img
          src={`http://localhost:5000/assets/images/image/${artwork?.url}`}
          alt={artwork?.full_title}
          onClick={openModal}
        />

        <Heart
          className="heart"
          isClick={isClick}
          onClick={() => {
            toggleFavorite();
          }}
        />
        <h3>{artwork?.full_title}</h3>
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
            src={`http://localhost:5000/assets/images/image/${artwork?.url}`}
          />
          <div className="details">
            <h1>{artwork?.full_title}</h1>
            <h2>{artwork?.category}</h2>
            <h2>
              <b>{artwork?.technique}</b>
            </h2>
            <p>{artwork?.description}</p>
            <a href={artwork?.related_article}>link</a>
            <br />
            <a href="/authors">Page auteur</a>
          </div>
        </div>
      </Modal>
      <ToastContainer
        position="top-right"
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

export default Card;
