import { TextInputProps } from "react-native";

export interface CustomInputProps<T>
  extends Omit<Omit<TextInputProps, "value">, "onChange"> {
  value: T;
  onChange: (value: T) => void;
}
