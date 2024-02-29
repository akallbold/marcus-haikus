import React from "react";
import ReactDOM from "react-dom/client";
import MarcusHaikuMain from "./MarcusHaikuMain";
import './App.css'; 

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
      <MarcusHaikuMain />
  </React.StrictMode>
);
