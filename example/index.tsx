import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm, useField, useNoValidate } from "@stackup/form";
import { Field, Label, ErrorMessage, Input } from "../src";

interface Values {
  text: string;
}

const App = () => {
  const form = useForm<Values>({
    submit: values => console.log(values),
    validate: useNoValidate(),
    initialValue: { text: "" }
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.submit();
  };

  const text = useField(form, "text");

  return (
    <div>
      <h1>React Baseline Inputs</h1>
      <form onSubmit={onSubmit}>
        <Field field={text}>
          <Label>Text</Label>
          <Input field={text} />
          <ErrorMessage />
        </Field>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
