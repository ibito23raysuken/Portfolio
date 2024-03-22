import React from "react";
import Image from "next/legacy/image";
import Profile2 from "../../../public/images/profile2.png";

export default function CardProfile() {
  console.log(Profile2.src);
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex m-28">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${Profile2.src})` }}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            ANDRIAMAMONJISOA FANIRY NAVALONA
          </div>
          <p className="text-gray-700 text-base">32 ANS</p>
          <p className="text-gray-700 text-base">
            Ingénieur en électronique et informatique industrielle
          </p>
          <div className="text-gray-900 text-lg mt-2 mb-2">
            #Apprentissage #Compréhension #Innovation
          </div>
        </div>
      </div>
    </div>
  );
}
