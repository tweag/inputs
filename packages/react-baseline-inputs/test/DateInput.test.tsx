import * as React from "react";
import { DateInput, DateInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const value = "2001-01-01";
const nextValue = "2018-06-13";

const setup = (props: Partial<DateInputProps> = {}) =>
  render(
    <DateInput label="Jawn" value={value} onChange={jest.fn()} {...props} />
  );

describe("<DateInput />", () => {
  it("renders", () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: nextValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextValue);
  });
});
