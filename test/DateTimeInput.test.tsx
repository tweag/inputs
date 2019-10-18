import * as React from "react";
import { DateTimeInput } from "../src";
import { render, fireEvent } from "@testing-library/react";

const value = "2001-01-01T05:00:00.000Z";
const nextLocalValue = "2018-06-13T19:00";
const nextISOValue = "2018-06-13T23:00:00.000Z";

describe("<DateTimeInput />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const { container } = render(
      <DateTimeInput label="Jawn" value={value} onChange={onChange} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <DateTimeInput label="Jawn" value={value} onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: nextLocalValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextISOValue);
  });
});
