import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtAbrilFatfaceRegular48Black900: "font-abrilfatface font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterBold14: "font-bold font-inter",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterSemiBold14WhiteA700: "font-inter font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtSecularOneRegular24Bluegray800: "font-normal font-secularone",
  txtInterRegular24Bluegray800: "font-inter font-normal",
  txtSecularOneRegular60: "font-normal font-secularone",
  txtAbhayaLibreExtraBold24: "font-abhayalibreextrabold font-extrabold",
  txtCaveatBrushRegular128: "font-caveatbrush font-normal",
  txtSecularOneRegular48: "font-normal font-secularone",
  txtSecularOneRegular24: "font-normal font-secularone",
  txtInterRegular16Black900: "font-inter font-normal italic",
  txtInterRegular24: "font-inter font-normal",
  txtCaveatBrushRegular64: "font-caveatbrush font-normal",
  txtAbrilFatfaceRegular48: "font-abrilfatface font-normal",
  txtInterRegular24Black900: "font-inter font-normal",
  txtInterSemiBold12WhiteA700: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
