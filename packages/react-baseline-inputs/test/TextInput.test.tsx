import * as React from "react";
import { mount, render } from "enzyme";
import { TextInput } from "../src";

describe("<TextInput />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = render(<TextInput value="" onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <input
          class="field__input"
          id="field_1"
          type="text"
          value=""
        />
      </div>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = render(
      <TextInput label="Text Input" value="" onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <label
          class="field__label"
          for="field_2"
        >
          Text Input
        </label>
        <input
          class="field__input"
          id="field_2"
          type="text"
          value=""
        />
      </div>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = render(
      <TextInput wrapper={false} value="" onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <input
        class="field__input"
        id="field_3"
        type="text"
        value=""
      />
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
