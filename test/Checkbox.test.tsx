import * as React from "react";
import { shallow } from "enzyme";
import { Checkbox } from "../src";

describe("<Checkbox />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const checkbox = shallow(<Checkbox value={true} onChange={onChange} />);

    expect(checkbox).toMatchInlineSnapshot(`
      <input
        checked={true}
        onChange={[Function]}
        type="checkbox"
      />
    `);
  });

  it("emits `false` when then value is `true`", () => {
    const onChange = jest.fn();
    const checkbox = shallow(<Checkbox value={true} onChange={onChange} />);

    checkbox.simulate("change");
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("emits `true` when then value is `false`", () => {
    const onChange = jest.fn();
    const checkbox = shallow(<Checkbox value={false} onChange={onChange} />);

    checkbox.simulate("change");
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
