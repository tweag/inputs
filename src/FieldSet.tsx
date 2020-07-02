import * as React from "react";
import { FieldSetProps } from "./types";
import { useComponentId } from "./useComponentId";
import { isUndefined } from "./utilities";
import { useTheme } from "./theme";

export const FieldSet: React.FC<FieldSetProps> = props => {
  const theme = useTheme();
  const componentId = useComponentId();

  const {
    id = `fieldset-${componentId}`,
    legend,
    legendProps,
    help,
    helpProps,
    error,
    errorProps,
    children,
    inline,
    small,
    large,
    condensed,
    touched,
    disabled,
    valid,
    invalid,
    populated,
    ...fieldsetProps
  } = props;

  const errorId = errorProps?.id || `${id}-error`;
  const describedBy = isUndefined(error) ? undefined : errorId;

  const classNames = theme.getClassNames("fieldset", {
    inline,
    small,
    large,
    condensed,
    touched,
    disabled,
    valid,
    invalid,
    populated
  });

  return (
    <fieldset
      {...fieldsetProps}
      id={id}
      aria-describedBy={describedBy}
      className={classNames.fieldset}
    >
      {legend && (
        <legend {...legendProps} className={classNames.legend}>
          {legend}
        </legend>
      )}

      {help && (
        <span {...helpProps} className={classNames.help}>
          {help}
        </span>
      )}

      {children}

      {error && (
        <span
          role="alert"
          {...errorProps}
          id={errorId}
          className={classNames.error}
        >
          {error}
        </span>
      )}
    </fieldset>
  );
};
