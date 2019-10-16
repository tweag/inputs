import * as React from "react";
import { mount } from "enzyme";
import { DateInput } from "../src";

describe("<DateInput />", () => {
  const value = "2001-01-01";
  const nextValue = "2018-06-13";

  it("renders with default values", () => {
    const onChange = jest.fn();
    const input = mount(<DateInput value={value} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value="2001-01-01"
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
              type="date"
              value="2001-01-01"
            />
          </div>
        </Component>
      </Component>
    `);
  });

  it("renders with a label", () => {
    const onChange = jest.fn();
    const input = mount(
      <DateInput label="Date Input" value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        label="Date Input"
        onChange={[MockFunction]}
        value="2001-01-01"
      >
        <Component
          label="Date Input"
          render={[Function]}
        >
          <div
            className="field"
          >
            <label
              className="field__label"
              htmlFor="field_2"
            >
              Date Input
            </label>
            <input
              className="field__input"
              id="field_2"
              onChange={[Function]}
              type="date"
              value="2001-01-01"
            />
          </div>
        </Component>
      </Component>
    `);
  });

  it("renders unwrapped input", () => {
    const onChange = jest.fn();
    const input = mount(
      <DateInput wrap={false} value={value} onChange={onChange} />
    );

    expect(input).toMatchInlineSnapshot(`
      <Component
        onChange={[MockFunction]}
        value="2001-01-01"
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
              type="date"
              value="2001-01-01"
            />
          </div>
        </Component>
      </Component>
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
