import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Form from "./form";
import SystemContext from "./SystemContext";

class System extends Component {
  state = { system: "metric" };

  onSystemChange = system => {
    this.setState({ system: system });
    console.log(system);
  };

  render() {
    return (
      <div>
        <div>
          <button
            className="ui button"
            onClick={() => this.onSystemChange("metric")}
          >
            Metric
          </button>
          <button
            className="ui button"
            onClick={() => this.onSystemChange("imperial")}
          >
            Imperial
          </button>
        </div>
        <br />
        <SystemContext.Provider value={this.state.system}>
          <Form />
        </SystemContext.Provider>
      </div>
    );
  }
}

export default System;
