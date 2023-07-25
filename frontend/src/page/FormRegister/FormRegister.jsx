import React, { useState, useEffect } from "react";
import axios from "axios";
import "../FormLogin/FormLoginStyle.scss";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

function FormRegister({ onFormOpen, onFormClose }) {
  const notify = () => toast.success("Créé");

  const [formData, setFormData] = useState({
    name: "", // Champ pour le nom
    mail: "", // Champ pour l'email
    password: "", // Champ pour le mot de passe
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users", formData)
      .then(() => {
        setFormData({
          name: "",
          mail: "",
          password: "",
        });
        notify();
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };

  useEffect(() => {
    if (typeof onFormOpen === "function") {
      onFormOpen();
    }
    return () => {
      if (typeof onFormClose === "function") {
        onFormClose();
      }
    };
  }, [onFormOpen, onFormClose]);

  return (
    <div className="loginpage">
      <ToastContainer />
      <div className="login-box">
        {/* En-tête du formulaire */}
        <div>
          <a href="/" className="title-form">
            AFAC 974
          </a>
        </div>
        {/* Formulaire d'inscription */}
        <form onSubmit={handleSubmit}>
          {/* Champ de saisie du nom */}
          <div className="user-box">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Champ de saisie de l'email */}
          <div className="user-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="mail"
              autoComplete="off"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>
          {/* Champ de saisie du mot de passe */}
          <div className="user-box">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Bouton de soumission */}
          <div className="button-container">
            <button type="submit">S'inscrire</button>
          </div>
        </form>
        {/* Lien pour se connecter */}
        <p className="account-sign-up">
          Vous êtes déjà membre ?{" "}
          <a href="login" className="subscribe">
            Connectez-vous ici.
          </a>
        </p>
      </div>
    </div>
  );
}

// Spécification des types des propriétés attendues par le composant
FormRegister.propTypes = {
  onFormOpen: PropTypes.func.isRequired,
  onFormClose: PropTypes.func.isRequired,
};

export default FormRegister;
