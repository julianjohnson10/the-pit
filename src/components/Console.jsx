import React, { useState } from "react";
import Command from "./Commands";

function Console({ commands }) {
   return (
      // commands.map(command => {
      //    return <Command command={command}/>
      // })
      <div className="gametext text">
         <Command />
      </div>
   )
   
}

export default Console;