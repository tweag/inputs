import * as React from "react";
import { applyTheme } from "./applyTheme";
import { concat, isUndefined } from "./utilities";
import { useComponentId } from "./useComponentId";
import { FieldSetProps, Element, Theme } from "./types";

export function createFieldSet<ThemeProps>(
  theme: Theme<ThemeProps, FieldSetProps>
) {
  return function FieldSet(props: FieldSetProps & ThemeProps): Element {
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
    } = applyTheme(props, theme);

    const errorId = errorProps?.id || `${id}-error`;
    const describedBy = isUndefined(error) ? undefined : errorId;

    return (
      <fieldset {...fieldsetProps} id={id} aria-describedby={describedBy}>
        {legend && (
          <legend
            {...legendProps}
            className={concat(legendClassName, legendProps?.className)}
          >
            {legend}
          </legend>
        )}

        {help && (
          <span
            {...helpProps}
            className={concat(helpClassName, helpProps?.className)}
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
            className={concat(errorClassName, errorProps?.className)}
          >
            {error}
          </span>
        )}
      </fieldset>
    );
  };
}

export const FieldSet = createFieldSet({});