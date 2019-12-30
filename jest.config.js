module.exports = {
  clearMocks: true,
  coverageThreshold: {
    global: {
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,js,jsx}",
    "!**/node_modules/**",
    "!**/dist/**/*", // ignore dist files
    "!**/build/**/*", // ignore built files
    "!**/tests/**/*" // ignore test files
  ],
  coverageDirectory: "tests/coverage",
  moduleFileExtensions: ["ts", "tsx", "js"],
  notify: false,
  notifyMode: "always",
  roots: ["<rootDir>"],
  testMatch: ["**/*.test.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
