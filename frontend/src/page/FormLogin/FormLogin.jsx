import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormLogin.scss";
import { AuthContext } from "../../Context/authContext";

function FormLogin() {
  const { setUser, setIsconnected } = useContext(AuthContext);
  const navigate = useNavigate();
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
      .post("http://localhost:5000/login", formData)
      .then(({ data }) => {
        const { user } = data;
        setFormData({
          mail: "",
          password: "",
        });

        // Set the user using the setUser function from the AuthContext
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setIsconnected(true);
        navigate("/account/favoris");
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
