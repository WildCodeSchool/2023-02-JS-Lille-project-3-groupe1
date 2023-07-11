import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./FormLogin.scss";

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
        // console.log("Requête réussie :", response);
        // Réinitialiser le formulaire après soumission réussie
        setFormData({
          mail: "",
          password: "",
        });

        // Obtenir le cookie renvoyé par le serveur
        const token = Cookies.get("token");
        /* eslint-disable */
        console.log("Cookie reçu :", token);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };

  return (
    <div className="containerlogin">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default FormLogin;
