import React, { useState } from "react";
import axios from "axios";
import "../FormRegister/FormRegisterStyle.scss";

function FormRegister() {
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
        // Réinitialiser le formulaire après soumission réussie
        setFormData({
          name: "",
          mail: "",
          password: "",
        });
      })
      .catch();
  };

  return (
    <div className="login-box">
      <p>
        <a href="Home">AFAC 974</a>
        <br />
        <p className="inscription-text">Inscription</p>
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

        <div class="button-container">
          <button type="submit">S'inscrire</button>
        </div>
      </form>
       {/* Lien pour créer un compte */}
       <p className="account-sign-up">
        Vous avez déjà un compte ?{" "}
        <a href="login" className="suscribe">
          Se connecter.
        </a>
      </p>
    </div>
  );
}

export default FormRegister;
