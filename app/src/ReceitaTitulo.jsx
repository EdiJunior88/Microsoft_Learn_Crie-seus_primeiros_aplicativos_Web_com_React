import React from "react";
import "./ReceitaTitulo.css";

//TODO: Criar componente ReceitaTitulo
function ReceitaTitulo(props) {
  return (
    <section>
      <h2>{props.titulo}</h2>
      <h3 className={props.feedback.nota <= 3.5 ? "vermelho" : "verde"}>
        {props.feedback.nota} de {props.feedback.avaliacao} avaliações
      </h3>
    </section>
  );
}

export default ReceitaTitulo;
