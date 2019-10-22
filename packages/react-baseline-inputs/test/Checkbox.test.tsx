import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { Checkbox, CheckboxProps } from "../src";

const setup = (props: Partial<CheckboxProps> = {}) =>
  render(
    <Checkbox label="Jawn" value={true} onChange={jest.fn()} {...props} />
  );

describe("<Checkbox />", () => {
  itBehavesLikeAField(setup);

  it("emits `false` when then value is `true`", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ value: true, onChange });

    fireEvent.click(getByLabelText("Jawn"));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("emits `true` when then value is `false`", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ value: false, onChange });

    fireEvent.click(getByLabelText("Jawn"));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
