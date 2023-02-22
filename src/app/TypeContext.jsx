"use client";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({});

export default function GlobalContextProvider({ children }) {

  return (
      {children}
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}