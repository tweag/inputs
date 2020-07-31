import { FormField } from "@stackup/form";

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
