import * as React from "react";
import { ThemeProp } from "./theme";
import { concat, HTMLProps } from "./utilities";
import { useComponentId } from "./useComponentId";

export interface FieldProps {
  id?: string;
  theme?: ThemeProp;
  innerRef?: React.Ref<any>;
  touched?: boolean;
  className?: string;
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
    theme,
    id = `input-${componentId}`,
    className,
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
    getInputProps: () => ({
      ...inputProps,
      id,
      ref: innerRef,
      "aria-labelledby": concat(label && labelId, error && errorId),
      className: concat(theme?.input, className)
    }),
    getFieldProps: () => ({
      ...fieldProps,
      className: concat(theme?.field, fieldClassName, fieldProps?.className)
    }),
    getLabelProps: () => ({
      ...labelProps,
      id: labelId,
      htmlFor: id,
      className: concat(theme?.label, labelClassName, labelProps?.className)
    }),
    getHelpProps: () => ({
      ...helpProps,
      className: concat(theme?.help, helpClassName, helpProps?.className)
    }),
    getErrorProps: () => ({
      ...errorProps,
      id: errorId,
      role: "alert",
      className: concat(theme?.error, errorClassName, errorProps?.className)
    })
  };
};
