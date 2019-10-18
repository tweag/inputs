import * as React from "react";
import { FileInput } from "../src";
import { render, fireEvent } from "@testing-library/react";

describe("<FileInput />", () => {
  describe("single", () => {
    const file = Symbol("File");

    it("renders with default values", () => {
      const onChange = jest.fn();
      const input = render(<FileInput onChange={onChange} />);

      expect(input).toMatchInlineSnapshot(`
        <div
          class="field"
        >
          <input
            class="field__input"
            id="field_1"
            type="file"
          />
        </div>
      `);
    });

    it("renders with a label", () => {
      const onChange = jest.fn();
      const input = render(
        <FileInput label="File Input" onChange={onChange} />
      );

      expect(input).toMatchInlineSnapshot(`
        <div
          class="field"
        >
          <label
            class="field__label"
            for="field_2"
          >
            File Input
          </label>
          <input
            class="field__input"
            id="field_2"
            type="file"
          />
        </div>
      `);
    });

    it("renders unwrapped input", () => {
      const onChange = jest.fn();
      const { container } = render(
        <FileInput label="Jawn" onChange={onChange} />
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits an instance of File", () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        <FileInput label="Jawn" onChange={onChange} />
      );

      fireEvent.change(getByLabelText("Jawn"), {
        target: { files: [file] }
      });

      expect(onChange).toHaveBeenCalledWith(file);
    });

    it("emits `null` when the list of files is empty", () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        <FileInput label="Jawn" onChange={onChange} />
      );

      fireEvent.change(getByLabelText("Jawn"), {
        target: { files: [] }
      });

      expect(onChange).toHaveBeenCalledWith(null);
    });
  });

  describe("multiple", () => {
    const files = Symbol("FileList");

    it("renders", () => {
      const onChange = jest.fn();
      const { container } = render(
        <FileInput multiple label="Jawn" onChange={onChange} />
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits an instance of FileList", () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        <FileInput multiple label="Jawn" onChange={onChange} />
      );

      fireEvent.change(getByLabelText("Jawn"), {
        target: { files }
      });

      expect(onChange).toHaveBeenCalledWith(files);
    });
  });
});
