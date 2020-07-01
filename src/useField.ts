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
    theme: themeViaProp,
    label,
    error,
    labelProps,
    errorProps,
    legendProps,
    fieldSetProps,
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

  const id = inputProps.id || `input-${componentId}`;
  const labelId = labelProps?.id || `label-${componentId}`;
  const errorId = errorProps?.id || `error-${componentId}`;

  const themeViaContext = useTheme();
  const theme = themeViaProp || themeViaContext;

  const classNames = theme({
    type,
    inline,
    condensed,
    populated: isPopulated(inputProps.value),
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
    getFieldsetProps: () => ({
      ...fieldSetProps,
      "aria-describedby": isUndefined(error) ? undefined : errorId,
      className: cc([classNames.fieldset, fieldSetProps?.className])
    }),
    getLegendProps: () => ({
      ...legendProps,
      className: cc([classNames.legend, legendProps?.className])
    }),
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
      ...inputProps,
      id,
      disabled,
      className: cc([classNames.input, inputProps.className]),
      "aria-labelledby": isUndefined(error)
        ? undefined
        : `${labelId} ${errorId}`
    })
  };
}
