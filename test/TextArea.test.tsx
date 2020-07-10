import * as React from "react";
import { TextArea, TextAreaProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { includeAllFieldTests } from "./sharedExamples";

function setup(props: Partial<TextAreaProps> = {}) {
  return render(<TextArea {...props} />);
}

describe("<TextArea />", () => {
  includeAllFieldTests(setup);

  it("has a value", () => {
    const field = setup({ value: "foo" });
    const input = field.getByRole("textbox");
    expect(input).toHaveValue("foo");
  });

  it("emits `onChangeValue`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const input = field.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "hi" }
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("emits `onChangeValue`", () => {
    const onChangeValue = jest.fn();
    const field = setup({ onChangeValue });
    const input = field.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "hi" }
    });

    expect(onChangeValue).toHaveBeenCalledWith("hi");
  });
});
