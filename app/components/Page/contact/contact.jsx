import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Maps from "../../widget/map/maps";
import "leaflet/dist/leaflet.css";
const DynamicLeafletMap = dynamic(() => import("../../widget/map/maps"), {
  ssr: false,
});

export default function Contact() {
  const annee = "2024";
  const mapIsReadyCallback = (map) => {
    console.log(map);
  };
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-neutral-900  to-black h-svh "
    >
      <div className=" text-slate-200 md:px-10 px-5  ">
        <div className="flex place-content-center ">
          <div className=" text-white md:px-10 px-5 text-6xl mt-32 font-[retrotech] text-center mb-10">
            CONTACT:
          </div>
        </div>
        <div className="shadow-lg shadow-indigo-500/40 border border-gray-400  bg-white  justify-between leading-normal rounded-3xl w-full ">
          <div className="grid grid-cols-3 gap-4 h-full rounded-3xl p-4">
            <div className="grid grid-rows-2 bg-green-400 h-full rounded-l-3xl">
              <div className="bg-blue-300">
                <div class="size-full">
                  <DynamicLeafletMap />
                </div>
              </div>
              <div className="bg-blue-500">reseau sociaux</div>
            </div>
            <div className="bg-red-400 h-full col-span-2 rounded-r-3xl">
              <form action="" method="POST" className="m-4">
                <div>
                  <label htmlFor="nom">Nom :</label>
                  <input type="text" name="nom" />
                </div>
                <div>
                  <label htmlFor="email">Email :</label>
                  <input type="text" name="email" />
                </div>
                <div>
                  <label htmlFor="message">Message :</label>
                  <textarea name="message"></textarea>
                </div>
                <div className="">
                  <button type="submit">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center mb-10">
        Copyright © {annee}. PortfoliofaniryNavalna.com . All Rights Reserved
      </div>
    </div>
  );
}
