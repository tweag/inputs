import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useValue, required } from "./helpers";
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
              <Input label="Text" value={text.value} {...text.props} />

              <Select
                label="Select"
                options={["A", "B"]}
                placeholder="Choose an option"
                value={select.value}
                {...select.props}
              />

              <Checkbox
                label="I agree"
                checked={checkbox.value}
                {...checkbox.props}
              />

              <TextArea
                label="Textarea"
                value={textarea.value}
                {...textarea.props}
              />

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
