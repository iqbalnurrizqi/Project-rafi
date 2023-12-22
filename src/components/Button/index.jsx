import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]", square: "rounded-none" };
const variants = {
  fill: {
    deep_orange_800: "bg-deep_orange-800 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    black_900: "bg-black-900 text-white-A700",
    orange_300: "bg-orange-300 text-black-900",
  },
};
const sizes = { xs: "p-3", sm: "px-3 py-[25px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "orange_300",
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
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_orange_800",
    "white_A700",
    "black_900",
    "orange_300",
  ]),
};

export { Button };
