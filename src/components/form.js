import React from "react";
import SystemContext from "./SystemContext";

class Form extends React.Component {
  // Create a static context type to get the data
  static contextType = SystemContext;

  render() {
    const system = this.context;
    return <div>form: {system} </div>;
  }
}

export default Form;
