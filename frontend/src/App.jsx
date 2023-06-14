import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <div className="appcontainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element="" />
        <Route path="/apropos" element="" />
      </Routes>
    </div>
  );
}
