import { FieldTheme, Theme } from "../types";

const fieldTheme: FieldTheme = {
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

export const defaultTheme: Theme = {
  input: fieldTheme,
  checkbox: fieldTheme,
  dateInput: fieldTheme,
  dateTimeInput: fieldTheme,
  field: fieldTheme,
  fileInput: fieldTheme,
  floatInput: fieldTheme,
  integerInput: fieldTheme,
  radioGroup: fieldTheme,
  select: fieldTheme,
  textarea: fieldTheme,
  timeInput: fieldTheme,
  toggleButton: fieldTheme
};
