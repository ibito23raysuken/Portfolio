"use client";
import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Welcome from "./components/welcome/welcome";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { purple } from "@mui/material/colors";

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
      <main>
        <Navbar toggleswitch={toggleswitch}></Navbar>
        <Welcome></Welcome>
      </main>
    </ThemeProvider>
  );
}
