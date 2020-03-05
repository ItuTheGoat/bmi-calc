import React from "react";
import SystemContext from "./SystemContext";

class Form extends React.Component {
  state = {
    height: 0,
    weight: 0,
    currentSystem: this.context,
    bmi: ""
  };

  // Create a static context type to get the data
  static contextType = SystemContext;

  changeHeight = e => {
    console.log(e);
    this.setState({ height: e.target.value });
  };

  changeWeight = e => {
    this.setState({ weight: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    let currentHeight = this.state.height;
    let currentWeight = this.state.weight;
    let currentSystem = this.state.currentSystem;
    let bmi = 0;

    if (!isNaN(currentHeight) && !isNaN(currentWeight)) {
      if (currentHeight > 0 && currentWeight > 0) {
        if (currentSystem === "metric") {
          bmi = currentWeight / currentHeight ** 2;
          this.setState({ bmi: bmi });
        } else {
          bmi = (703 * currentWeight) / currentHeight ** 2;
          this.setState({ bmi: bmi });
        }
      }
    }
  };

  render() {
    const system = this.context;

    let hPlaceholder = "";
    let wPlaceholder = "";

    if (system === "metric") {
      hPlaceholder = "Enter height (in meters: 1.77)";
      wPlaceholder = "Enter weight (in kilogram: 73)";
    } else {
      hPlaceholder = "Enter height (in inches e.g. 69)";
      wPlaceholder = "Enter weight (in pounds e.g. 200)";
    }

    return (
      <div>
        <form className="ui form">
          <h3 className="ui dividing header">Calculate your Body Mass Index</h3>
          <label htmlFor="height">Height</label>
          <input
            label="Enter Height"
            name="height"
            placeholder={hPlaceholder}
            onChange={this.changeHeight}
          />
          <label htmlFor="weight">Weight</label>
          <input
            label="Enter weight"
            name="weight"
            placeholder={wPlaceholder}
            onChange={this.changeWeight}
          />
          <br />
          <button className="ui button primary" onClick={this.handleClick}>
            Submit
          </button>

          <h4>Your bmi is: {this.state.bmi} kg/m squared</h4>
        </form>
      </div>
    );
  }
}

export default Form;
