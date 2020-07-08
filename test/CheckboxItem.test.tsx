import * as React from "react";
import { CheckboxItem, CheckboxItemProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const REPRESENTS = { name: "Rick" };

function setup(props: Partial<CheckboxItemProps<any>> = {}) {
  return render(
    <CheckboxItem
      value={[]}
      onChange={() => null}
      represents={REPRESENTS}
      {...props}
    />
  );
}

describe("<CheckboxItem />", () => {
  itBehavesLikeAField(setup);

  it("is a checkbox", () => {
    const field = setup();
    const input = field.getByRole("checkbox");
    expect(input).toHaveAttribute("type", "checkbox");
    expect(input).not.toBeChecked();
  });

  it("has a value", () => {
    const field = setup({ value: [REPRESENTS] });
    const input = field.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("adds an item `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
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
