import * as React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main">
      <div>Bem vindo à mobx</div>
      <img
        alt="Carro na estrada"
        className="carro"
        src="https://www.autoinforme.com.br/wp-content/uploads/2020/03/GM-tracker_2021.jpg"
      ></img>
      <button>
        <Link to="/marcas">Marcas</Link>
      </button>
    </main>
  );
}

export default Home;
