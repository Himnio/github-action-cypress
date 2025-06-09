const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
    setupNodeEvents(on, config){},
  },
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: true,
    json: true,
  },
})