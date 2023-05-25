const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
       "pageLoadTimeout": 120000,//"defaultCommandTimeout":20000,
 
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
      // implement node event listeners here
    },
  },
});
