import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Author from "./components/Author/Author";
import Carousel from "./components/carousel";

export default function App() {
  return (
    <div className="appcontainer">
      <div className="navapp">
        <Navbar />
      </div>
      <div className="containerapp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Author />} />
          <Route path="/apropos" element="" />
        </Routes>
      </div>
      <div className="footerapp">
        <Footer />
      </div>
    </div>
  );
}
