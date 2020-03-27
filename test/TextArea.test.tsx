import * as React from "react";
import { TextArea, TextAreaProps } from "../src";
import { itBehavesLikeAField } from "./sharedExamples";
import { render, fireEvent } from "@testing-library/react";

const setup = (props: Partial<TextAreaProps> = {}) =>
  render(
    <TextArea label="Jawn" value="hello" onChange={jest.fn()} {...props} />
  );

describe("<TextArea />", () => {
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
