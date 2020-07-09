import * as React from "react";
import { CheckboxItem, CheckboxItemProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const REPRESENTS = { name: "Rick" };

function setup(props: Partial<CheckboxItemProps<any>> = {}) {
  return render(<CheckboxItem represents={REPRESENTS} {...props} />);
}

describe("<CheckboxItem />", () => {
  itBehavesLikeAField(setup);

  it("is a checkbox", () => {
    const field = setup();
    const input = field.getByRole("checkbox");
    expect(input).toHaveAttribute("type", "checkbox");
    expect(input).not.toBeChecked();
  });

  it("respects `value` when checked", () => {
    const field = setup({ value: [REPRESENTS] });
    const input = field.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("respects `value` when unchecked", () => {
    const field = setup({ value: [] });
    const input = field.getByRole("checkbox");
    expect(input).not.toBeChecked();
  });

  it("can be uncontrolled", () => {
    const field = setup({ defaultChecked: true });
    const input = field.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("sets the `value` attribute when `represents` is a string", () => {
    const field = setup({ represents: "foo" });
    const input = field.getByRole("checkbox");
    expect(input).toHaveAttribute("value", "foo");
  });

  it("adds an item `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange, value: [] });
    const input = field.getByRole("checkbox");

    fireEvent.click(input);

    expect(onChange).toHaveBeenCalledWith([REPRESENTS]);
  });

  it("removes an item `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange, value: [REPRESENTS] });
    const input = field.getByRole("checkbox");

    fireEvent.click(input);

    expect(onChange).toHaveBeenCalledWith([]);
  });
});
