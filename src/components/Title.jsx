import React, { useState } from "react";

const Title = () => {
   const [title, setTitle] = useState("Click here");

   return <h2 className="response" onClick={() => setTitle("New title")}>{title}</h2>;
}

export default Title;