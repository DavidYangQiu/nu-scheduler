const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nrjxbb",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5174/",

    // baseUrl: 'http://127.0.0.1:5173/'
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
