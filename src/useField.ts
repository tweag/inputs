import { useMemo } from "react";
import { useTheme } from "./theme";
import { Theme } from "./types";

export interface FieldConfig {
  theme?: Theme;
  label?: React.ReactNode;
  error?: React.ReactNode;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  fieldSetProps?: React.HTMLProps<HTMLFieldSetElement>;
  legendProps?: React.HTMLProps<HTMLLegendElement>;
  inline?: boolean;
  small?: boolean;
  large?: boolean;
  condensed?: boolean;
  touched?: boolean;
  disabled?: boolean;
  success?: boolean;
  [key: string]: any;
}

export interface InputProps {
  id: string;
  disabled: boolean;
  className?: string;
  "aria-labelledby"?: string;
  [key: string]: any;
}

export interface Field {
  label?: React.ReactNode;
  error?: React.ReactNode;
  getInputProps(): InputProps;
  getLabelProps(): React.HTMLProps<HTMLLabelElement>;
  getErrorProps(): React.HTMLProps<HTMLSpanElement>;
  getContainerProps(): React.HTMLProps<HTMLDivElement>;
  getFieldsetProps(): React.HTMLProps<HTMLFieldSetElement>;
  getLegendProps(): React.HTMLProps<HTMLLegendElement>;
}

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

export function useField(
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
  }: FieldConfig
): Field {
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
      className: classNames.fieldset,
      "aria-describedby": isUndefined(error) ? undefined : errorId,
      ...fieldSetProps
    }),
    getLegendProps: () => ({
      className: classNames.legend,
      ...legendProps
    }),
    getContainerProps: () => ({
      className: classNames.field,
      ...containerProps
    }),
    getLabelProps: () => ({
      id: labelId,
      htmlFor: id,
      className: classNames.label,
      ...labelProps
    }),
    getErrorProps: () => ({
      id: errorId,
      role: "alert",
      ...errorProps
    }),
    getInputProps: () => ({
      id,
      disabled,
      className: classNames.input,
      "aria-labelledby": isUndefined(error)
        ? undefined
        : `${labelId} ${errorId}`,
      ...inputProps
    })
  };
}
