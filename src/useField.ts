import * as React from "react";
import { Field } from "@stackup/form";
import { concat, HTMLProps } from "./utilities";

export interface FieldProps {
  field: Field<any>;
  innerRef?: React.Ref<any>;
  label?: React.ReactNode;
  labelProps?: HTMLProps<HTMLLabelElement>;
  labelClassName?: string;
  help?: React.ReactNode;
  helpProps?: HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  errorProps?: HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
  fieldProps?: HTMLProps<HTMLDivElement>;
  fieldClassName?: string;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

function getString(value: any): string | undefined {
  return typeof value === "string" ? value : undefined;
}

export const useField = <T extends FieldProps>(props: T) => {
  const {
    field,
    innerRef,
    label,
    labelProps,
    labelClassName,
    help,
    helpProps,
    helpClassName,
    errorProps,
    errorClassName,
    fieldProps,
    fieldClassName,
    append,
    prepend,
    ...inputProps
  } = props;

  const labelId = labelProps?.id || `${field.id}--label`;
  const errorId = errorProps?.id || `${field.id}--error`;

  return {
    label,
    help,
    error: getString(field.error),
    append,
    prepend,
    getInputProps: () => ({
      ...inputProps,
      id: field.id,
      ref: innerRef,
      "aria-labelledby": concat(label && labelId, field.error && errorId)
    }),
    getFieldProps: () => ({
      ...fieldProps,
      className: concat(fieldClassName, fieldProps?.className)
    }),
    getLabelProps: () => ({
      ...labelProps,
      id: labelId,
      htmlFor: field.id,
      className: concat(labelClassName, labelProps?.className)
    }),
    getHelpProps: () => ({
      ...helpProps,
      className: concat(helpClassName, helpProps?.className)
    }),
    getErrorProps: () => ({
      ...errorProps,
      id: errorId,
      role: "alert",
      className: concat(errorClassName, errorProps?.className)
    })
  };
};
