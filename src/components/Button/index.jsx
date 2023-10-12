import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[23px]" };
const variants = {
  fill: {
    indigo_A200: "bg-indigo-A200 shadow-bs text-white-A700",
    lime_700: "bg-lime-700 shadow-bs text-white-A700",
  },
};
const sizes = { xs: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "indigo_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_A200", "lime_700"]),
};

export { Button };
