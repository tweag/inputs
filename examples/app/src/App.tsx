import "react-app-polyfill/stable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Baseline } from "./Baseline";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>React Forms</h1>
      </header>

      <main>
        <Baseline />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
