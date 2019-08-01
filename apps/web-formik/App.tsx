import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Form, ErrorMessage } from "formik";

import {
  Input,
  Select,
  Checkbox,
  IntegerInput,
  FloatInput,
  DateInput,
  DateTimeInput,
  FileInput
} from "formik-inputs";

interface Values {
  input: string | null;
  select: string | null;
  integer: number | null;
  float: number | null;
  date: string | null;
  datetime: string | null;
  checkbox: boolean | null;
  file: File | null;
  files: FileList | null;
}

const initialValues: Values = {
  input: null,
  select: null,
  integer: null,
  float: null,
  date: null,
  datetime: null,
  checkbox: null,
  file: null,
  files: null
};

const notBlank = (value: any) => {
  if (!value) {
    return "The value cannot be blank.";
  }
};

const onSubmit = (values: Values) => {
  console.log(values);
};

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Formik Inputs</h1>
      </header>

      <main>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <label>
              Input
              <Input
                name="input"
                validate={notBlank}
                invalidClassName="is-invalid"
              />
              <ErrorMessage name="input" />
            </label>

            <label>
              Select
              <Select name="select" options={["One", "Two", "Three"]} />
            </label>

            <label>
              Integer
              <IntegerInput name="integer" />
            </label>

            <label>
              Float
              <FloatInput
                name="float"
                validate={notBlank}
                invalidStyle={{ border: "1px solid red" }}
              />
            </label>

            <label>
              Date
              <DateInput name="date" />
            </label>

            <label>
              Date Time
              <DateTimeInput name="datetime" />
            </label>

            <label>
              File
              <FileInput name="file" />
            </label>

            <label>
              Files
              <FileInput name="file" multiple />
            </label>

            <label>
              Checkbox
              <Checkbox name="checkbox" />
            </label>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
