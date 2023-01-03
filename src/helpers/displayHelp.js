const displayHelp = (updateOutput) => {
    const output = `HELP TEXT GOES HERE`;
    updateOutput(output, 'new');
    console.log(output)
    return null;
};
export default displayHelp;