import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="appcontainer">
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element="" />
        <Route path="/apropos" element="" />
      </Routes>
    </div>
  );
}
