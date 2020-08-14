import * as React from "react";
import { FormField } from "@stackup/form";
import { getRelatedId, getError } from "./useFieldProps";
import { ThemeProps, useTheme, concat } from "./theme";
import { FieldVariant } from "./types";

export interface FieldSetProps {
  /** See [@stackup/form](https://github.com/rzane/form) */
  field: FormField<any>;

  /** Content to appear in the legend */
  legend: React.ReactNode;

  /** Extra help info */
  help?: React.ReactNode;

  /** Content that should appear inside the fieldset */
  children?: React.ReactNode;

  /** Variant class name to append to all elements */
  variant?: FieldVariant | FieldVariant[];

  /** An additional class name for the fieldset */
  className?: string;

  /** An additional class name for the legend */
  legendClassName?: string;

  /** An additional class name for the help */
  helpClassName?: string;

  /** An additional class name for the error */
  errorClassName?: string;
}

/**
 * Fields that are composed of multiple components (e.g. Radio and CheckboxItem)
 * should always be rendered within a fieldset.
 *
 * If an error is associated with the field, it will be rendered within the
 * fieldset, rather than on a Radio or CheckboxItem.
 *
 * #### Example
 *
 * ```jsx
 * <FieldSet legend="Sport" field={useField(form, "sport")}>
 *   <Radio
 *     label="Soccer"
 *     value={{ name: "Soccer" }}
 *     field={useField(form, "sport")}
 *   />
 *   <Radio
 *     label="Baseball"
 *     value={{ name: "Baseball" }}
 *     field={useField(form, "sport")}
 *   />
 * </FieldSet>
 * ```
 */
export function FieldSet(props: FieldSetProps) {
  const { field, legend, help, children } = props;

  const error = getError(field);
  const errorId = getRelatedId(field.id, "error");
  const describedBy = error ? errorId : undefined;

  const theme = useTheme();
  const themeProps: ThemeProps = {
    value: field.value,
    error: field.error,
    touched: field.touched,
    types: ["fieldset"],
    variants: Array.isArray(props.variant) ? props.variant : [props.variant],
    prepend: false,
    append: false
  };

  return (
    <fieldset
      className={concat(theme.fieldset(themeProps), props.className)}
      aria-describedby={describedBy}
    >
      <legend
        className={concat(theme.legend(themeProps), props.legendClassName)}
      >
        {legend}
      </legend>
      {help && (
        <p className={concat(theme.help(themeProps), props.helpClassName)}>
          {help}
        </p>
      )}
      {children}
      {error && (
        <span
          id={errorId}
          role="alert"
          className={concat(theme.error(themeProps), props.errorClassName)}
        >
          {error}
        </span>
      )}
    </fieldset>
  );
}
