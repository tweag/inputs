import * as React from "react";
import { Input, InputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

function setup(props: Partial<InputProps> = {}) {
  return render(<Input onChange={() => null} value="" {...props} />);
}

describe("<Input />", () => {
  itBehavesLikeAField(setup);

  it("defaults to `type=text`", () => {
    const field = setup();
    const input = field.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });

  it("has a value", () => {
    const field = setup({ value: "foo" });
    const input = field.getByRole("textbox");
    expect(input).toHaveValue("foo");
  });

  it("emits `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const input = field.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "hi" }
    });

    expect(onChange).toHaveBeenCalledWith("hi");
  });
});
