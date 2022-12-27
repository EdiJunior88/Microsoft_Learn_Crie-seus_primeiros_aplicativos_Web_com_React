import React from "react";
import App from "../App";
import { BrowseRouter, Route } from "react-router-dom";

function Rotas() {
  return (
    <BrowseRouter>
      <Route component={App} path='/' exact />
    </BrowseRouter>
  );
}

export default Rotas;
