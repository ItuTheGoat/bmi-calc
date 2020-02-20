import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

class System extends Component {
  render() {
    return (
      <div>
        <DropdownButton id="dropdown-basic-primary" title="Choose System">
          <Dropdown.Item eventKey="1">Metric System</Dropdown.Item>
          <Dropdown.Item eventKey="2">Imperial System</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default System;
