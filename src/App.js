import "./App.css";
import Title from "./components/Title";

function App() {

  function startGame() {

  }

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="game-title">THE PIT</h1>
        <div className="game-menu">
          <Title />
          <input className="textfield" />
        </div>
      </div>
    </div>
  );
  
}



export default App;
