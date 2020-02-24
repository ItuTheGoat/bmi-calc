import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

class System extends Component {
  render() {
    return (
      <div>
        <select>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
    );
  }
}

export default System;
