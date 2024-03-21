"use client";
import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Welcome from "./components/welcome/welcome";
import Profile from "./components/profile/profile";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#01141d",
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0c334d",
    },
  },
});
export default function Home() {
  const [theme, SetTheme] = useState(true);
  function toggleswitch() {
    SetTheme(!theme);
  }
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <main className="w-screen">
        <Navbar toggleswitch={toggleswitch}></Navbar>
        <Welcome></Welcome>
        <Profile></Profile>
      </main>
    </ThemeProvider>
  );
}
