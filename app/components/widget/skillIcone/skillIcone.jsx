import React from "react";
import { useTheme } from "@mui/material/styles";
import Image from "next/legacy/image";
import Profile2 from "../../../../public/images/profile2.png";
export default function SkillIcon({ icone }) {
  const theme = useTheme();
  return (
    <div className="w-12 h-12 rounded-full  self-center">
      <div
        className="grid  place-content-center min-w-[4rem] min-h-[4rem] rounded-full  "
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <div className="w-12 h-12 rounded-full overflow-hidden self-center">
          <Image src={icone} alt="" />
        </div>
      </div>
    </div>
  );
}
