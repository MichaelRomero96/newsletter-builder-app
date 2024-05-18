module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  setupFiles: ['<rootDir>/jest.setup.js'],
};
