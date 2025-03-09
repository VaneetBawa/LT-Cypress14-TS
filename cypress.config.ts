import { defineConfig } from "cypress";
const lambdatestAccessibility = require("lambdatest-cypress-cli/accessibility/plugin");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      lambdatestAccessibility(on, config);
      return config;
    },
  },
});
