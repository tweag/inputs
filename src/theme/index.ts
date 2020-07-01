import { createContext, useContext } from "react";
import { defaultTheme } from "./defaultTheme";
import { Theme } from "../types";

const context = createContext(defaultTheme);

export const ThemeProvider = context.Provider;

export const useTheme = (): Theme => {
  return useContext(context);
};

export { defaultTheme };
export { bootstrapTheme } from "./bootstrapTheme";
