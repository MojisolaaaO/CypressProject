import { selectors } from "../fixtures/selectors"

describe('login', () => {
    before(() => {
        cy.clearAllCookies()
        cy.visit('/')
        Cypress.on("uncaught:exception", () => {
            return false
        })

    })

    it('verify that user update their profile', () => {
        const username = 'Admin';
        const password = 'admin123';

        cy.get(selectors.usernameField).type(username);
        cy.get(selectors.passwordField).type(password);
        cy.get(selectors.loginButton).click()
        cy.get(selectors.myInfo).click()
        cy.get(selectors.firstNameField).clear().type("Mojisola")
        cy.get(selectors.middleNameField).clear().type("Olushola")
        cy.get(selectors.lastNameField).clear().type("Otusheso")
        cy.get(selectors.employeeID).clear().type("2428")
        cy.get(selectors.otherID).clear().type("222")
        cy.get(selectors.licence).clear().type("12345")
        cy.get(selectors.licenceExpiryDate).click()
        cy.get(selectors.calendar).contains('23').click();
        cy.get('.--close').click();
        cy.get(selectors.nationality).click()
        cy.contains("Nigerian").scrollIntoView().click();
        cy.get(selectors.gender).eq(1).check({ force: true })
        cy.get(selectors.attachmentBtn).click()
        cy.get(selectors.browseBtn).click().attachFile("MJ.png")
        cy.get(selectors.commentField).type("updating my profile")

    })












})