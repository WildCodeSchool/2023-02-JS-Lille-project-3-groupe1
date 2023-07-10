import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import GaleriePG from "./page/Galerie/Galeriepg";
import Author from "./components/Author/Author";
import About from "./components/About/About";

export default function App() {
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
        </Routes>
      </div>
      <div className="footerapp">
        <Footer />
      </div>
    </div>
  );
}
