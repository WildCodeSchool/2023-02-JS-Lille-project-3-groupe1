import React from "react";
import "./LoginRegisterStyle.scss";

function LoginRegisterForm() {
  return (
    <div className="login-box">
      <p>AFAC 974</p>
      <form>
        <div className="user-box">
          <input required name="" type="text" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input required name="" type="password" />
          <label>Mot de passe</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Se connecter
        </a>
      </form>

      <p className="account-sign-up">
        Vous n'avez pas de compte ?{" "}
        <a href="" className="a2">
          S'inscrire !
        </a>
      </p>

    </div>
  );
}

export default LoginRegisterForm;
