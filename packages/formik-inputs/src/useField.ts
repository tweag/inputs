import { useCallback } from "react";
import { useField as useFormikField, useFormikContext } from "formik";
import { FieldConfig } from "./types";

export const useField = <T extends FieldConfig>({
  name,
  validate,
  ...props
}: T) => {
  const { setFieldValue } = useFormikContext<any>();
  const [field, meta] = useFormikField({ name, validate });

  const onChange = useCallback(value => setFieldValue(name, value), [
    name,
    setFieldValue
  ]);

  return {
    name,
    onChange,
    onBlur: field.onBlur,
    value: field.value,
    error: meta.error,
    touched: meta.touched,
    ...props
  };
};
