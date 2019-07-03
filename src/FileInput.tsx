import * as React from "react";
import { ExtraInputProps } from "./types";
import { asFormik } from "./asFormik";

interface MultipleFileProps extends ExtraInputProps<HTMLInputElement> {
  value?: any;
  multiple: true;
  onChange: (value: File[]) => void;
}

interface SingleFileProps extends ExtraInputProps<HTMLInputElement> {
  value?: any;
  multiple?: false | undefined;
  onChange: (value: File) => void;
}

export type FileInputProps = SingleFileProps | MultipleFileProps;

export const FileInput: React.FC<FileInputProps> = ({ onChange, value: _value, ...props }) => {
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

export const FormikFileInput = asFormik(FileInput);
