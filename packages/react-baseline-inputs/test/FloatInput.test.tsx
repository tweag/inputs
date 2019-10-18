import * as React from "react";
import { FloatInput, FloatInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const setup = (props: Partial<FloatInputProps> = {}) =>
  render(
    <FloatInput label="Jawn" value={5.5} onChange={jest.fn()} {...props} />
  );

describe("<FloatInput />", () => {
  it("renders", () => {
    const { container } = setup();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without a label", () => {
    const { container } = setup({ label: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without a wrapper", () => {
    const { container } = setup({ label: false, wrapper: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with an error", () => {
    const { container } = setup({ error: "Oh no!" });
    expect(container.firstChild).toMatchSnapshot();
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "7.5" }
    });

    expect(onChange).toHaveBeenCalledWith(7.5);
  });

  it("emits `null` if the value is not a float", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
