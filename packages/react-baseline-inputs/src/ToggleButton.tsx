import * as React from "react";
import { Field } from "./Field";
import { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleClick = React.useCallback(() => onChange(!value), [
    onChange,
    value
  ]);

  return (
    <Field
      labelPosition="after"
      render={inputProps => (
        <button
          onClick={handleClick}
          type="button"
          role="switch"
          aria-checked={Boolean(value)}
          aria-label={value ? "On" : "Off"}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};
