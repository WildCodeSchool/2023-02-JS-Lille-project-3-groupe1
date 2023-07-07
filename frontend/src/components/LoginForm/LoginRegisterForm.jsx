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
        <div className="text-information-input">
        <div className="input-informations">
          <span className="enter-id"></span>
          <input className="email-text"
            type="mail"
            placeholder="Entrez votre adresse mail"
            required
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="form-group">
          <div className="input-informations">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Entrez votre mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button className="eye-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={faEyeSlash} />
            </button>
          </div>
          </div>
        </div>
        <div className="forgot-password">
          <div>
            <a href="#" id="forgot">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
        <button className="submit-button text-center my-3">Se connecter</button>
        <div className="inscription-text">
          Pas encore inscrit ? <a href="#">S'inscrire</a>
        </div>
      </form>
    </div>
  );
}

export default LoginRegisterForm;
