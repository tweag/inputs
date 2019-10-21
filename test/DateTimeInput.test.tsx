import * as React from "react";
import { DateTimeInput, DateTimeInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const value = "2001-01-01T05:00:00.000Z";
const nextLocalValue = "2018-06-13T19:00";
const nextISOValue = "2018-06-13T19:00:00.000Z";

const setup = (props: Partial<DateTimeInputProps> = {}) =>
  render(
    <DateTimeInput label="Jawn" value={value} onChange={jest.fn()} {...props} />
  );

describe("<DateTimeInput />", () => {
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

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: nextLocalValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextISOValue);
  });
});
