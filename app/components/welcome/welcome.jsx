import React, { useState, useEffect } from "react";
import BgArduino from "../../../public/images/bg-arduino.jpg";
import BgFlutter from "../../../public/images/bg-flutter.png";
import BgLaravel from "../../../public/images/bg-laravel.png";
import { useTheme } from "@mui/material/styles";
import s from "./style.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

export default function Welcome() {
  const theme = useTheme();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const backgroundImages = [BgArduino, BgFlutter, BgLaravel];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  console.log(theme.palette.mode);

  return (
    <div className="w-screen flex flex-row justify-between">
      <div className="basis-8 h-screen flex flex-col justify-center items-center text-center relative ">
        <ArrowBackIosIcon style={{ fontSize: 100, marginLeft: 50 }} />
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
          className={`font-bold text-8xl sm:text-6xl  text-sky-950 flex-col relative z-10`}
          style={{ color: theme.palette.primary.main }}
        >
          Bienvenue ;
        </div>

        <div className="text-2xl text-white z-10 relative">
          Voici mon portfolio que j'ai créé avec :
          <ul>
            <li>React</li>
            <li>Framework Next.js</li>
            <li>Tailwind</li>
          </ul>
          Déployé sur Vercel.
        </div>
        <div>
          <ExpandMoreIcon style={{ fontSize: 100, marginTop: 20 }} />
        </div>
      </div>
      <div className="basis-8 h-screen flex flex-col justify-center items-center text-center relative ">
        <ArrowForwardIosIcon style={{ fontSize: 100, marginRight: 50 }} />
      </div>
      <div className={`absolute inset-0 pointer-events-none z-0 filter blur`}>
        <Image
          src={backgroundImages[backgroundImageIndex]}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50 mt-20"
        />
      </div>
    </div>
  );
}
