import * as React from "react";
import { TextArea } from "../src";
import { render, fireEvent } from "@testing-library/react";

describe("<TextArea />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const { container } = render(
      <TextArea label="Jawn" value="" onChange={onChange} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <TextArea label="Jawn" type="text" value="" onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "hi" }
    });

    expect(onChange).toHaveBeenCalledWith("hi");
  });

  test("emits `null` when the value is blank", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <TextArea label="Jawn" type="text" value="hi" onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
