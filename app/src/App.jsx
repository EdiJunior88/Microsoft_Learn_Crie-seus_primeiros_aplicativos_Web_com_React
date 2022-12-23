import React from "react";

// TODO: Importar ListaIngredientes
import ListaIngredientes from "./ListaIngredientes";

// TODO: Adicionar importação para o ReceitaTitulo
import ReceitaTitulo from "./ReceitaTitulo";
import "./index.css";

function App() {
  // TODO: Adicionar objeto de receita
  const receita = {
    titulo: "Purê de batatas",
    feedback: {
      nota: 4.8,
      avaliacao: 20,
    },

    ingredientes: [
      { nome: "3 batatas, cortadas pela metade", preparado: false },
      { nome: "4 colheres de sopa de manteiga", preparado: false },
      { nome: "1/8 de xícara de creme de leite", preparado: false },
      { nome: "Sal", preparado: true },
      { nome: "Pimenta", preparado: true },
    ],
  };

  return (
    <article>
      <h1>Gerenciador de Receitas</h1>
      {/* TODO: Adicionar componente ReceitaTitulo */}
      <ReceitaTitulo titulo={receita.titulo} feedback={receita.feedback} />
      {/* TODO: Adicionar componente ListaIngredientes */}
      <ListaIngredientes ingredientes={receita.ingredientes} />
    </article>
  );
}

export default App;
