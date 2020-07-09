import * as React from "react";
import { Checkbox, CheckboxProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

function setup(props: Partial<CheckboxProps> = {}) {
  return render(<Checkbox {...props} />);
}

describe("<Checkbox />", () => {
  itBehavesLikeAField(setup);

  it("is a checkbox", () => {
    const field = setup();
    const input = field.getByRole("checkbox");
    expect(input).toHaveAttribute("type", "checkbox");
    expect(input).not.toBeChecked();
  });

  it("respects `value` for checked", () => {
    const field = setup({ value: true });
    const input = field.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("respects `value` for unchecked", () => {
    const field = setup({ value: false });
    const input = field.getByRole("checkbox");
    expect(input).not.toBeChecked();
  });

  it("can be uncontrolled", () => {
    const field = setup({ defaultChecked: true });
    const input = field.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("emits `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const input = field.getByRole("checkbox");

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
  });

  it("emits `onChangeValue`", () => {
    const onChangeValue = jest.fn();
    const field = setup({ onChangeValue });
    const input = field.getByRole("checkbox");

    fireEvent.click(input);
    expect(onChangeValue).toHaveBeenCalledWith(true);
  });
});
