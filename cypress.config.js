const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    projectId: "ovhqr9",
   // "chromeWebSecurity": false,
    "viewportWidth": 1920,
    
    "viewportHeight": 1080,
    "pageLoadTimeout": 120000,
    //"defaultCommandTimeout": 20000,
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "video": true,
    "retries":{"openMode":3, "runMode":1},
    "env":{
      allureReuseAfterSpec: true,
      "allureResultsPath": "allure-results",
       "clienturl": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
       "username": "Admin",
       "password": "admin123",
       "cookivalue": "orangehrm=d40596a5c7abd9507ffa0b9a8555690e"

    },
   // "videosFolder": "cypress/Raju",
    "videoCompression": 0,
    //"watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
 
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      allureWriter(on, config);
      return config;
    },
  },
});
