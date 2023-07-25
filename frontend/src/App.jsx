import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Account from "./page/Account/Account";
import Authors from "./page/Author/Author";
import GaleriePG from "./page/Galerie/Galeriepg";
import FormLogin from "./page/FormLogin/FormLogin";
import FormRegister from "./page/FormRegister/FormRegister";
import About from "./components/About/About";
import { AuthContext } from "./Context/authContext";
import "./App.scss";

export default function App() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("favoris");
  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(true);

  // Disable right-click on the entire site
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.body.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.body.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFormOpen = () => {
    setShowNavbarAndFooter(false);
  };

  const handleFormClose = () => {
    setShowNavbarAndFooter(true);
  };

  return (
    <div className="appcontainer">
      {showNavbarAndFooter && (
        <div className="navapp">
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<GaleriePG />} />
        <Route path="/authors" element={<Authors />} />
        <Route
          path="/login"
          element={
            <FormLogin
              onFormOpen={handleFormOpen}
              onFormClose={handleFormClose}
            />
          }
        />
        <Route
          path="/register"
          element={
            <FormRegister
              onFormOpen={handleFormOpen}
              onFormClose={handleFormClose}
            />
          }
        />
        <Route path="/apropos" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route
          path="/account/favoris"
          element={
            user.id !== undefined ? (
              <Account activeTab={activeTab} onTabChange={handleTabChange} />
            ) : (
              ""
            )
          }
        />
        <Route
          path="/account/news"
          element={
            user.id !== undefined ? (
              <Account activeTab={activeTab} onTabChange={handleTabChange} />
            ) : (
              ""
            )
          }
        />
      </Routes>
      {showNavbarAndFooter && (
        <div className="footerapp">
          <Footer />
        </div>
      )}
    </div>
  );
}
