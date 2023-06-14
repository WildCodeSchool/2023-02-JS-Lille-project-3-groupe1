import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logos/nega.png";
import profil from "../../assets/logos/profil.png";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="logo">
        <img className="logo" src={logo} alt="HomePage" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galerie"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Galerie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            À propos
          </NavLink>
        </li>
      </ul>
      <NavLink to="/profil" className={profil}>
        <img className="profil" src={profil} alt="Profil" />
      </NavLink>
    </nav>
  );
}
