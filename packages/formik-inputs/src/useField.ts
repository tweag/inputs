import { useCallback } from "react";
import { useField as useFormikField, useFormikContext } from "formik";
import { FieldConfig } from "./types";

export const useField = <T extends FieldConfig>({
  name,
  validate,
  ...props
}: T) => {
  const [field, meta] = useFormikField<any>({ name, validate });
  const { setFieldValue, submitCount } = useFormikContext<any>();
  const onChange = useCallback(value => setFieldValue(name, value), [
    name,
    setFieldValue
  ]);

  return {
    name,
    onChange,
    onBlur: field.onBlur,
    value: field.value,
    touched: meta.touched,
    error: submitCount > 0 ? meta.error : undefined,
    ...props
  };
};
