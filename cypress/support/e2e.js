import './commands';
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    console.log(launchOptions.args);
    if (browser.name === 'chrome') {
      launchOptions.args.push('--incognito');
    }
    return launchOptions;
  });
};

Cypress.on('uncaught:exception', (_err, _runnable) => {
  debugger;
});
