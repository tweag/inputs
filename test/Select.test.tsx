import * as React from "react";
import { mount, render } from "enzyme";
import { Select } from "../src";

describe("<Select />", () => {
  describe("an array of strings as options", () => {
    const options = ["foo", "bar", "buzz"];

    it("renders with default values", () => {
      const onChange = jest.fn();
      const select = render(
        <Select value="foo" options={options} onChange={onChange} />
      );

      expect(select).toMatchInlineSnapshot(`
        <div
          class="field"
        >
          <select
            class="field__input"
            id="field_1"
          >
            <option
              selected=""
              value="foo"
            >
              foo
            </option>
            <option
              value="bar"
            >
              bar
            </option>
            <option
              value="buzz"
            >
              buzz
            </option>
          </select>
        </div>
      `);
    });

    it("renders with a label", () => {
      const onChange = jest.fn();
      const select = render(
        <Select
          value="foo"
          label="Select Input"
          options={options}
          onChange={onChange}
        />
      );

      expect(select).toMatchInlineSnapshot(`
        <div
          class="field"
        >
          <label
            class="field__label"
            for="field_2"
          >
            Select Input
          </label>
          <select
            class="field__input"
            id="field_2"
          >
            <option
              selected=""
              value="foo"
            >
              foo
            </option>
            <option
              value="bar"
            >
              bar
            </option>
            <option
              value="buzz"
            >
              buzz
            </option>
          </select>
        </div>
      `);
    });

    it("renders unwrapped input", () => {
      const onChange = jest.fn();
      const select = render(
        <Select
          value="foo"
          inputOnly={true}
          options={options}
          onChange={onChange}
        />
      );

      expect(select).toMatchInlineSnapshot(`
        <select
          class="field__input"
          id="field_3"
        >
          <option
            selected=""
            value="foo"
          >
            foo
          </option>
          <option
            value="bar"
          >
            bar
          </option>
          <option
            value="buzz"
          >
            buzz
          </option>
        </select>
      `);
    });

    it("accepts a placeholder", () => {
      const onChange = jest.fn();
      const select = render(
        <Select
          value={null}
          options={options}
          onChange={onChange}
          placeholder="Choose an option"
        />
      );

      expect(select).toMatchInlineSnapshot(`
        <div
          class="field"
        >
          <select
            class="field__input"
            id="field_4"
          >
            <option
              disabled=""
              selected=""
              value=""
            >
              Choose an option
            </option>
            <option
              value="foo"
            >
              foo
            </option>
            <option
              value="bar"
            >
              bar
            </option>
            <option
              value="buzz"
            >
              buzz
            </option>
          </select>
        </div>
      `);
    });

    it("emits a value", () => {
      const onChange = jest.fn();
      const field = mount(
        <Select value="foo" options={options} onChange={onChange} />
      );

      field.find("select").simulate("change", {
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
      const select = render(
        <Select value="foo" onChange={onChange} options={options} />
      );

      expect(select).toMatchInlineSnapshot(`
        <div
          class="field"
        >
          <select
            class="field__input"
            id="field_6"
          >
            <option
              selected=""
              value="foo"
            >
              Foo
            </option>
            <option
              disabled=""
              value="bar"
            >
              Bar
            </option>
            <option
              value="buzz"
            >
              Buzz
            </option>
          </select>
        </div>
      `);
    });

    it("emits the `value` property", () => {
      const onChange = jest.fn();
      const field = mount(
        <Select value="foo" onChange={onChange} options={options} />
      );

      field.find("select").simulate("change", {
        target: { value: "buzz" }
      });

      expect(onChange).toHaveBeenCalledWith("buzz");
    });
  });
});
