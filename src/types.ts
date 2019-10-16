type ElementType = keyof JSX.IntrinsicElements;

export type ExtraInputProps<T extends ElementType> = Omit<
  Omit<JSX.IntrinsicElements[T], "value">,
  "onChange"
> &
  CustomFieldProps;

export type CustomInputProps<T extends ElementType, V> = ExtraInputProps<T> & {
  value: V;
  label?: string;
  wrap?: boolean;
  onChange: (value: V) => void;
};

export type CustomFieldProps = {
  label?: string;
  wrap?: boolean;
};
