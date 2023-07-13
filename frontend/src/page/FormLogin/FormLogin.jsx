import React, { useState } from "react";
import axios from "axios";
import "../../components/LoginForm/LoginRegisterStyle.scss";

function FormLogin() {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

  return (
    <div className="login-box">
      <p>
        <a href="Home">AFAC 974</a>
      </p>
      <form onSubmit={handleSubmit}>
        {/* Champ de saisie de l'email */}
        <div className="user-box">
          <label>Email</label>

          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
    {/* Champ de saisie du mot de passe */}
    <div className="user-box">
        <label>
          Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />     
    </div>
        {/* Bouton de connexion */}
        <div className="connexion-button">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Se connecter
          </a>
        </div>
      </form>
      {/* Lien pour réinitialiser le mot de passe */}
      <p className="forgot-password">
        <a href="" className="forgot-password">
          Mot de passe oublié ?
        </a>
      </p>

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
