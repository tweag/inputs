import * as React from "react";
import { Input, InputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const setup = (props: Partial<InputProps> = {}) =>
  render(<Input label="Jawn" value="hello" onChange={jest.fn()} {...props} />);

describe("<Input />", () => {
  itBehavesLikeAField(setup);

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "hi" },
    });

    expect(onChange).toHaveBeenCalledWith("hi");
  });

  test("emits `null` when the value is blank", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" },
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
