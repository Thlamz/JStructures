module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  "preset": "ts-jest/presets/js-with-babel-esm",
  "globals": {
    "ts-jest": {
      "useESM": true
    }
  }
}
