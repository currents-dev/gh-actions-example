import { defineConfig } from "cypress";
import { cloudPlugin } from "cypress-cloud/plugin";
import { initPlugins } from "cypress-plugin-init";

import { debuggerPlugin } from "cypress-debugger";

function initDebugger(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) {
  return debuggerPlugin(on, config, {
    failedTestsOnly: true,
    targetDirectory: "cypress-traces",
    callback: (path) => {
      console.log("🎥 Recorded Cypress traces to: %s", path);
    },
  });
}
export default defineConfig({
  e2e: {
    baseUrl: "https://todomvc.com/examples/vanillajs",
    specPattern: "cypress/e2e/*.spec.js",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents: (on, config) => {
      return initPlugins(on, [initDebugger, cloudPlugin], config);
    },
  },
  video: true,
  videoUploadOnPasses: false,
});
