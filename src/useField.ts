import * as React from "react";
import { concat, HTMLProps } from "./utilities";
import { useComponentId } from "./useComponentId";

export interface FieldProps {
  id?: string;
  innerRef?: React.Ref<any>;
  touched?: boolean;
  label?: React.ReactNode;
  labelProps?: HTMLProps<HTMLLabelElement>;
  labelClassName?: string;
  help?: React.ReactNode;
  helpProps?: HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
  fieldProps?: HTMLProps<HTMLDivElement>;
  fieldClassName?: string;
}

export const useField = <T extends FieldProps>(props: T) => {
  const componentId = useComponentId();

  const {
    id = `input-${componentId}`,
    innerRef,
    label,
    labelProps,
    labelClassName,
    help,
    helpProps,
    helpClassName,
    error,
    errorProps,
    errorClassName,
    fieldProps,
    fieldClassName,
    touched: _touched,
    ...inputProps
  } = props;

  const labelId = labelProps?.id || `${id}-label`;
  const errorId = errorProps?.id || `${id}-error`;

  return {
    label,
    help,
    error,
    getFieldProps: () => ({
      ...fieldProps,
      className: concat(fieldClassName, fieldProps?.className)
    }),
    getLabelProps: () => ({
      ...labelProps,
      id: labelId,
      htmlFor: id,
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
    }),
    getInputProps: () => ({
      ...inputProps,
      id,
      ref: innerRef,
      "aria-labelledby": concat(label && labelId, error && errorId)
    })
  };
};
