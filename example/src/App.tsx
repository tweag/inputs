import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useValue, required } from "./useValue";
import {
  bootstrapTheme,
  Input,
  Checkbox,
  ThemeProvider,
  Select,
  TextArea
} from "../../src";

const App = () => {
  const text = useValue("", required);
  const select = useValue("");
  const textarea = useValue("");
  const checkbox = useValue(true);

  const values = {
    text: text.value,
    select: select.value,
    textarea: textarea.value,
    checkbox: checkbox.value
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
