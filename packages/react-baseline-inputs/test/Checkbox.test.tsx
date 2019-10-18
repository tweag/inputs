import * as React from "react";
import { Checkbox, CheckboxProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const setup = (props: Partial<CheckboxProps> = {}) =>
  render(
    <Checkbox label="Jawn" value={true} onChange={jest.fn()} {...props} />
  );

describe("<Checkbox />", () => {
  it("renders", () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

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
