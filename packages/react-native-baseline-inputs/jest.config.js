const { defaults: preset } = require("ts-jest/presets");

module.exports = {
  ...preset,
  preset: "react-native",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  testMatch: ["<rootDir>/test/**/*.test.{ts,tsx}"],
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/example/"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
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
