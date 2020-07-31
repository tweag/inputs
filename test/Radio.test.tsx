import * as React from "react";
import { Radio, RadioProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { includeAllFieldTests } from "./sharedExamples";
import { make } from "./helpers";

function setup(props: Partial<RadioProps<number>> = {}) {
  return render(
    <Radio label="Example" field={make<number>(0)} value={100} {...props} />
  );
}

describe("<Radio />", () => {
  includeAllFieldTests<number>(0, setup);

  it("respects `value` for checked", () => {
    const field = make<number>(100);
    const { getByRole } = setup({ field });
    const input = getByRole("radio");
    expect(input).toBeChecked();
  });

  it("respects `value` for unchecked", () => {
    const field = make<number>(0);
    const { getByRole } = setup({ field });
    const input = getByRole("radio");
    expect(input).not.toBeChecked();
  });

  it("changes the value", () => {
    const field = make<number>(0);
    const { getByRole } = setup({ field });
    const input = getByRole("radio");

    fireEvent.click(input);
    expect(field.setValue).toHaveBeenCalledWith(100);
  });
});
