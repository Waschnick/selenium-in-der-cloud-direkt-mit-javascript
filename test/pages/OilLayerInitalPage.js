const OIL_LAYER = '//*[@data-qa="oil-Layer"]';
const PAGE_BACKGROUND = '.has-big-bad-background';
const OIL_YES_BUTTON = '//*[@data-qa="oil-YesButton"]';

const OilLayerInitalPage = {OIL_LAYER, PAGE_BACKGROUND, OIL_YES_BUTTON};

OilLayerInitalPage.resetCookiesOnDemoPage = (browser) => {
  return browser
    .url(browser.globals.launch_url_host1 + 'demos/direct-integration.html')
    .deleteCookies();
}

OilLayerInitalPage.openDemoPage = (browser) => {
  return browser
    .url(browser.globals.launch_url_host1 + 'demos/direct-integration.html')
    .useCss().waitForElementVisible(PAGE_BACKGROUND, 1000, false);
}

OilLayerInitalPage.assertOilIsVisible = (browser) => {
  return browser
    .useXpath().waitForElementVisible(OIL_YES_BUTTON, 2000, false);
}

OilLayerInitalPage.assertOilLayerNotPresent = (browser) => {
  return browser
    .useXpath().pause(500).waitForElementNotPresent(OIL_LAYER, 1000)
}

OilLayerInitalPage.clickOnGiveConsent = (browser) => {
  return browser
    .useXpath().click(OIL_YES_BUTTON).pause(200)
}

module.exports = OilLayerInitalPage;
