import React, { useState, useEffect } from "react";
import BgArduino from "../../../public/images/bg-arduino.jpg";
import BgFlutter from "../../../public/images/bg-flutter.png";
import BgLaravel from "../../../public/images/bg-laravel.png";
import { useTheme } from "@mui/material/styles";

export default function Welcome() {
  const theme = useTheme();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  // List of background images
  const backgroundImages = [
    `url(${BgArduino.src})`,
    `url(${BgFlutter.src})`,
    `url(${BgLaravel.src})`,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const backgroundImageStyle = {
    backgroundImage: backgroundImages[backgroundImageIndex],
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="h-dvh flex flex-col justify-center items-center text-center backdrop-opacity-55 bg-black/70">
        <div
          className="font-bold text-8xl text-sky-950 flex-col"
          style={{ color: theme.palette.primary.main }}
        >
          Bienvenue ;
        </div>
        <div className=" text-2xl text-white">
          Voici mon portfolio que j'ai créé avec :
          <ul>
            <li>React</li>
            <li>Framework Next.js</li>
            <li>Tailwind</li>
          </ul>
          Déployé sur Vercel.
        </div>
      </div>
    </div>
  );
}
