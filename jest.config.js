module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/', '<rootDir>/dist/'],
};
