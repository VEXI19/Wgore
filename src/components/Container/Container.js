import React from "react";
import "./Container.css";

function Container({
  children,
  alignItems,
  flexDirection,
  justifyContent,
  backgroundColor = "transparent",
  margin = 0,
  position,
  style,
  height,
}) {
  return (
    <div
      className="Container"
      style={{
        position,
        backgroundColor,
        ...style,
      }}
    >
      <div
        style={{
          alignItems,
          flexDirection,
          justifyContent,
          margin,
          height,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
