import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FileInput, FileInputProps } from "../src";
import { itBehavesLikeAField } from "./sharedExamples";

const setup = (props: Partial<FileInputProps> = {}) =>
  render(<FileInput label="Jawn" onChange={jest.fn()} {...props} />);

describe("<FileInput />", () => {
  itBehavesLikeAField(setup);

  it("emits an instance of File", () => {
    const onChange = jest.fn();
    const file = Symbol("File");
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { files: [file] }
    });

    expect(onChange).toHaveBeenCalledWith(file);
  });

  it("emits `null` when the list of files is empty", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { files: [] }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
