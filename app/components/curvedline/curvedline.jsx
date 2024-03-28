import React from "react";

export default function CurvedLines({ x1, y1, lengthX, lengthY, invert }) {
  const commonStyle = {
    position: "absolute",
    height: "10px",
    backgroundColor: "grey",
    transformOrigin: "0 0",
  };
  const style1 = {
    ...commonStyle,
    left: `${x1}px`,
    top: `${y1}px`,
    width: `${lengthX}px`,
    backgroundColor: "grey",
    transform: `rotate(${Math.PI * 2}rad)`, // Appliquer l'angle de la courbure
  };

  // Style pour la deuxième ligne
  const style2 = {
    ...commonStyle,
    width: `${lengthY}px`,
    left: invert ? `${x1}px` : `${x1 + lengthX}px`, // La deuxième ligne démarre du même point que la première ligne
    top: `${y1}px`, // La deuxième ligne démarre du même point que la première ligne,
    transform: `rotate(${Math.PI / 2}rad)`, // Appliquer l'angle de la courbure
  };

  return (
    <>
      <div style={{ ...style1 }}></div>
      <div style={{ ...style2 }}></div>
    </>
  );
}
