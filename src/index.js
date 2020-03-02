import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import myProvider from "./components/SystemContext";

// Here we wrap the app with the context provider
ReactDOM.render(
  <myProvider.Provider value="metric">
    <App />
  </myProvider.Provider>,
  document.getElementById("root")
);
