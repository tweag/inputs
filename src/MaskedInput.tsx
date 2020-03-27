import * as React from "react";
import { default as TextMask } from "react-text-mask";
import { Field } from "./Field";
import { MaskedInputProps } from "./types";
import { useTheme } from "./theme";

export const MaskedInput: React.FC<MaskedInputProps> = ({
  value,
  onChange,
  theme = useTheme("input"),
  ...props
}) => {
  const handleChange = React.useCallback(
    (event) => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={(inputProps) => (
        <TextMask {...inputProps} value={value || ""} onChange={handleChange} />
      )}
      {...props}
    />
  );
};
