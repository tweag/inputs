import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm, useField, useNoValidate } from "@stackup/form";
import {
  Input,
  Checkbox,
  FileInput,
  FileListInput,
  Select,
  Switch,
  TextArea
} from "../src";

const App = () => {
  const form = useForm({
    submit: values => console.log(values),
    validate: useNoValidate(),
    initialValue: {
      text: "",
      select: "",
      checkbox: false,
      file: null,
      files: null,
      toggle: false,
      textarea: ""
    }
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.submit();
  };

  return (
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
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
