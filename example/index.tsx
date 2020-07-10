import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useValue, required, notEmpty, pick } from "./utilities";
import {
  Checkbox,
  Item,
  FileInput,
  FileListInput,
  Input,
  Select,
  TextArea,
  ToggleButton,
  Group
} from "./fields";

const App = () => {
  const text = useValue<string>("", required);
  const select = useValue<string>("", required);
  const textarea = useValue<string>("", required);
  const checkbox = useValue<boolean>(true);
  const checkboxes = useValue<string[]>([], notEmpty);
  const radio = useValue<number>(null);
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
            <fieldset className="mb-4">
              <legend>Controls</legend>

              <div className="row">
                <div className="col-md">
                  <Input label="Text" {...text} />
                </div>

                <div className="col-md">
                  <Select label="Select" placeholder="Choose an option" {...select}>
                    <option value="Milk">Milk</option>
                    <option value="Cheese">Cheese</option>
                    <option value="Eggs">Eggs</option>
                  </Select>
                </div>
              </div>

              <TextArea label="Comments" {...textarea} />
            </fieldset>

            <fieldset className="mb-4">
              <legend>File Uploads</legend>

              <div className="row">
                <div className="col-md">
                  <FileInput label="File" {...file} />
                </div>

                <div className="col-md">
                  <FileListInput label="Multiple Files" {...files} />
                </div>
              </div>
            </fieldset>

            <fieldset className="mb-4">
              <legend>Toggles</legend>

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
            </fieldset>

            <div className="row mb-4">
              <div className="col-md">
                <Group
                  type="checkbox"
                  legend="Multiple Checkboxes"
                  {...checkboxes}
                >
                  <Item value="PHL" label="Philadelphia" />
                  <Item value="CHI" label="Chicago" />
                  <Item value="NYC" label="New York" />
                </Group>
              </div>

              <div className="col-md">
                <Group type="radio" legend="Radio Group" {...radio}>
                  <Item value={1} label="Bacon" />
                  <Item value={2} label="Cheetos" />
                  <Item value={3} label="Waffles" />
                </Group>
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
