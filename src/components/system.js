import React, { Component } from "react";
import Form from "./form";
import SystemContext from "./SystemContext";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

class System extends Component {
  state = { units: "metric" };

  onSystemChange = (e) => {
    this.setState({ units: e.target.value });
    console.log(this.state.units);
  };

  render() {
    return (
      <div>
        <BootstrapSwitchButton
          checked={true}
          onlabel="Metric"
          onstyle="outline-info"
          offlabel="Imperial"
          offstyle="outline-primary"
          width={100}
          onChange={(checked) => {
            if (checked) {
              this.setState({ units: "metric" });
            } else {
              this.setState({ units: "imperial" });
            }
          }}
        />
        <SystemContext.Provider value={this.state.units}>
          <Form />
        </SystemContext.Provider>
      </div>
    );
  }
}

export default System;
