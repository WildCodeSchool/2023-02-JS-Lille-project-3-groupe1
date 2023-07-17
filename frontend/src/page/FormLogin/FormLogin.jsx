import React, { useState } from "react";
import axios from "axios";
import "./FormLogin.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormLogin() {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const notify = () => toast.success("Connecté");
  const incorrect = () =>
    toast.error("Mauvais identifiants, veuillez recommencer");

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
        notify();
        setFormData({
          mail: "",
          password: "",
        });
      })
      .catch((error) => {
        incorrect();
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
        <ToastContainer />

        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default FormLogin;
