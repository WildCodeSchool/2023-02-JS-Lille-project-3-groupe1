import React, { useState, useEffect } from "react";
import axios from "axios";
import "../FormLogin/FormLoginStyle.scss";

function FormRegister({ onFormOpen, onFormClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    password: "",
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
      <p>
      <a href="/" className="title-form">
          AFAC 974
        </a>
        <br />
        <p className="information-section-text">Inscription</p>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Nom</label>
        </div>

        <div className="user-box">
          <input
            type="email"
            id="email"
            name="mail"
            autoComplete="off"
            value={formData.mail}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Mot de passe</label>
        </div>

        <div className="button-container">
          <button type="submit">S'inscrire</button>
        </div>
      </form>

      <p className="account-sign-up">
        Vous êtes déjà membre ?{" "}
        <a href="login" className="suscribe">
          Connectez-vous ici.
        </a>
      </p>
    </div>
  );
}

export default FormRegister;
