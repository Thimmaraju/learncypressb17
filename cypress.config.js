const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

   // "chromeWebSecurity": false,
    "viewportWidth": 1920,
    
    "viewportHeight": 1080,
    "pageLoadTimeout": 120000,
    //"defaultCommandTimeout": 20000,
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "video": true,
   // "retries":{"openMode":3, "runMode":5},
    "env":{

       "clienturl": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
       "username": "Admin",
       "password": "admin123"

    },
   // "videosFolder": "cypress/Raju",
    "videoCompression": 51,
    //"watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
    },
  },
});
