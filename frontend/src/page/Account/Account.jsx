import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import Favoris from "../../components/accountcard/Favoris/Favoris";
import News from "../../components/accountcard/News/News";
import "./Account.scss";

function Account() {
  const location = useLocation();
  const activeTab =
    location.pathname === "/account/favoris" ? "favoris" : "news";

  return (
    <div className="container_account">
      <div className="onglet">
        <NavLink
          to="/account/favoris"
          className={`liste ${activeTab === "favoris" ? "active" : "inactive"}`}
        >
          Favoris
        </NavLink>
        <NavLink
          to="/account/news"
          className={`liste ${activeTab === "news" ? "active" : "inactive"}`}
        >
          News
        </NavLink>
      </div>
      {activeTab === "favoris" && <Favoris />}
      {activeTab === "news" && <News />}
    </div>
  );
}

export default Account;
