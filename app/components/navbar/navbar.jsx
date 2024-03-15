"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProfilePic from "../../../public/images/profile.png";
import Logo from "../../../public/images/icon.png";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function Navbar({ toggleswitch }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 761) {
        setIsNavOpen(false);
        setOpenMenu(false);
      } else {
        setIsNavOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function togglebuttonNav() {
    setOpenMenu(!openMenu);
  }
  console.log(isNavOpen);
  return (
    <>
      <nav
        className="h-16 w-full flex items-center justify-between shadow-3xl static bg-primary"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        {isNavOpen &&
          (!openMenu ? (
            <button onClick={togglebuttonNav}>
              <MenuIcon sx={{ fontSize: "40px", color: "white" }} />
            </button>
          ) : (
            <button onClick={togglebuttonNav}>
              <CloseIcon sx={{ fontSize: "40px", color: "white" }} />
            </button>
          ))}
        <div className="m-5">
          <div className="text-white capitalize font-bold p-4 text-4xl flex items-center">
            <Image
              className="h-12 w-12 mr-2 object-cover -rotate-12"
              src={Logo}
              alt=""
            />
            FNR
          </div>
        </div>
        <div
          className={`${
            isNavOpen
              ? openMenu
                ? "w-full  absolute transition ease-out transform translate-y-40"
                : "absolute ease-in transform -translate-y-full"
              : " w-auto flex"
          }`}
          style={{ backgroundColor: theme.palette.primary.main }}
        >
          <div className=" text-white capitalize p-4 text-2xl">
            <a>HOME</a>
          </div>
          <div className="text-white capitalize p-4 text-2xl">
            <a>Profile</a>
          </div>
          <div className="text-white capitalize p-4 text-2xl">
            <a>Projet</a>
          </div>
          <div className="text-white capitalize p-4 text-2xl">
            <a>contact</a>
          </div>
        </div>

        <div className="ml-auto flex ">
          <div className="m-5 items-stretch">
            <Switch
              onChange={toggleswitch}
              icon={
                <NightlightIcon
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    transform: "rotate(-20deg)",
                    marginTop: "-2px",
                  }}
                />
              }
              checkedIcon={
                <WbSunnyIcon
                  sx={{ fontSize: "30px", color: "white", marginTop: "-2px" }}
                />
              }
              sx={{
                width: "60px",
                height: "40px",
                ".MuiSwitch-track": {
                  backgroundColor: "#FF4823",
                },
                "& .MuiSwitch-switchBase": {
                  "&.Mui-checked": {
                    "+ .MuiSwitch-track": {
                      backgroundColor: "#FF4823",
                    },
                    ".MuiSwitch-thumb": {
                      height: "24px",
                      marginLeft: "auto",
                      transform: "translateX(500px)",
                    },
                  },
                },
                "& .MuiSwitch-thumb": {
                  height: "24px",
                  marginLeft: "auto",
                },
                color: "success.main",
              }}
            />
          </div>
          <div className="flex items-stretch m-5">
            <Image
              className="h-8 w-8 rounded-full object-cover self-center"
              src={ProfilePic}
              alt=""
            />
          </div>
        </div>
      </nav>
    </>
  );
}
