import * as React from "react";
import { Field } from "./Field";
import { ToggleButtonProps } from "./types";
import { useTheme } from "./config";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  onChange,
  theme = useTheme("toggleButton"),
  ...props
}) => {
  const handleClick = React.useCallback(() => onChange(!value), [
    onChange,
    value
  ]);

  return (
    <Field
      theme={theme}
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
