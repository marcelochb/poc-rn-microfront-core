// jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.spec.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  resetMocks: false,
  automock: false,
  transformIgnorePatterns: [
    "/node_modules/(?!(jest-)?react-native|(@react-native|react-native)|@react-navigation/(.*)|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|bs-platform|(@[a-zA-Z]+/)?(bs|reason|rescript)-(.*)/).*/"
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1"
  },
  collectCoverage: true,
  collectCoverageFrom: [
      "src/**/*.ts"
  ],
  coveragePathIgnorePatterns: [
      "node_modules",
      "test-config",
      "interfaces",
      "jestGlobalMocks.ts",
      ".module.ts",
      "<rootDir>/src/app/main.ts",
      ".mock.ts"
  ],
  coverageDirectory: "<rootDir>/coverage/",
  coverageThreshold: {
      "global": {
          "branches": 20,
          "functions": 30,
          "lines": 50,
          "statements": 50
      }
  },
  verbose: false,
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
};