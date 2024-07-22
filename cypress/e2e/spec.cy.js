import { selectors } from "../fixtures/selectors"
describe('login', () => {
    before(() => {
        cy.visit('/')
        Cypress.on("uncaught:exception", () => {
            return false
        })

    })
    it('verify that user can login', () => {

        const username = 'Admin';
        const password = 'admin123';

        cy.get(selectors.usernameField).type(username);
        cy.get(selectors.passwordField).type(password);
        cy.get(selectors.loginButton).click()
    })
})