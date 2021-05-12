import React from "react";
import logo from "./logo.svg";
import Topo from "./components/Topo";

function App() {
  return (
    <>
      <Topo/>
      <main className="principal">
        <h2>Últimos Lançamentos</h2>
        <div className="card">Card</div>
      </main>
      <footer className="rodape">
        <p>Conteúdos cedidos pela Editora Novatec &#8212; Copyright 2020</p>
      </footer>
    </>
  );
}

export default App;
