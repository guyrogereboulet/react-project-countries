import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries />
    </div>
  );
};

//Esporto il componente Home che può essere utilizzato su qualsiasi pagina
export default Home;
