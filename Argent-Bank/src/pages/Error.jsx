/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Error.scss";

const Error = () => {
  return (
    <>
      <Navbar />
      <>
        <h1 className="error">
          <span> Ooops....!</span>
          <span> Erreur 404</span>
          <span>la page est introuvable</span>
        </h1>
        <NavLink to="/" className="errorLink">
          Retour à la page d'accueil
        </NavLink>
      </>
      <Footer />
    </>
  );
};

export default Error;
