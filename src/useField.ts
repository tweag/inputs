import cc from "classcat";
import { useTheme } from "./theme";
import { FieldConfig, Field } from "./types";
import { useComponentId } from "./useComponentId";
import { isPopulated, isUndefined } from "./utilities";

export const useField = <V>(type: string, props: FieldConfig<V>): Field<V> => {
  const componentId = useComponentId();
  const defaultId = `input-${componentId}`;
  const defaultTheme = useTheme();

  const {
    id = defaultId,
    theme: buildTheme = defaultTheme,
    value,
    onChange,
    className,
    label,
    labelProps,
    help,
    helpProps,
    error,
    errorProps,
    containerProps,
    inline = false,
    small = false,
    large = false,
    condensed = false,
    touched = false,
    disabled = false,
    success = touched && !error,
    ...inputProps
  } = props;

  const labelId = labelProps?.id || `${id}-label`;
  const errorId = errorProps?.id || `${id}-error`;

  const classNames = buildTheme({
    type,
    inline,
    condensed,
    populated: isPopulated(value),
    disabled,
    success,
    error: Boolean(error),
    touched,
    large,
    small
  });

  return {
    label,
    help,
    error,
    value,
    onChange,
    getContainerProps: () => ({
      ...containerProps,
      className: cc([classNames.field, containerProps?.className])
    }),
    getLabelProps: () => ({
      ...labelProps,
      id: labelId,
      htmlFor: id,
      className: cc([classNames.label, labelProps?.className])
    }),
    getHelpProps: () => ({
      ...helpProps,
      className: cc([classNames.help, helpProps?.className])
    }),
    getErrorProps: () => ({
      ...errorProps,
      id: errorId,
      role: "alert",
      className: cc([classNames.error, errorProps?.className])
    }),
    getInputProps: () => ({
      id,
      disabled,
      className: cc([classNames.input, className]),
      "aria-labelledby": isUndefined(error)
        ? undefined
        : `${labelId} ${errorId}`,
      ...inputProps
    })
  };
};
