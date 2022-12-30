import React, { useState } from "react";

const Title = () => {
   const [title, setTitle] = useState("Who are you?");

   return <p className="text">{title}</p>;
}

export default Title;