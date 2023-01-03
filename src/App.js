import "./App.scss";
import { useRef, useState } from "react";
import ConsoleInput from "./components/ConsoleInput";
import ConsoleOutput from "./components/ConsoleOutput";
import displayHelp from './helpers/displayHelp';

function App() {
  const [Input, setInput] = useState('');
  const [Output, setOutput] = useState('');
  const consoleInputRef = useRef(null);
  const eof = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Input === 'HELP') {
      displayHelp(updateOutput);
    }
    if (Input === 'CLEAR') {
      setOutput('');
    }
    setInput('');
  }

  const updateOutput = (s, mode) => {
    if (mode === 'new') {
      setOutput(`${Output}${s}`);
    } else {
      setOutput(s);
    }
  }

  return (
    <div
      className="App"
    >
      <div className="title-banner">
        <p className="game-title">THE PIT</p>
      </div>
      <div className="game-frame">
        <div className="console-output">
          <ConsoleOutput output={Output} eof={eof}/>
        </div>
        <div className="console-input">
          <ConsoleInput input={Input} handleSubmit={handleSubmit} handleChange={handleChange} consoleInputRef={consoleInputRef}/>
        </div>
      </div>
    </div>
  );
}

export default App;
