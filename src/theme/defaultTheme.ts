import { FieldTheme, FieldSetTheme, Theme } from "../types";

const fieldTheme: FieldTheme = {
  field: "field",
  fieldInline: "field--inline",
  fieldCondensed: "field--condensed",
  fieldSuccess: "field--success",
  fieldError: "field--erroneous",
  fieldTouched: "field--touched",
  fieldPopulated: "field--populated",
  fieldLarge: "field--large",
  fieldSmall: "field--small",
  fieldDisabled: "field--disabled",
  fieldHasIcon: "field--hasIcon",
  fieldHasIconBefore: "field--hasIconBefore",

  input: "field__input",
  inputInline: "field__input--inline",
  inputCondensed: "field__input--condensed",
  inputSuccess: "field__input--success",
  inputError: "field__input--erroneous",
  inputTouched: "field__input--touched",
  inputPopulated: "field__input--populated",
  inputLarge: "field__input--large",
  inputSmall: "field__input--small",
  inputDisabled: "field__input--disabled",
  inputHasIcon: "field__input--hasIcon",
  inputHasIconBefore: "field__input--hasIconBefore",

  label: "field__label",
  labelInline: "field__label--inline",
  labelCondensed: "field__label--condensed",
  labelSuccess: "field__label--success",
  labelError: "field__label--erroneous",
  labelTouched: "field__label--touched",
  labelPopulated: "field__label--populated",
  labelLarge: "field__label--large",
  labelSmall: "field__label--small",
  labelDisabled: "field__label--disabled",
  labelHasIcon: "field__label--hasIcon",
  labelHasIconBefore: "field__label--hasIconBefore",

  help: "field__help",
  helpInline: "field__help--inline",
  helpCondensed: "field__help--condensed",
  helpSmall: "field__help--small",
  helpLarge: "field__help--large",

  error: "field__error",
  errorInline: "field__error--inline",
  errorCondensed: "field__error--condensed",
  errorSmall: "field__error--small",
  errorLarge: "field__error--large",

  icon: "field__icon",
  iconBefore: "field__icon--before",
};

const fieldSetTheme: FieldSetTheme = {
  fieldSet: "fieldset",
  fieldSetError: "fieldset--erroneous",
  fieldSetSuccess: "fieldset--success",
  fieldSetTouched: "fieldset--touched",
  fieldSetSmall: "fieldset--small",
  fieldSetLarge: "fieldset--large",

  legend: "fieldset__legend",
  legendError: "fieldset__legend--erroneous",
  legendSuccess: "fieldset__legend--success",
  legendTouched: "fieldset__legend--touched",
  legendSmall: "fieldset__legend--small",
  legendLarge: "fieldset__legend--large",

  help: "fieldset__help",
  helpSmall: "fieldset__help--small",
  helpLarge: "fieldset__help--large",

  error: "fieldset__error",
  errorSmall: "fieldset__error--small",
  errorLarge: "fieldset__error--large"
};

export const defaultTheme: Theme = {
  input: fieldTheme,
  checkbox: fieldTheme,
  dateInput: fieldTheme,
  dateTimeInput: fieldTheme,
  field: fieldTheme,
  fieldSet: fieldSetTheme,
  fileInput: fieldTheme,
  floatInput: fieldTheme,
  integerInput: fieldTheme,
  radioGroup: fieldTheme,
  select: fieldTheme,
  textarea: fieldTheme,
  timeInput: fieldTheme,
  toggleButton: fieldTheme
};
