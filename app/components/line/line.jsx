import React, { useRef } from "react";

export default function Line({ x1, y1, x2, y2 }) {
  const style = {
    position: "absolute",
    left: `${x1}px`,
    top: `${y1}px`,
    width: `${Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)}px`,
    height: "10px", // Épaisseur de la ligne
    backgroundColor: "white", // Couleur de la ligne
    transformOrigin: "0 0",
    transform: `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`,
  };
  return <div style={style}></div>;
}
