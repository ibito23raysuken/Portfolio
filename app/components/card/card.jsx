import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Profile2 from "../../../public/images/profile2.png";

export default function CardProfile() {
  const [Showcard, setShowcard] = useState();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setShowcard(true);
      } else {
        setShowcard(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {Showcard ? (
        <>
          {" "}
          <div className=" lg:flex ml-28 ">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl text-center overflow-hidden shadow-lg shadow-indigo-500/40"
              style={{ backgroundImage: `url(${Profile2.src})` }}
            ></div>
            <div className="shadow-lg shadow-indigo-500/40 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b-lg lg:rounded-b-lg lg:rounded-r-3xl p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  ANDRIAMAMONJISOA
                </div>
                <div className="text-gray-900 text-lg mb-2">
                  FANIRY NAVALONA
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
        </>
      ) : (
        <>
          <div className="flex rounded-3xl  justify-items-center ml-2">
            <div className=" w-20 h-20 rounded-full pt-5 bg-blue-600 ">
              <div className="w-16 h-16 rounded-full overflow-hidden justify-self-center">
                <Image src={Profile2} alt="" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-gray-900 font-bold text-xs sm:text-lg justify-items-center">
                ANDRIAMAMONJISOA
              </div>
              <div className="text-gray-900 text-lg ">FANIRY NAVALONA</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}