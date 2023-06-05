const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "pageLoadTimeout": 120000,//"defaultCommandTimeout":20000,
    "requestTimeout": 10000,
    //"retries":{ "runMode": 2, "openMode": 0 },
    "video":true,
    //"excludeSpecPattern": "relvativepathofthefile",
    "screenshotOnRunFailure":true,
    "videoCompression": 51,
    //"videosFolder":"cypress/raju",
    "env":{
         
      "username": "Admin",
      "password":  "admin123"

    },
    "viewportWidth":1920,
    "viewportHeight":1080,
    
    setupNodeEvents(on, config) {

      on('task', {downloadFile})
      // implement node event listeners here
    },
  },
});
