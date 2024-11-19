import SignInPage from '../../support/pages/signInPage';
import HomePage from '../../support/pages/homePage';

describe('Login Page - Tests', () => {
  // Env Variables from the .env file
  const login = Cypress.env('login');
  const password = Cypress.env('password');

  before(() => {
    // Navigate to the Sign-In Page
    SignInPage.navigateTo();
  });

  describe('Login Workflow for OrangeHRM', () => {
    it('Verifies elements on the SignIn page', () => {
      // Assert that all necessary elements on the onboarding page are visible
      [SignInPage.logo, SignInPage.emailInput, SignInPage.passwordInput, SignInPage.logInButton].forEach((element) => {
        element.should('be.visible');
      });
    });

    it('Login with valid credentials', () => {
      // Perform login
      SignInPage.loginToYourAccount(login, password);
      // Verify successful navigation to the dashboard
      cy.url().should('include', '/dashboard/index');
    });

    it('Logout from the dashboard', () => {
      // Ensure the user menu and logout button are functional
      HomePage.userName.should('be.visible').click();
      HomePage.logoutButton.click();

      // Verify redirection to the Sign-In Page
      [SignInPage.logo, SignInPage.emailInput, SignInPage.passwordInput, SignInPage.logInButton].forEach((element) => {
        element.should('be.visible');
      });
    });
  });
});
