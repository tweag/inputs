import { useState } from "react";

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
  textarea: string | null;
  time: string | null;
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
  textarea: null,
  time: null,
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
