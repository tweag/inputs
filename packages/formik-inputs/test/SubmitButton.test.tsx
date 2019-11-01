import * as React from "react";
import { Formik, Form } from "formik";
import { SubmitButton } from "../src";
import { render, fireEvent } from "@testing-library/react";

const onSubmit = () => Promise.resolve();
const renderFormik = (children: React.ReactNode, opts: any = {}) => {
  const { getByRole } = render(
    <Formik onSubmit={onSubmit} initialValues={{}} {...opts}>
      <Form>{children}</Form>
    </Formik>
  );

  return { button: getByRole("button"), form: getByRole("form") };
};

describe("<SubmitButton />", () => {
  it("accepts children", () => {
    const { button } = renderFormik(<SubmitButton>Hello</SubmitButton>);

    expect(button.textContent).toEqual("Hello");
    expect(button.getAttribute("disabled")).toBeNull();
  });

  describe("when invalid", () => {
    it("is disabled", () => {
      const { form, button } = renderFormik(<SubmitButton />, {
        initialErrors: { foo: "bar" }
      });

      fireEvent.submit(form);
      expect(button.getAttribute("disabled")).not.toBeNull();
    });
  });

  describe("when submitting", () => {
    it("is disabled", () => {
      const { button, form } = renderFormik(<SubmitButton />);

      fireEvent.submit(form);
      expect(button.getAttribute("disabled")).not.toBeNull();
    });

    it("shows submitting label", () => {
      const { button, form } = renderFormik(
        <SubmitButton submitting="Submitting..." />
      );

      fireEvent.submit(form);
      expect(button.textContent).toEqual("Submitting...");
    });
  });
});
