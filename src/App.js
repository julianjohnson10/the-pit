import "./App.scss";
import GameText from "./components/GameText";
import { PrimaryButton } from "@fluentui/react";

function App() {
  return (
    <div className="App">
      <p className="game-title">THE PIT</p>
      <div className="game-frame">
        <GameText />
        <div className="controls">
          <input className="textfield"></input>
          <PrimaryButton text="Enter" style={{ height: "40px" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
