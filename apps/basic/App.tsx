import "./App.css";
import "react-app-polyfill/stable";

import * as React from "react";
import * as ReactDOM from "react-dom";

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

interface Values {
  boolean: boolean | null;
  date: string | null;
  datetime: string | null;
  file: File | null;
  files: FileList | null;
  float: number | null;
  integer: number | null;
  select: string | null;
  text: string | null;
  textarea: string | null;
}

const App = () => {
  const [values, setValues] = React.useState<Values>({
    boolean: null,
    date: null,
    datetime: null,
    file: null,
    files: null,
    float: null,
    integer: null,
    select: null,
    text: null,
    textarea: null
  });

  function handleChange<K extends keyof Values>(key: K) {
    return (value: Values[K]) => {
      const nextValues = { ...values, [key]: value };
      console.log(nextValues);
      setValues(nextValues);
    };
  }

  return (
    <div className="App">
      <header>
        <h1>React Baseline Inputs</h1>
      </header>

      <main>
        <TextInput
          label="Text"
          name="text"
          value={values.text}
          onChange={handleChange("text")}
        />

        <Select
          label="Select"
          name="string"
          value={values.select}
          onChange={handleChange("select")}
          options={["One", "Two", "Three"]}
        />

        <IntegerInput
          label="Integer"
          name="integer"
          value={values.integer}
          onChange={handleChange("integer")}
        />

        <FloatInput
          label="Float"
          name="float"
          value={values.float}
          onChange={handleChange("float")}
        />

        <DateInput
          label="Date"
          name="date"
          value={values.date}
          onChange={handleChange("date")}
        />

        <DateTimeInput
          label="DateTime"
          name="datetime"
          value={values.datetime}
          onChange={handleChange("datetime")}
        />

        <FileInput label="File" name="file" onChange={handleChange("file")} />

        <FileListInput
          label="Files"
          name="files"
          onChange={handleChange("files")}
        />

        <TextArea
          label="TextArea"
          name="textarea"
          value={values.textarea}
          onChange={handleChange("textarea")}
        />

        <Checkbox
          label="Checkbox"
          name="boolean"
          value={values.boolean}
          onChange={handleChange("boolean")}
        />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
