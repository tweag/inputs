import * as React from "react";
import { mount } from "enzyme";
import { IntegerInput } from "../src";

describe("<IntegerInput />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = mount(<IntegerInput value={null} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value={null}
      >
        <Component
          label={false}
          render={[Function]}
        >
          <div
            className="field"
          >
            <input
              className="field__input"
              id="field_1"
              onChange={[Function]}
              type="number"
              value=""
            />
          </div>
        </Component>
      </Component>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = mount(
      <IntegerInput label="Integer Input" value={null} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        label="Integer Input"
        onChange={[MockFunction]}
        value={null}
      >
        <Component
          label="Integer Input"
          render={[Function]}
        >
          <div
            className="field"
          >
            <label
              className="field__label"
              htmlFor="field_2"
            >
              Integer Input
            </label>
            <input
              className="field__input"
              id="field_2"
              onChange={[Function]}
              type="number"
              value=""
            />
          </div>
        </Component>
      </Component>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = mount(
      <IntegerInput wrap={false} value={null} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value={null}
        wrap={false}
      >
        <Component
          label={false}
          render={[Function]}
        >
          <div
            className="field"
          >
            <input
              className="field__input"
              id="field_3"
              onChange={[Function]}
              type="number"
              value=""
            />
          </div>
        </Component>
      </Component>
    `);
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const field = mount(<IntegerInput value={null} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: "5" }
    });

    expect(onChange).toHaveBeenCalledWith(5);
  });

  it("emits `null` if the value is not an integer", () => {
    const onChange = jest.fn();
    const field = mount(<IntegerInput value={null} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
