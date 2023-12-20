import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[3px]" };
const variants = {
  fill: {
    teal_50: "bg-teal-50 text-teal-500",
    white_A700_65: "bg-white-A700_65 text-white-A700",
    deep_purple_50: "bg-deep_purple-50",
    cyan_50: "bg-cyan-50",
    pink_50: "bg-pink-50",
    orange_50: "bg-orange-50 text-amber-A700",
    blue_gray_700_02: "bg-blue_gray-700_02 text-white-A700",
    gray_100: "bg-gray-100 text-blue-300",
  },
};
const sizes = { xs: "p-1.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "gray_100",
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
  color: PropTypes.oneOf([
    "teal_50",
    "white_A700_65",
    "deep_purple_50",
    "cyan_50",
    "pink_50",
    "orange_50",
    "blue_gray_700_02",
    "gray_100",
  ]),
};

export { Button };
