import React from "react";
import "./EtapasReceita.css"

function EtapasReceita(props) {
  const listasEtapasReceita = props.etapas.map((etapa, index) => {
    return <li key={index} className="lista">{etapa.parte}</li>;
  });

  return <ol>{listasEtapasReceita}</ol>;
}

export default EtapasReceita;
