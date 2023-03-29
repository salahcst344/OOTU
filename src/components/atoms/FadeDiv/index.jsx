import React from "react";

const FadeDiv = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        translate: "0 -10rem",
        backgroundImage: "linear-gradient(to top, white 0%, transparent 100%)",
      }}
    ></div>
  );
};

export default FadeDiv;
