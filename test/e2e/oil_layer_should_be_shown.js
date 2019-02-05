const OilLayerInitalPage = require("./../pages/OilLayerInitalPage");

const OIL_LAYER = OilLayerInitalPage.OIL_LAYER;
const OIL_YES_BUTTON = OilLayerInitalPage.OIL_YES_BUTTON;
const PAGE_BACKGROUND = OilLayerInitalPage.PAGE_BACKGROUND;

module.exports = {
  '@disabled': false,
  beforeEach: browser => {
    OilLayerInitalPage.resetCookiesOnDemoPage(browser);
    OilLayerInitalPage.openDemoPage(browser);
  },

  'OIL Layer closed after clicking yes': function (browser) {
    browser
      .useXpath()
      .waitForElementPresent(OIL_LAYER, 1000)
      .waitForElementPresent(OIL_YES_BUTTON, 1000)
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
  },

  'OIL Layer closed after clicking yes (with page object)': function (browser) {
    OilLayerInitalPage.assertOilIsVisible(browser);
    OilLayerInitalPage.clickOnGiveConsent(browser);
    OilLayerInitalPage.assertOilLayerNotPresent(browser);
  },

  'OIL Layer closed after clicking yes (BDD style)': function (browser) {
    givenOilIsVisible(browser);

    whenClickOnGiveConsent(browser);

    thenOilLayerIsNotPresent(browser);
  },
};

function givenOilIsVisible(browser) {
  OilLayerInitalPage.assertOilIsVisible(browser);
}

function whenClickOnGiveConsent(browser) {
  OilLayerInitalPage.clickOnGiveConsent(browser);
}

function thenOilLayerIsNotPresent(browser) {
  OilLayerInitalPage.assertOilLayerNotPresent(browser);
}


