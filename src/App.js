import "./App.scss";
import { useRef, useState } from "react";
import ConsoleInput from "./components/ConsoleInput";
import ConsoleOutput from "./components/ConsoleOutput";

function App() {

  return (
    <div
      className="App"
    >
      <div className="title-banner">
        <p className="game-title">THE PIT</p>
      </div>
      <div className="game-frame">
        <div className="console-output">
          <ConsoleOutput />
        </div>
        <div className="console-input">
          <ConsoleInput />
        </div>
      </div>
    </div>
  );
}

export default App;
