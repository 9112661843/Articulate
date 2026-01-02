import React from "react";
import "../styles/Checkbox.css";

const Checkbox = ({ checked, onChange, label, required }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <span className="checkbox-custom" />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;
