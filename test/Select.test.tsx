import React from "react";
import { shallow } from "enzyme";
import { Select } from "../src";

describe("<Select />", () => {
  describe("an array of strings as options", () => {
    const options = ["foo", "bar", "buzz"];

    it("accepts an array of strings as options", () => {
      const onChange = jest.fn();
      const select = shallow(
        <Select value="foo" options={options} onChange={onChange} />
      );

      expect(select).toMatchInlineSnapshot(`
        <select
          onChange={[Function]}
          value="foo"
        >
          <option
            key="foo"
            value="foo"
          >
            foo
          </option>
          <option
            key="bar"
            value="bar"
          >
            bar
          </option>
          <option
            key="buzz"
            value="buzz"
          >
            buzz
          </option>
        </select>
      `);
    });

    it("accepts a placeholder", () => {
      const onChange = jest.fn();
      const select = shallow(
        <Select
          value={null}
          options={options}
          onChange={onChange}
          placeholder="Choose an option"
        />
      );

      expect(select).toMatchInlineSnapshot(`
        <select
          onChange={[Function]}
          value=""
        >
          <option
            disabled={true}
            key="placeholder"
            value=""
          >
            Choose an option
          </option>
          <option
            key="foo"
            value="foo"
          >
            foo
          </option>
          <option
            key="bar"
            value="bar"
          >
            bar
          </option>
          <option
            key="buzz"
            value="buzz"
          >
            buzz
          </option>
        </select>
      `);
    });

    it("emits a value", () => {
      const onChange = jest.fn();
      const select = shallow(
        <Select value="foo" options={options} onChange={onChange} />
      );

      select.simulate("change", {
        target: { value: "bar" }
      });

      expect(onChange).toHaveBeenCalledWith("bar");
    });
  });

  describe("an array of objects as options", () => {
    const options = [
      { label: "Foo", value: "foo" },
      { label: "Bar", value: "bar", disabled: true },
      { label: "Buzz", value: "buzz" }
    ];

    it("renders", () => {
      const onChange = jest.fn();
      const select = shallow(
        <Select value="foo" onChange={onChange} options={options} />
      );

      expect(select).toMatchInlineSnapshot(`
        <select
          onChange={[Function]}
          value="foo"
        >
          <option
            key="foo"
            value="foo"
          >
            Foo
          </option>
          <option
            disabled={true}
            key="bar"
            value="bar"
          >
            Bar
          </option>
          <option
            key="buzz"
            value="buzz"
          >
            Buzz
          </option>
        </select>
      `);
    });

    it("emits the `value` property", () => {
      const onChange = jest.fn();
      const select = shallow(
        <Select value="foo" onChange={onChange} options={options} />
      );

      select.simulate("change", {
        target: { value: "buzz" }
      });

      expect(onChange).toHaveBeenCalledWith("buzz");
    });
  });
});
