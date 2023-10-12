import React from "react";

const sizeClasses = {
  txtPoppinsBold48: "font-bold font-poppins",
  txtInterRegular32: "font-inter font-normal",
  txtInterBold32: "font-bold font-inter",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtNotoSansSemiBold24: "font-notosans font-semibold",
  txtPacificoRegular36: "font-normal font-pacifico",
  txtBebasNeueRegular55WhiteA700: "font-bebasneue font-normal",
  txtBebasNeueRegular55: "font-bebasneue font-normal",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPontanoSansRegular25: "font-normal font-pontanosans",
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
