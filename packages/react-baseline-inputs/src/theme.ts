import { Config } from "./types";
import { useContext, createContext } from "react";

export const defaultFieldTheme = {
  field: "field",
  fieldInline: "field--inline",
  fieldSuccess: "field--success",
  fieldError: "field--erroneous",
  fieldTouched: "field--touched",
  fieldLarge: "field--large",
  fieldSmall: "field--small",
  fieldDisabled: "field--disabled",

  input: "field__input",
  inputInline: "field__input--inline",
  inputSuccess: "field__input--success",
  inputError: "field__input--erroneous",
  inputTouched: "field__input--touched",
  inputLarge: "field__input--large",
  inputSmall: "field__input--small",
  inputDisabled: "field__input--disabled",

  label: "field__label",
  labelInline: "field__label--inline",
  labelSuccess: "field__label--success",
  labelError: "field__label--erroneous",
  labelTouched: "field__label--touched",
  labelLarge: "field__label--large",
  labelSmall: "field__label--small",
  labelDisabled: "field__label--disabled",

  help: "field__help",
  helpInline: "field__help--inline",
  helpSmall: "field__help--small",
  helpLarge: "field__help--large",

  error: "field__error",
  errorInline: "field__error--inline",
  errorSmall: "field__error--small",
  errorLarge: "field__error--large"
};

export const defaultTheme: Config = {
  input: defaultFieldTheme,
  checkbox: defaultFieldTheme,
  dateInput: defaultFieldTheme,
  dateTimeInput: defaultFieldTheme,
  field: defaultFieldTheme,
  fileInput: defaultFieldTheme,
  floatInput: defaultFieldTheme,
  integerInput: defaultFieldTheme,
  radioGroup: defaultFieldTheme,
  select: defaultFieldTheme,
  textarea: defaultFieldTheme,
  toggleButton: defaultFieldTheme
};

export const ThemeContext = createContext(defaultTheme);
export const ThemeProvider = ThemeContext.Provider;

export const useTheme = (element: keyof Config) => {
  const config = useContext(ThemeContext);
  return config[element];
};
