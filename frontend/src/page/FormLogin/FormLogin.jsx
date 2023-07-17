import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./FormLoginStyle.scss";

function FormLogin({ onFormOpen, onFormClose }) {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/login", formData, {
        withCredentials: true,
      })
      .then(() => {
        setFormData({
          mail: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };

  useEffect(() => {
    onFormOpen();
    return () => {
      onFormClose();
    };
  }, [onFormOpen, onFormClose]);

  return (
    <div className="login-box">
      <div>
        <a href="/" className="title-form">
          AFAC 974
        </a>
      </div>
      <form onSubmit={handleSubmit}>
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
        {/* Bouton de connexion */}
        <div className="button-container">
          <button type="submit">Se connecter</button>
        </div>
      </form>

      {/* Lien pour créer un compte */}
      <p className="account-sign-up">
        Pas encore membre ?{" "}
        <a href="/register" className="subscribe">
          Inscrivez-vous dès maintenant !
        </a>
      </p>
    </div>
  );
}

FormLogin.propTypes = {
  onFormOpen: PropTypes.func.isRequired,
  onFormClose: PropTypes.func.isRequired,
};

export default FormLogin;
