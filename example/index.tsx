import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { theme } from "./theme";
import { useForm, useField, useNoValidate } from "@stackup/form";
import {
  Input,
  Checkbox,
  FileInput,
  FileListInput,
  Select,
  Switch,
  TextArea,
  FieldSet,
  CheckboxItem,
  Radio,
  ThemeProvider
} from "../src";

const App = () => {
  const form = useForm({
    submit: values => console.log(values),
    validate: value => {
      if (value.text) {
        return { valid: true, value };
      } else {
        return { valid: false, error: { text: "can't be blank" } };
      }
    },
    initialValue: {
      text: "",
      select: "",
      checkbox: false,
      file: null,
      files: null,
      toggle: false,
      textarea: "",
      checkboxes: [] as string[],
      radio: null
    }
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.submit();
  };

  const checkboxes = useField(form, "checkboxes");
  const radio = useField(form, "radio");

  return (
    <ThemeProvider value={theme}>
      <form onSubmit={onSubmit}>
        <Input label="Text" field={useField(form, "text")} />
        <Select label="Select" field={useField(form, "select")}>
          <option value="corn">Corn</option>
          <option value="potato">Potato</option>
          <option value="carrot">Carrot</option>
        </Select>
        <FileInput label="File" field={useField(form, "file")} />
        <FileListInput label="Files" field={useField(form, "files")} />
        <TextArea label="Text Area" field={useField(form, "textarea")} />
        <Switch label="Switch" field={useField(form, "toggle")} />
        <Checkbox label="Checkbox" field={useField(form, "checkbox")} />

        <FieldSet legend="Checkboxes" field={checkboxes}>
          <CheckboxItem label="Apple" value="apple" field={checkboxes} />
          <CheckboxItem label="Banana" value="banana" field={checkboxes} />
          <CheckboxItem label="Horse" value="horse" field={checkboxes} />
        </FieldSet>

        <FieldSet legend="Radio" field={radio}>
          <Radio label="Apple" value="apple" field={radio} />
          <Radio label="Banana" value="banana" field={radio} />
          <Radio label="Horse" value="horse" field={radio} />
        </FieldSet>

        <div className="field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
