class homePage {
    get userName() {
      return cy.get('.oxd-userdropdown-tab img[alt="profile picture"]');
    }
    get logoutButton() {
      return cy.contains('a', 'Logout');
    }
  }
  export default new homePage();
  