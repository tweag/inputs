import { HTMLProps } from "react";

export type ExtraInputProps<T> = Omit<Omit<HTMLProps<T>, "value">, "onChange">;

export type CustomInputProps<T, V> = ExtraInputProps<T> & {
  value: V;
  onChange: (value: V) => void;
};
