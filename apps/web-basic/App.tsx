import "./App.css";
import "react-app-polyfill/stable";

import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  Checkbox,
  DateInput,
  DateTimeInput,
  FileInput,
  FloatInput,
  Input,
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
  string: string | null;
  text: string | null;
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
    string: null,
    text: null
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
        <label>
          Input
          <Input
            name="string"
            value={values.string}
            onChange={handleChange("string")}
          />
        </label>

        <label>
          Select
          <Select
            name="string"
            value={values.select}
            onChange={handleChange("select")}
            options={["One", "Two", "Three"]}
          />
        </label>

        <label>
          IntegerInput
          <IntegerInput
            name="Integer"
            value={values.integer}
            onChange={handleChange("integer")}
          />
        </label>

        <label>
          FloatInput
          <FloatInput
            name="float"
            value={values.float}
            onChange={handleChange("float")}
          />
        </label>

        <label>
          DateInput
          <DateInput
            name="date"
            value={values.date}
            onChange={handleChange("date")}
          />
        </label>

        <label>
          DateTimeInput
          <DateTimeInput
            name="datetime"
            value={values.datetime}
            onChange={handleChange("datetime")}
          />
        </label>

        <label>
          FileInput
          <FileInput
            name="file"
            value={values.file}
            onChange={handleChange("file")}
          />
        </label>

        <label>
          Files
          <FileInput
            name="file"
            value={values.files}
            onChange={handleChange("files")}
            multiple
          />
        </label>

        <label>
          TextArea
          <TextArea
            name="text"
            value={values.text}
            onChange={handleChange("text")}
          />
        </label>

        <label>
          Checkbox
          <Checkbox
            name="boolean"
            value={values.boolean}
            onChange={handleChange("boolean")}
          />
        </label>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
