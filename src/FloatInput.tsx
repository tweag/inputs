import React, { useState } from "react";
import { TextInput } from "react-native";

interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
  [key: string]: any;
}

const FloatInput: React.FC<Props> = ({ value, onChange, ...props }) => {
  const [inputValue, setInputValue] = useState(value === null ? "" : value.toString());

  return (
    <TextInput
      value={inputValue}
      onChangeText={value => {
        const floatValue = parseFloat(value);

        if (/^\d+\.$/.test(value)) {
          setInputValue(value);
        } else if (isNaN(floatValue)) {
          onChange(null);
          setInputValue("");
        } else {
          onChange(floatValue);
          setInputValue(floatValue.toString());
        }
      }}
      {...props}
    />
  )
}

export default FloatInput;
