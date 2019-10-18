import * as React from "react";
import { FileInput, FileInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const setup = (props: Partial<FileInputProps> = {}) =>
  render(<FileInput label="Jawn" onChange={jest.fn()} {...props} />);

describe("<FileInput />", () => {
  describe("single", () => {
    const file = Symbol("File");
    it("renders", () => {
      const { container } = setup();
      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits an instance of File", () => {
      const onChange = jest.fn();
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

  describe("multiple", () => {
    const files = Symbol("FileList");

    it("renders", () => {
      const { container } = setup({ multiple: true });
      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits an instance of FileList", () => {
      const onChange = jest.fn();
      const { getByLabelText } = setup({ onChange, multiple: true });

      fireEvent.change(getByLabelText("Jawn"), {
        target: { files }
      });

      expect(onChange).toHaveBeenCalledWith(files);
    });
  });
});
