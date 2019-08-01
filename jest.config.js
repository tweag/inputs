const { defaults: preset } = require("ts-jest/presets");

module.exports = {
  ...preset,
  preset: "react-native",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  collectCoverageFrom: ["<rootDir>/packages/**/*.{ts,tsx}"],
  testMatch: ["<rootDir>/packages/**/*.test.{ts,tsx}"],
  modulePathIgnorePatterns: ["<rootDir>/apps/"],
  transform: {
    ...preset.transform,
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  }
};
