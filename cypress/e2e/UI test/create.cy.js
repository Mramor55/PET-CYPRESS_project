import "cypress-file-upload";
import listingData from "../../fixtures/listingData.json";

let listingId;

describe("Listing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginAPI();
  });

  it("Should create a new listing", () => {
    cy.createListing(listingData).then((response) => {
      listingId = JSON.parse(
        String.fromCharCode.apply(null, new Uint8Array(response.body))
      ).id;
    });
  });
});
after(() => {
  cy.sendDeleteRequest("/api/estate-objects/" + listingId).then((response) => {
    expect(response.status).to.eq(200);
  });
});
