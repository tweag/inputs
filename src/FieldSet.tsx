import * as React from "react";
import { FieldSetProps } from "./types";
import { useComponentId } from "./useComponentId";
import { isUndefined } from "./utilities";

export const FieldSet: React.FC<FieldSetProps> = ({
  legend,
  legendProps,
  help,
  helpProps,
  error,
  errorProps,
  children,
  ...props
}) => {
  const componentId = useComponentId();
  const id = props?.id || `fieldset-${componentId}`;
  const errorId = errorProps?.id || `${id}-error`;
  const describedBy = isUndefined(error) ? undefined : errorId;

  return (
    <fieldset {...props} id={id} aria-describedBy={describedBy}>
      {legend && <legend {...legendProps}>{legend}</legend>}
      {help && <span {...helpProps}>{help}</span>}
      {children}
      {error && (
        <span role="alert" {...errorProps} id={errorId}>
          {error}
        </span>
      )}
    </fieldset>
  );
};
