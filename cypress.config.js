

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'https://careerability.instaging.net/', 
    baseUrl: 'https://academy.instaging.net/application/personal-details',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    watchForFileChanges: false,
  

    
  },
  
});
