const HtmlReporter = require('nightwatch-html-reporter');
let reporter = new HtmlReporter({
  uniqueFilename: true,
  reportsDirectory: __dirname + '/../target/reports'
});

module.exports = {
  openBrowser: false,
  'launch_url_host1': 'https://oil-integration-host1.herokuapp.com/',
  reporter: reporter.fn
};
