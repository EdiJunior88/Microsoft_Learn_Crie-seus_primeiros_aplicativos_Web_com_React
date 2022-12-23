import React from "react";

// TODO: Importar ListaIngredientes
import ListaIngredientes from "./ListaIngredientes";

// TODO: Adicionar importação para o ReceitaTitulo
import ReceitaTitulo from "./ReceitaTitulo";
import "./index.css";
import EtapasReceita from "./EtapasReceita";

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

    etapas: [
      { parte: "Adicione as batatas cortadas a uma panela com água e sal." },
      { parte: "Leve a panela para ferver." },
      {
        parte:
          "Ferva as batatas até ficarem macias, por cerca de 15 a 20 minutos.",
      },
      { parte: "Coe as batatas." },
      { parte: "Coloque-as novamente na panela." },
      {
        parte:
          "Adicione a manteiga, o creme de leite, o sal e a pimenta a gosto.",
      },
      { parte: "Amasse as batatas." },
      {
        parte:
          "Tempere novamente e adicione a manteiga e o creme de leite conforme desejado.",
      },
    ],
  };

  return (
    <article>
      <h1>Gerenciador de Receitas</h1>
      {/* TODO: Adicionar componente ReceitaTitulo */}
      <ReceitaTitulo titulo={receita.titulo} feedback={receita.feedback} />
      {/* TODO: Adicionar componente ListaIngredientes */}
      <ListaIngredientes ingredientes={receita.ingredientes} />
      <EtapasReceita etapas={receita.etapas} />
    </article>
  );
}

export default App;
