import "./App.scss";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element="" />
        <Route path="/galerie" element="" />
        <Route path="/apropos" element="" />
      </Routes>{" "}
    </>
  );
}
