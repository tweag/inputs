import { useCallback } from "react";
import { FormField } from "@stackup/form";
import { FieldProps } from "./types";
import { concat, isString, isPopulated } from "./utilities";

export function getRelatedId(id: string, suffix: string): string {
  return `${id}--${suffix}`;
}

export function getError(field: FormField<any>): string | undefined {
  return field.touched && isString(field.error) ? field.error : undefined;
}

export function useBlur({ setTouched }: FormField<any>) {
  return useCallback(() => setTouched(true), [setTouched]);
}

export function useFieldProps<Value, Element, InputProps>(
  props: FieldProps<Value, Element> & InputProps,
  ...variants: string[]
) {
  const {
    innerRef,
    field,
    size,
    inline,
    condensed,
    label,
    help,
    append,
    prepend,
    className,
    inputClassName,
    labelClassName,
    helpClassName,
    errorClassName,
    ...inputProps
  } = props;

  const onBlur = useBlur(field);
  const error = getError(field);
  const labelId = getRelatedId(field.id, "label");
  const errorId = getRelatedId(field.id, "error");

  const getClassName = (name: string, ...names: any[]) =>
    concat(
      name,
      inline && `${name}--inline`,
      condensed && `${name}--condensed`,
      size && `${name}--${size}`,
      field.touched && `${name}--touched`,
      isPopulated(field.value) && `${name}--populated`,
      ...variants.map(v => `${name}--${v}`),
      ...names
    );

  return {
    ...inputProps,
    field,
    error,
    label,
    help,
    append,
    prepend,
    onBlur,
    ref: innerRef,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : undefined,
    className: getClassName("field__input", props.inputClassName),
    getFieldProps: () => ({
      className: getClassName("field", props.className)
    }),
    getLabelProps: () => ({
      id: `${field.id}--label`,
      htmlFor: field.id,
      className: getClassName("field__label", props.labelClassName)
    }),
    getErrorProps: () => ({
      id: `${field.id}--error`,
      role: "alert",
      className: getClassName("field__error", props.errorClassName)
    }),
    getHelpProps: () => ({
      className: getClassName("field__help", props.helpClassName)
    })
  };
}
