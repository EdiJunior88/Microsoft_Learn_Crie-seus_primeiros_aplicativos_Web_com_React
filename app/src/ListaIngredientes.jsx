import React from "react";
import "./ListaIngredientes.css";

function ListaIngredientes(props) {
  //Criando a lista de itens usando o map
  const listaItensIngrediente = props.ingredientes.map((ingrediente, index) => {
    return (
      ///Retorna o HTML desejado para cada ingrediente
      <li key={index} className={ingrediente.preparado ? "preparado" : ""}>
        {ingrediente.nome}
      </li>
    );
  });

  // Retorna o HTML para o componente
  // ListaItensIngrediente serão renderizados como elementos li
  return <ul>{listaItensIngrediente}</ul>;
}

export default ListaIngredientes;
