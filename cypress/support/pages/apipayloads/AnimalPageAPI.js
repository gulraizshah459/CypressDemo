class AnimalAPIPage {
  constructor() {
    this.baseURL = Cypress.env('DEV_API_URL');
  }

  // Fetch all breeds
  getAllBreeds() {
    return cy.request(`${this.baseURL}/breeds/list/all`);
  }

  // Fetch all images for a master breed
  getAllMasterBreedImages(masterBreed) {
    return cy.request(`${this.baseURL}/breed/${masterBreed}/images`);
  }

  // Fetch all sub-breeds of a master breed
  getAllMasterSubBreeds(masterBreed) {
    return cy.request(`${this.baseURL}/breed/${masterBreed}/list`);
  }
}

export default AnimalAPIPage;