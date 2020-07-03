import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useValue, required, notEmpty, pick } from "./useValue";
import {
  Input,
  Checkbox,
  Select,
  TextArea,
  CheckboxItem,
  Radio,
  FieldSet
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
  const text = useValue("", required);
  const select = useValue("");
  const textarea = useValue("");
  const checkbox = useValue(true);
  const checkboxes = useValue<Person[]>([], notEmpty);
  const radio = useValue<Person | null>(null);

  const fields = {
    text,
    select,
    textarea,
    checkbox,
    checkboxes,
    radio
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
            <TextArea label="Textarea" {...textarea} />

            <FieldSet error={checkboxes.error}>
              <legend>Checkbox List</legend>

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

            <FieldSet error={radio.error}>
              <legend>Radio Group</legend>

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
