import * as React from "react";
import { Checkbox } from "../src";
import { render, fireEvent } from "@testing-library/react";

describe("<Checkbox />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Checkbox label="Jawn" value={true} onChange={onChange} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("emits `false` when then value is `true`", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox label="Jawn" value={true} onChange={onChange} />
    );

    fireEvent.click(getByLabelText("Jawn"));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("emits `true` when then value is `false`", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox label="Jawn" value={false} onChange={onChange} />
    );

    fireEvent.click(getByLabelText("Jawn"));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
