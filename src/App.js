import "./App.scss";
import { useRef, useState } from "react";
import ConsoleInput from "./components/ConsoleInput";
import ConsoleOutput from "./components/ConsoleOutput";
import displayHelp from "./helpers/displayHelp";

function App() {
  const [Input, setInput] = useState("");
  const [Output, setOutput] = useState("");
  const consoleInputRef = useRef(null);
  const eof = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Input === "help" || Input === "?") {
      displayHelp(updateOutput);
    }
    if (Input === "clear") {
      setOutput("");
    }
    if (Input === "") {
    }
    setInput("");
  };

  const updateOutput = (s, mode) => {
    if (mode === "append") {
      const maxLines = 30;
      const splitStdOutput = Output.split("\n");
      const truncStdOutput = splitStdOutput
        .slice(Math.max(splitStdOutput.length - maxLines, 0))
        .join(String.fromCharCode(10));
      setOutput(`${truncStdOutput}${s}`);
    } else {
      setOutput(s);
    }
  };

  return (
    <div className="App">
      <div className="title-banner">
        <p className="game-title text">THE PIT</p>
      </div>
      <div className="game-wrapper">
        <div className="game-frame">
          <div className="console-output">
            <ConsoleOutput output={Output} eof={eof} />
          </div>
          <div className="console-input">
            <ConsoleInput
              input={Input}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              consoleInputRef={consoleInputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
