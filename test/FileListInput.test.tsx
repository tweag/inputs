import * as React from "react";
import { FileListInput, FileListInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const FILE_LIST = Symbol("FileList");

function setup(props: Partial<FileListInputProps> = {}) {
  return render(<FileListInput {...props} />);
}

describe("<FileListInput />", () => {
  itBehavesLikeAField(setup);

  it("is a file", () => {
    const field = setup();
    const input = field.container.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "file");
    expect(input).toHaveAttribute("multiple", "");
  });

  it("emits `onChangeValue`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const input = field.container.querySelector("input");

    fireEvent.change(input!, {
      target: { files: FILE_LIST }
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("emits `onChangeValue`", () => {
    const onChangeValue = jest.fn();
    const field = setup({ onChangeValue });
    const input = field.container.querySelector("input");

    fireEvent.change(input!, {
      target: { files: FILE_LIST }
    });

    expect(onChangeValue).toHaveBeenCalledWith(FILE_LIST);
  });
});
