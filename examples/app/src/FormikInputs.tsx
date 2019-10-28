import * as React from "react";
import { Formik, Form } from "formik";
import {
  initialValues,
  theme,
  fileTheme,
  selectTheme,
  checkboxTheme,
  notBlank,
  toggleTheme,
  telephoneMask
} from "./helpers";
import {
  Checkbox,
  CheckboxList,
  DateInput,
  DateTimeInput,
  FileInput,
  FileListInput,
  FloatInput,
  Input,
  IntegerInput,
  MaskedInput,
  RadioGroup,
  Select,
  TextArea,
  ToggleButton
} from "formik-inputs";

export const FormikInputs = () => {
  return (
    <section>
      <h2 className="mb-4">formik-inputs</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={values => console.table(values)}
      >
        <Form>
          <div className="row">
            <div className="col">
              <Input
                name="text"
                label="Text"
                theme={theme}
                validate={notBlank}
              />
            </div>

            <div className="col">
              <IntegerInput label="Integer" name="integer" theme={theme} />
            </div>

            <div className="col">
              <FloatInput label="Float" name="float" theme={theme} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <DateInput label="Date" name="date" theme={theme} />
            </div>

            <div className="col">
              <DateTimeInput label="DateTime" name="datetime" theme={theme} />
            </div>

            <div className="col">
              <Select
                name="select"
                label="Select"
                options={["One", "Two", "Three"]}
                theme={selectTheme}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <MaskedInput
                label="Masked"
                name="masked"
                showMask
                mask={telephoneMask}
                theme={theme}
              />
            </div>

            <div className="col">
              <FileInput label="File" name="file" theme={fileTheme} />
            </div>

            <div className="col">
              <FileListInput
                label="FileList"
                name="filelist"
                theme={fileTheme}
              />
            </div>
          </div>

          <TextArea label="TextArea" name="textarea" theme={theme} />

          <div className="row mt-2">
            <div className="col">
              <Checkbox
                label="Checkbox"
                name="checkbox"
                theme={checkboxTheme}
              />
            </div>

            <div className="col">
              <ToggleButton label="Toggle" name="toggle" theme={toggleTheme} />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <fieldset>
                <legend>Checkbox List</legend>
                <CheckboxList
                  name="checkboxList"
                  options={[
                    { label: "Foo", value: "foo" },
                    { label: "Bar", value: "bar" },
                    { label: "Disabled", value: "buzz", disabled: true }
                  ]}
                  theme={checkboxTheme}
                />
              </fieldset>
            </div>

            <div className="col">
              <fieldset>
                <legend>Checkbox List</legend>
                <RadioGroup
                  name="radioGroup"
                  options={[
                    { label: "Foo", value: "foo" },
                    { label: "Bar", value: "bar" },
                    { label: "Disabled", value: "buzz", disabled: true }
                  ]}
                  theme={checkboxTheme}
                />
              </fieldset>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-2 float-right">
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};
