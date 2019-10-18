import * as React from "react";
import { mount, render } from "enzyme";
import { Checkbox } from "../src";

describe("<Checkbox />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = render(<Checkbox value={false} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field field--inline"
      >
        <input
          class="field__input field__input--inline"
          id="field_1"
          type="checkbox"
        />
      </div>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = render(
      <Checkbox label="Checkbox Input" value={false} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field field--inline"
      >
        <input
          class="field__input field__input--inline"
          id="field_2"
          type="checkbox"
        />
        <label
          class="field__label field__label--inline"
          for="field_2"
        >
          Checkbox Input
        </label>
      </div>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = render(
      <Checkbox wrapper={false} value={false} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <input
        class="field__input field__input--inline"
        id="field_3"
        type="checkbox"
      />
    `);
  });

  it("emits `false` when then value is `true`", () => {
    const onChange = jest.fn();
    const field = mount(<Checkbox value={true} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { checked: false }
    });

    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("emits `true` when then value is `false`", () => {
    const onChange = jest.fn();
    const field = mount(<Checkbox value={false} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { checked: true }
    });

    expect(onChange).toHaveBeenCalledWith(true);
  });
});
