const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        reporter: "mochawesome",
        "reporterOptions": {
            "charts": true,
            "overwrite": true,
            "html": true,
            "json": true,
            "reportDir": "cypress/report"
        },
        "baseUrl": "https://opensource-demo.orangehrmlive.com/",
        "watchForFileChanges": false,
        "testIsolation": false,
        "video": true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});