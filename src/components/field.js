import React from "react";

const Field = props => {
  return (
    <div className="field">
      <label>{props.label}</label>
      <input type="text" name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default Field;
