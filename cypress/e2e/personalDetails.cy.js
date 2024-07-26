import { selectors } from "../fixtures/profileSelectors"


describe('Profile Details', () => {

    // Before all tests, perform the following setup
    before(() => {
        cy.clearAllCookies() // Clear all cookies to ensure a clean state
        cy.visit('/') // Visit the base URL of the application
            // Handle any uncaught exceptions to prevent test failure
        Cypress.on("uncaught:exception", () => {
            return false
        })

    })

    // Test case to verify that user can update their personal details  

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
        cy.get(selectors.otherID).clear().type("33930751")
        cy.get(selectors.licence).clear().type("74730337")
        cy.get(selectors.licenceExpiryDate).click()
        cy.get(selectors.calendar).contains('23').click();
        cy.get('.--close').click();
        cy.get(selectors.nationality).click()
        cy.contains("Nigerian").scrollIntoView().click();
        cy.get(selectors.gender).click();
        cy.get(selectors.personalDetailsSaveBtn).click()

        // //update profile pic 
        // cy.get('.employee-image').click()
        // cy.get('.employee-image-wrapper > .employee-image').attachFile("Me.jpg").wait(5000)
        // cy.get('.oxd-button')



    })


})