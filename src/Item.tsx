import * as React from "react";
import equals from "fast-deep-equal";
import { customize } from "./customize";
import { useField, FieldProps } from "./useField";
import { HTMLProps, remove, isUndefined, contains } from "./utilities";
import { useGroupContext } from "./useGroupContext";

export interface ItemProps extends FieldProps, HTMLProps<HTMLInputElement> {
  value: any;
  type: "checkbox" | "radio";
}

export function Item(props: ItemProps) {
  const { theme, value: selected, onChangeValue } = useGroupContext();
  const { type, value, onChange, ...otherProps } = props;
  const field = useField({ theme, ...otherProps });

  const isDOMValue = ["string", "number"].includes(typeof value);

  const checked = React.useMemo(() => {
    if (isUndefined(selected)) {
      return undefined;
    } else if (type === "radio") {
      return equals(selected, value);
    } else {
      return contains(selected, value);
    }
  }, [type, selected, value]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      if (onChange) {
        onChange(event);
      }

      if (onChangeValue) {
        if (type === "radio") {
          onChangeValue(value);
        } else if (checked && selected) {
          onChangeValue([...selected, value]);
        } else if (selected) {
          onChangeValue(remove(selected, value));
        }
      }
    },
    [type, value, selected, onChange, onChangeValue]
  );

  return (
    <div {...field.getFieldProps()}>
      <input
        type={type}
        checked={checked}
        value={isDOMValue ? value : undefined}
        onChange={handleChange}
        {...field.getInputProps()}
      />

      {field.label && (
        <label {...field.getLabelProps()}>
          {field.label}
          {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        </label>
      )}

      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
}

export const createItem = customize(Item);
