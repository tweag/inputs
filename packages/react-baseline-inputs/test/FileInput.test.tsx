import * as React from "react";
import { mount, render } from "enzyme";
import { FileInput } from "../src";

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
      const input = render(<FileInput wrapper={false} onChange={onChange} />);

      expect(input).toMatchInlineSnapshot(`
        <input
          class="field__input"
          id="field_3"
          type="file"
        />
      `);
    });

    it("emits an instance of File", () => {
      const onChange = jest.fn();
      const field = mount(<FileInput onChange={onChange} />);

      field.find("input").simulate("change", {
        target: { files: [file] }
      });

      expect(onChange).toHaveBeenCalledWith(file);
    });

    it("emits `null` when the list of files is empty", () => {
      const onChange = jest.fn();
      const field = mount(<FileInput onChange={onChange} />);

      field.find("input").simulate("change", {
        target: { files: [] }
      });

      expect(onChange).toHaveBeenCalledWith(null);
    });
  });

  describe("multiple", () => {
    const fileList = Symbol("FileList");

    it("renders", () => {
      const onChange = jest.fn();
      const input = render(<FileInput multiple onChange={onChange} />);

      expect(input).toMatchInlineSnapshot(`
        <div
          class="field"
        >
          <input
            class="field__input"
            id="field_6"
            multiple=""
            type="file"
          />
        </div>
      `);
    });

    it("emits an instance of FileList", () => {
      const onChange = jest.fn();
      const field = mount(<FileInput multiple onChange={onChange} />);

      field.find("input").simulate("change", {
        target: { files: fileList }
      });

      expect(onChange).toHaveBeenCalledWith(fileList);
    });
  });
});
