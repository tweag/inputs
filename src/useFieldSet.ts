import { useComponentId } from "./useComponentId";
import { isUndefined, concat, HTMLProps } from "./utilities";

export interface FieldSetProps {
  id?: string;
  className?: string;
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
}

export function useFieldSet<T extends FieldSetProps>(props: T) {
  const componentId = useComponentId();

  const {
    id = `fieldset-${componentId}`,
    className,
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
    ...fieldProps
  } = props;

  const errorId = errorProps?.id || `${id}-error`;

  return {
    legend,
    help,
    error,
    getFieldProps: () => fieldProps,
    getFieldSetProps: () => ({
      ...fieldSetProps,
      id,
      className: concat(className, fieldSetProps?.className),
      "aria-describedby": isUndefined(error) ? undefined : errorId
    }),
    getLegendProps: () => ({
      ...legendProps,
      className: concat(legendClassName, legendProps?.className)
    }),
    getHelpProps: () => ({
      ...helpProps,
      className: concat(helpClassName, helpProps?.className)
    }),
    getErrorProps: () => ({
      ...errorProps,
      role: "alert",
      id: errorId,
      className: concat(errorClassName, errorProps?.className)
    })
  };
}
