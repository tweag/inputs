import * as React from "react";
import { FormField } from "@stackup/form";
import { getRelatedId, getError } from "./utilities";

export interface FieldSetProps {
  field: FormField<any>;
  legend: React.ReactNode;
  help?: React.ReactNode;
  children?: React.ReactNode;
}

export function FieldSet(props: FieldSetProps) {
  const { field, legend, help, children } = props;

  const error = getError(field);
  const errorId = getRelatedId(field, "error");

  return (
    <fieldset className="fieldset">
      <legend className="fieldset__legend">{legend}</legend>
      {help && <p className="fieldset__help">{help}</p>}
      {children}
      {error && (
        <span id={errorId} role="alert" className="fieldset__error">
          {error}
        </span>
      )}
    </fieldset>
  );
}
