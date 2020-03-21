module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  roots: ['src']
};
