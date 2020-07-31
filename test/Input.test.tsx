import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { make } from "./helpers";
import { Input, InputProps } from "../src";
import { includeAllFieldTests } from "./sharedExamples";

function setup(props: Partial<InputProps> = {}) {
  return render(<Input label="Example" field={make<string>("")} {...props} />);
}

describe("<Input />", () => {
  includeAllFieldTests<string>("", setup);

  it("defaults to `type=text`", () => {
    const { getByRole } = setup();
    const input = getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });

  it("has a value", () => {
    const field = make<string>("foo");
    const { getByRole } = setup({ field });
    const input = getByRole("textbox");
    expect(input).toHaveValue("foo");
  });

  it("changes the value", () => {
    const field = make<string>("");
    const { getByRole } = setup({ field });
    const input = getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "hi" }
    });

    expect(field.setValue).toHaveBeenCalledWith("hi");
  });
});
