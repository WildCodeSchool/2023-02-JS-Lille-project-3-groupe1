import React, { useState } from "react";
import axios from "axios";
import "./form_connection.scss";

function LoginForm() {
  const [formData, setFormData] = useState({
    mail: "",
    hashedPassword: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/login", formData)
      .then(() => {
        // console.log("Requête réussie :", response);
        // Réinitialiser le formulaire après soumission réussie
        setFormData({
          mail: "",
          hashedPassword: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };

  return (
    <div className="container">
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
            name="hashedPassword"
            value={formData.hashedPassword}
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

export default LoginForm;
