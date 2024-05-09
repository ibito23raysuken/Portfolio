import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import SkillItem from "../skillItem/skillItem";

export default function Cardcenter({ parametres }) {
  const [Showcarddev, setShowcarddev] = useState();
  const theme = useTheme();
  console.log(parametres);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        setShowcarddev(0);
      } else if (window.innerWidth >= 1200) {
        setShowcarddev(1);
      } else {
        setShowcarddev(2);
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
      <div
        className={`${
          Showcarddev == 0
            ? "  shadow-lg shadow-indigo-500/40 border border-gray-400  bg-white rounded-lg p-2 text-white"
            : Showcarddev == 1
            ? " text-white"
            : " text-white"
        }`}
      >
        {parametres.map((parametre, i) => (
          <SkillItem
            key={i}
            skillName={parametre.name}
            mobilemode={Showcarddev}
            skillLevel={parametre.level}
          />
        ))}
      </div>
    </>
  );
}
