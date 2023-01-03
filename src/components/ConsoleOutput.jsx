import React from "react";
import PropTypes from "prop-types";

const ConsoleOutput = ({ output, eof }) => (
  <div className="consoleOutput text">
    <p>{output}</p>
    <div ref={eof} className="consoleOutputEof">
      EOF
    </div>
  </div>
);

ConsoleOutput.propTypes = {
  output: PropTypes.string.isRequired,
  eof: PropTypes.objectOf(PropTypes.any)
};

export default ConsoleOutput;
