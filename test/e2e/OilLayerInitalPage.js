const OilLayerInitalPage = {};

OilLayerInitalPage.OIL_LAYER = '//*[@data-qa="oil-Layer"]';
OilLayerInitalPage.PAGE_BACKGROUND = '.has-big-bad-background';
OilLayerInitalPage.OIL_YES_BUTTON = '//*[@data-qa="oil-YesButton"]';

OilLayerInitalPage.resetCookiesOnDemoPage = (browser) => {
  return browser
    .url(browser.globals.launch_url_host1 + 'demos/direct-integration.html')
    .deleteCookies();
}

OilLayerInitalPage.openDemoPage = (browser) => {
  return browser
    .url(browser.globals.launch_url_host1 + 'demos/direct-integration.html')
    .useCss().waitForElementVisible(OilLayerInitalPage.PAGE_BACKGROUND, 1000, false);
}

OilLayerInitalPage.assertOilIsVisible = (browser) => {
  return browser
    .useXpath().waitForElementVisible(OilLayerInitalPage.OIL_YES_BUTTON, 2000, false);
}

OilLayerInitalPage.assertOilLayerNotPresent = (browser) => {

}

OilLayerInitalPage.clickOnGiveConsent = (browser) => {
  return browser
    .useXpath().click(OilLayerInitalPage.OIL_YES_BUTTON).pause(200)
}

module.exports = OilLayerInitalPage;
