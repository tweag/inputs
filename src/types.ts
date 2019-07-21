type ElementType = keyof JSX.IntrinsicElements;

export type ExtraInputProps<T extends ElementType> = Omit<
  Omit<JSX.IntrinsicElements[T], "value">,
  "onChange"
>;

export type CustomInputProps<T extends ElementType, V> = ExtraInputProps<T> & {
  value: V;
  onChange: (value: V) => void;
};
