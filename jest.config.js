/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: "ts-jest",
  // TestEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist"],
  resolver: "jest-ts-webcompat-resolver",
};
