import * as React from "react";
import { mount, render } from "enzyme";
import { TextArea } from "../src";

describe("<TextArea />", () => {
  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = render(<TextArea value="" onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <textarea
          class="field__input"
          id="field_1"
        />
      </div>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = render(
      <TextArea label="TextArea Input" value="" onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <label
          class="field__label"
          for="field_2"
        >
          TextArea Input
        </label>
        <textarea
          class="field__input"
          id="field_2"
        />
      </div>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = render(
      <TextArea inputOnly={true} value="" onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <textarea
        class="field__input"
        id="field_3"
      />
    `);
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const field = mount(<TextArea value="" onChange={onChange} />);

    field.find("textarea").simulate("change", {
      target: { value: "hi" }
    });

    expect(onChange).toHaveBeenCalledWith("hi");
  });

  test("emits `null` when the value is blank", () => {
    const onChange = jest.fn();
    const field = mount(<TextArea value="" onChange={onChange} />);

    field.find("textarea").simulate("change", {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
