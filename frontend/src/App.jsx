import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import LoginRegisterForm from "./components/LoginForm/LoginRegisterForm";
import Carousel from "./components/Carousel/carousel";

export default function App() {
  return (
    <div className="appcontainer">

      <div className="containerapp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Carousel />} />
          <Route path="/apropos" element="" />
          <Route path="/login" element={<LoginRegisterForm/>} />

        </Routes>
      </div>
    
   
    </div>
  );
}
