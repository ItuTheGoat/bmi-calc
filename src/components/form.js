import React from "react";
import SystemContext from "./SystemContext";
import Field from "./field";

class Form extends React.Component {
  state = {
    height: 0,
    weight: 0
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

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.height);
    console.log(this.state.weight);
  };

  render() {
    const system = this.context;

    let hPlaceholder = "";
    let wPlaceholder = "";

    if (system === "metric") {
      hPlaceholder = "Enter height (in meters: 1.77)";
      wPlaceholder = "Enter height (in kilogram: 73)";
    } else {
      hPlaceholder = "Enter height (in inches e.g. 69)";
      wPlaceholder = "Enter weight (in pounds e.g. 200)";
    }

    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h3 className="ui dividing header">Calculate your Body Mass Index</h3>
          <Field
            label="Enter Height"
            name="height"
            placeholder={hPlaceholder}
            onChange={this.changeHeight}
          />
          <Field
            label="Enter weight"
            name="weight"
            placeholder={wPlaceholder}
            onChange={this.changeWeight}
          />
          <button className="ui button primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
