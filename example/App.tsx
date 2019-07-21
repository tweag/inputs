import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import { Input } from "../src/";

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

const initialValues: Values = {
  string: null,
  select: null,
  integer: null,
  float: null,
  date: null,
  datetime: null,
  boolean: null,
  file: null,
  files: null
};

const onSubmit = (values: Values) => {
  console.log(values);
};

const App = () => {
  return (
    <div className="App">
      <h1>Formik Inputs</h1>

      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form>
          <Input name="string" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
