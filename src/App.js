import "./App.scss";
import GameText from "./components/Console";
import { useRef, useState } from "react";
import Console from "./components/Console";

function App() {

  const inputRef = useRef(null);

  return (
    <div
      className="App"
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <div className="title-banner">
        <p className="game-title">THE PIT</p>
      </div>
      <div className="game-frame">
        <div className="chatbox">
          <Console />
          <input
            ref={inputRef}
            className="input-text"
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
          />
        </div>
        {/* <button>Hello</button> */}
      </div>
    </div>
  );
}

export default App;
