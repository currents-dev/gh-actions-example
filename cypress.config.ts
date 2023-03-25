import { defineConfig } from "cypress";
import { cloudPlugin } from "cypress-cloud/plugin";

export default defineConfig({
  e2e: {
    baseUrl: "https://en.wikipedia.org/",
    specPattern: "cypress/integration/*.spec.js",
    setupNodeEvents(on, config) {
      cloudPlugin(on, config);
      return config;
    },
  },
  video: true,
  videoUploadOnPasses: false,
});
