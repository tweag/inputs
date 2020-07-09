import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useValue, required, notEmpty, pick, omit } from "./utilities";
import {
  Checkbox,
  CheckboxItem,
  FieldSet,
  FileInput,
  FileListInput,
  Input,
  Radio,
  Select,
  TextArea,
  ToggleButton
} from "./fields";

interface Person {
  name: string;
}

const people: Person[] = [
  { name: "Guy Fietti" },
  { name: "Abe Lincoln" },
  { name: "Oprah Winfrey" }
];

const App = () => {
  const text = useValue<string>("", required);
  const select = useValue<string>("");
  const textarea = useValue<string>("");
  const checkbox = useValue<boolean>(true);
  const checkboxes = useValue<Person[]>([], notEmpty);
  const radio = useValue<Person>();
  const toggle = useValue<boolean>(true);
  const file = useValue<File>();
  const files = useValue<FileList>();

  const fields = {
    text,
    select,
    textarea,
    checkbox,
    checkboxes,
    radio,
    toggle,
    file,
    files
  };

  return (
    <div className="container">
      <header>
        <h1>React Baseline Inputs</h1>
      </header>

      <main>
        <section>
          <form onSubmit={event => event.preventDefault()}>
            <FieldSet legend="Controls" className="mb-4">
              <div className="row">
                <div className="col-md">
                  <Input label="Text" {...text} />
                </div>

                <div className="col-md">
                  <Select
                    label="Select"
                    options={["A", "B"]}
                    placeholder="Choose an option"
                    {...select}
                  />
                </div>
              </div>

              <TextArea label="Comments" {...textarea} />
            </FieldSet>

            <FieldSet legend="File Uploads" className="mb-4">
              <div className="row">
                <div className="col-md">
                  <FileInput label="File" {...file} />
                </div>

                <div className="col-md">
                  <FileListInput label="Multiple Files" {...files} />
                </div>
              </div>
            </FieldSet>

            <FieldSet legend="Toggles" className="mb-4">
              <div className="row">
                <div className="col-md">
                  <Checkbox label="I agree" {...checkbox} />
                </div>

                <div className="col-md">
                  <ToggleButton label="Push notifications" {...toggle}>
                    {toggle.value ? "Enabled" : "Disabled"}
                  </ToggleButton>
                </div>
              </div>
            </FieldSet>

            <div className="row mb-4">
              <div className="col-md">
                <FieldSet legend="Multiple Checkboxes" error={checkboxes.error}>
                  {people.map(person => (
                    <CheckboxItem
                      key={person.name}
                      label={person.name}
                      represents={person}
                      {...omit(checkboxes, "error")}
                    />
                  ))}
                </FieldSet>
              </div>

              <div className="col-md">
                <FieldSet legend="Radio Group" error={radio.error}>
                  {people.map(person => (
                    <Radio
                      key={person.name}
                      label={person.name}
                      represents={person}
                      {...omit(radio, "error")}
                    />
                  ))}
                </FieldSet>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>

        <section className="mt-4">
          <div className="row">
            <div className="col-md">
              <h4>Values</h4>
              <pre className="p-2 rounded bg-light border">
                <code>{JSON.stringify(pick(fields, "value"), null, 2)}</code>
              </pre>
            </div>

            <div className="col-md">
              <h4>Errors</h4>
              <pre className="p-2 rounded bg-light border">
                <code>{JSON.stringify(pick(fields, "error"), null, 2)}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
