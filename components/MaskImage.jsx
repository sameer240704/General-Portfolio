import React from "react";

const MaskImage = ({ children }) => {
  return (
    <div className="mask-container relative w-full h-full">
      {children}
      <div className="circular-mask absolute top-0 left-0 w-full h-full pointer-events-none"></div>
    </div>
  );
};

export default MaskImage;
