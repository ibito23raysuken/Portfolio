import React, { useRef } from "react";

export default function Line() {
  return (
    <svg width="200" overflow="visible">
      <line
        x1="100"
        y1="-90"
        x2="100"
        y2="250"
        stroke="grey"
        strokeWidth="15"
      />
    </svg>
  );
}
