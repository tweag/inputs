import React, { useCallback } from "react";
import { Field } from "./Field";
import { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleClick = useCallback(() => onChange(!value), [onChange]);

  return (
    <Field
      inline
      render={inputProps => (
        <button
          {...inputProps}
          onClick={handleClick}
          role="switch"
          aria-checked={Boolean(value)}
          aria-label={value ? "On" : "Off"}
        />
      )}
      {...props}
    />
  );
};
