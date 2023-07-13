import React from "react";
import "./LoginRegisterStyle.scss";

function LoginRegisterForm() {
  return (
    <div className="login-box">
      <p>AFAC 974</p>
      <form>
        <div className="user-box">
          <label>
            <input required name="" type="text" />
            Email
          </label>
        </div>
        <div className="user-box">
          <label>
            <input required name="" type="password" />
            Mot de passe
          </label>
        </div>
        <a href="https://www.google.com/">
          <span />
          <span />
          <span />
          <span />
          Se connecter
        </a>
      </form>
      <p>
        Vous n'avez pas de compte ?
        <a href="https://www.google.com/" className="a2">
          Se connecter
        </a>
      </p>
    </div>
  );
}

export default LoginRegisterForm;
