import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginRegisterStyle.scss";

function LoginRegisterForm() {
  const [email, setEmail] = useState(""); // État pour stocker l'adresse e-mail de l'utilisateur
  const [password, setPassword] = useState(""); // État pour stocker le mot de passe de l'utilisateur
  const [emailError, setEmailError] = useState(""); // État pour stocker les erreurs relatives à l'adresse e-mail
  const [showPassword, setShowPassword] = useState(false); // État pour indiquer si le mot de passe est visible ou masqué

  const validateEmail = (email) => {
    // Expression régulière pour valider le format de l'adresse e-mail
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

    // Ajoutez ici le code de soumission du formulaire...
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-form">
      <div className="title-form">AFAC 974</div> {/* Titre du formulaire */}
      <div className="enter-informations">
        Entrez vos informations de connexion
      </div> {/* Message d'invitation à entrer les informations de connexion */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-informations">
          <span className="enter-id"></span> {/* Icône pour l'adresse e-mail */}
          <input
            type="mail"
            placeholder="Entrez votre adresse mail"
            required
            value={email}
            onChange={handleEmailChange}
            className="input-informations"
          />
          {emailError && <div className="error-message">{emailError}</div>} {/* Affiche le message d'erreur si l'adresse e-mail est invalide */}
        </div>
        <div className="form-group">
          <div className="input-informations">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Entrez votre mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-informations"
            />
            <button
              className="eye-icon"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={faEyeSlash} /> {/* Bouton pour afficher ou masquer le mot de passe */}
            </button>
          </div>
        </div>
        <div className="forgot-password">
          <div>
            <a href="#" id="forgot">
              Mot de passe oublié ?
            </a> {/* Lien pour réinitialiser le mot de passe */}
          </div>
        </div>
        <button className="submit-button text-center my-3">Se connecter</button> {/* Bouton pour soumettre le formulaire de connexion */}
        <div className="text-center form text-muted">
          Pas encore inscrit ? <a href="#">S'inscrire</a> {/* Lien pour s'inscrire */}
        </div>
      </form>
    </div>
  );
}

export default LoginRegisterForm;
