import * as React from "react";
import { ExtraInputProps } from "./types";

interface MultipleFileProps extends ExtraInputProps<HTMLInputElement> {
  multiple: true;
  onChange: (value: File[]) => void;
}

interface SingleFileProps extends ExtraInputProps<HTMLInputElement> {
  multiple?: false | undefined;
  onChange: (value: File) => void;
}

export type FileInputProps = SingleFileProps | MultipleFileProps;

export const FileInput: React.FC<FileInputProps> = ({ onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => {
      if (props.multiple) {
        onChange(event.target.files);
      } else {
        onChange(event.target.files[0] || null);
      }
    },
    [onChange]
  );

  return <input type="file" {...props} onChange={handleChange} />;
};
