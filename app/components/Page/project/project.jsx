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
      <div className="flex flex-row shadow-lg shadow-indigo-500/40 border border-gray-400  bg-black  justify-between leading-normal mr-36 ml-36 rounded-3xl h-3/5">
                          {/* Section Vidéo */}
              <div className="  items-center  w-3/4 h-full m-4">
                <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://youtu.be/J9B1-Ldclxc"
                    title="Vidéo Aperçu"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Section Liste */}
              <div className="flex flex-row p-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-700 p-3 rounded-lg space-x-4"
                    >
                      {/* Image ronde */}
                      <div className="w-16 h-16 bg-gray-600 rounded-full overflow-hidden">
                        <img
                          src={`https://via.placeholder.com/150?text=Img+${index + 1}`}
                          alt={`Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Détails */}
                      <div className="text-white flex-1">
                        <h3 className="text-md font-semibold">Titre {index + 1}</h3>
                        <a
                          href="https://github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline"
                        >
                          Lien GitHub
                        </a>
                        <p className="text-sm text-gray-400">Date: 2025-01-14</p>
                      </div>
                    </div>
                  ))}
                </div>
          </div>
        
      </div>
    </div>
  );
}
