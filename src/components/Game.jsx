import React, { useEffect, useState } from "react";

import { getRandomRockPaperScissor } from "../utils/utils";

const Game = () => {
  const RockPaperScissor = ["👊🏻", "🤚🏻", "✌🏻"];

  const [playerChoice, setPlayerChoice] = useState("");
  const [cpuChoice, setCpuChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [counter, setCounter] = useState({ playerwin: 0, cpuWin: 0, draw: 0 });

  const handleChoice = (e) => {
    setPlayerChoice(e.target.innerHTML);
    setCpuChoice(RockPaperScissor[getRandomRockPaperScissor()]);
    handleWinner();
  };

  const handleReset = () => {
    setCounter({ ...counter, playerwin: 0, cpuWin: 0, draw: 0 });
    setPlayerChoice("");
    setCpuChoice("");
    setWinner("");
  };

  const handleWinner = () => {
    if (playerChoice === cpuChoice) {
      return (
        setWinner("Empate"), setCounter({ ...counter, draw: counter.draw + 1 })
      );
    }

    (playerChoice === "👊🏻" && cpuChoice === "✌🏻") ||
    (playerChoice === "🤚🏻" && cpuChoice === "👊🏻") ||
    (playerChoice === "✌🏻" && cpuChoice === "🤚🏻")
      ? (setWinner("Gana el Jugador"),
        setCounter({ ...counter, playerwin: counter.playerwin + 1 }))
      : (setWinner("Gana CPU"),
        setCounter({ ...counter, cpuWin: counter.cpuWin + 1 }));
  };

  return (
    <main>
      <header>
        <h1>/ / Piedra, Papel o Tijera</h1>
        <h2>Puntaje</h2>
        <ul>
          <li>Jugardor: {counter.playerwin}</li>
          <li>CPU: {counter.cpuWin}</li>
          <li>Empates: {counter.draw}</li>
        </ul>
        {winner !== "" && <h2>{winner}</h2>}
        <button onClick={handleReset}>Reset</button>
      </header>
      <section>
        <article className="container">
          <div onClick={handleChoice} className="square">
            👊🏻
          </div>
          <div onClick={handleChoice} className="square">
            🤚🏻
          </div>
          <div onClick={handleChoice} className="square">
            ✌🏻
          </div>
        </article>
      </section>
      <section className="container">
        <article>
          <h2>JUGADOR</h2>
          <div className="square">{playerChoice}</div>
        </article>
        <article>
          <h2>CPU</h2>
          <div className="square">{cpuChoice}</div>
        </article>
      </section>
    </main>
  );
};

export default Game;
