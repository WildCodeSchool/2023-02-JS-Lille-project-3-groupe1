import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import Favoris from "../../components/accountcard/Favoris/Favoris";
import News from "../../components/accountcard/News/News";
import { AuthContext } from "../../Context/authContext";
import "./Account.scss";

function Account({ activeTab, onTabChange }) {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext); // Assuming you have a 'user' object in your AuthContext.

  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container-page-account">
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
            to="/account/Programme"
            className={`liste ${
              activeTab === "Programme" ? "active" : "inactive"
            }`}
            onClick={() => handleTabClick("Programme")}
          >
            Programme
          </NavLink>
        </div>
        {activeTab === "favoris" && <Favoris user={user} />}
        {activeTab === "Programme" && <News />}
      </div>
    </div>
  );
}

Account.propTypes = {
  activeTab: PropTypes.oneOf(["favoris", "Programme"]).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Account;
