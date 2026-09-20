import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: /saucedemo\.spec\.ts/,
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
      testMatch: /saucedemo\.spec\.ts/,
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
      testMatch: /saucedemo\.spec\.ts/,
    },

    {
      name: 'problem-user-setup',
      testMatch: /problem-user\.setup\.ts/,
    },

    {
      name: 'standard_user',
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: /saucedemo\.spec\.ts/,
    },

   {
  name: 'problem_user',
  use: {
    ...devices['Desktop Chrome'],
    storageState: '.auth/problem-user.json',
  },
  testMatch: /problem-user\.spec\.ts/,
  dependencies: ['problem-user-setup'],
},
  ],
});