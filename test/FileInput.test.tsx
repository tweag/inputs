import * as React from "react";
import { FileInput, FileInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { includeAllFieldTests } from "./sharedExamples";
import { make } from "./helpers";

const FILE = Symbol("File");

function setup(props: Partial<FileInputProps> = {}) {
  return render(
    <FileInput label="Example" field={make<File | null>(null)} {...props} />
  );
}

describe("<FileInput />", () => {
  includeAllFieldTests<File | null>(null, setup);

  it("is a file", () => {
    const { container } = setup();
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "file");
  });

  it("changes the value", () => {
    const field = make<File | null>(null);
    const { getByLabelText } = setup({ field });
    const input = getByLabelText("Example");

    fireEvent.change(input!, {
      target: { files: [FILE] }
    });

    expect(field.setValue).toHaveBeenCalledWith(FILE);
  });
});
