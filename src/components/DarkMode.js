"use client";

import React, { Fragment, useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  const [mounted,setMounted] = useState(false);
  useEffect(()=> setMounted(true),[])

  return (
    <Fragment>
      {mounted && (currentTheme === "dark" ? (
        <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("light")} />
      ) : (
        <MdDarkMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")} />
      ))}
    </Fragment>
  );
};

export default DarkMode;
