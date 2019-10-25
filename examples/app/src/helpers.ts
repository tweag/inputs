import { useState } from "react";
import { Theme } from "react-baseline-inputs";

export interface Values {
  checkbox: boolean | null;
  date: string | null;
  datetime: string | null;
  file: File | null;
  filelist: FileList | null;
  float: number | null;
  integer: number | null;
  select: string | null;
  text: string | null;
  textarea: string | null;
  toggle: boolean | null;
}

export const initialValues: Values = {
  checkbox: null,
  date: null,
  datetime: null,
  file: null,
  filelist: null,
  float: null,
  integer: null,
  select: null,
  text: null,
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

export const theme: Theme = {
  field: "form-group",
  input: "form-control",
  inputSuccess: "is-valid",
  inputError: "is-invalid",
  inputSmall: "form-control-sm",
  inputLarge: "form-control-lg",
  error: "invalid-feedback",
  help: "form-text text-muted"
};

export const selectTheme: Theme = {
  ...theme,
  input: "custom-select"
};

export const fileTheme: Theme = {
  ...theme,
  field: "custom-file mt-1 mb-3",
  input: "custom-file-input",
  label: "custom-file-label"
};

export const checkboxTheme: Theme = {
  ...theme,
  field: "form-check",
  input: "form-check-input",
  label: "form-check-label"
};

export const toggleTheme: Theme = {
  ...theme,
  field: "custom-control custom-switch",
  input: "custom-control-input",
  label: "custom-control-label"
};
