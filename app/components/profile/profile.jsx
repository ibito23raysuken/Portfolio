import React, { useRef, useState } from "react";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import SchoolIcon from "@mui/icons-material/School";

export default function Profile() {
  const [departx, setDepartX] = useState();
  const [departy, setDepartY] = useState();
  const [arretx, setArretX] = useState();
  const [arrety, setArretY] = useState();

  const flagRef = useRef(null);
  const schoolRef = useRef(null);

  const getPositions = () => {
    const flagPosition = flagRef.current.getBoundingClientRect();
    const schoolPosition = schoolRef.current.getBoundingClientRect();
    setDepartX(flagPosition.x - 100);
    setDepartY(flagPosition.y + 8000);
    setArretX(schoolPosition.x);
    setArretY(schoolPosition.y);
    console.log("Position de l'icône FlagCircleIcon : ", flagPosition);
    console.log("Position de l'icône SchoolIcon : ", schoolPosition);
  };

  return (
    <>
      <div
        id="profile"
        className="w-screen h-screen flex justify-center mt-5 bg-slate-900 "
      >
        <div className="flex flex-col mt-28">
          <FlagCircleIcon
            ref={flagRef}
            sx={{ fontSize: 60, cursor: "pointer" }}
            onClick={getPositions}
          />
          <SchoolIcon ref={schoolRef} sx={{ fontSize: 60 }} />
        </div>
      </div>
    </>
  );
}
