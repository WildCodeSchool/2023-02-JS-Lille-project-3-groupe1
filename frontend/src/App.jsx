import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import GaleriePG from "./page/Galerie/Galeriepg";
import UserForm from "./page/formulaire inscription/Formulaire_inscription";
import LoginForm from "./page/form_connection/form_connection";

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
          <Route path="/apropos" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
      <div className="footerapp">
        <Footer />
      </div>
    </div>
  );
}
