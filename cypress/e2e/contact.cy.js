import { selectors } from "../fixtures/profileSelectors"


describe('contact', () => {
    // Before all tests, perform the following setup
    before(() => {
        cy.clearAllCookies() // Clear all cookies to ensure a clean state
        cy.visit('/')

        // Handle any uncaught exceptions to prevent test failure
        Cypress.on("uncaught:exception", () => {
            return false
        })
    })


    it('verify that user update their contact information', () => {
        const username = 'Admin';
        const password = 'admin123';

        // Perform login actions
        cy.get(selectors.usernameField).type(username);
        cy.get(selectors.passwordField).type(password);
        cy.get(selectors.loginButton).click()

        // Navigate to 'My Info' section

        cy.get(selectors.myInfo).click()

        // Navigate to the 'Contact Details' section
        cy.get(selectors.contactDetails).click()

        // Update contact details
        cy.get(selectors.street1).clear().type("Ocean Drive")
        cy.get(selectors.city).clear().type("Yorkville")
        cy.get(selectors.province).clear().type("Ontario")
        cy.get(selectors.postalCode).clear().type("M8Z")
        cy.get(selectors.country).click()
        cy.contains("Canada").scrollIntoView().click()
        cy.get(selectors.homeNumber).clear().type("123-456-789")
        cy.get(selectors.mobileNumber).clear().type("234-567-890")
        cy.get(selectors.workEmail).clear().type("mojisola_otusheso@ymail.com")
        cy.get(selectors.contactSaveBtn).click()

        // Verify that the update was successful
        cy.contains("Successfully Updated")



    })


})