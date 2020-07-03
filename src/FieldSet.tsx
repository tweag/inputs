import * as React from "react";
import { FieldSetProps, Element } from "./types";
import { useComponentId } from "./useComponentId";
import { join, isUndefined } from "./utilities";

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
    <fieldset {...fieldsetProps} id={id} aria-describedBy={describedBy}>
      {legend && (
        <legend
          {...legendProps}
          className={join([legendClassName, legendProps?.className])}
        >
          {legend}
        </legend>
      )}

      {help && (
        <span
          {...helpProps}
          className={join([helpClassName, helpProps?.className])}
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
          className={join([errorClassName, errorProps?.className])}
        >
          {error}
        </span>
      )}
    </fieldset>
  );
}
