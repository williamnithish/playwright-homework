import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  projects: [
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
      dependencies: ['problem-user-setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/problem-user.json',
      },
      testMatch: /problem-user\.spec\.ts/,
    },
  ],
});