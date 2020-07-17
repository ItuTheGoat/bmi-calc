import React, { Component } from "react";
import Form from "./form";
import SystemContext from "./SystemContext";
import SysButtons from "./sysButtons";

class System extends Component {
  state = { units: "metric" };

  onSystemChange = (e) => {
    this.setState({ units: e.target.value });
    console.log(this.state.units);
  };

  render() {
    return (
      <div>
        <SysButtons onSystemChange={this.onSystemChange} />
        <SystemContext.Provider value={this.state.units}>
          <Form />
        </SystemContext.Provider>
      </div>
    );
  }
}

export default System;
