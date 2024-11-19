// Import AnimalAPIPage class
import AnimalAPIPage from '../../support/pages/apipayloads/AnimalPageAPI';

describe('Animal API Tests', () => {
  const animalAPIPage = new AnimalAPIPage();
  const masterBreed = 'hound';
  const expectedSubBreeds = ['afghan', 'basset', 'blood', 'english', 'ibizan', 'plott', 'walker'];

  beforeEach(() => {
    cy.log('Starting test...');
  });

  it('should validate all dog breeds', () => {
    animalAPIPage.getAllBreeds().then((response) => {
      // General response validation
      validateApiResponse(response);

      // Validate breed structure
      const breeds = response.body.message;
      expect(breeds).to.have.property(masterBreed);
      expect(breeds[masterBreed]).to.include.members(expectedSubBreeds);
    });
  });

  it('should validate all images by breed', () => {
    animalAPIPage.getAllMasterBreedImages(masterBreed).then((response) => {
      // General response validation
      validateApiResponse(response);

      // Validate images array
      const images = response.body.message;
      expect(images).to.be.an('array').and.have.length.greaterThan(0);
    });
  });

  it('should validate sub-breeds of a master breed', () => {
    animalAPIPage.getAllMasterSubBreeds(masterBreed).then((response) => {
      // General response validation
      validateApiResponse(response);

      // Validate sub-breeds array
      const subBreeds = response.body.message;
      expect(subBreeds).to.be.an('array').and.have.length(expectedSubBreeds.length);
      expect(subBreeds).to.include.members(expectedSubBreeds);
    });
  });
});

// Utility function for general API response validation
function validateApiResponse(response) {
  expect(response.status).to.eq(200);
  expect(response.body.status).to.be.a('string').and.eq('success');
}