import React, { useRef } from "react";
export default function Contact() {
  const annee = "2024";
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-neutral-900  to-black h-screen "
    >
      <div className=" text-slate-200 md:px-10 px-5 ">
        <div className="flex place-content-center ">
          <div className=" text-white md:px-10 px-5 text-6xl mt-32 font-[retrotech] text-center mb-10">
            CONTACT:
          </div>
        </div>
        <div className="shadow-lg shadow-indigo-500/40 border border-gray-400  bg-white  justify-between leading-normal mr-36 ml-36 rounded-3xl h-5/6">
          <div className="grid grid-cols-3 gap-4 h-full rounded-3xl p-4">
            <div className="grid grid-rows-2 bg-green-400 h-full rounded-l-3xl">
              <div className="bg-blue-300">carte</div>
              <div className="bg-blue-500">reseau sociaux</div>
            </div>
            <div className="bg-red-400 h-full col-span-2 rounded-r-3xl">
              <form action="" method="POST" className="m-4">
                <div>
                  <label for="nom">Nom :</label>
                  <input type="text" name="nom" />
                </div>
                <div>
                  <label for="email">Email :</label>
                  <input type="text" name="email" />
                </div>
                <div>
                  <label for="message">Message :</label>
                  <textarea name="message"></textarea>
                </div>
                <div class="">
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
