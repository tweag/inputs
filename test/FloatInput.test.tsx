import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FloatInput, FloatInputProps } from "../src";
import { itBehavesLikeAField } from "./sharedExamples";

const setup = (props: Partial<FloatInputProps> = {}) =>
  render(
    <FloatInput label="Jawn" value={5.5} onChange={jest.fn()} {...props} />
  );

describe("<FloatInput />", () => {
  itBehavesLikeAField(setup);

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "7.5" },
    });

    expect(onChange).toHaveBeenCalledWith(7.5);
  });

  it("emits `null` if the value is not a float", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" },
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
