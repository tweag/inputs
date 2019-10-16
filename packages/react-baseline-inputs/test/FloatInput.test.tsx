import * as React from "react";
import { mount } from "enzyme";
import { FloatInput } from "../src";
import { ninvoke } from "q";

describe("<FloatInput />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = mount(<FloatInput value={null} onChange={onChange} />);

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
      <FloatInput label="Float Input" value={null} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        label="Float Input"
        onChange={[MockFunction]}
        value={null}
      >
        <Component
          label="Float Input"
          render={[Function]}
        >
          <div
            className="field"
          >
            <label
              className="field__label"
              htmlFor="field_2"
            >
              Float Input
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
      <FloatInput wrap={false} value={null} onChange={onChange} />
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
    const field = mount(<FloatInput value={null} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: "5.5" }
    });

    expect(onChange).toHaveBeenCalledWith(5.5);
  });

  it("emits `null` if the value is not a float", () => {
    const onChange = jest.fn();
    const field = mount(<FloatInput value={null} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
