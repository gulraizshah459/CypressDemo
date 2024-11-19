const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  env: { ...process.env },
  viewportWidth: 1920,
  viewportHeight: 1200,
  chromeWebSecurity: false,
  defaultCommandTimeout: 55000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    baseUrl: process.env.DEV_API_URL,
    baseUrlUI: process.env.DEV_UI_URL,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here 
      return config;
    },
    testIsolation: false,
  },
});
