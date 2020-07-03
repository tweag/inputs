import * as React from "react";
import { FieldSetProps, Element } from "./types";
import { concat, isUndefined } from "./utilities";
import { useComponentId } from "./useComponentId";

export function FieldSet(props: FieldSetProps): Element {
  const componentId = useComponentId();

  const {
    id = `fieldset-${componentId}`,
    legend,
    legendProps,
    legendClassName,
    help,
    helpProps,
    helpClassName,
    error,
    errorProps,
    errorClassName,
    children,
    ...fieldsetProps
  } = props;

  const errorId = errorProps?.id || `${id}-error`;
  const describedBy = isUndefined(error) ? undefined : errorId;

  return (
    <fieldset {...fieldsetProps} id={id} aria-describedby={describedBy}>
      {legend && (
        <legend
          {...legendProps}
          className={concat([legendClassName, legendProps?.className])}
        >
          {legend}
        </legend>
      )}

      {help && (
        <span
          {...helpProps}
          className={concat([helpClassName, helpProps?.className])}
        >
          {help}
        </span>
      )}

      {children}

      {error && (
        <span
          role="alert"
          {...errorProps}
          id={errorId}
          className={concat([errorClassName, errorProps?.className])}
        >
          {error}
        </span>
      )}
    </fieldset>
  );
}
