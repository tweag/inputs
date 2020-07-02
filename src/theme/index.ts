import { createContext, useContext } from "react";
import { bem } from "./bem";
import { Theme } from "../types";

const context = createContext(bem);

export const ThemeProvider = context.Provider;

export const useTheme = (): Theme => {
  return useContext(context);
};

export { bem };
export { bootstrap } from "./bootstrap";
