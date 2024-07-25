import { selectors } from "../fixtures/profileSelectors"


describe('login', () => {

    // Before all tests, perform the following setup
    before(() => {
        cy.clearAllCookies() // Clear all cookies to ensure a clean state
        cy.visit('/')
            // Handle any uncaught exceptions to prevent test failure
        Cypress.on("uncaught:exception", () => {
            return false
        })

    })


    it('verify that user update their profile', () => {
        const username = 'Admin';
        const password = 'admin123';

        // Perform login actions
        cy.get(selectors.usernameField).type(username);
        cy.get(selectors.passwordField).type(password);
        cy.get(selectors.loginButton).click()

        // Navigate to 'My Info' 

        cy.get(selectors.myInfo).click()

        // Update personal details
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
        cy.get(selectors.gender).click();
        cy.get(selectors.personalDetailsSaveBtn).click()

        // Add an attachment

        cy.get(selectors.attachmentBtn).click()
        cy.get(selectors.browseBtn).click().attachFile("MJ.png")
        cy.get(selectors.commentField).type("updating my profile").wait(3000)
        cy.get(selectors.attachmentSaveBtn).click()


    })


})