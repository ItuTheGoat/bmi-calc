import React from "react";
import SystemContext from "./SystemContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FormComp extends React.Component {
  // Create a static context type to get the data
  static contextType = SystemContext;

  initialState = { height: "", weight: 0, bmi: "" };
  state = this.initialState;

  changeHeight = (e) => {
    this.setState({ height: e.target.value });
  };

  changeWeight = (e) => {
    this.setState({ weight: e.target.value });
  };

  // This function will format the display of the BMI information
  displayBMI = (bmi) => {
    let bmiRounded = Math.round(bmi * 10) / 10;
    let bmiFixed = parseFloat(bmiRounded.toFixed(1));

    if (bmiFixed < 18.5) {
      this.setState({
        bmi: "Your BMI is: " + bmiFixed + ", This means you are underweight!!!",
      });
    } else if (bmiFixed >= 18.5 && bmiFixed <= 24.9) {
      this.setState({
        bmi:
          "Your BMI is: " +
          bmiFixed +
          ", Congratulations!!! This is the perfect weight range!",
      });
    } else if (bmiFixed > 24.9 && bmiFixed <= 29.9) {
      this.setState({
        bmi: "Your BMI is: " + bmiFixed + ", You're in the overweight!!!",
      });
    } else if (bmiFixed > 29.9) {
      this.setState({
        bmi: "Your BMI is: " + bmiFixed + ", This means you are obese!!!",
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let currentHeight = this.state.height;
    let currentWeight = this.state.weight;
    let bmi = 0;

    if (!isNaN(currentHeight) && !isNaN(currentWeight)) {
      if (currentHeight > 0 && currentWeight > 0) {
        if (this.context === "metric") {
          bmi = currentWeight / currentHeight ** 2;
        } else if (this.context === "imperial") {
          bmi = (703 * currentWeight) / currentHeight ** 2;
        }

        this.displayBMI(bmi);
      }
    }
  };

  handleReset = () => {
    this.setState(() => this.initialState);
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
        <h3>Calculate your Body Mass Index</h3>
        <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <Form.Group>
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="input"
              placeholder={hPlaceholder}
              onChange={this.changeHeight}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="input"
              placeholder={wPlaceholder}
              onChange={this.changeWeight}
              required
            />
          </Form.Group>
          <Button className="btn btn-primary" type="Submit">
            Submit
          </Button>{" "}
          <Button className="btn btn-secondary" type="Reset">
            Clear
          </Button>
        </Form>
        <br />

        <h4>{this.state.bmi} </h4>
      </div>
    );
  }
}

export default FormComp;
