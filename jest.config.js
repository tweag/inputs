const { defaults: preset } = require("ts-jest/presets");

module.exports = {
  ...preset,
  preset: "react-native",
  transform: {
    ...preset.transform,
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};
