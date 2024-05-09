import React, { useState, useEffect } from "react";
import BgArduino from "../../../../public/images/bg-arduino.jpg";
import BgFlutter from "../../../../public/images/bg-flutter.png";
import BgLaravel from "../../../../public/images/bg-laravel.png";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/legacy/image";
import Logoreact from "../../../../public/images/react.svg";
import Logotailwind from "../../../../public/images/tailwindcss.svg";
import Logonext from "../../../../public/next.svg";
import Logovercel from "../../../../public/vercel.svg";
import s from "./style.module.css";
export default function Welcome() {
  const theme = useTheme();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const backgroundImages = [BgArduino, BgFlutter, BgLaravel];
  function changeBackground(step) {
    setBackgroundImageIndex((prevIndex) => {
      const newIndex = prevIndex + step;
      if (newIndex < 0) {
        return backgroundImages.length - 1;
      } else if (newIndex >= backgroundImages.length) {
        return 0;
      } else {
        return newIndex;
      }
    });
  }
  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  //////////////////////////
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once on component mount
  let iconSize = 100; // Taille par défaut
  // Déterminez la taille en fonction de la largeur de la fenêtre
  if (windowSize.width <= 600) {
    iconSize = 50; // Taille pour les petits écrans
  } else if (windowSize.width <= 1024) {
    iconSize = 80; // Taille pour les écrans moyens
  }
  /////////////////////////////
  return (
    <div className="z-50 bg-gradient-to-b from-neutral-900  to-slate-600 h-screen">
      <div id="welcome" className="flex flex-row justify-between pt-16">
        <div className="basis-8 h-screen flex flex-col justify-center items-center text-center relative ">
          <ArrowBackIosIcon
            style={{ fontSize: `${iconSize}px`, marginLeft: 50 }}
            onClick={() => changeBackground(-1)}
            className="text-9xl"
          />
        </div>
        <div
          className={`h-screen flex flex-col justify-center items-center text-center relative `}
        >
          <div
            className={` inset-0 ${
              theme.palette.mode === "dark"
                ? "bg-black bg-opacity-70"
                : "bg-zinc-600 bg-opacity-5"
            }`}
          />

          <div
            className={`font-bold lg:text-8xl  md:text-6xl sm:text-4xl  text-sky-950 flex-col relative z-10`}
            style={{ color: theme.palette.primary.main }}
          >
            <span className=" text-white font-light">&lt;</span>
            <span className="text-red-400 font-normal">div</span>
            <span> TONGASOA</span>
            <span className=" text-white font-light">&#47; &gt;</span>
          </div>

          <div className="text-2xl z-10 relative">
            Ce portfolio a été réalisé en utilisant les technologies suivantes :
            <ul className="mt-5">
              <li className="flex items-center">
                <Image width={100} height={200} src={Logoreact} alt="" />
                React
              </li>
              <li className="flex items-center justify-end">
                Framework
                <Image
                  className=" ml-5"
                  width={200}
                  height={50}
                  src={Logonext}
                  alt=""
                />
              </li>
              <li className="flex items-center">
                <Image width={100} height={50} src={Logotailwind} alt="" />
                Tailwind
              </li>
              <li className="flex items-center justify-end">
                Déployé sur
                <Image width={200} height={50} src={Logovercel} alt="" />
              </li>
            </ul>
          </div>
          <div>
            <a href="#profile">
              <ExpandMoreIcon style={{ fontSize: 100 }} />
            </a>
          </div>
        </div>
        <div className="basis-8 h-screen flex flex-col justify-center items-center text-center relative ">
          <ArrowForwardIosIcon
            style={{ fontSize: `${iconSize}px`, marginLeft: 50 }}
            onClick={() => changeBackground(1)}
          />
        </div>
        <div
          className={`block absolute inset-0 pointer-events-none z-0 filter ${
            theme.palette.mode === "dark" ? "blur" : ""
          }`}
        >
          <Image
            src={backgroundImages[backgroundImageIndex]}
            alt="Background"
            layout="fill"
            priority
            className={`opacity-50  ${
              theme.palette.mode === "dark" ? "mt-20" : "mt-16"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
