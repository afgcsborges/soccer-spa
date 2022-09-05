/* eslint-disable */
module.exports = {
    bail: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/components/**/*.{js,jsx}',
        '<rootDir>/src/containers/**/*.{js,jsx}',
        '<rootDir>/src/pages/**/*.{js,jsx}',
        '<rootDir>/src/App.{js,jsx}',
        '!<rootDir>/src/pages/index.{js,jsx}'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/tests/unit/__mocks__/styleMock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/unit/__mocks__/fileMock.js'
    },
    reporters: ['default', 'jest-mocha-reporter'],
    rootDir: process.cwd(),
    setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/tests/unit/**/*.test.js'],
    transform: {
        '^.+\\.[t|j]s?$': 'babel-jest',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    verbose: true
}
