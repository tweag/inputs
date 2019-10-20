import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BaselineInputs } from "./BaselineInputs";
import { FormikInputs } from "./FormikInputs";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="display-3">React Forms</h1>
      </header>

      <main>
        <BaselineInputs />
        <FormikInputs />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
