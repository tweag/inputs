import cc from "classcat";
import { useMemo } from "react";
import { useTheme } from "./theme";
import { FieldConfig, Field } from "./types";

const generate: () => number = (() => {
  let previousId = 0;
  return () => ++previousId;
})();

const isUndefined = (value: any): value is undefined => {
  return typeof value === "undefined";
};

const isPopulated = (value: any): boolean => {
  return !isUndefined(value) && value !== null && value !== "";
};

export function useField<T extends FieldConfig>(
  type: string,
  {
    id: _id,
    value,
    className,
    theme: themeViaProp,
    label,
    error,
    labelProps,
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
  }: T
): Field<typeof inputProps> {
  const componentId = useMemo(generate, []);
  const id = _id || `input-${componentId}`;
  const labelId = labelProps?.id || `${id}-label`;
  const errorId = errorProps?.id || `${id}-error`;

  const themeViaContext = useTheme();
  const theme = themeViaProp || themeViaContext;

  const classNames = theme({
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
    error,
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
    getErrorProps: () => ({
      ...errorProps,
      id: errorId,
      role: "alert",
      className: cc([classNames.error, errorProps?.className])
    }),
    getInputProps: () => ({
      id,
      value,
      disabled,
      className: cc([classNames.input, className]),
      "aria-labelledby": isUndefined(error)
        ? undefined
        : `${labelId} ${errorId}`,
      ...inputProps
    })
  };
}
