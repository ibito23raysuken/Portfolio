import React, { useState, useEffect } from "react";
import BgArduino from "../../../public/images/bg-arduino.jpg";
import BgFlutter from "../../../public/images/bg-flutter.png";
import BgLaravel from "../../../public/images/bg-laravel.png";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Logoreact from "../../../public/images/react.svg";
import Logotailwind from "../../../public/images/tailwindcss.svg";
import Logonext from "../../../public/next.svg";
import Logovercel from "../../../public/vercel.svg";
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

  function handleKeyPress(event) {
    if (event.key === "ArrowLeft") {
      changeBackground(-1); // Change image to previous when left arrow key is pressed
    } else if (event.key === "ArrowRight") {
      changeBackground(1); // Change image to next when right arrow key is pressed
    }
  }
  return (
    <div id="welcome" className="w-screen flex flex-row justify-between">
      <div className="basis-8 h-screen flex flex-col justify-center items-center text-center relative ">
        <ArrowBackIosIcon
          style={{ fontSize: 100, marginLeft: 50 }}
          onClick={() => changeBackground(-1)}
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
              <Image className="h-20 w-20 mr-2  " src={Logoreact} alt="" />
              React
            </li>
            <li className="flex items-center justify-end">
              Framework
              <Image className=" h-10 w-52 ml-5" src={Logonext} alt="" />
            </li>
            <li className="flex items-center">
              <Image className="h-40  w-20 mr-2  " src={Logotailwind} alt="" />
              Tailwind
            </li>
            <li className="flex items-center justify-end">
              Déployé sur
              <Image className=" h-30 ml-6" src={Logovercel} alt="" />
            </li>
          </ul>
        </div>
        <div>
          <a href="#profile">
            <ExpandMoreIcon style={{ fontSize: 100, marginTop: 20 }} />
          </a>
        </div>
      </div>
      <div className="basis-8 h-screen flex flex-col justify-center items-center text-center relative ">
        <ArrowForwardIosIcon
          style={{ fontSize: 100, marginRight: 50 }}
          onClick={() => changeBackground(1)}
        />
      </div>
      <div
        className={`absolute inset-0 pointer-events-none z-0 filter ${
          theme.palette.mode === "dark" ? "blur" : ""
        }`}
      >
        <Image
          src={backgroundImages[backgroundImageIndex]}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className={`opacity-50  ${
            theme.palette.mode === "dark" ? "mt-20" : "mt-16"
          }`}
        />
      </div>
    </div>
  );
}
