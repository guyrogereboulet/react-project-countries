import React from "react";
//importiamo NavLink che ci permetterà di navigare di pagina in pagina
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Home
      </NavLink>
      <NavLink exact to="/about" activeClassName="nav-active">
        About
      </NavLink>
    </div>
  );
};

export default Navigation;

//Con l'attributo "activeClassName" so su quale classe sto navigando
//Inoltre mi permette di stilizzarlo con l'scss
