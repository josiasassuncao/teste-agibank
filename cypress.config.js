const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://blogdoagi.com.br/',
    setupNodeEvents(on, config) {
    },
  },
});
