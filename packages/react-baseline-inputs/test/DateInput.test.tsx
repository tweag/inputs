import * as React from "react";
import { mount, render } from "enzyme";
import { DateInput } from "../src";

describe("<DateInput />", () => {
  const value = "2001-01-01";
  const nextValue = "2018-06-13";

  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = render(<DateInput value={value} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <input
          class="field__input"
          id="field_1"
          type="date"
          value="2001-01-01"
        />
      </div>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = render(
      <DateInput label="Date Input" value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <label
          class="field__label"
          for="field_2"
        >
          Date Input
        </label>
        <input
          class="field__input"
          id="field_2"
          type="date"
          value="2001-01-01"
        />
      </div>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = render(
      <DateInput wrapper={false} value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <input
        class="field__input"
        id="field_3"
        type="date"
        value="2001-01-01"
      />
    `);
  });

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const field = mount(<DateInput value={value} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: nextValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextValue);
  });
});
