import * as React from "react";
import { useForm, initialValues, telephoneMask } from "./helpers";
import {
  bootstrapTheme,
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
  TimeInput,
  ToggleButton,
  ThemeProvider
} from "react-baseline-inputs";

export const BaselineInputs = () => {
  const [values, fields] = useForm(initialValues);

  return (
    <ThemeProvider value={bootstrapTheme}>
      <section>
        <h2 className="mb-4">react-baseline-inputs</h2>

        <form
          onSubmit={event => {
            event.preventDefault();
            console.table(values);
          }}
        >
          <div className="row">
            <div className="col">
              <Input {...fields.text} label="Text" name="text" />
            </div>

            <div className="col">
              <IntegerInput label="Integer" {...fields.integer} />
            </div>

            <div className="col">
              <FloatInput label="Float" {...fields.float} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <DateInput label="Date" {...fields.date} />
            </div>

            <div className="col">
              <TimeInput label="Time" {...fields.time} />
            </div>

            <div className="col">
              <DateTimeInput label="DateTime" {...fields.datetime} />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-4">
              <Select
                {...fields.select}
                label="Select"
                options={["One", "Two", "Three"]}
              />
            </div>

            <div className="col-4">
              <MaskedInput
                label="Masked"
                {...fields.masked}
                showMask
                mask={telephoneMask}
              />
            </div>
          </div>

          <div className="row mt-3 mb-2">
            <div className="col">
              <FileInput label="File" {...fields.file} />
            </div>

            <div className="col">
              <FileListInput label="FileList" {...fields.filelist} />
            </div>
          </div>

          <TextArea label="TextArea" {...fields.textarea} />

          <div className="row mt-2">
            <div className="col">
              <Checkbox label="Checkbox" {...fields.checkbox} />
            </div>

            <div className="col">
              <ToggleButton label="Toggle" {...fields.toggle} />
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
                  {...fields.checkboxList}
                />
              </fieldset>
            </div>

            <div className="col">
              <fieldset>
                <legend>Radio Group</legend>
                <RadioGroup
                  name="radioGroup"
                  options={[
                    { label: "Foo", value: "foo" },
                    { label: "Bar", value: "bar" },
                    { label: "Disabled", value: "buzz", disabled: true }
                  ]}
                  {...fields.radioGroup}
                />
              </fieldset>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-2 float-right">
            Submit
          </button>
        </form>
      </section>
    </ThemeProvider>
  );
};
