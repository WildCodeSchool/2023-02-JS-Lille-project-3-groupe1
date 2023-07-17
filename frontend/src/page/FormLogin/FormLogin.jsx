import React, { useState } from "react";
import axios from "axios";
import "../FormLogin/FormLogin.scss";
import { useEffect } from "react";

function FormLogin() {
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
    [];
  };

  return (
    <div className="login-box">
      <p>
        <a href="Home">AFAC 974</a>
      </p>
      <form onSubmit={handleSubmit}>
        {/* Champ de saisie de l'email */}
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
        {/* Champ de saisie du mot de passe */}
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
        {/* Bouton de connexion */}
        <div class="button-container">
          <button>Se connecter</button>
        </div>
      </form>

      {/* Lien pour créer un compte */}
      <p className="account-sign-up">
        Vous n'avez pas de compte ?{" "}
        <a href="" className="suscribe">
          S'inscrire !
        </a>
      </p>
    </div>
  );
}

export default FormLogin;
