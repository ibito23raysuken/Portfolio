import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import s from "./style.module.css";

import EmojiFlagsTwoToneIcon from "@mui/icons-material/EmojiFlagsTwoTone";
import Line from "../../widget/line/line";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Curvedline from "../../widget/curvedline/curvedline";
import CardProfile from "../../widget/card/card";
import { Tune } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import ElectricBoltTwoToneIcon from "@mui/icons-material/ElectricBoltTwoTone";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MemoryIcon from "@mui/icons-material/Memory";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import EngineeringIcon from "@mui/icons-material/Engineering";

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
  const [Showclosemode, setShowclosemode] = useState(false);

  const [Showiot, setShowiot] = useState(false);
  const [ShowFullstack, setShowFullstack] = useState(false);
  const [showArrows2, setShowArrows2] = useState(false);
  const [hoveredArrow2, setHoveredArrow2] = useState(null);

  const [showArrows3, setShowArrows3] = useState(false);
  const [hoveredArrow3, setHoveredArrow3] = useState(null);

  const handleMouseEnter = (arrow) => {
    setShowArrows(true);
    setHoveredArrow(arrow);
  };

  const handleMouseEnter2 = (arrow) => {
    setShowArrows2(true);
    setHoveredArrow2(arrow);
  };
  const handleMouseEnter3 = (arrow) => {
    setShowArrows3(true);
    setHoveredArrow3(arrow);
  };

  //////////////////////////////////////////
  const handleMouseLeave3 = () => {
    setShowArrows3(false);
    setHoveredArrow3(null);
  };
  const handleMouseLeave2 = () => {
    setShowArrows2(false);
    setHoveredArrow2(null);
  };
  const handleMouseLeave = () => {
    setShowArrows(false);
    setHoveredArrow(null);
  };
  /////////////////////////////////////////////////////////////
  const handleArrowHover3 = (arrow) => {
    setHoveredArrow3(arrow);
  };
  const handleArrowHover2 = (arrow) => {
    setHoveredArrow2(arrow);
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
    setShowclosemode((prevShowclosemode) => !prevShowclosemode);
    setShowcode((prevShowcode) => !prevShowcode);
  };
  const handleClickIOT = () => {
    //afficher l'icone
    setShowiot((prevShowiot) => !prevShowiot);
    //tracer la ligne
  };
  const handleClicksolar = () => {
    setShowclosemode((prevShowclosemode) => !prevShowclosemode);
    setShowcode((prevShowsolar) => !prevShowsolar);
  };
  const handleClickfullstack = () => {
    setShowFullstack((prevShowFullstack) => !prevShowFullstack);
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
  const schoolClass = showschool ? "max-h-screen" : "h-screen ";
  return (
    <div
      id="profile"
      className={`w-screen h-screen pt-16 flex flex-col center bg-slate-900 items-center `}
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
                {!Showclosemode ? (
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
                ) : (
                  <CloseSharpIcon
                    style={{
                      fontSize: hoveredArrow === "left" ? 90 : 60,
                      opacity: hoveredArrow === "left" ? 1 : 0.4,
                      cursor: "pointer",
                      color: "red",
                    }}
                    onClick={handleClickcode}
                    onMouseEnter={() => handleArrowHover("left")}
                    onMouseLeave={() => handleArrowHover(null)}
                  />
                )}
              </div>
            )}
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
                {!showelectrical ? (
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
                ) : (
                  <CloseSharpIcon
                    style={{
                      fontSize: hoveredArrow === "right" ? 90 : 60,
                      opacity: hoveredArrow === "right" ? 1 : 0.4,
                      cursor: "pointer",
                      color: "red",
                    }}
                    onClick={handleClickelectricity}
                    onMouseEnter={() => handleArrowHover("right")}
                    onMouseLeave={() => handleArrowHover(null)}
                  />
                )}
              </div>
            )}
          </div>
          {/* partie 2  du neurone */}
          <div
            className={`flex flex-row items-stretch `}
            onMouseLeave={() => handleMouseLeave2(null)}
            style={{
              marginRight: showArrows ? 14 : "",
            }}
          >
            {showcode && (
              <div
                className="flex"
                style={{
                  marginTop: 80,
                  marginRight: showelectrical && showcode ? -198 : 370,
                }}
                ref={divcode}
              >
                {Showiot && (
                  <div
                    className={s.iconetheme}
                    style={{
                      marginTop: 80,
                    }}
                  >
                    <MemoryIcon style={{ fontSize: 40 }} />
                  </div>
                )}
                {Showcurvline2 && (
                  <Curvedline
                    x1={departX2 - 150 - 30}
                    y1={departY2 + 15}
                    lengthX={150}
                    lengthY={200}
                    invert={true}
                  />
                )}
                {showArrows2 && (
                  <div className="flex flex-col items-end justify-start">
                    IoT
                    <WestIcon
                      style={{
                        fontSize: hoveredArrow2 === "left" ? 90 : 60,
                        opacity: hoveredArrow2 === "left" ? 1 : 0.4,
                        cursor: "pointer",
                      }}
                      onClick={handleClickIOT}
                      onMouseEnter={() => handleArrowHover2("left")}
                      onMouseLeave={() => handleArrowHover2(null)}
                    />
                  </div>
                )}
                <div
                  className={`${s.iconetheme} ml-2`}
                  ref={divcode}
                  onMouseEnter={() => handleMouseEnter2("code")}
                >
                  <LaptopWindowsIcon style={{ fontSize: 40 }} />
                </div>
                {showArrows2 && (
                  <div className="flex flex-col">
                    FULL-STACK
                    <ArrowDownwardIcon
                      style={{
                        fontSize: hoveredArrow2 === "right" ? 90 : 60,
                        opacity: hoveredArrow2 === "right" ? 1 : 0.4,
                        cursor: "pointer",
                      }}
                      onClick={handleClickfullstack}
                      onMouseEnter={() => handleArrowHover2("right")}
                      onMouseLeave={() => handleArrowHover2(null)}
                    />
                  </div>
                )}
                <div />
                {ShowFullstack && (
                  <div
                    className={s.iconetheme}
                    style={{
                      marginTop: 80,
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
                    <CodeIcon style={{ fontSize: 40 }} />
                  </div>
                )}
              </div>
            )}
            {showelectrical && (
              <div
                className={`flex flex-row `}
                onMouseLeave={() => handleMouseLeave3(null)}
                style={{
                  marginRight: showArrows ? "" : "",
                }}
              >
                {showArrows3 && (
                  <div className="flex">
                    SOLAR
                    <ArrowDownwardIcon
                      style={{
                        fontSize: hoveredArrow3 === "right" ? 90 : 60,
                        opacity: hoveredArrow3 === "right" ? 1 : 0.4,
                        cursor: "pointer",
                      }}
                      onClick={handleClicksolar}
                      onMouseEnter={() => handleArrowHover3("right")}
                      onMouseLeave={() => handleArrowHover3(null)}
                    />
                  </div>
                )}
                <div
                  className={s.iconetheme}
                  style={{
                    marginTop: 80,
                  }}
                  ref={divelectric}
                  onMouseEnter={() => handleMouseEnter3("electrique")}
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
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
