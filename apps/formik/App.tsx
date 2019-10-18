import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Form } from "formik";

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

const options = ["One", "Two", "Three"];

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
            <TextInput label="Text" name="text" validate={notBlank} />
            <Select label="Select" name="string" options={options} />
            <IntegerInput label="Integer" name="integer" />
            <FloatInput label="Float" name="float" />
            <DateInput label="Date" name="date" />
            <DateTimeInput label="DateTime" name="datetime" />
            <FileInput label="File" name="file" />
            <FileInput label="Files" name="files" multiple />
            <TextArea label="TextArea" name="textarea" />
            <Checkbox label="Checkbox" name="boolean" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
