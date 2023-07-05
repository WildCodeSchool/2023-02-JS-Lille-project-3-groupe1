import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginRegisterStyle.scss";

function LoginRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    // Expression régulière pour vérifier le format de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (value === "") {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError("Adresse e-mail invalide");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError !== "") {
      console.log("Adresse e-mail invalide");
      return;
    }

    // Le reste du code de soumission du formulaire...
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-form">
      <div className="title-form">AFAC 974</div>
      <div className="enter-informations">
        Entrez vos informations de connexion
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <span className="enter-id"></span>
          <input
            type="text"
            placeholder="Entrez votre adresse mail"
            required
            value={email}
            onChange={handleEmailChange}
            className=""
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="form-group py-1 pb-2">
          <div className="input-field">
            <span className="fas fa-lock p-2"></span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Entrez votre mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=""
            />
            <button
              className="btn bg-white text-muted"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={faEyeSlash} />
            </button>
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="ml-auto">
            <a href="#" id="forgot">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
        <button className="btn btn-block text-center my-3">Se connecter</button>
        <div className="text-center form text-muted">
          Pas encore inscrit ? <a href="#">S'inscrire</a>
        </div>
      </form>
    </div>
  );
}

export default LoginRegisterForm;
