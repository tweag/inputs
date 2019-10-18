import * as React from "react";
import { mount, render } from "enzyme";
import { FloatInput } from "../src";
import { ninvoke } from "q";

describe("<FloatInput />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = render(<FloatInput value={null} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <input
          class="field__input"
          id="field_1"
          type="number"
          value=""
        />
      </div>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = render(
      <FloatInput label="Float Input" value={null} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <label
          class="field__label"
          for="field_2"
        >
          Float Input
        </label>
        <input
          class="field__input"
          id="field_2"
          type="number"
          value=""
        />
      </div>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = render(
      <FloatInput wrapper={false} value={null} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <input
        class="field__input"
        id="field_3"
        type="number"
        value=""
      />
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
