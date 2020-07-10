import * as React from "react";
import { FileInput, FileInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const FILE = Symbol("File");

function setup(props: Partial<FileInputProps> = {}) {
  return render(<FileInput onChange={() => null} {...props} />);
}

describe("<FileInput />", () => {
  itBehavesLikeAField(setup);

  it("is a file", () => {
    const field = setup();
    const input = field.container.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "file");
  });

  it("emits `onChangeValue`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const input = field.container.querySelector("input");

    fireEvent.change(input!, {
      target: { files: [FILE] }
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("emits `onChangeValue`", () => {
    const onChangeValue = jest.fn();
    const field = setup({ onChangeValue });
    const input = field.container.querySelector("input");

    fireEvent.change(input!, {
      target: { files: [FILE] }
    });

    expect(onChangeValue).toHaveBeenCalledWith(FILE);
  });
});
