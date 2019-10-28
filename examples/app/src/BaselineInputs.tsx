import * as React from "react";
import {
  useForm,
  initialValues,
  theme,
  fileTheme,
  selectTheme,
  checkboxTheme,
  toggleTheme
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
  RadioGroup,
  Select,
  TextArea,
  ToggleButton
} from "react-baseline-inputs";

export const BaselineInputs = () => {
  const [values, fields] = useForm(initialValues);

  return (
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
            <Input {...fields.text} label="Text" name="text" theme={theme} />
          </div>

          <div className="col">
            <IntegerInput label="Integer" {...fields.integer} theme={theme} />
          </div>

          <div className="col">
            <FloatInput label="Float" {...fields.float} theme={theme} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <DateInput label="Date" {...fields.date} theme={theme} />
          </div>

          <div className="col">
            <DateTimeInput
              label="DateTime"
              {...fields.datetime}
              theme={theme}
            />
          </div>

          <div className="col">
            <Select
              {...fields.select}
              label="Select"
              options={["One", "Two", "Three"]}
              theme={selectTheme}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <FileInput label="File" {...fields.file} theme={fileTheme} />
          </div>

          <div className="col">
            <FileListInput
              label="FileList"
              {...fields.filelist}
              theme={fileTheme}
            />
          </div>
        </div>

        <TextArea label="TextArea" {...fields.textarea} theme={theme} />

        <div className="row mt-2">
          <div className="col">
            <Checkbox
              label="Checkbox"
              {...fields.checkbox}
              theme={checkboxTheme}
            />
          </div>

          <div className="col">
            <ToggleButton
              label="Toggle"
              {...fields.toggle}
              theme={toggleTheme}
            />
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
                theme={checkboxTheme}
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
  );
};
