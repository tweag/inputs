import { Field, FieldConfig } from "./types";
import { isUndefined, join } from "./utilities";
import { useComponentId } from "./useComponentId";

export const useField = <V>(
  props: FieldConfig<V> & { [key: string]: any }
): Field<V> => {
  const componentId = useComponentId();

  const {
    id = `input-${componentId}`,
    value,
    onChange,
    label,
    labelProps,
    labelClassName,
    help,
    helpProps,
    helpClassName,
    error,
    errorProps,
    errorClassName,
    containerProps,
    containerClassName,
    ...inputProps
  } = props;

  const labelId = labelProps?.id || `${id}-label`;
  const errorId = errorProps?.id || `${id}-error`;

  return {
    label,
    help,
    error,
    value,
    onChange,
    getContainerProps: () => ({
      ...containerProps,
      className: join([containerClassName, containerProps?.className])
    }),
    getLabelProps: () => ({
      ...labelProps,
      id: labelId,
      htmlFor: id,
      className: join([labelClassName, labelProps?.className])
    }),
    getHelpProps: () => ({
      ...helpProps,
      className: join([helpClassName, helpProps?.className])
    }),
    getErrorProps: () => ({
      ...errorProps,
      id: errorId,
      role: "alert",
      className: join([errorClassName, errorProps?.className])
    }),
    getInputProps: () => ({
      id,
      "aria-labelledby": isUndefined(error)
        ? undefined
        : `${labelId} ${errorId}`,
      ...inputProps
    })
  };
};
