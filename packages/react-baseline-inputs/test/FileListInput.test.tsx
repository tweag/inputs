import * as React from "react";
import { FileListInput, FileListInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const setup = (props: Partial<FileListInputProps> = {}) =>
  render(<FileListInput label="Jawn" onChange={jest.fn()} {...props} />);

describe("<FileListInput />", () => {
  const files = Symbol("FileList");

  it("renders", () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without a label", () => {
    const { container } = setup({ label: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without a wrapper", () => {
    const { container } = setup({ label: false, wrapper: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with an error", () => {
    const { container } = setup({ error: "Oh no!" });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("emits an instance of FileList", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { files }
    });

    expect(onChange).toHaveBeenCalledWith(files);
  });
});
