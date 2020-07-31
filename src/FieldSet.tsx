import * as React from "react";
import { FormField } from "@stackup/form";
import { getRelatedId, getError } from "./useFieldProps";
import { concat } from "./utilities";

export interface FieldSetProps {
  field: FormField<any>;
  legend: React.ReactNode;
  help?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  legendClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
}

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
