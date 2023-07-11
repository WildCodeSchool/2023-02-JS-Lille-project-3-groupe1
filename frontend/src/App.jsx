import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import GaleriePG from "./page/Galerie/Galeriepg";
import Author from "./components/Author/Author";
import About from "./components/About/About";
import Account from "./page/Account/Account";
import "./App.scss";

export default function App() {
  const [activeTab, setActiveTab] = useState("favoris");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="appcontainer">
      <div className="navapp">
        <Navbar />
      </div>
      <div className="containerapp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<GaleriePG />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/authors" element={<Author />} />
          <Route
            path="/account/favoris"
            element={
              <Account activeTab={activeTab} onTabChange={handleTabChange} />
            }
          />
          <Route
            path="/account/news"
            element={
              <Account activeTab={activeTab} onTabChange={handleTabChange} />
            }
          />
        </Routes>
      </div>

      <div className="footerapp">
        <Footer />
      </div>
    </div>
  );
}
