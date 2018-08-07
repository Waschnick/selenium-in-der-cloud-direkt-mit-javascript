require('babel-register')();
const BINPATH = './node_modules/nightwatch/bin/';

// we use a nightwatch.remote.conf.js file so we can include comments and helper functions
module.exports = {
  "src_folders": [
    "test/e2e"
  ],

  "output_folder": "./target/local-reports",
  "globals_path": "./config/nightwatch.jenkins.globals.js",

  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": "./node_modules/nightwatch/bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver": "./node_modules/nightwatch/bin/chromedriver"
    }
  },

  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": false,
        "path": ''
      },
      "globals": {
        "waitForConditionTimeout": 5000
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "chromeOptions" : {
          "args" : ["headless"]
        }
      },
    }
  }
};

