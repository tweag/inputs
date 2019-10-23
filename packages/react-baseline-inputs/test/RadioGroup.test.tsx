import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeARadioGroup } from "./sharedExamples";
import { RadioGroup, RadioGroupProps } from "../src";

const setup = (props: Partial<RadioGroupProps> = {}) =>
  render(
    <RadioGroup
      inline
      title="Jawn"
      name="jawn"
      options={[
        { label: "Foo", value: "foo" },
        { label: "Bar", value: "bar" },
        { label: "Disabled", value: "buzz", disabled: true }
      ]}
      onChange={jest.fn()}
      {...props}
    />
  );

describe("<RadioGroup />", () => {
  itBehavesLikeARadioGroup(setup);

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Foo"), {
      target: { value: "foo" }
    });

    expect(onChange).toHaveBeenCalledWith("foo");
  });

  test("emits `null` when the value is blank", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Foo"), {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
