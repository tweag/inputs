import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useValue, required, notEmpty, pick } from "./useValue";
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
        <h1 className="display-3">React Baseline Inputs</h1>
      </header>

      <main>
        <section>
          <form onSubmit={event => event.preventDefault()}>
            <Input label="Text" {...text} />
            <Select
              label="Select"
              options={["A", "B"]}
              placeholder="Choose an option"
              {...select}
            />
            <Checkbox label="I agree" {...checkbox} />
            <ToggleButton label="Enable" {...toggle} />
            <TextArea label="Comments" {...textarea} />
            <FileInput label="File" {...file} />
            <FileListInput label="Files" {...files} />

            <FieldSet legend="Checkbox List" error={checkboxes.error}>
              {people.map(person => (
                <CheckboxItem
                  key={person.name}
                  label={person.name}
                  represents={person}
                  valid={checkboxes.valid}
                  invalid={checkboxes.invalid}
                  value={checkboxes.value}
                  onChange={checkboxes.onChange}
                  onBlur={checkboxes.onBlur}
                />
              ))}
            </FieldSet>

            <FieldSet legend="Radio Group" error={radio.error}>
              {people.map(person => (
                <Radio
                  key={person.name}
                  label={person.name}
                  represents={person}
                  valid={radio.valid}
                  invalid={radio.invalid}
                  value={radio.value}
                  onChange={radio.onChange}
                  onBlur={radio.onBlur}
                />
              ))}
            </FieldSet>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </section>

        <section className="mt-4">
          <h4>Values</h4>
          <pre className="p-2 rounded bg-light border">
            <code>{JSON.stringify(pick(fields, "value"), null, 2)}</code>
          </pre>

          <h4>Errors</h4>
          <pre className="p-2 rounded bg-light border">
            <code>{JSON.stringify(pick(fields, "error"), null, 2)}</code>
          </pre>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
