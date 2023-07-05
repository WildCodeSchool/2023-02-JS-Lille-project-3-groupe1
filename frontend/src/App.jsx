import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/carousel";
import Account from "./page/Account/Account";
import Authors from "./page/Author/Author";

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
          <Route path="/galerie" element={<Carousel />} />
          <Route path="/apropos" element="" />
          <Route path="/authors" element={<Authors />} />
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
