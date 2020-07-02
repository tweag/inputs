import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useValue, required, notEmpty } from "./useValue";
import {
  bootstrapTheme,
  Input,
  Checkbox,
  ThemeProvider,
  Select,
  TextArea,
  CheckboxItem,
  Radio,
  FieldSet
} from "../../src";

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

  const values = {
    text: text.value,
    select: select.value,
    textarea: textarea.value,
    checkbox: checkbox.value,
    checkboxes: checkboxes.value,
    radio: radio.value
  };

  return (
    <div className="container">
      <header>
        <h1 className="display-3">React Baseline Inputs</h1>
      </header>

      <main>
        <ThemeProvider value={bootstrapTheme}>
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
                    label={person.name}
                    represents={person}
                    value={checkboxes.value}
                    touched={checkboxes.touched}
                    onChange={checkboxes.onChange}
                    onBlur={checkboxes.onBlur}
                  />
                ))}
              </FieldSet>

              <FieldSet error={radio.error}>
                <legend>Radio Group</legend>

                {people.map(person => (
                  <Radio
                    label={person.name}
                    represents={person}
                    value={radio.value}
                    touched={radio.touched}
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
            <pre className="p-2 rounded bg-light border">
              <code>{JSON.stringify(values, null, 2)}</code>
            </pre>
          </section>
        </ThemeProvider>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
