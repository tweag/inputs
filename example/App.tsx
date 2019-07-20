import "./App.css";
import "babel-polyfill";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ObjectInspector, chromeLight } from "react-inspector";

import {
  Input,
  FloatInput,
  IntegerInput,
  DateInput,
  DateTimeInput,
  Checkbox,
  Select,
  FileInput
} from "../src";

interface Values {
  string: string | null;
  select: string | null;
  integer: number | null;
  float: number | null;
  date: string | null;
  datetime: string | null;
  boolean: boolean | null;
  file: File | null;
  files: FileList | null;
}

const App = () => {
  const [values, setValues] = useState<Values>({
    string: null,
    select: null,
    integer: null,
    float: null,
    date: null,
    datetime: null,
    boolean: null,
    file: null,
    files: null
  });

  function handleChange<K extends keyof Values>(key: K) {
    return (value: Values[K]) => setValues({ ...values, [key]: value });
  }

  return (
    <div className="App">
      <header>
        <h1>Baseline Inputs</h1>
      </header>

      <main>
        <section>
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
            Checkbox
            <Checkbox
              name="boolean"
              value={values.boolean}
              onChange={handleChange("boolean")}
            />
          </label>
        </section>

        <aside>
          <ObjectInspector
            data={values}
            expandLevel={1}
            theme={{ ...chromeLight, TREENODE_FONT_SIZE: "18px" }}
          />
        </aside>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
