import { useState } from "react";

export interface Values {
  boolean: boolean | null;
  date: string | null;
  datetime: string | null;
  file: File | null;
  files: FileList | null;
  float: number | null;
  integer: number | null;
  select: string | null;
  text: string | null;
  textarea: string | null;
}

export const INITIAL_VALUES: Values = {
  boolean: null,
  date: null,
  datetime: null,
  file: null,
  files: null,
  float: null,
  integer: null,
  select: null,
  text: null,
  textarea: null
};

export type Form<T> = {
  [K in keyof T]: {
    name: K;
    value: T[K];
    onChange: (value: T[K]) => void;
  };
};

export const useForm = <T>(initialValues: T): Form<T> => {
  const [values, setValues] = useState<T>(initialValues);

  return Object.entries(values).reduce(
    (acc, [name, value]) => ({
      ...acc,
      [name]: {
        name,
        value,
        onChange: (v: any) => setValues({ ...values, [name]: v })
      }
    }),
    {} as Form<T>
  );
};
