import React from "react";
import "./LoginRegisterStyle.scss";

function LoginRegisterForm() {
  return (
    <div className="login-box">
      <p>
        <a href="Home">AFAC 974</a>
      </p>
      <form>
        <div className="user-box">
          <input required name="" type="text" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input required name="" type="password" />
          <label>Mot de passe</label>
        </div>
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
      <p className="forgot-password">
        <a href="" className="forgot-password">
          Mot de passe oublié ?
        </a>
      </p>

      <p className="account-sign-up">
        Vous n'avez pas de compte ?{" "}
        <a href="" className="suscribe">
          S'inscrire !
        </a>
      </p>
    </div>
  );
}

export default LoginRegisterForm;
