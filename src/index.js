import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss"; //Importo lo stile scss

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Usando un framework come React non c'è bisogno di convertire ilm file "scss" in file csss.
