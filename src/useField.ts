import { Field, FieldProps } from "./types";
import { concat } from "./utilities";
import { useComponentId } from "./useComponentId";

export const useField = (props: FieldProps): Field => {
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
