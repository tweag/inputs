import React, { useCallback } from "react";

interface MultipleFileProps {
  multiple: true;
  onChange: (value: File[]) => void;
}

interface SingleFileProps {
  multple?: false | null | undefined;
  onChange: (value: File) => void;
}

export type FileInputProps = React.HTMLProps<HTMLInputElement> &
  (MultipleFileProps | SingleFileProps);

export const FileInput = ({ onChange, ...props }: FileInputProps) => {
  const handleChange = useCallback(
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
