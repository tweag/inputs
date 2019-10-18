import * as React from "react";
import { IntegerInput, IntegerInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const setup = (props: Partial<IntegerInputProps> = {}) =>
  render(
    <IntegerInput label="Jawn" value={5} onChange={jest.fn()} {...props} />
  );

describe("<IntegerInput />", () => {
  it("renders", () => {
    const { container } = setup();

    expect(container.firstChild).toMatchSnapshot();
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "7" }
    });

    expect(onChange).toHaveBeenCalledWith(7);
  });

  it("emits `null` if the value is not an integer", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
