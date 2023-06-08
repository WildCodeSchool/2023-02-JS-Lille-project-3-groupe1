import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./assets/components/Home/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element="" />
        <Route path="/apropos" element="" />
      </Routes>
    </>
  );
}
