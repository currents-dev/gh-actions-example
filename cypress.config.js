const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://en.wikipedia.org/",
    specPattern: "cypress/integration/*.spec.js",
    async setupNodeEvents(on, config) {
      return await cloudPlugin(on, config);
    },
  },
  video: true,
  videoUploadOnPasses: false,
});
