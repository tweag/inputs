import React, { useState } from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { TextInput } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const PRETTY = "M/D/YYYY";
const ISO = "YYYY-MM-DD";

interface Props {
  value: string | null;
  onChange: (value: string) => void;
  [key: string]: any;
}

export const DateInput: React.FC<Props> = ({ value, onChange, ...props }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <TextInput
        value={value ? format(value, PRETTY) : ""}
        onFocus={() => setVisible(true)}
        onTouchStart={() => setVisible(true)}
        {...props}
      />

      <DateTimePicker
        date={value === null ? undefined : parse(value)}
        isVisible={isVisible}
        onCancel={() => setVisible(false)}
        onConfirm={value => {
          onChange(format(value, ISO));
          setVisible(false);
        }}
      />
    </>
  );
};
