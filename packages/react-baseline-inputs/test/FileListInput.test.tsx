import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { FileListInput, FileListInputProps } from "../src";

const setup = (props: Partial<FileListInputProps> = {}) =>
  render(<FileListInput label="Jawn" onChange={jest.fn()} {...props} />);

describe("<FileListInput />", () => {
  itBehavesLikeAField(setup);

  it("emits an instance of FileList", () => {
    const onChange = jest.fn();
    const files = Symbol("FileList");
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { files }
    });

    expect(onChange).toHaveBeenCalledWith(files);
  });
});
