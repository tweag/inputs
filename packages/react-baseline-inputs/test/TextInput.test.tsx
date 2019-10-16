import * as React from "react";
import { mount } from "enzyme";
import { TextInput } from "../src";

describe("<TextInput />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = mount(<TextInput value="" onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value=""
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
              type="text"
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
      <TextInput label="Text Input" value="" onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        label="Text Input"
        onChange={[MockFunction]}
        value=""
      >
        <Component
          label="Text Input"
          render={[Function]}
        >
          <div
            className="field"
          >
            <label
              className="field__label"
              htmlFor="field_2"
            >
              Text Input
            </label>
            <input
              className="field__input"
              id="field_2"
              onChange={[Function]}
              type="text"
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
      <TextInput wrap={false} value="" onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value=""
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
              type="text"
              value=""
            />
          </div>
        </Component>
      </Component>
    `);
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const field = mount(<TextInput type="text" value="" onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: "hi" }
    });

    expect(onChange).toHaveBeenCalledWith("hi");
  });

  test("emits `null` when the value is blank", () => {
    const onChange = jest.fn();
    const field = mount(<TextInput type="text" value="" onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
