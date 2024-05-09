import React from "react";
import { useTheme } from "@mui/material/styles";
export default function Skilljauge({ skillLevel }) {
  const theme = useTheme();
  return (
    <div className="grid grid-cols-5 place-content-center mx-2">
      <div
        className={`border border-black rounded-l-3xl ${
          1 <= skillLevel ? "bg-green-500 " : "bg-white"
        }`}
      ></div>
      <div
        className={`border border-black ${
          2 <= skillLevel ? "bg-green-500 " : "bg-white"
        }`}
      ></div>
      <div
        className={`border border-black ${
          3 <= skillLevel ? "bg-green-500 " : "bg-white"
        }`}
      ></div>
      <div
        className={`border border-black ${
          4 <= skillLevel ? "bg-green-500 " : "bg-white"
        }`}
      ></div>
      <div
        className={`border border-black rounded-r-3xl ${
          5 <= skillLevel ? "bg-green-500 " : "bg-white"
        }`}
      >
        .
      </div>
    </div>
  );
}
