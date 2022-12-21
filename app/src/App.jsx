import React from "react";

// TODO: Adicionar importação para o ReceitaTitulo
import ReceitaTitulo from "./ReceitaTitulo";
import "./index.css";

function App() {
  // TODO: Adicionar objeto de receita
  const objeto = {
    titulo: "Purê de batatas",
    feedback: {
      avaliacao: 4.8,
      reviews: 20,
    },

    ingredientes: [
      { nome: "3 batatas, cortadas pela metade", preparado: false },
      { nome: "4 colheres de sopa de manteiga", preparado: false },
      { nome: "1/8 xícara de creme de leite", preparado: false },
      { nome: "Sal", preparado: true },
      { nome: "Pimenta", preparado: true },
    ],
  };

  return (
    <article>
      <h1>Gerenciador de Receitas</h1>
      {/* TODO: Adicionar componente ReceitaTitulo */}
      <ReceitaTitulo titulo={objeto.titulo} />
    </article>
  );
}

export default App;
