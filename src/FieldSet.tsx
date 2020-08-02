import * as React from "react";
import { FormField } from "@stackup/form";
import { getRelatedId, getError } from "./useFieldProps";
import { concat } from "./utilities";

export interface FieldSetProps {
  /** See [@stackup/form](https://github.com/rzane/form) */
  field: FormField<any>;

  /** Content to appear in the legend */
  legend: React.ReactNode;

  /** Extra help info */
  help?: React.ReactNode;

  /** Content that should appear inside the fieldset */
  children?: React.ReactNode;

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

  return (
    <fieldset
      className={concat("fieldset", props.className)}
      aria-describedby={describedBy}
    >
      <legend className={concat("fieldset__legend", props.legendClassName)}>
        {legend}
      </legend>
      {help && (
        <p className={concat("fieldset__help", props.helpClassName)}>{help}</p>
      )}
      {children}
      {error && (
        <span
          id={errorId}
          role="alert"
          className={concat("message message--problem", props.errorClassName)}
        >
          {error}
        </span>
      )}
    </fieldset>
  );
}
