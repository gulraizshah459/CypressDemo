## UI And API Test Examples ##

### [About](#about) **|** [Getting Started](#tech-stack) **|** [Installation](#pre-requisites) **|** [Writing Tests](#writing-tests) **|** [Page Objects](#page-objects) **|** [Finding Elements](#finding-elements) **|** [Reports](#reports) ** ###

### About ###

Currently this framework has been developed to run scripts for **WEB** And **API** platforms. 

The tests run Chromium/Chrome, Electron, Firefox browsers is configured currently for running browser tests. 

### Tech-stack ###

* [Node.js](https://nodejs.org/en/docs) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
* [Cypress](https://docs.cypress.io/guides/overview/) - Cypress is a next generation front end testing tool built for the modren web. It can also be configured to use full (non-headless) chrome or chromium, Electron and Firefox

### Pre-requisites ###

1. NodeJS installed globally in the system. https://nodejs.org/en/download/
2. Cypress - npm install cypress.
3. Set **NodeJS** path correctly in the system.
4. Text Editor/IDE (Optional) installed---> SublimeText/VIM/Brackets/Visual Studio Code. Your own choice

### Setup Scripts ###

* Clone the repo into a folder
* Go inside the folder and run following command from the terminal/command prompt

```

npm install 
```
*  All dependencies from package.json would be isntalled in node_modules folder. 

**Tip:** Install `npm install -g` globally on your system and run it from the command-line which checks if your node path is set correctly or not.

### Run Tests ###

* First step is to install `node` and it will automatically install all the required libraries/dependencies in the node.js folder. And make sure you haev node version >= 18.0.0

The command to run tests of project

* To Run UI Tests in Headless mode

```
npx cypress run
```

* To Open Cypress UI Runner

```
npx cypress open

```
These commands are set in `package.json` internally

### Page Objects ###

So, `Pages` will handle all the selectors and methods, `Tests` will have all the test for each functionality. 
This framework is stricktly written using page-object design pattern. For more information please read the article **https://martinfowler.com/bliki/PageObject.html** 

## Page Class
```
class signinPage {
  navigateTo() {
    cy.visit("Base_URL");
  }
  // getters
  //functions for reusability
}
export default new signinPage();

```
## Test Class

```
it('Login with valid credentials', () => {
      SignInPage.loginToYourAccount(login, password);
      cy.url().should('include', '/dashboard/index');
    });
```

### Finding-Elements ###

* The best way to find the elements in browser, go to console Crt+f and start looking your required element on DOM "cy.get("#email");" or you can use "ChroPath" chrome extension. Normally Cypress has its own extenstion to find element's CSS selectors using Cypress UI 

### Reports ### 

* Cypress Mochawesome Reporter is integrated with this framework. Whenever you run your tests in headless mode it will automatically generate the report with *reports* folder. 
