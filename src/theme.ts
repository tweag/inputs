import { createContext, useContext } from "react";
import { FormError, FormTouched } from "@stackup/form";
import { FieldVariant } from "./types";

export interface ThemeProps {
  value: any;
  error: FormError<any>;
  touched: FormTouched<any>;
  types: string[];
  variants: FieldVariant[];
}

export type ThemeFn = (props: ThemeProps) => string | undefined;

export interface Theme {
  field: ThemeFn;
  label: ThemeFn;
  input: ThemeFn;
  fieldset: ThemeFn;
  legend: ThemeFn;
  help: ThemeFn;
  error: ThemeFn;
}

const noop = () => undefined;
export const createTheme = (theme: Partial<Theme>): Theme => ({
  fieldset: noop,
  legend: noop,
  field: noop,
  label: noop,
  input: noop,
  error: noop,
  help: noop,
  ...theme
});

const ThemeContext = createContext<Theme>(createTheme({}));
ThemeContext.displayName = "Theme";

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
