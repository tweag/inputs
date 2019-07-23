import * as React from "react";
import { shallow } from "enzyme";
import { FileInput } from "../src";

describe("<FileInput />", () => {
  describe("single", () => {
    const file = Symbol("File");

    it("renders", () => {
      const onChange = jest.fn();
      const input = shallow(<FileInput onChange={onChange} />);

      expect(input).toMatchInlineSnapshot(`
        <input
          onChange={[Function]}
          type="file"
        />
      `);
    });

    it("emits an instance of File", () => {
      const onChange = jest.fn();
      const input = shallow(<FileInput onChange={onChange} />);

      input.simulate("change", {
        target: { files: [file] }
      });

      expect(onChange).toHaveBeenCalledWith(file);
    });

    it("emits `null` when the list of files is empty", () => {
      const onChange = jest.fn();
      const input = shallow(<FileInput onChange={onChange} />);

      input.simulate("change", {
        target: { files: [] }
      });

      expect(onChange).toHaveBeenCalledWith(null);
    });
  });

  describe("multiple", () => {
    const fileList = Symbol("FileList");

    it("renders", () => {
      const onChange = jest.fn();
      const input = shallow(<FileInput multiple onChange={onChange} />);

      expect(input).toMatchInlineSnapshot(`
        <input
          multiple={true}
          onChange={[Function]}
          type="file"
        />
      `);
    });

    it("emits an instance of FileList", () => {
      const onChange = jest.fn();
      const input = shallow(<FileInput multiple onChange={onChange} />);

      input.simulate("change", {
        target: { files: fileList }
      });

      expect(onChange).toHaveBeenCalledWith(fileList);
    });
  });
});
