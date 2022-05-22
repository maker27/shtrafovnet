import nextJest from 'next/jest';

const createJestConfig = nextJest({
    dir: './'
});

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/__tests__/mocks/']
};

module.exports = createJestConfig(customJestConfig);
