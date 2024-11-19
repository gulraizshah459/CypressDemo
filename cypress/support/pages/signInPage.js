class SignInPage {
  navigateTo() {
    cy.visit(Cypress.config().baseUrlUI);
  }

  get logo() {
    return cy.get('img');
  }

  get emailInput() {
    return cy.get('input[name="username"]');
  }

  get passwordInput() {
    return cy.get('input[name="password"]');
  }

  get logInButton() {
    return cy.get('button[type="submit"]');
  }

  loginToYourAccount(login, password) {
    if (!login || !password) {
      throw new Error('Login or password cannot be empty');
    }
    
    // Clear and input credentials
    this.emailInput.clear().type(login, { log: false });
    this.passwordInput.clear().type(password, { log: false });
    
    // Click login button
    this.logInButton.click();
  }
}

export default new SignInPage();
