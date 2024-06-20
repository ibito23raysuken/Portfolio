import React, { useRef } from "react";
import ParticlesBackground from "./ParticlesBackground";
import { useTheme } from "@mui/material/styles";

export default function Project() {
  const theme = useTheme();
  return (
    <div
      id="projet"
      className="  h-screen mt-96"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <ParticlesBackground />
      <div className="flex place-content-center ">
        <div className=" text-white md:px-10 px-5 text-6xl mt-32 font-[retrotech] text-center mb-10">
          LISTE DE TOUTS LES PROJETS:
        </div>
      </div>
      <div className="shadow-lg shadow-indigo-500/40 border border-gray-400  bg-black  justify-between leading-normal mr-36 ml-36 rounded-3xl h-3/5">
        <div className="grid grid-cols-3 gap-4 h-full rounded-3xl p-4">
          <div className="bg-black-400 h-full col-span-2 rounded-l-3xl">
            Apercue
          </div>
          <div className="bg-black-400 h-full rounded-r-3xl"></div>
        </div>
      </div>
    </div>
  );
}
