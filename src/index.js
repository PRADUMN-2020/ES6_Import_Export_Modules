import React from "react";
import ReactDOM from "react-dom";
// import * as pi from "./math.js";
import pie, { doublePi, triplePi } from "./math.js";

// console.log(pi);

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
