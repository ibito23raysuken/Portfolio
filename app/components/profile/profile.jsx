import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import Line from "../line/line";
import SchoolIcon from "@mui/icons-material/School";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

export default function Profile() {
  const divRef = useRef(null);
  const divflag = useRef(null);
  const divschool = useRef(null);
  const [departX, setDepartX] = useState(0);
  const [departY, setDepartY] = useState(0);
  const [departX2, setDepartX2] = useState(0);
  const [departY2, setDepartY2] = useState(0);
  const [showschool, setShowschool] = useState(false);
  const [showline, setShowline] = useState(false);

  const [showArrows, setShowArrows] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState(null);

  const handleMouseEnter = (arrow) => {
    setShowArrows(true);
    setHoveredArrow(arrow);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
    setHoveredArrow(null);
  };

  const handleArrowHover = (arrow) => {
    setHoveredArrow(arrow);
  };
  useEffect(() => {
    console.log(showschool);
    console.log(showline);
    if (showschool) {
      const position = divRef.current.getBoundingClientRect();
      const positionschool = divschool.current.getBoundingClientRect();
      setDepartX2(positionschool.x + positionschool.width / 2 + 5);
      setDepartY2(positionschool.y + window.innerHeight - position.top + 100);
      setShowline(true);
    }
  }, [showschool]); // Exécuter cet effet chaque fois que showschool change

  const handleShowschoolChange = () => {
    setShowschool((prevShowSchool) => !prevShowSchool);
  };
  useLayoutEffect(() => {
    const updateDimensions = () => {
      const position = divRef.current.getBoundingClientRect();
      const positionFlag = divflag.current.getBoundingClientRect();
      setDepartX(positionFlag.x + positionFlag.width / 2 + 5);
      setDepartY(
        positionFlag.y +
          window.innerHeight -
          position.top +
          positionFlag.height +
          70
      );
    };

    updateDimensions();

    const handleResizeAndScroll = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResizeAndScroll);
    window.addEventListener("scroll", handleResizeAndScroll);

    return () => {
      window.removeEventListener("resize", handleResizeAndScroll);
      window.removeEventListener("scroll", handleResizeAndScroll);
    };
  }, []);

  return (
    <div
      id="profile"
      className="w-screen h-screen pt-16 flex flex-col center bg-slate-900  items-center"
      ref={divRef}
    >
      <FlagCircleIcon
        sx={{ fontSize: 60, cursor: "pointer" }}
        ref={divflag}
        onClick={handleShowschoolChange}
      />
      {showschool && (
        <>
          {showline && (
            <Line x1={departX} y1={departY} x2={departX2} y2={departY2} />
          )}
          <div
            className="flex flex-row
            items-end"
            onMouseLeave={() => handleMouseLeave(null)}
          >
            {showArrows && (
              <WestIcon
                style={{
                  fontSize: hoveredArrow === "left" ? 80 : 60,
                  opacity: hoveredArrow === "left" ? 1 : 0.5,
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleArrowHover("left")}
                onMouseLeave={() => handleArrowHover(null)}
              />
            )}
            <SchoolIcon
              sx={{ fontSize: 60, cursor: "pointer", marginTop: 20 }}
              ref={divschool}
              onMouseEnter={() => handleMouseEnter("school")}
            />
            {showArrows && (
              <EastIcon
                style={{
                  fontSize: hoveredArrow === "right" ? 80 : 60,
                  opacity: hoveredArrow === "right" ? 1 : 0.5,
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleArrowHover("right")}
                onMouseLeave={() => handleArrowHover(null)}
              />
            )}
            {hoveredArrow && (
              <div style={{ position: "absolute", top: 100 }}>
                {hoveredArrow === "left"
                  ? "Vers industriel"
                  : "Vers développeur"}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
