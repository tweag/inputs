import { createContext, useContext } from "react";
import { Theme } from "../types";
import { defaultTheme } from "./defaultTheme";

const context = createContext(defaultTheme);

export const ThemeProvider = context.Provider;

export const useTheme = (element: keyof Theme) => {
  const config = useContext(context);
  return config[element];
};

export { defaultTheme };
export { bootstrapTheme } from "./bootstrapTheme";
