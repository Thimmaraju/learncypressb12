const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "specPattern": "**/*.feature",
    "projectId": "dq7i1w",
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "pageLoadTimeout": 120000,//"defaultCommandTimeout":20000,
    "requestTimeout": 10000,
    //"retries":{ "runMode": 2, "openMode": 0 },
    "video":true,
    //"excludeSpecPattern": "relvativepathofthefile",
    "screenshotOnRunFailure":true,
    "videoCompression": 0,
    //"videosFolder":"cypress/raju",
    "env":{
         
      "username": "Admin",
      "password":  "admin123"

    },
    "viewportWidth":1920,
    "viewportHeight":1080,
    
    setupNodeEvents(on, config) {

      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
      // allureWriter(on, config);
      // return config;
      return require('./cypress/plugins/index.js')(on, config)
      // implement node event listeners here
    },
  },
});
