import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const SysButtons = (props) => {
  return (
    <ToggleButtonGroup type="radio" name="options">
      <ToggleButton
        variant="primary"
        value="metric"
        onClick={props.onSystemChange}
      >
        Metric
      </ToggleButton>
      <ToggleButton
        variant="primary"
        value="imperial"
        onClick={props.onSystemChange}
      >
        Imperial
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SysButtons;
