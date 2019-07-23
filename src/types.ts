export type InputAttributes<P> = Omit<
  P,
  "value" | "onChange" | "onChangeText" | "onValueChange"
>;

export type CustomInputProps<C, P, V> = InputAttributes<P> & {
  value: V;
  onChange: (value: V) => void;
  innerRef?: (instance: C | null) => void;
};
