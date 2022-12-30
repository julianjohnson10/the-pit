import React, { useState } from "react";

const GameText = () => {
   const [title, setTitle] = useState("What is your name? ​");

   return <p className="gametext text" onChange={event => setTitle(event.target.value)}>{title}</p>;
}

export default GameText;