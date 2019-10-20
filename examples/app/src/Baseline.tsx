import * as React from "react";
import { useForm, INITIAL_VALUES } from "./helpers";
import {
  Checkbox,
  DateInput,
  DateTimeInput,
  FileInput,
  FileListInput,
  FloatInput,
  TextInput,
  IntegerInput,
  Select,
  TextArea
} from "react-baseline-inputs";

export const Baseline = () => {
  const form = useForm(INITIAL_VALUES);

  return (
    <div className="baseline">
      <TextInput {...form.text} label="Text" name="text" />
      <IntegerInput label="Integer" {...form.integer} />
      <FloatInput label="Float" {...form.float} />
      <DateInput label="Date" {...form.date} />
      <DateTimeInput label="DateTime" {...form.datetime} />
      <FileInput label="File" {...form.file} />
      <FileListInput label="Files" {...form.files} />
      <TextArea label="TextArea" {...form.textarea} />
      <Checkbox label="Checkbox" {...form.boolean} />

      <Select
        {...form.select}
        label="Select"
        options={["One", "Two", "Three"]}
      />
    </div>
  );
};
