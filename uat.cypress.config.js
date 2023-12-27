const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "pageLoadTimeout": 120000,
    "defaultCommandTimeout": 20000,
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "video": true,
    "retries":{"openMode":3, "runMode":5},
    "env":{

       "clienturl": "https://uat.opensource-demo.orangehrmlive.com/web/index.php/auth/login",
       "username": "uatAdmin",
       "password": "uatadmin123"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
