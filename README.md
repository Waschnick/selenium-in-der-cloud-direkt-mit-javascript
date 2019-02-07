# Selenium in der Cloud direkt mit JavaScript

See ``./init.bash`` for information on how to setup the project.

[Slides can be found here.](https://de.slideshare.net/CanardSauvage/automatisiert-eure-tests-endtoend-testing-mit-selenium-javascript-ct-webdev-conference-07022019) 

## Quickstart

```
npm install
npm run test:chrome
```

## Running only one single test

If you want to run only one test, in this example only tests from the file `test/e2e/direct_integration_test.js`, do this:

    ./node_modules/.bin/nightwatch -c config/nightwatch.local.conf.js -e chrome --test test/e2e/direct_integration_test.js

You can also run your local e2e tests with different browsers using Browserstack.

## Support for BABEL

```
npm install --save babel-core babel-preset-env babel-register
```

Add ``require('babel-register')();`` on the first line of your Nightwatch.js config (cf. config/nightwatch.remote.conf.js:1)

## Browserstack 

You can run all E2E tests with different setups using Browserstack. Tests use our remote server at `https://oil-integration-host1.herokuapp.com` where the latest release is deployed to.

*Both commands require you to have your Browserstack credentials ready.* You can find them [here](https://www.browserstack.com/accounts/settings).

To test with only a specific browser, do this:

    ENV_USER=your-browserstack-user ENV_KEY=your-browserstack-key ./node_modules/.bin/nightwatch -c config/nightwatch.remote.conf.js -e ff52

The `-e` parameter should contain the id of the test setting to launch with. In this case `ff52`. For all available test settings check the objects inside the file `config/nightwatch.remote.config.js`

## Browserstack dev tests

You can run the tests on your local http://localhost:8080/ in different browsers using BrowserStack.
To do this, download [BrowserStackLocal](https://www.browserstack.com/local-testing), install and run the application. Create a build with `npm run build` and start the server with `npm start`. Finally, get your browserstack credentials and run (for chrome57):

    ENV_USER=your-browserstack-user ENV_KEY=your-browserstack-key ./node_modules/.bin/nightwatch -c config/nightwatch.localhost-remote.conf.js -e chrome57

For possible test settings see above section.

To run tests in batch trigger this command:

    npm run browserstack:remote-localhost


