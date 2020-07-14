import { ThemeProp } from "./theme";
import { useComponentId } from "./useComponentId";
import { isUndefined, concat, HTMLProps } from "./utilities";

export interface FieldSetProps {
  theme?: ThemeProp;
  touched?: boolean;
  legend?: React.ReactNode;
  legendProps?: HTMLProps<HTMLLegendElement>;
  legendClassName?: string;
  help?: React.ReactNode;
  helpProps?: HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
  fieldSetProps?: HTMLProps<HTMLFieldSetElement>;
  fieldSetClassName?: string;
}

export function useFieldSet<T extends FieldSetProps>(props: T) {
  const {
    theme,
    legend,
    legendProps,
    legendClassName,
    help,
    helpProps,
    helpClassName,
    error,
    errorProps,
    errorClassName,
    fieldSetProps,
    fieldSetClassName,
    touched: _touched,
    ...fieldProps
  } = props;

  const componentId = useComponentId();
  const id = fieldSetProps?.id || `fieldset-${componentId}`;
  const errorId = errorProps?.id || `${id}-error`;

  return {
    legend,
    help,
    error,
    getFieldProps: () => ({
      ...fieldProps,
      error,
      theme
    }),
    getFieldSetProps: () => ({
      ...fieldSetProps,
      id,
      "aria-describedby": isUndefined(error) ? undefined : errorId,
      className: concat(
        theme?.fieldset,
        fieldSetClassName,
        fieldSetProps?.className
      )
    }),
    getLegendProps: () => ({
      ...legendProps,
      className: concat(theme?.legend, legendClassName, legendProps?.className)
    }),
    getHelpProps: () => ({
      ...helpProps,
      className: concat(theme?.help, helpClassName, helpProps?.className)
    }),
    getErrorProps: () => ({
      ...errorProps,
      role: "alert",
      id: errorId,
      className: concat(theme?.error, errorClassName, errorProps?.className)
    })
  };
}
