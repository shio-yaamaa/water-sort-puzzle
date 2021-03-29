import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrutoForcePage } from "./pages/BrutoForcePage";
import { DifficultyTablePage } from "./pages/DifficultyTablePage";

// Switch the page to render by commenting out either of the render() call

ReactDOM.render(
  <React.StrictMode>
    <BrutoForcePage />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <DifficultyTablePage />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
