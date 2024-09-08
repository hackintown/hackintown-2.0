import React from "react";
import { getButtonClassName } from "../../../lib/utils";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  const buttonClassName = getButtonClassName(variant, size, disabled);
  return (
    <button
      type={type}
      className={`${buttonClassName} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
