import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { make } from "./helpers";
import { includeAllFieldTests } from "./sharedExamples";
import { FileListInput, FileListInputProps } from "../src";

const FILE_LIST = Symbol("FileList");

function setup(props: Partial<FileListInputProps> = {}) {
  return render(
    <FileListInput
      label="Example"
      field={make<FileList | null>(null)}
      {...props}
    />
  );
}

describe("<FileListInput />", () => {
  includeAllFieldTests<FileList | null>(null, setup);

  it("is a file", () => {
    const { container } = setup();
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "file");
    expect(input).toHaveAttribute("multiple", "");
  });

  it("changes the value", () => {
    const field = make<FileList | null>(null);
    const { getByLabelText } = setup({ field });
    const input = getByLabelText("Example");

    fireEvent.change(input!, {
      target: { files: FILE_LIST }
    });

    expect(field.setValue).toHaveBeenCalledWith(FILE_LIST);
  });
});
