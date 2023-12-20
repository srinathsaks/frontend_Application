import React from "react";

const sizeClasses = {
  txtPoppinsMedium1036Bluegray300: "font-medium font-poppins",
  txtPoppinsExtraBold2391: "font-extrabold font-poppins",
  txtPoppinsMedium1036: "font-medium font-poppins",
  txtPoppinsMedium1434: "font-medium font-poppins",
  txtPoppinsMedium877: "font-medium font-poppins",
  txtPoppinsSemiBold1594: "font-poppins font-semibold",
  txtPoppinsSemiBold956: "font-poppins font-semibold",
  txtPoppinsMedium956: "font-medium font-poppins",
  txtPoppinsSemiBold1355: "font-poppins font-semibold",
  txtPoppinsSemiBold1434: "font-poppins font-semibold",
  txtPoppinsSemiBold1594WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular1036: "font-normal font-poppins",
  txtPoppinsSemiBold1116: "font-poppins font-semibold",
  txtPoppinsRegular956WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular956Bluegray400: "font-normal font-poppins",
  txtPoppinsMedium877RedA200: "font-medium font-poppins",
  txtPoppinsMedium877Cyan400: "font-medium font-poppins",
  txtPoppinsRegular956: "font-normal font-poppins",
  txtPoppinsMedium1036Black900: "font-medium font-poppins",
  txtPoppinsMedium877AmberA700: "font-medium font-poppins",
  txtPoppinsMedium1036Bluegray200: "font-medium font-poppins",
  txtPoppinsMedium877DeeppurpleA200: "font-medium font-poppins",
  txtPoppinsSemiBold1355Gray90002: "font-poppins font-semibold",
  txtPoppinsMedium956Bluegray40001: "font-medium font-poppins",
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
