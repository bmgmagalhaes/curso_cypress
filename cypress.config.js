const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bshbpz",
  e2e: {
    // supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
      timestamp: "mmddyyyy_HHMMss" }
});
