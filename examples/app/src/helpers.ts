import { useState } from "react";
import { Theme, FieldTheme } from "react-baseline-inputs";

export interface Values {
  checkbox: boolean | null;
  checkboxList: string[] | null;
  date: string | null;
  datetime: string | null;
  file: File | null;
  filelist: FileList | null;
  float: number | null;
  integer: number | null;
  radioGroup: string | null;
  select: string | null;
  text: string | null;
  masked: string | null;
  textarea: string | null;
  toggle: boolean | null;
}

export const initialValues: Values = {
  checkbox: null,
  checkboxList: null,
  date: null,
  datetime: null,
  file: null,
  filelist: null,
  float: null,
  integer: null,
  radioGroup: null,
  select: null,
  text: null,
  masked: null,
  textarea: null,
  toggle: null
};

export type Fields<T> = {
  [K in keyof T]: {
    name: K;
    value: T[K];
    onChange: (value: T[K]) => void;
  };
};

export const notBlank = (value: any) => {
  if (value === null) {
    return "This field is required.";
  }
};

export const useForm = <T>(initialValues: T): [T, Fields<T>] => {
  const [values, setValues] = useState<T>(initialValues);

  const fields = Object.entries(values).reduce(
    (acc, [name, value]) => ({
      ...acc,
      [name]: {
        name,
        value,
        onChange: (v: any) => setValues({ ...values, [name]: v })
      }
    }),
    {} as Fields<T>
  );

  return [values, fields];
};

export const fieldTheme: FieldTheme = {
  field: "form-group",
  input: "form-control",
  inputSuccess: "is-valid",
  inputError: "is-invalid",
  inputSmall: "form-control-sm",
  inputLarge: "form-control-lg",
  error: "invalid-feedback",
  help: "form-text text-muted"
};

export const checkboxTheme: FieldTheme = {
  ...fieldTheme,
  field: "form-check",
  fieldInline: "form-check-inline",
  input: "form-check-input",
  label: "form-check-label"
};

export const selectTheme: FieldTheme = {
  ...fieldTheme,
  input: "custom-select"
};

export const fileInputTheme: FieldTheme = {
  ...fieldTheme,
  field: "custom-file mb-3",
  input: "custom-file-input",
  label: "custom-file-label"
};

export const toggleButtonTheme: FieldTheme = {
  ...fieldTheme,
  field: "custom-control custom-switch",
  input: "custom-control-input",
  label: "custom-control-label"
};

export const theme: Theme = {
  input: fieldTheme,
  dateInput: fieldTheme,
  dateTimeInput: fieldTheme,
  field: fieldTheme,
  floatInput: fieldTheme,
  integerInput: fieldTheme,
  radioGroup: checkboxTheme,
  textarea: fieldTheme,
  select: selectTheme,
  fileInput: fileInputTheme,
  checkbox: checkboxTheme,
  toggleButton: toggleButtonTheme
};

export const telephoneMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];
