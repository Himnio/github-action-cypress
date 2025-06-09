const { defineConfig } = require('cypress')
const path = require('path')

module.exports = defineConfig({
  e2e:{
    setupNodeEvents(on, config){},
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: path.join(__dirname, 'cypress/results'),
    overwrite: false,
    html: false,
    json: true,
  },
})