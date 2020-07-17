import React from "react";
import System from "./components/system";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <System />
    </div>
  );
};

export default App;
