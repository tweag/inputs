import * as React from "react";
import { mount, render } from "enzyme";
import { DateTimeInput } from "../src";

describe("<DateTimeInput />", () => {
  const value = "2001-01-01T05:00:00.000Z";
  const nextLocalValue = "2018-06-13T19:00";
  const nextISOValue = "2018-06-13T23:00:00.000Z";

  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = render(<DateTimeInput value={value} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <input
          class="field__input"
          id="field_1"
          type="datetime-local"
          value="2001-01-01T00:00:00"
        />
      </div>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = render(
      <DateTimeInput label="DateTime Input" value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <label
          class="field__label"
          for="field_2"
        >
          DateTime Input
        </label>
        <input
          class="field__input"
          id="field_2"
          type="datetime-local"
          value="2001-01-01T00:00:00"
        />
      </div>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = render(
      <DateTimeInput wrapper={false} value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <input
        class="field__input"
        id="field_3"
        type="datetime-local"
        value="2001-01-01T00:00:00"
      />
    `);
  });

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const field = mount(<DateTimeInput value={value} onChange={onChange} />);

    field.find("input").simulate("change", {
      target: { value: nextLocalValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextISOValue);
  });
});
