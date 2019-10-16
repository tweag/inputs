import * as React from "react";
import { mount } from "enzyme";
import { DateTimeInput } from "../src";

describe("<DateTimeInput />", () => {
  const value = "2001-01-01T05:00:00.000Z";
  const nextLocalValue = "2018-06-13T19:00";
  const nextISOValue = "2018-06-13T23:00:00.000Z";

  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = mount(<DateTimeInput value={value} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value="2001-01-01T05:00:00.000Z"
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
              type="datetime-local"
              value="2001-01-01T00:00:00"
            />
          </div>
        </Component>
      </Component>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = mount(
      <DateTimeInput label="DateTime Input" value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        label="DateTime Input"
        onChange={[MockFunction]}
        value="2001-01-01T05:00:00.000Z"
      >
        <Component
          label="DateTime Input"
          render={[Function]}
        >
          <div
            className="field"
          >
            <label
              className="field__label"
              htmlFor="field_2"
            >
              DateTime Input
            </label>
            <input
              className="field__input"
              id="field_2"
              onChange={[Function]}
              type="datetime-local"
              value="2001-01-01T00:00:00"
            />
          </div>
        </Component>
      </Component>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = mount(
      <DateTimeInput wrap={false} value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value="2001-01-01T05:00:00.000Z"
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
              type="datetime-local"
              value="2001-01-01T00:00:00"
            />
          </div>
        </Component>
      </Component>
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
