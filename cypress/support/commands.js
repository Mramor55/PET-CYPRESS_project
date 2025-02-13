// -- API --
Cypress.Commands.add("loginAPI", (email, password) => {
  cy.request("POST", "/api/users/login", {
    email: "cyber@gmail.com",
    password: "999999",
  }).then((response) => {
    window.localStorage.setItem("accessToken", response.body.accessToken);
  });
});

///login(user)/////
Cypress.Commands.add("loginUser", (email, password) => {
  cy.request("POST", "/api/users/login", {
    email: "lol@gmail.com",
    password: "555555",
  }).then((response) => {
    window.localStorage.setItem("accessToken", response.body.accessToken);
  });
}); 

//--creating listing--- //
Cypress.Commands.add("createListing", (listingData) => {
  cy.fixture("ua.jpeg").then((image) => {
    const blob = Cypress.Blob.base64StringToBlob(image, "ua/jpeg");
    const formData = new FormData();

    formData.append("images", blob);
    formData.append("lotSize", listingData.lotSize);
    formData.append("sqft", listingData.sqft);
    formData.append("garage", listingData.garage);
    formData.append("bathrooms", listingData.bathrooms);
    formData.append("bedrooms", listingData.bedrooms);
    formData.append("price", listingData.price);
    formData.append("zipCode", listingData.zipCode);
    formData.append("state", listingData.state);
    formData.append("city", listingData.city);
    formData.append("address", listingData.address);
    formData.append("description", listingData.description);
    formData.append("title", listingData.title);
    formData.append("isPublished", true);

    const token = window.localStorage.getItem("accessToken");

    cy.request({
      method: "POST",
      url: "/api/estate-objects",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      return response;
    });
  });
});

//delete listing//
Cypress.Commands.add("sendDeleteRequest", (endpoint) => {
  return cy.request({
    method: "DELETE",
    url: endpoint,
  });
});

// error handler//
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
