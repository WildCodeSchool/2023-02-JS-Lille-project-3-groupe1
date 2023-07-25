import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logos/nega.png";
import profil from "../../assets/logos/profil.png";
import profil1 from "../../assets/logos/profil1.png";

import { AuthContext } from "../../Context/authContext";

export default function Navbar() {
  const { isconnected } = useContext(AuthContext);

  return (
    <nav>
      <NavLink to="/" className="logo">
        <img className="logo-img" src={logo} alt="HomePage" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-inactive"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galerie"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-inactive"
            }
          >
            Galerie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-inactive"
            }
          >
            À propos
          </NavLink>
        </li>
      </ul>

      {isconnected ? (
        <NavLink to="/account/favoris" className="profil">
          <img className="profil" src={profil1} alt="Profil" />
        </NavLink>
      ) : (
        <NavLink to="/login">
          <img className="profil" src={profil} alt="Profil" />
        </NavLink>
      )}
    </nav>
  );
}
