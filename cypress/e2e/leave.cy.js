import { selectors } from "../fixtures/leaveSelectors"


describe('Leave Request', () => {

    // Runs before each test in the suite

    beforeEach(() => {
        cy.clearAllCookies() // Clear all cookies to ensure a clean state
        cy.visit('/') // Visit the base URL of the application

        // Prevent tests from failing due to uncaught exceptions
        Cypress.on("uncaught:exception", () => {
            return false
        })

    })

    // Test case to verify that user cannot request leave if fields are blank

    it('verify that user cannot request for leave if fields are blank', () => {
        const username = 'Admin';
        const password = 'admin123';

        cy.get(selectors.usernameField).type(username);
        cy.get(selectors.passwordField).type(password);
        cy.get(selectors.loginButton).click()
        cy.get(selectors.leave).click()
        cy.get(selectors.applyBtn).click()
        cy.get(selectors.saveBtn).click()
        cy.contains("Required")
    })

    // Test case to verify that user can request for leave

    it('verify that user can request for leave', () => {
        const username = 'Admin';
        const password = 'admin123';

        // Perform login actions
        cy.get(selectors.usernameField).type(username);
        cy.get(selectors.passwordField).type(password);
        cy.get(selectors.loginButton).click()


        // Navigate to 'Leave' section
        cy.get(selectors.leave).click()


        // Leave Request
        cy.get(selectors.applyBtn).click()
        cy.get(selectors.leaveType).click()
        cy.contains("CAN - FMLA").click()
        cy.get(selectors.fromDate).click()
        cy.get(selectors.selectMonth).click()
        cy.get(selectors.startMonth).click()
        cy.get(selectors.startDay).click()
        cy.get(selectors.endDate).click()
        cy.get(selectors.endDay).eq(1).click()
        cy.get(selectors.duration).click()
        cy.contains("Specify Time").click()
        cy.get(selectors.startTime).click()
        cy.get(selectors.startHour).clear().type("10")
        cy.get(selectors.startMinute).clear().type("30")
        cy.get(selectors.timePeriod).click()
        cy.get(selectors.endTime).click()
        cy.get(selectors.endHour).clear().type("02")
        cy.get(selectors.endMinute).clear().type("45")
        cy.get(selectors.timePeriod2).click()
        cy.get(selectors.comment).type("Leave request")
        cy.get(selectors.applyBtn2).click()
        cy.contains("Successfully Saved")
        cy.get(selectors.myLeave).click()



    })


})