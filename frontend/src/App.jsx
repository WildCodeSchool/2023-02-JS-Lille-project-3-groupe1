import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Author from "./page/Home/Author";
import Carousel from "./components/Carousel/carousel";

export default function App() {
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
          <Route path="/authors" element={<Author />} />
        </Routes>
      </div>
      <div className="footerapp">
        <Footer />
      </div>
    </div>
  );
}
