import React, { useCallback } from "react";
import { FieldValidator, useFormikContext, useField, Formik } from "formik";

export type CreateInputProps<T, P> = Omit<P, "value" | "onChange"> & {
  name: string;
  validate?: FieldValidator;
  innerRef?: (instance: T | null) => void;
};

export interface CreateInputOptions {
  component: React.ComponentType<any>;
  touchEvent: string;
  displayName: string;
}

export const createInput = <P extends CreateInputProps<any, any>>({
  displayName,
  touchEvent,
  component: WrappedComponent,
}: CreateInputOptions) => {
  const FormikInput: React.FC<P> = ({ name, validate, innerRef, ...props }) => {
    const formik = useFormikContext<any>();
    const [field, _meta] = useField({ name, validate });

    const handleTouch = useCallback(
      () => formik.setFieldTouched(field.name, true),
      [name, formik.setFieldTouched]
    );

    const handleChange = useCallback(
      value => {
        formik.setFieldValue(field.name, value);

        if (touchEvent === "onChange") {
          formik.setFieldTouched(field.name, true);
        }
      },
      [field.name, formik.setFieldValue, formik.setFieldTouched]
    );

    return React.createElement(WrappedComponent, {
      ref: innerRef,
      value: field.value,
      [touchEvent]: handleTouch,
      onChange: handleChange,
      ...props
    });
  };

  // Set a display name for the input
  FormikInput.displayName = displayName;

  return FormikInput;
};
