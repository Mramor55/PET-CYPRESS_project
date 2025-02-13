import featuredListingsPage from "../page_objects/featuredListiningPage";
import homePage from "../page_objects/home.page";
import "cypress-file-upload";
import listingData from "../../fixtures/listingData.json";

let listingId;

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginAPI();
    cy.createListing(listingData).then((response) => {
      listingId = JSON.parse(
        String.fromCharCode.apply(null, new Uint8Array(response.body))
      ).id;
    homePage.darkModeSwitcher.click();
    featuredListingsPage.featuredListingButton.click();
  });
})

  it("Should search by keyword", () => {
    featuredListingsPage.titleListingInput.type(listingData.title);
    homePage.startSeachButton.click();
    featuredListingsPage.titleInput.should("contain.text", listingData.title);
  });

  it("Should search by bedrooms ", () => {
    featuredListingsPage.bedroomInput.click();
    featuredListingsPage.bedroomInput.type("2+", { force: true });
    homePage.startSeachButton.click();
    featuredListingsPage.numberBedroom
      .eq(0)
      .parent()
      .should("have.not.text", "1");
    featuredListingsPage.numberBedroom
      .eq(1)
      .parent()
      .should("have.not.text", "1");
    featuredListingsPage.numberBedroom
      .eq(2)
      .parent()
      .should("have.not.text", "1");
    featuredListingsPage.numberBedroom
      .eq(3)
      .parent()
      .should("have.not.text", "1");
    featuredListingsPage.numberBedroom
      .eq(4)
      .parent()
      .should("have.not.text", "1");
    featuredListingsPage.numberBedroom
      .eq(5)
      .parent()
      .should("have.not.text", "1");
  });

  it(" Should search by city ", () => {
    featuredListingsPage.cityInput.type(listingData.city);
    homePage.startSeachButton.click();
    featuredListingsPage.moreInfoButton.click();
    cy.contains("$ 500,001");
    cy.contains("Lot Size: 10000");
    cy.contains("Garage: 1");
    cy.contains("Bathrooms: 1");
    cy.contains("Square Feet: 3000");
    cy.contains("Bedrooms: 2");
  });

  it("Should search by price", () => {
    const minPrice = 100000;
    const maxPrice = 500002;
    const city = "Kozak";

    cy.visit(`/featured-listings?price=${minPrice}-${maxPrice}&city=${city}`);

    featuredListingsPage.priceElement.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");
      expect(parseInt(price)).to.be.above(99999);
      expect(parseInt(price)).to.be.below(500002);
    });
  });
});
after(() => {
  cy.sendDeleteRequest("/api/estate-objects/" + listingId).then((response) => {
    expect(response.status).to.eq(200);
  });
});

