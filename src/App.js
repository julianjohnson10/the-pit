import "./App.scss";
import GameText from "./components/GameText";
import { useRef, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);

  const inputRef = useRef(null);

  return (
    <div className="App" onClick={() => {inputRef.current.focus()}}>
      <div className="title-banner">
        <p className="game-title">THE PIT</p>
      </div>
      <div className="game-frame">
        <div className="chatbox">
          <GameText />
          <div></div>
          <input ref={inputRef} className="input-text" autoFocus={true} onBlur={({ target }) => target.focus()} />
        </div>
      </div>
    </div>
  );
}

export default App;
