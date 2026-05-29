const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/GUI',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
});