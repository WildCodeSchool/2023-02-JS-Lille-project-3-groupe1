import React from "react";
import "./LoginRegisterStyle.scss";

function LoginRegisterForm() {
  return (
    <div className="login-box">
      <p>
        <a href="Home">AFAC 974</a>
      </p>
      <form>
        {/* Champ de saisie de l'email */}
        <div className="user-box">
          <input required name="" type="text" />
          <label>Email</label>
        </div>
        {/* Champ de saisie du mot de passe */}
        <div className="user-box">
          <input required name="" type="password" />
          <label>Mot de passe</label>
        </div>
        {/* Bouton de connexion */}
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
      {/* Lien pour réinitialiser le mot de passe */}
      <p className="forgot-password">
        <a href="" className="forgot-password">
          Mot de passe oublié ?
        </a>
      </p>

      {/* Lien pour créer un compte */}
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
