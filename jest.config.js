const { defaults: preset } = require("ts-jest/presets");

module.exports = {
  ...preset,
  preset: "react-native",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
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
