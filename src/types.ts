export type InputAttributes<T> = Omit<
  T,
  "value" | "onChange" | "onChangeText" | "onChangeValue"
>;

export type CustomInputProps<T, V> = InputAttributes<T> & {
  value: V;
  onChange: (value: V) => void;
  innerRef?: (instance: any) => void;
};
