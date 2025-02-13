class FeaturedListingsPage {
    get titleListingInput() {return cy.get('[type="text"]').first()};
    get bedroomInput() {return cy.get('[type="text"]').eq(0)};
    get titleInput() {return cy.get('h5')};
    get bedroomLabel(){return cy.get('div').eq(1)};
    get moreInfoButton() {return cy.contains('a', 'More Info')};
    get listingInfo() {return cy.get('div.MuiGrid-item')};
    get cityInput() {return cy.get('input[type="text"]').eq(1)};
    get featuredListingButton() {return cy.get('a[href="/featured-listings"]')};
    get numberBedroom() {return cy.get('[viewBox="0 0 2048 1280"]')};
    get priceElement() {return cy.get('.MuiPaper-rounded div:contains($)')};
}
export default new FeaturedListingsPage(); 