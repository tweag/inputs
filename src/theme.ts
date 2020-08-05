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

type MaybeString = undefined | boolean | string;
type ThemeFn = (props: ThemeProps) => string | undefined;

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

/**
 * Concatenate conditional class names.
 *
 * ### Example
 * concat("input", touched && error && "input--error")
 */
export function concat(...names: MaybeString[]): string | undefined {
  let out = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) out += (out && " ") + names[i];
  }
  return out || undefined;
}

/**
 * Create a new theme.
 *
 * #### Example
 * const theme = createTheme({
 *   input: props => concat(
 *     "input",
 *     props.touched && "input--touched",
 *     props.touched && props.error && "input--error",
 *     ...props.types.map(type => `input--${type}`),
 *     ...props.variants.map(variant => variant && `input--${variant}`),
 *   )
 * });
 */
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

export const useTheme = () => useContext(ThemeContext);

/**
 * Render a `ThemeProvider` at the top of your component tree
 * to provide a global theme.
 *
 * See `createTheme` for an example of how to define your theme.
 *
 * #### Example
 *
 * ```jsx
 * <ThemeProvider value={theme}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider = ThemeContext.Provider;
