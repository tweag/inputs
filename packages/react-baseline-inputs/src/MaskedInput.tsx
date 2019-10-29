import * as React from "react";
import { default as TextMask } from "react-text-mask";
import { Field } from "./Field";
import { MaskedInputProps } from "./types";

export const MaskedInput: React.FC<MaskedInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <TextMask {...inputProps} value={value || ""} onChange={handleChange} />
      )}
      {...props}
    />
  );
};
