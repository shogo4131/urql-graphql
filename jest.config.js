const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './src' });

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/test',
    '<rootDir>/src/graphql',
    '<rootDir>/src/styles',
  ],
};

module.exports = createJestConfig(customJestConfig);
