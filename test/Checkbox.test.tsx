import * as React from "react";
import { Checkbox, CheckboxProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { includeAllFieldTests } from "./sharedExamples";
import { make } from "./helpers";

function setup(props: Partial<CheckboxProps> = {}) {
  return render(
    <Checkbox label="Example" field={make<boolean>(false)} {...props} />
  );
}

describe("<Checkbox />", () => {
  includeAllFieldTests<boolean>(false, setup);

  it("is a checkbox", () => {
    const { getByRole } = setup();
    const input = getByRole("checkbox");
    expect(input).toHaveAttribute("type", "checkbox");
    expect(input).not.toBeChecked();
  });

  it("respects `value` for checked", () => {
    const field = make<boolean>(true);
    const { getByRole } = setup({ field });
    const input = getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("respects `value` for unchecked", () => {
    const field = make<boolean>(false);
    const { getByRole } = setup({ field });
    const input = getByRole("checkbox");
    expect(input).not.toBeChecked();
  });

  it("changes the value", () => {
    const field = make<boolean>(false);
    const { getByRole } = setup({ field });
    const input = getByRole("checkbox");

    fireEvent.click(input);
    expect(field.setValue).toHaveBeenCalledWith(true);
  });
});
