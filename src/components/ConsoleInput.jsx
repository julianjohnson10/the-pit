import React from "react";
import PropTypes from "prop-types";

const ConsoleInput = ({
  input,
  handleSubmit,
  handleChange,
  consoleInputRef,
}) => (
  <div>
    <form onSubmit={handleSubmit} className="chat-prompt">
      <div className="consoleInput consoleCursor text">$</div>
      <input
        className="consoleInput text"
        name="consoleInput"
        value={input}
        onChange={handleChange}
        autoFocus
        autoComplete="off"
        ref={consoleInputRef}
      ></input>
    </form>
  </div>
);

ConsoleInput.propTypes = {
  input: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  consoleInputRef: PropTypes.objectOf(PropTypes.any),
};

export default ConsoleInput;
