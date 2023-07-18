import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import Favoris from "../../components/accountcard/Favoris/Favoris";
import News from "../../components/accountcard/News/News";
import { AuthContext } from "../../Context/authContext";
import "./Account.scss";

function Account({ activeTab, onTabChange }) {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div className="container-boutton">
        <button className="logout" onClick={handleLogout} type="submit">
          Se déconnecter
        </button>
      </div>
      <div className="container_account">
        <div className="onglet">
          <NavLink
            to="/account/favoris"
            className={`liste ${
              activeTab === "favoris" ? "active" : "inactive"
            }`}
            onClick={() => handleTabClick("favoris")}
          >
            Favoris
          </NavLink>
          <NavLink
            to="/account/news"
            className={`liste ${activeTab === "news" ? "active" : "inactive"}`}
            onClick={() => handleTabClick("news")}
          >
            News
          </NavLink>
        </div>
        {activeTab === "favoris" && <Favoris />}
        {activeTab === "news" && <News />}
      </div>
    </div>
  );
}
Account.propTypes = {
  activeTab: PropTypes.oneOf(["favoris", "news"]).isRequired,
  onTabChange: PropTypes.func.isRequired,
};
export default Account;
