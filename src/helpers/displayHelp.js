const displayHelp = (updateOutput) => {
  const output = `$ help:
`;
  updateOutput(output, "append");
  return null;
};
export default displayHelp;
