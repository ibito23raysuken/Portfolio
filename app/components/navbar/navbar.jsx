"use client";

import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import ProfilePic from "../../../public/images/profile.png";
import Logo from "../../../public/images/icon.png";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Switch from "@mui/material/Switch";

export default function Navbar() {
  const [theme, SetTheme] = useState("dark");
  function toggleswitch() {
    if (theme == "dark") {
      SetTheme("light");
    } else {
      SetTheme("dark");
    }
    console.log(theme);
  }
  return (
    <>
      <nav className="bg-gray-800 h-16 w-full flex items-center justify-between shadow-3xl relative">
        <div className="md:hidden absolute top-4 left-4">
          <button className="text-white focus:outline-none"></button>
        </div>
        <div className="m-5 ">
          <div className="text-white capitalize font-bold p-4 text-4xl flex items-center">
            <Image
              className="h-12 w-12 mr-2 object-cover -rotate-12"
              src={Logo}
              alt=""
            />
            FNR
          </div>
        </div>
        <div className="text-white capitalize p-4 text-2xl hidden md:flex">
          <a>HOME</a>
        </div>
        <div className="text-white capitalize p-4 text-2xl hidden md:flex">
          <a>Profile</a>
        </div>
        <div className="text-white capitalize p-4 text-2xl hidden md:flex">
          <a>Projet</a>
        </div>
        <div className="text-white capitalize p-4 text-2xl hidden md:flex">
          <a>contact</a>
        </div>
        <div className="ml-auto flex">
          <div className="m-5">
            <Switch
              onChange={toggleswitch}
              icon={
                <NightlightIcon sx={{ fontSize: "30px", color: "white" }} />
              }
              checkedIcon={
                <WbSunnyIcon sx={{ fontSize: "30px", color: "white" }} />
              }
              sx={{
                width: "70px",
                height: "45px",
                "& .MuiSwitch-switchBase": {
                  margin: 1,
                  padding: 0,
                  "&.Mui-checked": {
                    color: "#fff",
                    transform: "translateX(30px)",
                  },
                },
                "& .MuiSwitch-thumb": {
                  width: "24px",
                  height: "24px",
                  marginLeft: "auto",
                  transform: "translateX(500px)",
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
