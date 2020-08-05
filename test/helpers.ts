import * as React from "react";
import { FormField } from "@stackup/form";
import { ThemeProvider, createTheme } from "../src";

const theme = createTheme({
  fieldset: () => "fieldset",
  legend: () => "legend",
  field: () => "field",
  label: () => "label",
  help: () => "help",
  error: () => "error",
  input: () => "input"
});

export const createThemeWrapper = (): React.FC => ({ children }) => {
  return React.createElement(ThemeProvider, { value: theme }, children);
};

export function make<T>(value: T, opts: Partial<FormField<T>> = {}) {
  return {
    id: "form-0_mock",
    name: "mock",
    value,
    error: undefined,
    touched: undefined,
    setValue: jest.fn(),
    setError: jest.fn(),
    setTouched: jest.fn(),
    ...opts
  };
}
