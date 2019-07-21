import * as React from "react";
import { Field, FieldAttributes } from "formik";
import { Input as BaseInput } from "react-baseline-inputs";

export const Input = (props: FieldAttributes<any>) => {
  return (
    <Field {...props}>
      {({ field, form }: any) => (
        <BaseInput
          {...field}
          onChange={value => form.setFieldValue(field.name, value)}
        />
      )}
    </Field>
  );
};
