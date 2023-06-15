import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";
import HomePage from "./assets/components/HomePage/HomePage";

export default function App() {
  return (
    <div className="app_container">
      <div className="navapp">
        <Navbar />
      </div>
      <div className="containerapp">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galerie" element="" />
          <Route path="/apropos" element="" />
        </Routes>
      </div>
    </div>
  );
}
