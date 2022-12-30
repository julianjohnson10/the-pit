import "./App.scss";
import GameText from "./components/GameText";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <div className="title-banner">
        <p className="game-title">THE PIT</p>
      </div>
      <div className="game-frame">
        <div className="chatbox">
          <GameText />
          <input className="input-text" autoFocus></input>
        </div>
      </div>
    </div>
  );
}

export default App;
