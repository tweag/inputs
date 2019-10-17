import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Form, ErrorMessage } from "formik";

import {
  Checkbox,
  DateInput,
  DateTimeInput,
  FileInput,
  FloatInput,
  IntegerInput,
  Select,
  TextArea,
  TextInput
} from "formik-inputs";

interface Values {
  checkbox: boolean | null;
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

const initialValues: Values = {
  checkbox: null,
  date: null,
  datetime: null,
  file: null,
  files: null,
  float: null,
  integer: null,
  select: null,
  text: null,
  textarea: null
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
              Text
              <TextInput name="text" validate={notBlank} />
              <ErrorMessage name="text" />
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
              <FileInput name="files" multiple />
            </label>

            <label>
              Text Area
              <TextArea name="textarea" />
              <ErrorMessage name="textarea" />
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
