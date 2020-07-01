import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { bootstrapTheme, Input, ThemeProvider } from "react-baseline-inputs";
import { useValue, required } from "./useValue";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="display-3">React Baseline Inputs</h1>
      </header>

      <main>
        <ThemeProvider value={bootstrapTheme}>
          <section>
            <form onSubmit={event => event.preventDefault()}>
              <Input label="Text" name="text" {...useValue("", required)} />

              <button
                type="submit"
                className="btn btn-primary mt-2 float-right"
              >
                Submit
              </button>
            </form>
          </section>
        </ThemeProvider>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
