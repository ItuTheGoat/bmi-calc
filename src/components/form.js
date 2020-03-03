import React from "react";
import SystemContext from "./SystemContext";
import Field from "./field";

class Form extends React.Component {
  // Create a static context type to get the data
  static contextType = SystemContext;

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
        <form className="ui form">
          <h3 className="ui dividing header">Calculate your Body Mass Index</h3>
          <Field
            label="Enter Height"
            name="height"
            placeholder={hPlaceholder}
          />
          <Field
            label="Enter weight"
            name="weight"
            placeholder={wPlaceholder}
          />
          <button className="ui button primary ">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
