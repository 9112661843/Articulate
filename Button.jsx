import React from "react";
import "../styles/Button.css";

const Button = ({
  variant = "primary", // primary | secondary | text
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
