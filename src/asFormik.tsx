import * as React from "react";

export function asFormik<P>(Component: React.ComponentType<P>) {
  const AsFormik = ({ field, form, ...props }: any) => {
    const handleChange = React.useCallback(
      value => form.setFieldValue(field.name, value),
      [form.setFieldValue, field.name]
    );

    return <Component {...field} {...props} onChange={handleChange} />;
  };

  return AsFormik;
}
