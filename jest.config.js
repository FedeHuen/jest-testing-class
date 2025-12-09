module.exports = {
  projects: [
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: [
        '<rootDir>/ejemplos/01-test-basico/**/*.test.ts',
        '<rootDir>/ejemplos/02-tests-asincronos/**/*.test.ts',
        '<rootDir>/ejemplos/03-mocks-funciones/**/*.test.ts',
        '<rootDir>/ejemplos/04-mocks-modulos/**/*.test.ts',
        '<rootDir>/ejemplos/05-spies/**/*.test.ts',
        '<rootDir>/ejemplos/06-hooks/**/*.test.ts'
      ],
      preset: 'ts-jest',
      transform: {
        '^.+\\.ts$': ['ts-jest', {
          tsconfig: {
            esModuleInterop: true,
            allowSyntheticDefaultImports: true
          }
        }]
      },
      coverageDirectory: 'coverage',
      collectCoverageFrom: [
        'ejemplos/**/*.ts',
        '!ejemplos/**/*.test.ts',
        '!ejemplos/**/node_modules/**'
      ]
    },
    {
      displayName: 'react',
      testEnvironment: 'jsdom',
      testMatch: [
        '<rootDir>/ejemplos/07-snapshots/**/*.test.tsx',
        '<rootDir>/ejemplos/08-material-ui/**/*.test.tsx'
      ],
      setupFilesAfterEnv: [
        '<rootDir>/ejemplos/07-snapshots/setupTests.ts'
      ],
      preset: 'ts-jest',
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: {
            jsx: 'react',
            esModuleInterop: true,
            allowSyntheticDefaultImports: true
          }
        }]
      },
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
      },
      coverageDirectory: 'coverage',
      collectCoverageFrom: [
        'ejemplos/07-snapshots/**/*.{ts,tsx}',
        '!ejemplos/07-snapshots/**/*.test.{ts,tsx}',
        '!ejemplos/07-snapshots/setupTests.ts',
        'ejemplos/08-material-ui/**/*.{ts,tsx}',
        '!ejemplos/08-material-ui/**/*.test.{ts,tsx}',
        '!ejemplos/08-material-ui/setupTests.ts'
      ],
    }
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

