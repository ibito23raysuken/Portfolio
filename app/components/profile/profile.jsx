import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import s from "./style.module.css";

import EmojiFlagsTwoToneIcon from "@mui/icons-material/EmojiFlagsTwoTone";
import Line from "../line/line";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Curvedline from "../curvedline/curvedline";
import CardProfile from "../card/card";
import { Tune } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import ElectricBoltTwoToneIcon from "@mui/icons-material/ElectricBoltTwoTone";

export default function Profile() {
  const divRef = useRef(null);
  const divflag = useRef(null);
  const divschool = useRef(null);
  const divelectric = useRef(null);
  const divcode = useRef(null);

  const [departX, setDepartX] = useState(0);
  const [departY, setDepartY] = useState(0);
  const [departX2, setDepartX2] = useState(0);
  const [departY2, setDepartY2] = useState(0);
  const [showschool, setShowschool] = useState(false);
  const [showline, setShowline] = useState(false);
  const [Showcurvline, setShowcurvline] = useState(false);
  const [Showcurvline2, setShowcurvline2] = useState(false);
  const [showelectrical, setShowelectrical] = useState(false);
  const [showcode, setShowcode] = useState(false);
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
  function positionarriver() {
    const position = divRef.current.getBoundingClientRect();
    const positionschool = divschool.current.getBoundingClientRect();
    setDepartX2(positionschool.x + positionschool.width / 2 + 5);
    setDepartY2(positionschool.y + window.innerHeight - position.top + 70);
    setShowline(true);
  }
  useEffect(() => {
    if (showschool) {
      positionarriver();
    }
  }, [showschool]);

  const handleShowschoolChange = () => {
    setShowschool((prevShowSchool) => !prevShowSchool);
  };
  const handleClickelectricity = () => {
    setShowelectrical((prevShowelectrical) => !prevShowelectrical);
  };
  const handleClickcode = () => {
    setShowcode((prevShowcode) => !prevShowcode);
  };
  useEffect(() => {
    if (showelectrical) {
      setShowcurvline(true);
    }
  }, [showelectrical]);
  useEffect(() => {
    if (showcode) {
      setShowcurvline2(true);
    }
  }, [showcode]);
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
          60
      );
      if (showschool) {
        positionarriver();
      }
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
  }, [showschool]);

  return (
    <div
      id="profile"
      className="w-screen h-screen pt-16 flex flex-col center bg-slate-900  items-center"
      ref={divRef}
    >
      <div
        className={
          showschool
            ? "grid grid-cols-2 justify-items-stretch w-screen mr-16 "
            : "flex"
        }
      >
        {showschool && (
          <div className="justify-self-start">
            <CardProfile />
          </div>
        )}

        <div
          className={`${s.iconetheme} justify-self-start`}
          ref={divschool}
          onMouseEnter={() => handleMouseEnter("school")}
        >
          <EmojiFlagsTwoToneIcon
            sx={{ fontSize: 40, cursor: "pointer" }}
            ref={divflag}
            onClick={handleShowschoolChange}
          />
        </div>
      </div>

      {showschool && (
        <>
          <div
            className={`flex flex-row items-stretch `}
            onMouseLeave={() => handleMouseLeave(null)}
            style={{
              marginRight: showArrows ? 14 : "",
            }}
          >
            {showline && (
              <>
                <Line x1={departX} y1={departY} x2={departX2} y2={departY2} />
              </>
            )}
            {showArrows && (
              <div className="flex flex-col items-end justify-start">
                DÉVELOPPEUR
                <WestIcon
                  style={{
                    fontSize: hoveredArrow === "left" ? 90 : 60,
                    opacity: hoveredArrow === "left" ? 1 : 0.4,
                    cursor: "pointer",
                  }}
                  onClick={handleClickcode}
                  onMouseEnter={() => handleArrowHover("left")}
                  onMouseLeave={() => handleArrowHover(null)}
                />
              </div>
            )}{" "}
            <div
              className={s.iconetheme}
              ref={divschool}
              onMouseEnter={() => handleMouseEnter("school")}
            >
              <SchoolTwoToneIcon style={{ fontSize: 40 }} />
            </div>
            {showArrows && (
              <div className="flex flex-col">
                ELECTRICITÉ
                <EastIcon
                  style={{
                    fontSize: hoveredArrow === "right" ? 90 : 60,
                    opacity: hoveredArrow === "right" ? 1 : 0.4,
                    cursor: "pointer",
                  }}
                  onClick={handleClickelectricity}
                  onMouseEnter={() => handleArrowHover("right")}
                  onMouseLeave={() => handleArrowHover(null)}
                />
              </div>
            )}
          </div>
          <div className="flex flex-row  ">
            {showcode && (
              <div
                className={s.iconetheme}
                style={{
                  marginTop: 80,
                  marginRight: showelectrical && showcode ? -199 : 370,
                }}
                ref={divcode}
              >
                {Showcurvline2 && (
                  <Curvedline
                    x1={departX2 - 150 - 30}
                    y1={departY2 + 15}
                    lengthX={150}
                    lengthY={120}
                    invert={true}
                  />
                )}
                <CodeIcon style={{ fontSize: 40 }} />
              </div>
            )}
            {showelectrical && (
              <div
                className={s.iconetheme}
                style={{
                  marginTop: 80,
                  marginLeft: showelectrical && showcode ? 500 : 365,
                }}
                ref={divelectric}
              >
                {Showcurvline && (
                  <Curvedline
                    x1={departX2 + 20}
                    y1={departY2 + 15}
                    lengthX={160}
                    lengthY={130}
                    invert={false}
                  />
                )}

                <ElectricBoltTwoToneIcon style={{ fontSize: 40 }} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
