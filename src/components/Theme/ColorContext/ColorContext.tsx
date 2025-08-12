import React, { createContext, useContext } from "react";
import { Theme } from "../theme";

interface ColorContextProps {
  theme: Theme;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};

export default ColorContext;
