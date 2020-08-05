import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toMatchInlineSnapshot(`
    Array [
      "Checkbox",
      "CheckboxItem",
      "FieldSet",
      "FileInput",
      "FileListInput",
      "Input",
      "Radio",
      "Select",
      "Switch",
      "TextArea",
      "ThemeProvider",
      "concat",
      "createTheme",
      "formatDateTime",
      "formatNumber",
      "formatTime",
      "parseDateTime",
      "parseNumber",
      "parseTime",
      "useTheme",
    ]
  `);
});
