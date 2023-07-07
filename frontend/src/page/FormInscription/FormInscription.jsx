import React, { useState } from "react";
import axios from "axios";
import "./FormInscription.scss";

function FormInscription() {
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <br />
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
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default FormInscription;
