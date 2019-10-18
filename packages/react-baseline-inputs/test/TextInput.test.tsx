import * as React from "react";
import { TextInput } from "../src";
import { render, fireEvent } from "@testing-library/react";

describe("<TextInput />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const { container } = render(
      <TextInput label="Jawn" value="" onChange={onChange} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <TextInput label="Jawn" type="text" value="" onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "hi" }
    });

    expect(onChange).toHaveBeenCalledWith("hi");
  });

  test("emits `null` when the value is blank", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <TextInput label="Jawn" type="text" value="hi" onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
