const OIL_LAYER = '//*[@data-qa="oil-Layer"]';
const PAGE_BACKGROUND = '.has-big-bad-background';
const OIL_YES_BUTTON = '//*[@data-qa="oil-YesButton"]';

module.exports = {
  '@disabled': false,
  beforeEach: browser => {
    browser
      .url(browser.globals.launch_url_host1 + 'demos/direct-integration.html')
      .deleteCookies();

    browser
      .url(browser.globals.launch_url_host1 + 'demos/direct-integration.html')
      .useCss()
      .waitForElementVisible(PAGE_BACKGROUND, 1000, false)
      .useXpath()
      .waitForElementVisible(OIL_YES_BUTTON, 2000, false);
  },

  'OIL Layer closed after clicking yes': function (browser) {
    browser
      .click(OIL_YES_BUTTON)
      .pause(200)
      .waitForElementNotPresent(OIL_LAYER, 1000)
      .waitForElementNotPresent(OIL_YES_BUTTON, 1000)
      .refresh()
      .useCss()
      .waitForElementVisible(PAGE_BACKGROUND, 1000, false)
      .useXpath()
      .pause(500)
      .waitForElementNotPresent(OIL_LAYER, 1000)
      .waitForElementNotPresent(OIL_YES_BUTTON, 1000)
      .end();
  }
};
