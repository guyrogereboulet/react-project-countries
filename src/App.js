import React from "react";
//per fare la navigazione devo importare il routing
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

//Dopo aver creato il nostro file Js, digitando rsc possiamo creare

//Lo switch testa se tutte le rotte sono valide altrimenti mette un errore 404

//Il route ci permette di individuare il percorso della pagina

//Con l'attributo path  diamo il percorso mentre con "exact" specifichiamo esattamente questa rotta
