import { createContext, useContext } from "react";
import { Theme } from "../types";
import { defaultTheme } from "./defaultTheme";

const context = createContext(defaultTheme);

export const ThemeProvider = context.Provider;

export const useTheme = <K extends keyof Theme>(
  element: K,
  override?: Theme[K]
) => {
  const config = useContext(context);
  return override || config[element];
};

export { defaultTheme };
export { bootstrapTheme } from "./bootstrapTheme";
