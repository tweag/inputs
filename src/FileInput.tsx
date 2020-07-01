import * as React from "react";
import { Input } from "./Input";
import { FileInputProps } from "./types";

export const FileInput: React.FC<FileInputProps> = ({
  multiple,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => {
      if (multiple) {
        onChange(event.target.files);
      } else {
        onChange(event.target.files[0]);
      }
    },
    [multiple, onChange]
  );

  return <Input {...props} multiple={multiple} onChange={handleChange} />;
};
