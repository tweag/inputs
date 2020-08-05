import { useTheme, ThemeProps } from "./theme";
import { useCallback } from "react";
import { FormField } from "@stackup/form";
import { FieldProps } from "./types";
import { isString } from "./utilities";
import { concat } from "./theme";

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
  types: string[]
) {
  const {
    innerRef,
    field,
    variant,
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

  const theme = useTheme();
  const onBlur = useBlur(field);
  const error = getError(field);
  const labelId = getRelatedId(field.id, "label");
  const errorId = getRelatedId(field.id, "error");

  const themeProps: ThemeProps = {
    value: field.value,
    error: field.error,
    touched: field.touched,
    types,
    variants: Array.isArray(variant) ? variant : [variant]
  };

  return {
    ...inputProps,
    field,
    error,
    label,
    help,
    append,
    prepend,
    onBlur,
    id: field.id,
    ref: innerRef,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : undefined,
    className: concat(theme.input(themeProps), props.inputClassName),
    getFieldProps: () => ({
      className: concat(theme.field(themeProps), props.className)
    }),
    getLabelProps: () => ({
      id: `${field.id}--label`,
      htmlFor: field.id,
      className: concat(theme.label(themeProps), props.labelClassName)
    }),
    getErrorProps: () => ({
      id: `${field.id}--error`,
      role: "alert",
      className: concat(theme.error(themeProps), props.errorClassName)
    }),
    getHelpProps: () => ({
      className: concat(theme.help(themeProps), props.helpClassName)
    })
  };
}
