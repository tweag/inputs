import { createTheme, concat, ThemeProps } from "../src";

const build = (name: string, props: ThemeProps) =>
  concat(
    name,
    ...props.types.map(type => `${name}--${type}`),
    ...props.variants.map(variant => variant && `${name}--${variant}`)
  );

export const theme = createTheme({
  fieldset: () => "fieldset",
  help: () => "help-message",
  error: () => "error-message",
  field: build.bind(null, "field"),
  input: build.bind(null, "field__input")
});
