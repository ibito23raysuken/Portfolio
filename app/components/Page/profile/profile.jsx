import React, { useRef, useState, useEffect } from "react";
import s from "./style.module.css";
import {
  Box,
  Text,
  Icon,
  createIcon,
  useColorModeValue,
} from "@chakra-ui/react";
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
import Neurone from "../../widget/neurone/neurone";
import CustomIcone from "../../widget/icone/icone";
import LineCustome from "../../widget/line/linecustome";

import CardDev from "../../widget/carddev/carddev";
import Cardcenter from "../../widget/cardcenter/cardcenter";
import Cardelec from "../../widget/cardelec/cardelec";

import devmobile from "../../../../public/images/icones/devmobile.png";

export default function Profile() {
  const [ShowchildFlag, setShowchildFlag] = useState(false);
  const [ShowchildDev, setShowchildDev] = useState(false);
  const [ShowchildElec, setShowchildElec] = useState(false);
  const [ShowIot, setShowIot] = useState(false);
  const [ShowFullstack, setShowFullstack] = useState(false);
  const [ShowSolar, setShowSolar] = useState(false);
  const [ShowBatiment, setShowBatiment] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const [y4, setY4] = useState(0);
  const [x4, setX4] = useState(0);
  const [x5, setX5] = useState(0);
  const [x3, setX3] = useState(0);
  const [x6, setX6] = useState(0);
  const [x7, setX7] = useState(0);
  const [y7, setY7] = useState(0);
  const [x8, setX8] = useState(0);
  const [y8, setY8] = useState(0);
  const [x9, setX9] = useState(0);
  const [y9, setY9] = useState(0);
  const [x10, setX10] = useState(0);
  const [y10, setY10] = useState(0);

  const refLaptopWindowsIcon = useRef();
  const refSchoolTwoToneIcon = useRef();
  const refCurvlinedev = useRef();
  const refElectricBoltTwoToneIcon = useRef();
  const refMemoryIcon = useRef();
  const refdivrows6 = useRef();
  const refCodeIcon = useRef();
  const refEngineeringIcon = useRef();

  function handlerClickIcon(neurone) {
    if (neurone == "EmojiFlagsTwoToneIcon") {
      setShowchildFlag(!ShowchildFlag);
    } else if (neurone == "MemoryIcon") {
      console.log(`afficher les enfant de ${neurone}`);
    } else if (neurone == "SolarPowerIcon") {
      console.log(`afficher les enfant de ${neurone}`);
    } else if (neurone == "CodeIcon") {
      console.log(`afficher les enfant de ${neurone}`);
    } else {
      console.log(`afficher les enfant de ${neurone}`);
    }
  }
  function onclickleftArrow(neurone) {
    if (neurone == "SchoolTwoToneIcon") {
      setShowchildDev(!ShowchildDev);
    } else if (neurone == "LaptopWindowsIcon") {
      setShowIot(!ShowIot);
    } else {
      setShowBatiment(!ShowBatiment);
    }
  }
  function onclickrightArrow(neurone) {
    if (neurone == "SchoolTwoToneIcon") {
      setShowchildElec(!ShowchildElec);
    } else if (neurone == "LaptopWindowsIcon") {
      setShowFullstack(!ShowFullstack);
    } else {
      setShowSolar(!ShowSolar);
    }
  }
  function Showcurvlinedev() {
    if (refSchoolTwoToneIcon.current) {
      const valeury1 =
        -refCurvlinedev.current.getBoundingClientRect().top +
        refSchoolTwoToneIcon.current.getBoundingClientRect().top;
      setX1(refSchoolTwoToneIcon.current.getBoundingClientRect().right);
      setY1(valeury1);
    }
    if (refLaptopWindowsIcon.current) {
      const heightrows7 = refdivrows6.current.getBoundingClientRect().height;
      const valeury2 =
        -refCurvlinedev.current.getBoundingClientRect().top +
        refLaptopWindowsIcon.current.getBoundingClientRect().top;
      const valeury7 = heightrows7 - valeury2 + heightrows7 - 20;
      setX2(refLaptopWindowsIcon.current.getBoundingClientRect().right);
      setY2(valeury2);
      setX7(refLaptopWindowsIcon.current.getBoundingClientRect().right);
      setY7(-valeury7);
      if (refMemoryIcon.current) {
        const widthscreen = window.innerWidth;
        const valeurx5 =
          widthscreen / 8 -
          refMemoryIcon.current.getBoundingClientRect().x -
          40;
        const valeurx3 =
          refLaptopWindowsIcon.current.getBoundingClientRect().right -
          widthscreen / 8;
        setX5(-valeurx5);
        setX3(valeurx3);
      }
      if (refCodeIcon.current) {
        setY8(heightrows7 + 20);
        setX8(refCodeIcon.current.getBoundingClientRect().left + 20);
      }
    }
    if (refElectricBoltTwoToneIcon.current) {
      const valeurx4 =
        refElectricBoltTwoToneIcon.current.getBoundingClientRect().right -
        refCurvlinedev.current.getBoundingClientRect().width / 2;
      setX4(valeurx4);
      const valeury4 =
        -refCurvlinedev.current.getBoundingClientRect().top +
        refElectricBoltTwoToneIcon.current.getBoundingClientRect().top;
      const widthscreen = window.innerWidth;
      const valeurx6 =
        refElectricBoltTwoToneIcon.current.getBoundingClientRect().right -
        (widthscreen / 8) * 6;
      setX6(valeurx6);
      setY4(valeury4);
      if (refEngineeringIcon.current) {
        const heightrows7 = refdivrows6.current.getBoundingClientRect().height;
        const valeurelec =
          -refCurvlinedev.current.getBoundingClientRect().top +
          refElectricBoltTwoToneIcon.current.getBoundingClientRect().top;
        const valeury9 = heightrows7 - valeurelec;
        const valeurx10 =
          refEngineeringIcon.current.getBoundingClientRect().x -
          (widthscreen / 8) * 4;
        setX9(valeurx4 - 40);

        setX10(valeurx10 + 20);
        setY10(heightrows7 + 40);
        setY9(0 - 40);
      }
    }
  }
  useEffect(() => {
    Showcurvlinedev();
  }, [
    ShowIot,
    ShowchildDev,
    ShowFullstack,
    ShowchildElec,
    ShowSolar,
    ShowFullstack,
    ShowBatiment,
    refEngineeringIcon,
  ]);

  useEffect(() => {
    const handleResize = () => {
      Showcurvlinedev();
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ShowchildFlag, ShowIot, ShowSolar, refEngineeringIcon, ShowchildElec]);
  return (
    <div id="profile" className="max-h-screen pt-16 -z-20 ">
      <div className="grid grid-rows-9">
        <div className="grid grid-cols-3 ">
          <div className=" bg-red-400 h-0">
            {ShowchildFlag && <CardProfile />}
            {ShowchildFlag && ShowchildDev && (
              <div className="mt-20">
                <CardDev
                  parametres={[
                    { icone: devmobile, name: "Mobile", level: 5 },
                    { icone: devmobile, name: "IOt", level: 4 },
                    { icone: devmobile, name: "Web", level: 3 },
                  ]}
                />
              </div>
            )}
          </div>
          <div className=" text-gray-700 justify-self-center">
            <CustomIcone
              BaseIcon={EmojiFlagsTwoToneIcon}
              onClickIcon={handlerClickIcon}
              NeuroneName={"EmojiFlagsTwoToneIcon"}
            />
            <Box top={"900px"} left={width / 2 + 40} position={"absolute"}>
              <Text
                fontSize="30px"
                fontFamily={"Caveat"}
                transform={"rotate(10deg)"}
                pl="100"
                top={"100px"}
                width="100px"
                height="100px"
                position={"absolute"}
              >
                Click me!
              </Text>
              <Icon
                as={Arrow}
                color={useColorModeValue("gray.800", "gray.300")}
                width="100px"
                height="100px"
                position={"absolute"}
                top={"100px"}
              />
            </Box>
          </div>
          <div className="h-0">
            {ShowchildFlag && ShowchildElec && (
              <div className="mt-20">
                <CardDev
                  parametres={[
                    { name: "Chef de projet", level: 2 },
                    { name: "Bureau d'etude", level: 1 },
                  ]}
                />
              </div>
            )}
            {ShowchildFlag && ShowchildElec && ShowSolar && (
              <div className="mt-20">
                <CardDev
                  parametres={[
                    { name: "Dimmensionnement PS", level: 2 },
                    { name: "Programation SMA", level: 1 },
                    { name: "Victron", level: 1 },
                  ]}
                />
              </div>
            )}
          </div>
        </div>

        {ShowchildFlag && (
          <>
            <div className="grid grid-cols-3 ">
              <div className="h-0"></div>
              <div className=" text-gray-700 justify-self-center">
                <Line />
              </div>
              <div></div>
            </div>

            <>
              <Neurone
                BaseIcon={SchoolTwoToneIcon}
                LeftIcon={ShowchildDev ? CloseSharpIcon : WestIcon}
                RightIcon={ShowchildElec ? CloseSharpIcon : EastIcon}
                LeftLabel={"DÉVELOPPEUR"}
                RightLabel={"ELECTRICITÉ"}
                onclickleftArrow={onclickleftArrow}
                onclickrightArrow={onclickrightArrow}
                NeuroneName={"SchoolTwoToneIcon"}
                reference={refSchoolTwoToneIcon}
              />
            </>
            <div className="grid grid-cols-2 " ref={refCurvlinedev}>
              <div className="">
                {ShowchildDev && (
                  <Curvedline x1={x1 - 40} y1={y1 + 20} x2={x2 - 20} y2={y2} />
                )}
              </div>
              {ShowchildElec && (
                <div className="">
                  <Curvedline x1={0 + 20} y1={y1 + 20} x2={x4 - 20} y2={y4} />
                </div>
              )}
            </div>
            <div className=" text-gray-700">
              <div className="grid grid-cols-8">
                <div className="justify-self-center  ">
                  <div className={`mt-20`}>
                    {ShowchildDev && ShowIot && (
                      <div className="  grid grid-cols-2">
                        <CustomIcone
                          BaseIcon={MemoryIcon}
                          onClickIcon={handlerClickIcon}
                          NeuroneName={"MemoryIcon"}
                          reference={refMemoryIcon}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  {ShowchildDev && ShowIot && (
                    <LineCustome x1={x5} y1={y2 - 130} x2={x3} y2={y2 - 130} />
                  )}
                </div>
                <div className="">
                  {ShowchildDev && (
                    <>
                      <Neurone
                        BaseIcon={LaptopWindowsIcon}
                        LeftIcon={ShowIot ? CloseSharpIcon : WestIcon}
                        RightIcon={
                          ShowFullstack ? CloseSharpIcon : ArrowDownwardIcon
                        }
                        LeftLabel={"IOT"}
                        RightLabel={"FULL-STACK"}
                        onclickleftArrow={onclickleftArrow}
                        onclickrightArrow={onclickrightArrow}
                        NeuroneName={"LaptopWindowsIcon"}
                        reference={refLaptopWindowsIcon}
                      />
                    </>
                  )}
                </div>
                <div className="bg-black place-content-start h-0 col-start-4 col-end-6 ml-5 mr-5">
                  {ShowchildFlag && ShowchildDev && ShowIot && (
                    <div className="">
                      <Cardcenter
                        parametres={[
                          { name: "Arduino", level: 4 },
                          { name: "PIC", level: 1 },
                          { name: "Electronique", level: 2 },
                        ]}
                      />
                    </div>
                  )}
                </div>
                <div>
                  {ShowchildElec && (
                    <>
                      <Neurone
                        BaseIcon={ElectricBoltTwoToneIcon}
                        LeftIcon={
                          ShowBatiment ? CloseSharpIcon : ArrowDownwardIcon
                        }
                        RightIcon={ShowSolar ? CloseSharpIcon : EastIcon}
                        LeftLabel={"CONSTRUCTION"}
                        RightLabel={"SOLAIRE"}
                        onclickleftArrow={onclickleftArrow}
                        onclickrightArrow={onclickrightArrow}
                        NeuroneName={"ElectricBoltTwoToneIcon"}
                        reference={refElectricBoltTwoToneIcon}
                      />
                    </>
                  )}
                </div>
                <div className="">
                  {ShowchildElec && ShowSolar && (
                    <LineCustome x1={x6} y1={y4 - 130} x2={x4} y2={y4 - 130} />
                  )}
                </div>
                <div className=" justify-self-center">
                  {ShowchildElec && ShowSolar && (
                    <div className={`mt-20`}>
                      <CustomIcone
                        BaseIcon={SolarPowerIcon}
                        onClickIcon={handlerClickIcon}
                        NeuroneName={"SolarPowerIcon"}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=" text-gray-700 ">
              <div className="grid grid-cols-2 ">
                <div className=" " ref={refdivrows6}>
                  {ShowchildDev && ShowFullstack && (
                    <Curvedline x1={x7} y1={y7} x2={x8} y2={y8} />
                  )}
                </div>
                {ShowchildElec && ShowBatiment && (
                  <div className="">
                    <Curvedline x1={x9} y1={y9} x2={x10} y2={y10} />
                  </div>
                )}
              </div>
            </div>
            <div className=" text-gray-700">
              <div className="grid grid-cols-4">
                <div className="h-0">
                  {ShowchildFlag && ShowchildDev && ShowFullstack && (
                    <div className="">
                      <CardDev
                        parametres={[
                          { name: "LARAVEL", level: 3 },
                          { name: "REACTJS", level: 1 },
                          { name: "PYTHON", level: 2 },
                          { name: "FLUTTER", level: 3 },
                        ]}
                      />
                    </div>
                  )}
                </div>
                <div className=" justify-self-center">
                  <div>
                    {ShowchildDev && ShowFullstack && (
                      <div className=" ">
                        <CustomIcone
                          BaseIcon={CodeIcon}
                          onClickIcon={handlerClickIcon}
                          NeuroneName={"CodeIcon"}
                          reference={refCodeIcon}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className=" justify-self-center">
                  {ShowchildElec && ShowBatiment && (
                    <div className=" ">
                      <CustomIcone
                        BaseIcon={EngineeringIcon}
                        onClickIcon={handlerClickIcon}
                        NeuroneName={"EngineeringIcon"}
                        reference={refEngineeringIcon}
                      />
                    </div>
                  )}
                </div>
                <div className="h-0">
                  {ShowchildFlag && ShowchildElec && ShowBatiment && (
                    <div className="">
                      <Cardelec
                        parametres={[
                          { name: "Norme NFC-100-15", level: 2 },
                          { name: "Autocad", level: 1 },
                          { name: "Dialux", level: 1 },
                          {
                            name: "Dimmensionnement Installation Electrique",
                            level: 3,
                          },
                        ]}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 100 10",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
