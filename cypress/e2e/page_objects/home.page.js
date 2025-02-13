class HomePage {
    get loginButton() {return cy.get('[href="/auth/login"]')};
    get registerButton() {return cy.get('[href="/auth/register"]')};
    get darkModeSwitcher() {return cy.get('[type="checkbox"]')};
    get startSeachButton() {return cy.get('[type="button"]').eq(0)};
}
export default new HomePage();