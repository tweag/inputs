import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BaselineInputs } from "./BaselineInputs";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="display-3">React Baseline Inputs</h1>
      </header>

      <main>
        <BaselineInputs />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
